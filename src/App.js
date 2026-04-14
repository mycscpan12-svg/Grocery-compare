/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';

// ── Default grocery items ──────────────────────────────────────────────────
const DEFAULT_ITEMS = [
  // Atta & Grains
  { id: 1, name: 'Wheat Flour (Atta) 5kg', category: 'Atta & Grains', unit: 'per 5kg' },
  { id: 2, name: 'Basmati Rice 5kg', category: 'Atta & Grains', unit: 'per 5kg' },
  { id: 3, name: 'Regular Rice 5kg', category: 'Atta & Grains', unit: 'per 5kg' },
  { id: 4, name: 'Maida 1kg', category: 'Atta & Grains', unit: 'per kg' },
  { id: 5, name: 'Sooji / Rawa 500g', category: 'Atta & Grains', unit: 'per 500g' },
  { id: 6, name: 'Besan 1kg', category: 'Atta & Grains', unit: 'per kg' },
  { id: 7, name: 'Poha 500g', category: 'Atta & Grains', unit: 'per 500g' },
  // Dal & Pulses
  { id: 8, name: 'Toor Dal 1kg', category: 'Dal & Pulses', unit: 'per kg' },
  { id: 9, name: 'Moong Dal 1kg', category: 'Dal & Pulses', unit: 'per kg' },
  { id: 10, name: 'Chana Dal 1kg', category: 'Dal & Pulses', unit: 'per kg' },
  { id: 11, name: 'Masoor Dal 1kg', category: 'Dal & Pulses', unit: 'per kg' },
  { id: 12, name: 'Urad Dal 1kg', category: 'Dal & Pulses', unit: 'per kg' },
  { id: 13, name: 'Rajma 500g', category: 'Dal & Pulses', unit: 'per 500g' },
  { id: 14, name: 'Chole / Kabuli Chana 500g', category: 'Dal & Pulses', unit: 'per 500g' },
  // Oils & Ghee
  { id: 15, name: 'Mustard Oil 1L', category: 'Oils & Ghee', unit: 'per litre' },
  { id: 16, name: 'Sunflower Oil 1L', category: 'Oils & Ghee', unit: 'per litre' },
  { id: 17, name: 'Refined Oil 5L', category: 'Oils & Ghee', unit: 'per 5L' },
  { id: 18, name: 'Desi Ghee 500g', category: 'Oils & Ghee', unit: 'per 500g' },
  { id: 19, name: 'Vanaspati 1kg', category: 'Oils & Ghee', unit: 'per kg' },
  // Spices & Masala
  { id: 20, name: 'Haldi Powder 200g', category: 'Spices & Masala', unit: 'per 200g' },
  { id: 21, name: 'Red Chilli Powder 200g', category: 'Spices & Masala', unit: 'per 200g' },
  { id: 22, name: 'Coriander Powder 200g', category: 'Spices & Masala', unit: 'per 200g' },
  { id: 23, name: 'Garam Masala 100g', category: 'Spices & Masala', unit: 'per 100g' },
  { id: 24, name: 'Jeera 100g', category: 'Spices & Masala', unit: 'per 100g' },
  { id: 25, name: 'Sarson / Rai 100g', category: 'Spices & Masala', unit: 'per 100g' },
  { id: 26, name: 'Hing 25g', category: 'Spices & Masala', unit: 'per 25g' },
  { id: 27, name: 'Whole Black Pepper 50g', category: 'Spices & Masala', unit: 'per 50g' },
  // Sugar & Salt
  { id: 28, name: 'Sugar 1kg', category: 'Sugar & Salt', unit: 'per kg' },
  { id: 29, name: 'Rock Salt (Sendha Namak) 1kg', category: 'Sugar & Salt', unit: 'per kg' },
  { id: 30, name: 'Common Salt 1kg', category: 'Sugar & Salt', unit: 'per kg' },
  { id: 31, name: 'Jaggery (Gud) 1kg', category: 'Sugar & Salt', unit: 'per kg' },
  // Dairy
  { id: 32, name: 'Full Cream Milk 1L', category: 'Dairy', unit: 'per litre' },
  { id: 33, name: 'Paneer 200g', category: 'Dairy', unit: 'per 200g' },
  { id: 34, name: 'Curd 400g', category: 'Dairy', unit: 'per 400g' },
  { id: 35, name: 'Butter 100g', category: 'Dairy', unit: 'per 100g' },
  { id: 36, name: 'Amul Cheese Slice 200g', category: 'Dairy', unit: 'per pack' },
  // Tea & Coffee
  { id: 37, name: 'Tea Leaves 250g', category: 'Tea & Coffee', unit: 'per 250g' },
  { id: 38, name: 'Instant Coffee 50g', category: 'Tea & Coffee', unit: 'per 50g' },
  // Snacks & Packaged
  { id: 39, name: 'Biscuit (Parle-G 800g)', category: 'Snacks & Packaged', unit: 'per pack' },
  { id: 40, name: 'Noodles (Maggi 4-pack)', category: 'Snacks & Packaged', unit: 'per pack' },
  { id: 41, name: 'Namkeen 200g', category: 'Snacks & Packaged', unit: 'per 200g' },
  // Household
  { id: 42, name: 'Detergent Powder 1kg', category: 'Household', unit: 'per kg' },
  { id: 43, name: 'Dish Wash Bar 2pc', category: 'Household', unit: 'per 2pc' },
  { id: 44, name: 'Hand Wash Soap 250ml', category: 'Household', unit: 'per 250ml' },
  { id: 45, name: 'Toilet Soap 100g', category: 'Household', unit: 'per 100g' },
  // Vegetables (common)
  { id: 46, name: 'Onion 1kg', category: 'Vegetables', unit: 'per kg' },
  { id: 47, name: 'Potato 1kg', category: 'Vegetables', unit: 'per kg' },
  { id: 48, name: 'Tomato 1kg', category: 'Vegetables', unit: 'per kg' },
  { id: 49, name: 'Garlic 250g', category: 'Vegetables', unit: 'per 250g' },
  { id: 50, name: 'Ginger 100g', category: 'Vegetables', unit: 'per 100g' },
];

const STORAGE_KEY = 'grocery_compare_v2';
const CATEGORY_COLORS = {
  'Atta & Grains':    { bg: '#fef9ec', accent: '#d97706', icon: '🌾' },
  'Dal & Pulses':     { bg: '#fef2f2', accent: '#dc2626', icon: '🫘' },
  'Oils & Ghee':      { bg: '#fff7ed', accent: '#ea580c', icon: '🫙' },
  'Spices & Masala':  { bg: '#fdf4ff', accent: '#9333ea', icon: '🌶️' },
  'Sugar & Salt':     { bg: '#f0fdf4', accent: '#16a34a', icon: '🧂' },
  'Dairy':            { bg: '#eff6ff', accent: '#2563eb', icon: '🥛' },
  'Tea & Coffee':     { bg: '#fdf6ec', accent: '#92400e', icon: '☕' },
  'Snacks & Packaged':{ bg: '#fff1f2', accent: '#e11d48', icon: '🍪' },
  'Household':        { bg: '#f0fdfa', accent: '#0d9488', icon: '🧹' },
  'Vegetables':       { bg: '#f7fee7', accent: '#65a30d', icon: '🥬' },
  'Custom':           { bg: '#f8fafc', accent: '#64748b', icon: '📦' },
};

// ── Helpers ────────────────────────────────────────────────────────────────
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}

function saveData(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

function bestPrice(local, online) {
  const l = parseFloat(local), o = parseFloat(online);
  if (!l && !o) return null;
  if (!l) return 'online';
  if (!o) return 'local';
  return l <= o ? 'local' : 'online';
}

function savings(local, online) {
  const l = parseFloat(local), o = parseFloat(online);
  if (!l || !o) return null;
  return Math.abs(l - o).toFixed(2);
}

// ── Styles ─────────────────────────────────────────────────────────────────
const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Nunito', sans-serif;
    background: #f0fdf4;
    min-height: 100vh;
  }

  .app {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 0 60px;
  }

  /* ── Header ── */
  .header {
    background: linear-gradient(135deg, #14532d 0%, #166534 60%, #1a6b42 100%);
    color: white;
    padding: 24px 20px 20px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 20px rgba(20,83,45,0.3);
  }
  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }
  .header-title {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: -0.3px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .header-subtitle {
    font-size: 0.8rem;
    opacity: 0.75;
    margin-top: 2px;
  }
  .share-btn {
    background: rgba(255,255,255,0.15);
    border: 1.5px solid rgba(255,255,255,0.35);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.82rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: background 0.2s;
  }
  .share-btn:hover { background: rgba(255,255,255,0.25); }

  /* ── Tabs ── */
  .tabs {
    display: flex;
    background: #fff;
    border-bottom: 2px solid #dcfce7;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .tabs::-webkit-scrollbar { display: none; }
  .tab {
    flex-shrink: 0;
    padding: 14px 22px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    color: #6b7280;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: all 0.2s;
    white-space: nowrap;
    border: none;
    background: none;
    margin-bottom: -2px;
  }
  .tab.active {
    color: #15803d;
    border-bottom: 3px solid #15803d;
  }
  .tab:hover:not(.active) {
    color: #374151;
    background: #f9fafb;
  }

  /* ── Summary Bar ── */
  .summary-bar {
    display: flex;
    gap: 12px;
    padding: 14px 16px;
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .summary-bar::-webkit-scrollbar { display: none; }
  .summary-card {
    flex-shrink: 0;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 12px;
    padding: 10px 16px;
    text-align: center;
    min-width: 130px;
  }
  .summary-card .s-val {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: #15803d;
  }
  .summary-card .s-lbl {
    font-size: 0.7rem;
    color: #6b7280;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
  .summary-card.saving { background: #fffbeb; border-color: #fde68a; }
  .summary-card.saving .s-val { color: #d97706; }

  /* ── Search & Filters ── */
  .controls {
    padding: 14px 16px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
  }
  .search-input {
    flex: 1;
    min-width: 200px;
    padding: 9px 14px 9px 36px;
    border: 1.5px solid #d1fae5;
    border-radius: 10px;
    font-size: 0.88rem;
    font-family: 'Nunito', sans-serif;
    background: #f0fdf4 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2316a34a' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E") no-repeat 10px center;
    outline: none;
    transition: border-color 0.2s;
  }
  .search-input:focus { border-color: #86efac; }
  .cat-filter {
    padding: 9px 12px;
    border: 1.5px solid #d1fae5;
    border-radius: 10px;
    font-size: 0.85rem;
    font-family: 'Nunito', sans-serif;
    background: #f0fdf4;
    color: #374151;
    cursor: pointer;
    outline: none;
  }

  /* ── Add Item Row ── */
  .add-row {
    padding: 12px 16px;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .add-row input, .add-row select {
    padding: 8px 12px;
    border: 1.5px solid #d1d5db;
    border-radius: 8px;
    font-family: 'Nunito', sans-serif;
    font-size: 0.84rem;
    background: white;
    outline: none;
    transition: border-color 0.2s;
  }
  .add-row input:focus, .add-row select:focus { border-color: #86efac; }
  .add-row input.item-name { flex: 2; min-width: 160px; }
  .add-row input.item-unit { flex: 1; min-width: 100px; }
  .add-btn {
    padding: 8px 18px;
    background: #15803d;
    color: white;
    border: none;
    border-radius: 8px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s;
  }
  .add-btn:hover { background: #166534; }

  /* ── Table ── */
  .table-wrap {
    overflow-x: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 620px;
  }
  thead th {
    background: #14532d;
    color: white;
    padding: 12px 14px;
    font-family: 'Baloo 2', sans-serif;
    font-size: 0.82rem;
    font-weight: 700;
    text-align: left;
    letter-spacing: 0.3px;
    white-space: nowrap;
    position: sticky;
    top: 0;
  }
  thead th:first-child { border-radius: 0; }
  .cat-group-header td {
    background: var(--cat-bg, #f0fdf4);
    color: var(--cat-accent, #15803d);
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 0.82rem;
    padding: 8px 14px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    border-top: 2px solid var(--cat-accent, #15803d);
  }
  tbody tr:not(.cat-group-header) {
    background: white;
    border-bottom: 1px solid #f3f4f6;
    transition: background 0.15s;
  }
  tbody tr:not(.cat-group-header):hover { background: #f0fdf4; }
  td {
    padding: 10px 14px;
    font-size: 0.85rem;
    vertical-align: middle;
  }
  .item-name-cell {
    font-weight: 600;
    color: #1f2937;
    min-width: 170px;
  }
  .unit-cell {
    color: #9ca3af;
    font-size: 0.75rem;
    white-space: nowrap;
  }
  .price-input {
    width: 90px;
    padding: 6px 10px;
    border: 1.5px solid #e5e7eb;
    border-radius: 8px;
    font-family: 'Nunito', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    text-align: right;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    background: #fafafa;
  }
  .price-input:focus {
    border-color: #86efac;
    background: white;
  }
  .price-input.local:focus { border-color: #60a5fa; }
  .price-input.online:focus { border-color: #f97316; }

  /* Best badge */
  .best-tag {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    white-space: nowrap;
  }
  .best-local  { background: #dbeafe; color: #1d4ed8; }
  .best-online { background: #ffedd5; color: #c2410c; }
  .best-tie    { background: #dcfce7; color: #15803d; }

  .saving-cell {
    font-weight: 700;
    color: #15803d;
    font-size: 0.82rem;
    white-space: nowrap;
  }

  /* Delete btn */
  .del-btn {
    background: none;
    border: none;
    color: #d1d5db;
    cursor: pointer;
    font-size: 1rem;
    padding: 2px 4px;
    border-radius: 4px;
    transition: color 0.15s;
  }
  .del-btn:hover { color: #ef4444; }

  /* ── Summary Tab ── */
  .summary-tab {
    padding: 20px 16px;
  }
  .big-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
  }
  .big-card {
    background: white;
    border-radius: 16px;
    padding: 20px;
    border: 2px solid #e5e7eb;
    text-align: center;
  }
  .big-card .bc-val {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }
  .big-card .bc-lbl {
    font-size: 0.8rem;
    color: #6b7280;
    font-weight: 600;
    margin-top: 4px;
  }
  .big-card.green { border-color: #bbf7d0; background: #f0fdf4; }
  .big-card.green .bc-val { color: #15803d; }
  .big-card.blue  { border-color: #bfdbfe; background: #eff6ff; }
  .big-card.blue  .bc-val { color: #2563eb; }
  .big-card.amber { border-color: #fde68a; background: #fffbeb; }
  .big-card.amber .bc-val { color: #d97706; }

  /* Category savings table */
  .cat-savings {
    background: white;
    border-radius: 16px;
    padding: 20px;
    border: 1px solid #e5e7eb;
  }
  .cat-savings h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: #14532d;
    margin-bottom: 14px;
  }
  .cat-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #f3f4f6;
    font-size: 0.85rem;
    gap: 8px;
  }
  .cat-row:last-child { border-bottom: none; }
  .cat-name { font-weight: 600; color: #374151; }
  .cat-best {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 0.75rem;
    color: #6b7280;
  }

  /* ── Toast ── */
  .toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: #1f2937;
    color: white;
    padding: 10px 20px;
    border-radius: 24px;
    font-size: 0.85rem;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
    z-index: 999;
    animation: fadeUp 0.3s ease;
    white-space: nowrap;
    box-shadow: 0 4px 24px rgba(0,0,0,0.25);
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateX(-50%) translateY(12px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  /* ── Share Modal ── */
  .modal-backdrop {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .modal {
    background: white;
    border-radius: 20px;
    padding: 28px;
    max-width: 480px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0,0,0,0.25);
  }
  .modal h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.3rem;
    font-weight: 800;
    color: #14532d;
    margin-bottom: 10px;
  }
  .modal p {
    font-size: 0.85rem;
    color: #6b7280;
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .url-box {
    background: #f3f4f6;
    border-radius: 10px;
    padding: 12px;
    font-size: 0.78rem;
    color: #374151;
    word-break: break-all;
    margin-bottom: 16px;
    line-height: 1.5;
    font-family: monospace;
  }
  .modal-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .modal-btn {
    flex: 1;
    padding: 10px 16px;
    border-radius: 10px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    cursor: pointer;
    border: none;
    transition: opacity 0.2s;
  }
  .modal-btn:hover { opacity: 0.85; }
  .modal-btn.primary { background: #15803d; color: white; }
  .modal-btn.secondary { background: #e5e7eb; color: #374151; }

  .empty-state {
    text-align: center;
    padding: 48px 20px;
    color: #9ca3af;
  }
  .empty-state .emoji { font-size: 2.5rem; margin-bottom: 12px; }
  .empty-state p { font-size: 0.9rem; }

  @media (max-width: 600px) {
    .header-title { font-size: 1.25rem; }
    .tab { padding: 12px 14px; font-size: 0.82rem; }
    td, th { padding: 8px 10px; }
    .price-input { width: 75px; }
  }
`;

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState('items');
  const [items, setItems] = useState([]);
  const [prices, setPrices] = useState({});   // { itemId: { local, online } }
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('All');
  const [toast, setToast] = useState('');
  const [showShare, setShowShare] = useState(false);
  // Add item form
  const [newName, setNewName] = useState('');
  const [newUnit, setNewUnit] = useState('');
  const [newCat,  setNewCat]  = useState('Custom');

  // ── showToast (defined first so hooks below can reference it) ──
  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2800);
  }, []);

  // ── Load from localStorage on mount ──
  useEffect(() => {
    const saved = loadData();
    if (saved) {
      setItems(saved.items || DEFAULT_ITEMS);
      setPrices(saved.prices || {});
    } else {
      setItems(DEFAULT_ITEMS);
    }
  }, []);

  // ── Check URL share params ──
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shared = params.get('data');
    if (shared) {
      try {
        const decoded = JSON.parse(atob(shared));
        setItems(decoded.items || DEFAULT_ITEMS);
        setPrices(decoded.prices || {});
        showToast('📥 Shared data loaded!');
        window.history.replaceState({}, '', window.location.pathname);
      } catch (e) {} // eslint-disable-line no-unused-vars
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Auto-save ──
  useEffect(() => {
    saveData({ items, prices });
  }, [items, prices]);

  const updatePrice = useCallback((id, type, val) => {
    setPrices(prev => ({
      ...prev,
      [id]: { ...(prev[id] || {}), [type]: val }
    }));
  }, []);

  const addItem = useCallback(() => {
    if (!newName.trim()) return;
    const id = Date.now();
    setItems(prev => [...prev, {
      id, name: newName.trim(),
      category: newCat,
      unit: newUnit.trim() || 'per unit'
    }]);
    setNewName(''); setNewUnit('');
    showToast('✅ Item added!');
  }, [newName, newUnit, newCat, showToast]);

  const deleteItem = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id));
    setPrices(prev => { const n = {...prev}; delete n[id]; return n; });
    showToast('🗑️ Item removed');
  }, [showToast]);

  // ── Share URL ──
  const shareUrl = useCallback(() => {
    const payload = btoa(JSON.stringify({ items, prices }));
    const url = `${window.location.origin}${window.location.pathname}?data=${payload}`;
    if (navigator.share) {
      navigator.share({ title: 'Grocery Compare', text: 'Check our grocery prices!', url })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => showToast('🔗 Link copied!'));
    }
    setShowShare(false);
  }, [items, prices, showToast]);

  // ── Derived ──
  const categories = ['All', ...Object.keys(CATEGORY_COLORS)];
  const filtered = items.filter(i => {
    const matchSearch = i.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = catFilter === 'All' || i.category === catFilter;
    return matchSearch && matchCat;
  });

  // Group by category
  const grouped = {};
  filtered.forEach(item => {
    const cat = item.category || 'Custom';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(item);
  });

  // Stats
  const filled = items.filter(i => prices[i.id]?.local || prices[i.id]?.online);
  const localWins  = items.filter(i => bestPrice(prices[i.id]?.local, prices[i.id]?.online) === 'local').length;
  const onlineWins = items.filter(i => bestPrice(prices[i.id]?.local, prices[i.id]?.online) === 'online').length;
  const totalSaving = items.reduce((sum, i) => {
    const s = savings(prices[i.id]?.local, prices[i.id]?.online);
    return sum + (s ? parseFloat(s) : 0);
  }, 0);

  // Category stats
  const catStats = Object.entries(grouped).map(([cat, its]) => {
    const lw = its.filter(i => bestPrice(prices[i.id]?.local, prices[i.id]?.online) === 'local').length;
    const ow = its.filter(i => bestPrice(prices[i.id]?.local, prices[i.id]?.online) === 'online').length;
    const sav = its.reduce((s, i) => {
      const sv = savings(prices[i.id]?.local, prices[i.id]?.online);
      return s + (sv ? parseFloat(sv) : 0);
    }, 0);
    return { cat, lw, ow, sav, total: its.length };
  });

  const shareUrlStr = `${window.location.origin}${window.location.pathname}?data=${btoa(JSON.stringify({ items, prices }))}`;

  return (
    <>
      <style>{css}</style>
      <div className="app">
        {/* ── Header ── */}
        <div className="header">
          <div className="header-top">
            <div>
              <div className="header-title">🛒 Grocery Compare</div>
              <div className="header-subtitle">Local Bazaar vs Online — Best Rate Finder</div>
            </div>
            <button className="share-btn" onClick={() => setShowShare(true)}>
              🔗 Share with Family
            </button>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="tabs">
          {[
            { id: 'items',   label: '📋 All Items' },
            { id: 'local',   label: '🏪 Local Market' },
            { id: 'online',  label: '📦 Online Prices' },
            { id: 'summary', label: '📊 Summary' },
          ].map(t => (
            <button
              key={t.id}
              className={`tab ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Summary Bar ── */}
        <div className="summary-bar">
          <div className="summary-card">
            <div className="s-val">{items.length}</div>
            <div className="s-lbl">Total Items</div>
          </div>
          <div className="summary-card">
            <div className="s-val">{filled.length}</div>
            <div className="s-lbl">With Prices</div>
          </div>
          <div className="summary-card">
            <div className="s-val" style={{color:'#2563eb'}}>🏪 {localWins}</div>
            <div className="s-lbl">Local Wins</div>
          </div>
          <div className="summary-card">
            <div className="s-val" style={{color:'#ea580c'}}>📦 {onlineWins}</div>
            <div className="s-lbl">Online Wins</div>
          </div>
          <div className="summary-card saving">
            <div className="s-val">₹{totalSaving.toFixed(0)}</div>
            <div className="s-lbl">Total Savings</div>
          </div>
        </div>

        {/* ── SUMMARY TAB ── */}
        {activeTab === 'summary' && (
          <div className="summary-tab">
            <div className="big-cards">
              <div className="big-card green">
                <div className="bc-val">{items.length}</div>
                <div className="bc-lbl">Total Grocery Items</div>
              </div>
              <div className="big-card blue">
                <div className="bc-val">🏪 {localWins}</div>
                <div className="bc-lbl">Local Market Wins</div>
              </div>
              <div className="big-card" style={{borderColor:'#fed7aa',background:'#fff7ed'}}>
                <div className="bc-val" style={{color:'#ea580c'}}>📦 {onlineWins}</div>
                <div className="bc-lbl">Online Market Wins</div>
              </div>
              <div className="big-card amber">
                <div className="bc-val">₹{totalSaving.toFixed(0)}</div>
                <div className="bc-lbl">Total Potential Savings</div>
              </div>
            </div>
            <div className="cat-savings">
              <h3>📂 Category-wise Breakdown</h3>
              {catStats.length === 0 && (
                <div className="empty-state">
                  <div className="emoji">🌿</div>
                  <p>Enter prices to see category stats</p>
                </div>
              )}
              {catStats.map(({ cat, lw, ow, sav, total }) => {
                const info = CATEGORY_COLORS[cat] || CATEGORY_COLORS['Custom'];
                return (
                  <div className="cat-row" key={cat}>
                    <span className="cat-name">{info.icon} {cat} ({total})</span>
                    <span className="cat-best">
                      {lw > 0 && <span className="best-tag best-local">🏪 {lw} local</span>}
                      {ow > 0 && <span className="best-tag best-online">📦 {ow} online</span>}
                      {sav > 0 && <span style={{color:'#15803d',fontWeight:700}}>₹{sav.toFixed(0)} saved</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── ITEM TABS ── */}
        {activeTab !== 'summary' && (
          <>
            {/* Controls */}
            <div className="controls">
              <input
                className="search-input"
                placeholder="Search items..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <select className="cat-filter" value={catFilter} onChange={e => setCatFilter(e.target.value)}>
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            {/* Add custom item — only on Items tab */}
            {activeTab === 'items' && (
              <div className="add-row">
                <input
                  className="item-name"
                  placeholder="Add custom item name..."
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && addItem()}
                />
                <input
                  className="item-unit"
                  placeholder="Unit (e.g. per kg)"
                  value={newUnit}
                  onChange={e => setNewUnit(e.target.value)}
                />
                <select value={newCat} onChange={e => setNewCat(e.target.value)} className="cat-filter">
                  {Object.keys(CATEGORY_COLORS).map(c => <option key={c}>{c}</option>)}
                </select>
                <button className="add-btn" onClick={addItem}>+ Add Item</button>
              </div>
            )}

            {/* Table */}
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>Unit</th>
                    {(activeTab === 'items' || activeTab === 'local') && (
                      <th>🏪 Local (₹)</th>
                    )}
                    {(activeTab === 'items' || activeTab === 'online') && (
                      <th>📦 Online (₹)</th>
                    )}
                    {activeTab === 'items' && <th>Best Buy</th>}
                    {activeTab === 'items' && <th>Savings</th>}
                    {activeTab === 'items' && <th></th>}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(grouped).map(([cat, catItems]) => {
                    const info = CATEGORY_COLORS[cat] || CATEGORY_COLORS['Custom'];
                    return (
                      <React.Fragment key={cat}>
                        <tr className="cat-group-header" style={{'--cat-bg': info.bg, '--cat-accent': info.accent}}>
                          <td colSpan={activeTab === 'items' ? 8 : 5}>
                            {info.icon} {cat}
                          </td>
                        </tr>
                        {catItems.map((item, idx) => {
                          const p = prices[item.id] || {};
                          const best = bestPrice(p.local, p.online);
                          const sav = savings(p.local, p.online);
                          return (
                            <tr key={item.id}>
                              <td style={{color:'#9ca3af', fontSize:'0.75rem'}}>{idx+1}</td>
                              <td className="item-name-cell">{item.name}</td>
                              <td className="unit-cell">{item.unit}</td>
                              {(activeTab === 'items' || activeTab === 'local') && (
                                <td>
                                  <input
                                    className="price-input local"
                                    type="number"
                                    min="0"
                                    step="0.5"
                                    placeholder="₹"
                                    value={p.local || ''}
                                    onChange={e => updatePrice(item.id, 'local', e.target.value)}
                                  />
                                </td>
                              )}
                              {(activeTab === 'items' || activeTab === 'online') && (
                                <td>
                                  <input
                                    className="price-input online"
                                    type="number"
                                    min="0"
                                    step="0.5"
                                    placeholder="₹"
                                    value={p.online || ''}
                                    onChange={e => updatePrice(item.id, 'online', e.target.value)}
                                  />
                                </td>
                              )}
                              {activeTab === 'items' && (
                                <td>
                                  {best === 'local'  && <span className="best-tag best-local">🏪 Local</span>}
                                  {best === 'online' && <span className="best-tag best-online">📦 Online</span>}
                                  {best === null     && <span style={{color:'#d1d5db',fontSize:'0.75rem'}}>—</span>}
                                </td>
                              )}
                              {activeTab === 'items' && (
                                <td className="saving-cell">
                                  {sav ? `₹${sav}` : <span style={{color:'#d1d5db'}}>—</span>}
                                </td>
                              )}
                              {activeTab === 'items' && (
                                <td>
                                  <button className="del-btn" onClick={() => deleteItem(item.id)} title="Remove">✕</button>
                                </td>
                              )}
                            </tr>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={8}>
                        <div className="empty-state">
                          <div className="emoji">🔍</div>
                          <p>No items found. Try a different search.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* ── Share Modal ── */}
      {showShare && (
        <div className="modal-backdrop" onClick={() => setShowShare(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>🔗 Share with Family</h2>
            <p>
              Share this link with family members. They'll see all your items and prices, and can add their own rates too. Changes are saved per-device.
            </p>
            <div className="url-box">
              {shareUrlStr.length > 200
                ? shareUrlStr.slice(0, 200) + '…'
                : shareUrlStr}
            </div>
            <div className="modal-actions">
              <button className="modal-btn primary" onClick={shareUrl}>
                📤 Share / Copy Link
              </button>
              <button className="modal-btn secondary" onClick={() => setShowShare(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
