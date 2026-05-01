"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ── constants ──────────────────────────────────────────────────────────────────
const PASSPHRASE = "ritualgroup";
const RATE = 22;
const STATUS_CYCLE = ["", "present", "first", "informed", "uninformed", "cancelled"] as const;
type Status = (typeof STATUS_CYCLE)[number];
const STATUS_LABELS: Record<Status, string> = {
  present: "✓", first: "1st", informed: "i", uninformed: "?", cancelled: "–", "": "",
};
const METHODS = ["Venmo", "Zelle", "Cash", "In App"] as const;
type Method = (typeof METHODS)[number];
type Tab = "attendance" | "payments" | "clients" | "readonly";

// ── types ──────────────────────────────────────────────────────────────────────
interface Person { id: string; name: string; email: string }
interface Payment { id: number; date: string; amount: number; method: Method }
interface State {
  people: Person[];
  archived: Person[];
  attendance: Record<string, Status>;
  payments: Record<string, Payment[]>;
  periodOffset: number;
}

// ── helpers ────────────────────────────────────────────────────────────────────
function mkId() { return Math.random().toString(36).slice(2, 9); }

const INITIAL_NAMES = [
  "Emily","Natalie","Candice","Katie","Rya","Alona","Kristin","Josh","Robin",
  "Dawn","Alice","Jess","Mykail","Kat","Asiana","Rachel","Kea","Ryan","David L",
  "Luki","Mara","Allison",
];

function buildInitial(): State {
  return {
    people: INITIAL_NAMES.map(n => ({ id: mkId(), name: n, email: "" })),
    archived: [],
    attendance: {},
    payments: {},
    periodOffset: 0,
  };
}

function migrate(s: Partial<State> & { people?: (Person | string)[]; archived?: (Person | string)[] }): State {
  const base = buildInitial();
  const people: Person[] = (s.people ?? base.people).map(p =>
    typeof p === "string" ? { id: mkId(), name: p, email: "" } : p
  );
  const archived: Person[] = (s.archived ?? []).map(p =>
    typeof p === "string" ? { id: mkId(), name: p, email: "" } : p
  );
  return {
    people,
    archived,
    attendance: (s.attendance as Record<string, Status>) ?? {},
    payments: (s.payments as Record<string, Payment[]>) ?? {},
    periodOffset: s.periodOffset ?? 0,
  };
}

function periodStart(offset: number) {
  const now = new Date();
  const base = new Date(now.getFullYear(), now.getMonth(), 1);
  base.setMonth(base.getMonth() + offset * 3);
  return base;
}

function sessionDates(offset: number) {
  const start = periodStart(offset);
  const end = new Date(start);
  end.setMonth(end.getMonth() + 3);
  const dates: Date[] = [];
  const d = new Date(start);
  while (d < end) {
    if (d.getDay() === 1 || d.getDay() === 3) dates.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

function fmtDate(d: Date) { return d.toISOString().split("T")[0]; }

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function periodLabel(offset: number) {
  const start = periodStart(offset);
  const end = new Date(start);
  end.setMonth(end.getMonth() + 3);
  end.setDate(end.getDate() - 1);
  return `${MONTHS[start.getMonth()]} ${start.getFullYear()} – ${MONTHS[end.getMonth()]} ${end.getFullYear()}`;
}

function attKey(person: Person, date: string) { return `${person.id}|${date}`; }

function getStatus(state: State, person: Person, date: string): Status {
  return state.attendance[attKey(person, date)]
    || state.attendance[`${person.name}|${date}`]
    || "";
}

function countPresent(state: State, person: Person) {
  const id = person.id;
  return Object.entries(state.attendance).filter(
    ([k, v]) => (k.startsWith(id + "|") || k.startsWith(person.name + "|")) && (v === "present" || v === "first")
  ).length;
}

function countPresentInPeriod(state: State, person: Person, offset: number) {
  const dates = new Set(sessionDates(offset).map(fmtDate));
  const id = person.id;
  return Object.entries(state.attendance).filter(
    ([k, v]) => (k.startsWith(id + "|") || k.startsWith(person.name + "|"))
      && dates.has(k.split("|")[1])
      && (v === "present" || v === "first")
  ).length;
}

function getPayments(state: State, person: Person): Payment[] {
  return state.payments[person.id] || state.payments[person.name] || [];
}

function totalPaid(state: State, person: Person) {
  return getPayments(state, person).reduce((s, p) => s + p.amount, 0);
}

// ── styles (scoped, matching site palette) ─────────────────────────────────────
const CSS = `
  .dg-root {
    --ink: #2a2520;
    --parchment: #f5f0e8;
    --warm-mid: #ede8df;
    --accent: #8b4513;
    --accent-light: #b87333;
    --accent-pale: #f0e6d8;
    --green: #464a34;
    --green-pale: #ddeee4;
    --red: #7a2e2e;
    --red-pale: #f5dede;
    --gold: #8a6a00;
    --gold-pale: #fdf3d0;
    --muted: #8a7d70;
    --border: #d4c9b8;
    --shadow: rgba(26,22,20,0.10);
    min-height: 100vh;
    background: var(--parchment);
    color: var(--ink);
    font-family: var(--font-body, "DM Sans", system-ui, sans-serif);
    font-weight: 300;
  }
  .dg-header {
    background: var(--ink);
    color: var(--parchment);
    padding: 18px 28px 16px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .dg-header-left { display: flex; align-items: flex-end; gap: 16px; flex-wrap: wrap; }
  .dg-title {
    font-family: var(--font-display, "Cormorant Garamond", Georgia, serif);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 1.2;
  }
  .dg-title span {
    display: block;
    font-family: var(--font-body, "DM Sans", system-ui, sans-serif);
    font-size: 10px;
    font-weight: 300;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent-light);
    margin-bottom: 3px;
  }
  .dg-sync {
    font-family: var(--font-body);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.3s;
  }
  .dg-sync-dot { width: 5px; height: 5px; border-radius: 50%; }
  .dg-sync-idle { background: rgba(255,255,255,0.07); color: rgba(245,240,232,0.35); }
  .dg-sync-idle .dg-sync-dot { background: rgba(245,240,232,0.25); }
  .dg-sync-saving { background: rgba(184,134,11,0.2); color: #f0c040; }
  .dg-sync-saving .dg-sync-dot { background: #f0c040; animation: dg-pulse 0.8s infinite; }
  .dg-sync-saved { background: rgba(74,124,89,0.2); color: #7dd4a0; }
  .dg-sync-saved .dg-sync-dot { background: #7dd4a0; }
  .dg-sync-offline { background: rgba(122,46,46,0.2); color: #f09090; }
  .dg-sync-offline .dg-sync-dot { background: #f09090; }
  @keyframes dg-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .dg-tabs { display: flex; gap: 3px; flex-wrap: wrap; }
  .dg-tab {
    background: transparent;
    border: 1px solid rgba(245,240,232,0.18);
    color: rgba(245,240,232,0.55);
    font-family: var(--font-body);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 7px 14px;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 2px;
  }
  .dg-tab:hover { border-color: var(--accent-light); color: var(--accent-light); }
  .dg-tab.active { background: var(--accent); border-color: var(--accent); color: var(--parchment); }
  .dg-period-bar {
    background: var(--warm-mid);
    border-bottom: 1px solid var(--border);
    padding: 10px 28px;
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
  }
  .dg-period-label-sm {
    font-family: var(--font-body);
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .dg-period-nav { display: flex; align-items: center; gap: 7px; }
  .dg-period-btn {
    background: var(--parchment);
    border: 1px solid var(--border);
    color: var(--ink);
    width: 26px; height: 26px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 14px;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.15s;
    line-height: 1;
    padding: 0;
  }
  .dg-period-btn:hover { background: var(--accent); color: var(--parchment); border-color: var(--accent); }
  .dg-period-text {
    font-family: var(--font-display, "Cormorant Garamond", Georgia, serif);
    font-size: 15px;
    min-width: 190px;
    text-align: center;
  }
  .dg-legend { margin-left: auto; display: flex; gap: 10px; flex-wrap: wrap; }
  .dg-legend-item { display: flex; align-items: center; gap: 4px; font-size: 10px; color: var(--muted); letter-spacing: 0.04em; }
  .dg-chip {
    width: 18px; height: 18px; border-radius: 3px;
    display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 500; border: 1.5px solid transparent;
  }
  .dg-main { padding: 20px 28px; }
  .dg-table-wrap { overflow-x: auto; border-radius: 6px; border: 1px solid var(--border); background: white; box-shadow: 0 2px 12px var(--shadow); }
  .dg-table { border-collapse: collapse; width: 100%; font-size: 13px; }
  .dg-table thead tr th {
    background: var(--ink); color: var(--parchment);
    padding: 9px 7px; text-align: center;
    font-family: var(--font-body); font-size: 10px; font-weight: 400; letter-spacing: 0.07em;
    white-space: nowrap; position: sticky; top: 0; z-index: 2;
  }
  .dg-table thead tr th:first-child { text-align: left; padding-left: 14px; min-width: 120px; position: sticky; left: 0; z-index: 3; }
  .dg-table thead tr th:last-child { background: var(--accent); min-width: 50px; }
  .dg-week-row th { background: var(--warm-mid) !important; color: var(--muted) !important; font-size: 9px !important; padding: 3px 7px !important; letter-spacing: 0.12em; border-bottom: 1px solid var(--border); }
  .dg-week-row th:first-child { background: var(--warm-mid) !important; text-align: left; padding-left: 14px !important; position: sticky; left: 0; z-index: 3; }
  .dg-table tbody tr { border-bottom: 1px solid #f0ebe3; transition: background 0.1s; }
  .dg-table tbody tr:hover { background: var(--accent-pale); }
  .dg-table tbody tr:last-child { border-bottom: none; }
  .dg-table td { padding: 7px; text-align: center; vertical-align: middle; }
  .dg-table td:first-child { text-align: left; padding-left: 14px; font-weight: 400; position: sticky; left: 0; background: white; z-index: 1; border-right: 1px solid var(--border); }
  .dg-table tbody tr:hover td:first-child { background: var(--accent-pale); }
  .dg-table td:last-child { font-family: var(--font-body); font-weight: 500; font-size: 12px; background: var(--gold-pale); color: var(--gold); border-left: 1px solid var(--border); }
  .dg-name-cell { display: flex; flex-direction: column; gap: 1px; }
  .dg-client-name { font-weight: 400; }
  .dg-client-email { font-size: 10px; color: var(--muted); }
  .dg-cell-btn {
    width: 26px; height: 26px; border-radius: 4px; border: 1.5px solid transparent;
    cursor: pointer; font-size: 12px; display: inline-flex; align-items: center; justify-content: center;
    transition: all 0.15s;
    background: transparent;
    padding: 0;
  }
  .dg-cell-btn:hover { transform: scale(1.15); }
  .dg-s-present { background: var(--green-pale); border-color: var(--green); color: var(--green); }
  .dg-s-first { background: var(--ink); border-color: var(--ink); color: var(--parchment); font-size: 9px; }
  .dg-s-informed { background: var(--gold-pale); border-color: var(--gold); color: var(--gold); }
  .dg-s-uninformed { background: var(--red-pale); border-color: var(--red); color: var(--red); }
  .dg-s-cancelled { background: #e8e8e8; border-color: #aaa; color: #888; }
  .dg-s-empty { background: transparent; border-color: var(--border); color: var(--border); }
  .dg-s-future { background: transparent; border-color: #e0dbd4; color: #e0dbd4; cursor: default; }
  .dg-add-bar { display: flex; gap: 7px; margin-top: 18px; align-items: center; flex-wrap: wrap; }
  .dg-input {
    border: 1px solid var(--border); background: white;
    padding: 7px 12px; border-radius: 4px;
    font-family: var(--font-body); font-size: 13px; color: var(--ink);
    outline: none; transition: border-color 0.2s;
  }
  .dg-input:focus { border-color: var(--accent); }
  .dg-btn {
    background: var(--accent); color: var(--parchment); border: none;
    padding: 7px 16px; border-radius: 4px;
    font-family: var(--font-body); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
    cursor: pointer; transition: background 0.2s;
  }
  .dg-btn:hover { background: var(--ink); }
  .dg-btn-ghost {
    background: transparent; color: var(--muted); border: 1px solid var(--border);
    padding: 7px 16px; border-radius: 4px;
    font-family: var(--font-body); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
    cursor: pointer; transition: all 0.2s;
  }
  .dg-btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
  .dg-btn-sm {
    background: var(--accent); color: white; border: none;
    padding: 4px 9px; border-radius: 4px;
    font-family: var(--font-body); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
    cursor: pointer;
  }
  .dg-btn-sm:hover { background: var(--ink); }
  /* payments */
  .dg-pay-bar {
    display: flex; background: white; border: 1px solid var(--border);
    border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px var(--shadow);
    margin-bottom: 18px;
  }
  .dg-pay-stat { flex: 1; padding: 14px 18px; border-right: 1px solid var(--border); }
  .dg-pay-stat:last-child { border-right: none; }
  .dg-pay-stat-label { font-family: var(--font-body); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 3px; }
  .dg-pay-stat-value { font-family: var(--font-display, "Cormorant Garamond", Georgia, serif); font-size: 21px; font-weight: 600; color: var(--ink); }
  .dg-pay-stat-sub { font-size: 11px; color: var(--muted); margin-top: 1px; }
  .dg-pay-stat.positive .dg-pay-stat-value { color: var(--green); }
  .dg-pay-stat.negative .dg-pay-stat-value { color: var(--red); }
  .dg-pay-stat.neutral .dg-pay-stat-value { color: var(--gold); }
  .dg-payments-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 14px; }
  .dg-card { background: white; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px var(--shadow); }
  .dg-card-header { background: var(--ink); color: var(--parchment); padding: 11px 14px; display: flex; justify-content: space-between; align-items: center; }
  .dg-card-name { font-family: var(--font-display, "Cormorant Garamond", Georgia, serif); font-size: 15px; font-weight: 400; }
  .dg-card-email { font-size: 10px; color: rgba(245,240,232,0.4); }
  .dg-badge { font-family: var(--font-body); font-size: 11px; padding: 3px 9px; border-radius: 20px; font-weight: 500; }
  .dg-badge-ahead { background: var(--green-pale); color: var(--green); }
  .dg-badge-behind { background: var(--red-pale); color: var(--red); }
  .dg-badge-even { background: var(--gold-pale); color: var(--gold); }
  .dg-card-body { padding: 11px 14px; }
  .dg-card-stats { display: flex; gap: 14px; margin-bottom: 10px; font-size: 11px; color: var(--muted); }
  .dg-card-stats strong { display: block; font-family: var(--font-display, "Cormorant Garamond", Georgia, serif); font-size: 17px; color: var(--ink); font-weight: 600; }
  .dg-pay-row { display: flex; justify-content: space-between; align-items: center; padding: 4px 0; border-bottom: 1px solid #f5f0e8; font-size: 12px; gap: 6px; }
  .dg-pay-row:last-child { border-bottom: none; }
  .dg-p-date { color: var(--muted); font-size: 11px; }
  .dg-p-method { font-size: 10px; padding: 1px 6px; border-radius: 10px; }
  .dg-m-venmo { background: #e8f0fe; color: #3367d6; }
  .dg-m-zelle { background: #fce8f3; color: #a142a1; }
  .dg-m-cash { background: var(--green-pale); color: var(--green); }
  .dg-m-inapp { background: #ede8fe; color: #6d3fc7; }
  .dg-p-amount { font-weight: 500; }
  .dg-delete-btn { background: none; border: none; color: var(--border); cursor: pointer; font-size: 13px; padding: 0 2px; transition: color 0.15s; }
  .dg-delete-btn:hover { color: var(--red); }
  .dg-add-payment { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 7px; padding-top: 7px; border-top: 1px solid var(--border); }
  .dg-add-payment input, .dg-add-payment select {
    border: 1px solid var(--border); background: var(--parchment);
    padding: 4px 7px; border-radius: 4px;
    font-family: var(--font-body); font-size: 12px; color: var(--ink); outline: none;
  }
  .dg-add-payment input[type="number"] { width: 68px; }
  .dg-add-payment input[type="date"] { width: 128px; }
  .dg-add-payment select { width: 88px; }
  .dg-more-toggle { font-size: 10px; letter-spacing: 0.07em; text-transform: uppercase; color: var(--muted); cursor: pointer; padding: 3px 0; display: flex; align-items: center; gap: 5px; border: none; background: none; margin-top: 3px; }
  .dg-more-toggle:hover { color: var(--accent); }
  /* clients */
  .dg-manage-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
  .dg-manage-title { font-family: var(--font-display, "Cormorant Garamond", Georgia, serif); font-size: 18px; font-weight: 400; }
  .dg-manage-hint { font-size: 11px; color: var(--muted); letter-spacing: 0.04em; }
  .dg-client-list { background: white; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px var(--shadow); }
  .dg-client-row { display: flex; align-items: center; gap: 8px; padding: 9px 12px; border-bottom: 1px solid #f0ebe3; transition: background 0.1s; }
  .dg-client-row:last-child { border-bottom: none; }
  .dg-client-row.dg-dragging { opacity: 0.4; background: var(--accent-pale); }
  .dg-client-row.dg-drag-over { border-top: 2px solid var(--accent); }
  .dg-drag-handle { cursor: grab; color: var(--border); font-size: 15px; padding: 3px; user-select: none; flex-shrink: 0; transition: color 0.15s; }
  .dg-drag-handle:hover { color: var(--accent); }
  .dg-drag-handle:active { cursor: grabbing; }
  .dg-client-fields { flex: 1; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
  .dg-client-input {
    border: 1px solid transparent; background: transparent;
    padding: 4px 7px; border-radius: 4px;
    font-family: var(--font-body); font-size: 13px; color: var(--ink);
    outline: none; transition: border-color 0.15s, background 0.15s; min-width: 0;
  }
  .dg-client-input.name { width: 140px; }
  .dg-client-input.email { width: 195px; font-size: 12px; color: var(--muted); }
  .dg-client-input:hover { border-color: var(--border); background: var(--parchment); }
  .dg-client-input:focus { border-color: var(--accent); background: white; color: var(--ink); }
  .dg-sessions-badge { font-size: 11px; color: var(--gold); white-space: nowrap; flex-shrink: 0; background: var(--gold-pale); padding: 2px 7px; border-radius: 10px; }
  .dg-arch-btn { font-size: 10px; letter-spacing: 0.05em; text-transform: uppercase; background: transparent; border: 1px solid var(--border); color: var(--muted); padding: 3px 9px; border-radius: 3px; cursor: pointer; transition: all 0.15s; flex-shrink: 0; }
  .dg-arch-btn:hover { border-color: var(--red); color: var(--red); }
  .dg-arch-section { margin-top: 26px; }
  .dg-arch-toggle { display: flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; margin-bottom: 10px; }
  .dg-arch-toggle-label { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
  .dg-arch-toggle:hover .dg-arch-toggle-label { color: var(--accent); }
  .dg-arch-list { background: white; border: 1px solid var(--border); border-radius: 6px; overflow: hidden; }
  .dg-arch-row { display: flex; align-items: center; justify-content: space-between; padding: 9px 14px; border-bottom: 1px solid #f0ebe3; }
  .dg-arch-row:last-child { border-bottom: none; }
  .dg-arch-row:hover { background: var(--accent-pale); }
  .dg-arch-name { color: var(--muted); font-style: italic; font-size: 13px; }
  .dg-arch-email { font-size: 10px; color: var(--border); }
  .dg-restore-btn { font-size: 10px; letter-spacing: 0.07em; text-transform: uppercase; background: transparent; border: 1px solid var(--border); color: var(--muted); padding: 3px 9px; border-radius: 3px; cursor: pointer; transition: all 0.15s; }
  .dg-restore-btn:hover { border-color: var(--green); color: var(--green); }
  /* readonly */
  .dg-readonly-note { background: var(--warm-mid); border: 1px solid var(--border); border-radius: 6px; padding: 10px 16px; font-size: 13px; color: var(--muted); margin-bottom: 18px; }
  .dg-summary-table { width: 100%; border-collapse: collapse; background: white; border-radius: 6px; overflow: hidden; border: 1px solid var(--border); box-shadow: 0 2px 8px var(--shadow); }
  .dg-summary-table th { background: var(--ink); color: var(--parchment); padding: 9px 13px; text-align: left; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; }
  .dg-summary-table td { padding: 9px 13px; border-bottom: 1px solid #f0ebe3; font-size: 13px; }
  .dg-summary-table tr:last-child td { border-bottom: none; }
  .dg-summary-table tr:hover td { background: var(--accent-pale); }
  /* gate */
  .dg-gate {
    min-height: 100vh; display: flex; align-items: center; justify-content: center;
    background: var(--ink);
  }
  .dg-gate-box {
    background: #1e1a17; border: 1px solid rgba(212,201,184,0.15);
    border-radius: 8px; padding: 40px 36px; max-width: 360px; width: 100%;
    text-align: center;
  }
  .dg-gate-title {
    font-family: var(--font-display, "Cormorant Garamond", Georgia, serif);
    font-size: 22px; font-weight: 400; color: var(--parchment);
    margin-bottom: 6px;
  }
  .dg-gate-sub { font-size: 12px; color: rgba(245,240,232,0.4); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px; }
  .dg-gate-input {
    width: 100%; border: 1px solid rgba(212,201,184,0.2); background: rgba(255,255,255,0.04);
    padding: 10px 14px; border-radius: 4px;
    font-family: var(--font-body); font-size: 14px; color: var(--parchment);
    outline: none; transition: border-color 0.2s; text-align: center; margin-bottom: 12px;
    letter-spacing: 0.1em;
  }
  .dg-gate-input:focus { border-color: var(--accent-light); }
  .dg-gate-btn {
    width: 100%; background: var(--accent); color: var(--parchment); border: none;
    padding: 10px; border-radius: 4px;
    font-family: var(--font-body); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
    cursor: pointer; transition: background 0.2s;
  }
  .dg-gate-btn:hover { background: #a05218; }
  .dg-gate-error { font-size: 12px; color: #f09090; margin-top: 10px; }
  @media (max-width: 600px) {
    .dg-header { padding: 14px; }
    .dg-main { padding: 14px; }
    .dg-period-bar { padding: 8px 14px; }
    .dg-legend { display: none; }
    .dg-pay-bar { flex-direction: column; }
    .dg-pay-stat { border-right: none; border-bottom: 1px solid var(--border); }
    .dg-pay-stat:last-child { border-bottom: none; }
  }
`;

// ── status cell styling ────────────────────────────────────────────────────────
function statusClass(s: Status) {
  if (s === "present") return "dg-s-present";
  if (s === "first") return "dg-s-first";
  if (s === "informed") return "dg-s-informed";
  if (s === "uninformed") return "dg-s-uninformed";
  if (s === "cancelled") return "dg-s-cancelled";
  return "dg-s-empty";
}

function methodClass(m: string) {
  if (m === "Venmo") return "dg-m-venmo";
  if (m === "Zelle") return "dg-m-zelle";
  if (m === "Cash") return "dg-m-cash";
  return "dg-m-inapp";
}

// ── main component ─────────────────────────────────────────────────────────────
export default function DenverGroup() {
  const [unlocked, setUnlocked] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [phraseErr, setPhraseErr] = useState(false);
  const [state, setState] = useState<State>(buildInitial);
  const [tab, setTab] = useState<Tab>("attendance");
  const [syncStatus, setSyncStatus] = useState<"idle"|"saving"|"saved"|"offline">("idle");
  const [archOpen, setArchOpen] = useState(false);
  const [expandedPayments, setExpandedPayments] = useState<Set<string>>(new Set());
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragSrcIdx = useRef<number | null>(null);

  // ── gate ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    const ok = sessionStorage.getItem("dg_unlocked");
    if (ok === "1") setUnlocked(true);
  }, []);

  function handleUnlock() {
    if (phrase === PASSPHRASE) {
      sessionStorage.setItem("dg_unlocked", "1");
      setUnlocked(true);
    } else {
      setPhraseErr(true);
    }
  }

  // ── load ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!unlocked) return;
    async function load() {
      try {
        const res = await fetch("/denver-group/api/tracker");
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data === "object" && Object.keys(data).length > 0) {
            setState(migrate(data));
            return;
          }
        }
      } catch {}
      // fallback to localStorage
      try {
        const saved = localStorage.getItem("dg_tracker");
        if (saved) setState(migrate(JSON.parse(saved)));
      } catch {}
    }
    load();
  }, [unlocked]);

  // ── save ──────────────────────────────────────────────────────────────────
  const schedSave = useCallback((nextState: State) => {
    try { localStorage.setItem("dg_tracker", JSON.stringify(nextState)); } catch {}
    if (syncTimer.current) clearTimeout(syncTimer.current);
    setSyncStatus("saving");
    syncTimer.current = setTimeout(async () => {
      try {
        const res = await fetch("/denver-group/api/tracker", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nextState),
        });
        setSyncStatus(res.ok ? "saved" : "offline");
      } catch {
        setSyncStatus("offline");
      }
      setTimeout(() => setSyncStatus("idle"), 2500);
    }, 1000);
  }, []);

  function update(fn: (prev: State) => State) {
    setState(prev => {
      const next = fn(prev);
      schedSave(next);
      return next;
    });
  }

  // ── attendance ops ────────────────────────────────────────────────────────
  function cycleStatus(person: Person, date: string) {
    update(s => {
      const cur = getStatus(s, person, date);
      const next = STATUS_CYCLE[(STATUS_CYCLE.indexOf(cur) + 1) % STATUS_CYCLE.length];
      const key = attKey(person, date);
      const attendance = { ...s.attendance };
      if (next === "") delete attendance[key];
      else attendance[key] = next;
      return { ...s, attendance };
    });
  }

  function changePeriod(dir: number) {
    update(s => ({ ...s, periodOffset: s.periodOffset + dir }));
  }

  function addPerson(name: string, email: string) {
    if (!name || state.people.find(p => p.name === name)) return;
    update(s => ({ ...s, people: [...s.people, { id: mkId(), name, email }] }));
  }

  function archiveClient(person: Person) {
    if (!confirm(`Archive ${person.name}? They'll be hidden but their data is kept.`)) return;
    update(s => ({
      ...s,
      people: s.people.filter(p => p.id !== person.id),
      archived: [...s.archived, person],
    }));
  }

  function unarchiveClient(person: Person) {
    update(s => ({
      ...s,
      archived: s.archived.filter(p => p.id !== person.id),
      people: [...s.people, person],
    }));
  }

  function updatePerson(id: string, patch: Partial<Person>) {
    update(s => ({ ...s, people: s.people.map(p => p.id === id ? { ...p, ...patch } : p) }));
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `denver-group-data-${fmtDate(new Date())}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function importData(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string);
        const next = migrate(parsed);
        setState(next);
        schedSave(next);
      } catch {
        alert("Invalid JSON file.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  function reorderPeople(from: number, to: number) {
    update(s => {
      const people = [...s.people];
      const [moved] = people.splice(from, 1);
      people.splice(to, 0, moved);
      return { ...s, people };
    });
  }

  function addPayment(person: Person, amount: number, method: Method, date: string) {
    if (!amount || amount <= 0) return;
    const key = person.id;
    update(s => ({
      ...s,
      payments: {
        ...s.payments,
        [key]: [...(s.payments[key] || s.payments[person.name] || []),
          { id: Date.now(), date, amount, method }],
      },
    }));
  }

  function deletePayment(person: Person, id: number) {
    const key = person.id;
    update(s => ({
      ...s,
      payments: {
        ...s.payments,
        [key]: (s.payments[key] || s.payments[person.name] || []).filter(p => p.id !== id),
      },
    }));
  }

  // ── render gate ───────────────────────────────────────────────────────────
  if (!unlocked) {
    return (
      <>
        <style>{CSS}</style>
        <div className="dg-gate">
          <div className="dg-gate-box">
            <div className="dg-gate-title">Denver Group</div>
            <div className="dg-gate-sub">Session Tracker</div>
            <input
              className="dg-gate-input"
              type="password"
              placeholder="passphrase"
              value={phrase}
              onChange={e => { setPhrase(e.target.value); setPhraseErr(false); }}
              onKeyDown={e => e.key === "Enter" && handleUnlock()}
              autoFocus
            />
            <button className="dg-gate-btn" onClick={handleUnlock}>Enter</button>
            {phraseErr && <div className="dg-gate-error">Incorrect passphrase</div>}
          </div>
        </div>
      </>
    );
  }

  // ── render app ────────────────────────────────────────────────────────────
  const dates = sessionDates(state.periodOffset);
  const today = new Date(); today.setHours(0, 0, 0, 0);

  // Group dates by week (Monday)
  const weeks: { key: string; monday: Date; dates: Date[] }[] = [];
  dates.forEach(d => {
    const mon = new Date(d);
    if (d.getDay() !== 1) mon.setDate(d.getDate() - 2);
    const wk = fmtDate(mon);
    const last = weeks[weeks.length - 1];
    if (!last || last.key !== wk) weeks.push({ key: wk, monday: mon, dates: [] });
    weeks[weeks.length - 1].dates.push(d);
  });

  const syncClass = `dg-sync dg-sync-${syncStatus}`;
  const syncLabel = syncStatus === "saving" ? "Saving…" : syncStatus === "saved" ? "Saved ✓" : syncStatus === "offline" ? "Offline" : "Synced";

  // Payment summary totals
  const payTotals = state.people.reduce(
    (acc, p) => {
      const s = countPresent(state, p);
      acc.sessions += s;
      acc.suggested += s * RATE;
      acc.paid += totalPaid(state, p);
      return acc;
    },
    { sessions: 0, suggested: 0, paid: 0 }
  );
  const payBalance = payTotals.paid - payTotals.suggested;

  return (
    <>
      <style>{CSS}</style>
      <div className="dg-root">
        {/* header */}
        <header className="dg-header">
          <div className="dg-header-left">
            <div className="dg-title">
              <span>Ritual Mover</span>
              Denver Group
            </div>
            <div className={syncClass}>
              <div className="dg-sync-dot" />
              {syncLabel}
            </div>
          </div>
          <nav className="dg-tabs">
            {(["attendance","payments","clients","readonly"] as Tab[]).map(t => (
              <button key={t} className={`dg-tab${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>
                {t === "readonly" ? "↗ View" : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </nav>
        </header>

        {/* period bar — only on attendance */}
        {tab === "attendance" && (
          <div className="dg-period-bar">
            <span className="dg-period-label-sm">Period</span>
            <div className="dg-period-nav">
              <button className="dg-period-btn" onClick={() => changePeriod(-1)}>‹</button>
              <span className="dg-period-text">{periodLabel(state.periodOffset)}</span>
              <button className="dg-period-btn" onClick={() => changePeriod(1)}>›</button>
            </div>
            <div className="dg-legend">
              {[
                { cls: "dg-s-present", label: "✓", text: "Present" },
                { cls: "dg-s-first", label: "1st", text: "First class" },
                { cls: "dg-s-informed", label: "i", text: "Informed absence" },
                { cls: "dg-s-uninformed", label: "?", text: "Uninformed absence" },
                { cls: "dg-s-cancelled", label: "–", text: "Cancelled" },
              ].map(item => (
                <span key={item.text} className="dg-legend-item">
                  <span className={`dg-chip ${item.cls}`}>{item.label}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        )}

        <main className="dg-main">
          {/* ── ATTENDANCE ── */}
          {tab === "attendance" && (
            <AttendanceTab
              state={state}
              dates={dates}
              weeks={weeks}
              today={today}
              cycleStatus={cycleStatus}
              addPerson={addPerson}
              onExport={exportData}
              onImport={importData}
            />
          )}

          {/* ── PAYMENTS ── */}
          {tab === "payments" && (
            <PaymentsTab
              state={state}
              payTotals={payTotals}
              payBalance={payBalance}
              expandedPayments={expandedPayments}
              setExpandedPayments={setExpandedPayments}
              addPayment={addPayment}
              deletePayment={deletePayment}
            />
          )}

          {/* ── CLIENTS ── */}
          {tab === "clients" && (
            <ClientsTab
              state={state}
              archOpen={archOpen}
              setArchOpen={setArchOpen}
              addPerson={addPerson}
              updatePerson={updatePerson}
              archiveClient={archiveClient}
              unarchiveClient={unarchiveClient}
              reorderPeople={reorderPeople}
              dragSrcIdx={dragSrcIdx}
              countPresent={p => countPresent(state, p)}
            />
          )}

          {/* ── READ-ONLY ── */}
          {tab === "readonly" && (
            <ReadonlyTab state={state} />
          )}
        </main>
      </div>
    </>
  );
}

// ── Attendance Tab ─────────────────────────────────────────────────────────────
function AttendanceTab({ state, dates, weeks, today, cycleStatus, addPerson, onExport, onImport }: {
  state: State;
  dates: Date[];
  weeks: { key: string; monday: Date; dates: Date[] }[];
  today: Date;
  cycleStatus: (p: Person, d: string) => void;
  addPerson: (n: string, e: string) => void;
  onExport: () => void;
  onImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const importRef = useRef<HTMLInputElement>(null);

  function submit() {
    addPerson(name.trim(), email.trim());
    setName(""); setEmail("");
    nameRef.current?.focus();
  }

  return (
    <>
      <div className="dg-table-wrap">
        <table className="dg-table">
          <thead>
            <tr className="dg-week-row">
              <th />
              {weeks.map(wk => wk.dates.map((_, di) => (
                <th key={wk.key + di}>
                  {di === 0 ? `Week of ${MONTHS[wk.monday.getMonth()]} ${wk.monday.getDate()}` : ""}
                </th>
              )))}
              <th />
            </tr>
            <tr>
              <th>Name</th>
              {dates.map(d => (
                <th key={fmtDate(d)}>
                  {DAYS[d.getDay()]}<br />{MONTHS[d.getMonth()]} {d.getDate()}
                </th>
              ))}
              <th>✓</th>
            </tr>
          </thead>
          <tbody>
            {state.people.map(person => (
              <tr key={person.id}>
                <td>
                  <div className="dg-name-cell">
                    <span className="dg-client-name">{person.name}</span>
                    {person.email && <span className="dg-client-email">{person.email}</span>}
                  </div>
                </td>
                {dates.map(d => {
                  const ds = fmtDate(d);
                  const future = d > today;
                  const status = getStatus(state, person, ds);
                  return (
                    <td key={ds}>
                      <button
                        className={`dg-cell-btn ${future ? "dg-s-future" : statusClass(status)}`}
                        onClick={() => !future && cycleStatus(person, ds)}
                        disabled={future}
                        title={future ? "Future session" : "Click to cycle status"}
                      >
                        {future ? "·" : (STATUS_LABELS[status] || "·")}
                      </button>
                    </td>
                  );
                })}
                <td>{countPresent(state, person)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dg-add-bar">
        <input
          ref={nameRef}
          className="dg-input"
          style={{ width: 170 }}
          type="text"
          placeholder="Name…"
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === "Enter" && emailRef.current?.focus()}
        />
        <input
          ref={emailRef}
          className="dg-input"
          style={{ width: 200 }}
          type="email"
          placeholder="Email (optional)"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === "Enter" && submit()}
        />
        <button className="dg-btn" onClick={submit}>+ Add</button>
        <button className="dg-btn-ghost" onClick={onExport}>↓ Export</button>
        <label className="dg-btn-ghost" style={{ cursor: "pointer" }}>
          ↑ Import
          <input
            ref={importRef}
            type="file"
            accept=".json"
            style={{ display: "none" }}
            onChange={onImport}
          />
        </label>
      </div>
    </>
  );
}

// ── Payments Tab ───────────────────────────────────────────────────────────────
function PaymentsTab({ state, payTotals, payBalance, expandedPayments, setExpandedPayments, addPayment, deletePayment }: {
  state: State;
  payTotals: { sessions: number; suggested: number; paid: number };
  payBalance: number;
  expandedPayments: Set<string>;
  setExpandedPayments: (s: Set<string>) => void;
  addPayment: (p: Person, a: number, m: Method, d: string) => void;
  deletePayment: (p: Person, id: number) => void;
}) {
  const today = fmtDate(new Date());

  function toggleExpand(id: string) {
    const next = new Set(expandedPayments);
    if (next.has(id)) next.delete(id); else next.add(id);
    setExpandedPayments(next);
  }

  const balClass = payBalance > 0 ? "positive" : payBalance < 0 ? "negative" : "neutral";
  const balSign = payBalance >= 0 ? "+" : "";

  return (
    <>
      <div className="dg-pay-bar">
        <div className="dg-pay-stat">
          <div className="dg-pay-stat-label">Total Sessions</div>
          <div className="dg-pay-stat-value">{payTotals.sessions}</div>
          <div className="dg-pay-stat-sub">across {state.people.length} clients</div>
        </div>
        <div className="dg-pay-stat">
          <div className="dg-pay-stat-label">Suggested Collected</div>
          <div className="dg-pay-stat-value">${payTotals.suggested.toLocaleString()}</div>
          <div className="dg-pay-stat-sub">at ${RATE}/session</div>
        </div>
        <div className="dg-pay-stat">
          <div className="dg-pay-stat-label">Actually Received</div>
          <div className="dg-pay-stat-value">${payTotals.paid.toLocaleString()}</div>
          <div className="dg-pay-stat-sub">all time, all clients</div>
        </div>
        <div className={`dg-pay-stat ${balClass}`}>
          <div className="dg-pay-stat-label">Overall Balance</div>
          <div className="dg-pay-stat-value">{balSign}${Math.abs(payBalance).toLocaleString()}</div>
          <div className="dg-pay-stat-sub">{payBalance >= 0 ? "clients are ahead" : "clients owe collectively"}</div>
        </div>
      </div>
      <div className="dg-payments-grid">
        {state.people.map(person => (
          <PersonPaymentCard
            key={person.id}
            person={person}
            state={state}
            today={today}
            expanded={expandedPayments.has(person.id)}
            onToggleExpand={() => toggleExpand(person.id)}
            onAdd={(amt, method, date) => addPayment(person, amt, method, date)}
            onDelete={id => deletePayment(person, id)}
          />
        ))}
      </div>
    </>
  );
}

function PersonPaymentCard({ person, state, today, expanded, onToggleExpand, onAdd, onDelete }: {
  person: Person;
  state: State;
  today: string;
  expanded: boolean;
  onToggleExpand: () => void;
  onAdd: (amt: number, method: Method, date: string) => void;
  onDelete: (id: number) => void;
}) {
  const [amt, setAmt] = useState("");
  const [method, setMethod] = useState<Method>("Venmo");
  const [date, setDate] = useState(today);

  const sessions = countPresent(state, person);
  const suggested = sessions * RATE;
  const paid = totalPaid(state, person);
  const balance = paid - suggested;
  const badgeCls = balance > 0 ? "dg-badge-ahead" : balance < 0 ? "dg-badge-behind" : "dg-badge-even";
  const balSign = balance >= 0 ? "+" : "";

  const payments = getPayments(state, person).slice().reverse(); // newest first
  const visible = expanded ? payments : payments.slice(0, 3);
  const hasMore = payments.length > 3;

  return (
    <div className="dg-card">
      <div className="dg-card-header">
        <div>
          <div className="dg-card-name">{person.name}</div>
          {person.email && <div className="dg-card-email">{person.email}</div>}
        </div>
        <span className={`dg-badge ${badgeCls}`}>{balSign}${Math.abs(balance)}</span>
      </div>
      <div className="dg-card-body">
        <div className="dg-card-stats">
          <div><strong>{sessions}</strong>sessions</div>
          <div><strong>${suggested}</strong>suggested</div>
          <div><strong>${paid}</strong>received</div>
        </div>
        <div>
          {visible.map(p => (
            <div key={p.id} className="dg-pay-row">
              <span className="dg-p-date">{p.date}</span>
              <span className={`dg-p-method ${methodClass(p.method)}`}>{p.method}</span>
              <span className="dg-p-amount">${p.amount}</span>
              <button className="dg-delete-btn" onClick={() => onDelete(p.id)} title="Delete">×</button>
            </div>
          ))}
          {hasMore && (
            <button className="dg-more-toggle" onClick={onToggleExpand}>
              {expanded ? "▲ less" : `▼ ${payments.length - 3} more`}
            </button>
          )}
        </div>
        <div className="dg-add-payment">
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="$"
            value={amt}
            onChange={e => setAmt(e.target.value)}
          />
          <select value={method} onChange={e => setMethod(e.target.value as Method)}>
            {METHODS.map(m => <option key={m}>{m}</option>)}
          </select>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          <button className="dg-btn-sm" onClick={() => {
            onAdd(parseFloat(amt), method, date || today);
            setAmt("");
          }}>Log</button>
        </div>
      </div>
    </div>
  );
}

// ── Clients Tab ────────────────────────────────────────────────────────────────
function ClientsTab({ state, archOpen, setArchOpen, addPerson, updatePerson, archiveClient, unarchiveClient, reorderPeople, dragSrcIdx, countPresent }: {
  state: State;
  archOpen: boolean;
  setArchOpen: (v: boolean) => void;
  addPerson: (n: string, e: string) => void;
  updatePerson: (id: string, patch: Partial<Person>) => void;
  archiveClient: (p: Person) => void;
  unarchiveClient: (p: Person) => void;
  reorderPeople: (from: number, to: number) => void;
  dragSrcIdx: React.MutableRefObject<number | null>;
  countPresent: (p: Person) => number;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function submit() {
    addPerson(name.trim(), email.trim());
    setName(""); setEmail("");
    nameRef.current?.focus();
  }

  return (
    <>
      <div className="dg-manage-header">
        <span className="dg-manage-title">Manage Clients</span>
        <span className="dg-manage-hint">⠿ drag to reorder · click to edit</span>
      </div>
      <div className="dg-client-list">
        {state.people.map((person, idx) => (
          <ClientRow
            key={person.id}
            person={person}
            idx={idx}
            sessions={countPresent(person)}
            onUpdate={patch => updatePerson(person.id, patch)}
            onArchive={() => archiveClient(person)}
            dragSrcIdx={dragSrcIdx}
            onDrop={to => reorderPeople(dragSrcIdx.current!, to)}
          />
        ))}
      </div>
      <div className="dg-add-bar" style={{ marginTop: 14 }}>
        <input
          ref={nameRef}
          className="dg-input"
          style={{ width: 170 }}
          type="text"
          placeholder="New client name…"
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === "Enter" && emailRef.current?.focus()}
        />
        <input
          ref={emailRef}
          className="dg-input"
          style={{ width: 200 }}
          type="email"
          placeholder="Email (optional)"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === "Enter" && submit()}
        />
        <button className="dg-btn" onClick={submit}>+ Add Client</button>
      </div>
      <div className="dg-arch-section">
        <div className="dg-arch-toggle" onClick={() => setArchOpen(!archOpen)}>
          <span style={{ fontSize: 11, color: "var(--muted)" }}>{archOpen ? "▼" : "▶"}</span>
          <span className="dg-arch-toggle-label">Archived ({state.archived.length})</span>
        </div>
        {archOpen && (
          <div className="dg-arch-list">
            {state.archived.length === 0
              ? <div style={{ padding: "11px 14px", fontSize: 13, color: "var(--muted)" }}>No archived clients</div>
              : state.archived.map(person => (
                <div key={person.id} className="dg-arch-row">
                  <div>
                    <div className="dg-arch-name">{person.name}</div>
                    {person.email && <div className="dg-arch-email">{person.email}</div>}
                  </div>
                  <button className="dg-restore-btn" onClick={() => unarchiveClient(person)}>↩ Restore</button>
                </div>
              ))
            }
          </div>
        )}
      </div>
    </>
  );
}

function ClientRow({ person, idx, sessions, onUpdate, onArchive, dragSrcIdx, onDrop }: {
  person: Person;
  idx: number;
  sessions: number;
  onUpdate: (patch: Partial<Person>) => void;
  onArchive: () => void;
  dragSrcIdx: React.MutableRefObject<number | null>;
  onDrop: (to: number) => void;
}) {
  const [dragOver, setDragOver] = useState(false);
  const [dragging, setDragging] = useState(false);

  return (
    <div
      className={`dg-client-row${dragging ? " dg-dragging" : ""}${dragOver ? " dg-drag-over" : ""}`}
      draggable
      onDragStart={e => {
        dragSrcIdx.current = idx;
        e.dataTransfer.effectAllowed = "move";
        setTimeout(() => setDragging(true), 0);
      }}
      onDragEnd={() => { setDragging(false); setDragOver(false); }}
      onDragOver={e => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={e => { e.preventDefault(); setDragOver(false); if (dragSrcIdx.current !== null && dragSrcIdx.current !== idx) onDrop(idx); }}
    >
      <span className="dg-drag-handle" title="Drag to reorder">⠿</span>
      <div className="dg-client-fields">
        <EditableInput
          value={person.name}
          className="dg-client-input name"
          placeholder="Name"
          onCommit={v => { if (v) onUpdate({ name: v }); }}
        />
        <EditableInput
          value={person.email}
          className="dg-client-input email"
          placeholder="email@example.com"
          type="email"
          onCommit={v => onUpdate({ email: v })}
        />
      </div>
      <span className="dg-sessions-badge">{sessions} sessions</span>
      <button className="dg-arch-btn" onClick={onArchive}>Archive</button>
    </div>
  );
}

function EditableInput({ value, className, placeholder, type = "text", onCommit }: {
  value: string;
  className: string;
  placeholder: string;
  type?: string;
  onCommit: (v: string) => void;
}) {
  const [local, setLocal] = useState(value);
  useEffect(() => setLocal(value), [value]);
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={local}
      onChange={e => setLocal(e.target.value)}
      onBlur={() => onCommit(local.trim())}
      onKeyDown={e => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); }}
    />
  );
}

// ── Readonly Tab ───────────────────────────────────────────────────────────────
function ReadonlyTab({ state }: { state: State }) {
  const offset = state.periodOffset;
  return (
    <>
      <div className="dg-readonly-note">📋 Summary view — print or screenshot to share.</div>
      <table className="dg-summary-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Total Sessions</th>
            <th>This Period</th>
            <th>Suggested Owed</th>
            <th>Total Paid</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {state.people.map(person => {
            const total = countPresent(state, person);
            const period = countPresentInPeriod(state, person, offset);
            const suggested = total * RATE;
            const paid = totalPaid(state, person);
            const bal = paid - suggested;
            return (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td style={{ color: "var(--muted)", fontSize: 12 }}>{person.email || "—"}</td>
                <td>{total}</td>
                <td>{period}</td>
                <td>${suggested}</td>
                <td>${paid}</td>
                <td style={{ color: bal >= 0 ? "var(--green)" : "var(--red)", fontWeight: 500 }}>
                  {bal >= 0 ? "+" : ""}{bal}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
