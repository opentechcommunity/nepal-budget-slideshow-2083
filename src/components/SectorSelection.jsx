import { useState } from 'react';
import { sectors } from '../data/sectors';
import './SectorSelection.css';

export default function SectorSelection({ onStart }) {
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const selectAll = () => setSelected(sectors.map((s) => s.id));
  const clearAll = () => setSelected([]);

  const handleStart = () => {
    if (selected.length === 0) return;
    const chosen = sectors.filter((s) => selected.includes(s.id));
    onStart(chosen);
  };

  return (
    <div className="selection-page">
      {/* Header */}
      <div className="selection-header">
        <div className="header-eyebrow">Nepal Budget FY 2083/84 · 2026/27</div>
        <h1 className="header-title">Budget Decisions</h1>
        <p className="header-subtitle">
          Select sectors to explore. Each decision is presented as a full-screen slide.
        </p>
        <div className="header-meta">
          Total Budget: Rs. 2,124.34 Billion &nbsp;·&nbsp; Growth Target: 7%
        </div>
      </div>

      {/* Controls row */}
      <div className="selection-controls">
        <button className="ctrl-btn" onClick={selectAll}>Select All</button>
        <button className="ctrl-btn" onClick={clearAll}>Clear</button>
      </div>

      {/* Sector grid — padded at bottom so sticky bar doesn't overlap */}
      <div className="sector-grid">
        {sectors.map((sector) => {
          const isSelected = selected.includes(sector.id);
          return (
            <button
              key={sector.id}
              className={`sector-card ${isSelected ? 'selected' : ''}`}
              onClick={() => toggle(sector.id)}
              aria-pressed={isSelected}
            >
              {/* Checkbox indicator */}
              <div className={`card-check ${isSelected ? 'checked' : ''}`}>
                {isSelected && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                    <path d="M1 4L3.8 7L9 1" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>

              <div className="card-tag" style={{ color: sector.color }}>{sector.tag}</div>
              <div className="card-title">{sector.title}</div>
              <div className="card-desc">{sector.description}</div>
              <div className="card-count">{sector.bullets.length} decisions</div>
            </button>
          );
        })}
      </div>

      {/* Sticky bottom bar — always visible */}
      <div className="sticky-bar">
        <div className="sticky-bar-inner">
          <div className="sticky-count">
            {selected.length === 0 ? (
              <span className="count-zero">No sectors selected</span>
            ) : (
              <>
                <span className="count-num">{selected.length}</span>
                <span className="count-label">
                  {selected.length === 1 ? 'sector' : 'sectors'} selected
                </span>
              </>
            )}
          </div>
          <button
            className={`start-btn ${selected.length === 0 ? 'disabled' : ''}`}
            onClick={handleStart}
            disabled={selected.length === 0}
          >
            View Detail
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="start-arrow-icon">
              <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
