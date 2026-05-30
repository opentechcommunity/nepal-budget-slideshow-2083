import { useState, useEffect, useCallback, useRef } from 'react';
import './Slideshow.css';

function buildSlides(sectors) {
  const slides = [];
  sectors.forEach((sector) => {
    // Add sector intro slide
    slides.push({
      sectorId: sector.id,
      sectorTitle: sector.title,
      sectorColor: sector.color,
      sectorTag: sector.tag,
      bulletIndex: -1, // -1 indicates sector intro slide
      totalBullets: sector.bullets.length,
      text: sector.description, // Use sector description as main text
      image: sector.bullets[0]?.image || '', // Use first bullet's image
      nepaliText: sector.nepaliText,
      budgetComparison: sector.budgetComparison,
      isIntroSlide: true,
    });
    
    // Add bullet slides
    sector.bullets.forEach((bullet, idx) => {
      slides.push({
        sectorId: sector.id,
        sectorTitle: sector.title,
        sectorColor: sector.color,
        sectorTag: sector.tag,
        bulletIndex: idx,
        totalBullets: sector.bullets.length,
        text: bullet.text,
        image: bullet.image,
        nepaliText: bullet.nepaliText || null,
        budgetComparison: sector.budgetComparison,
        isIntroSlide: false,
      });
    });
  });
  return slides;
}

export default function Slideshow({ sectors, onExit }) {
  const slides = buildSlides(sectors);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('next');
  const [animating, setAnimating] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // closed by default on mobile
  const [imgLoaded, setImgLoaded] = useState(false);
  const timeoutRef = useRef(null);

  // Touch swipe state
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const goTo = useCallback(
    (index, dir = 'next') => {
      if (animating || index === current) return;
      setDirection(dir);
      setAnimating(true);
      setImgLoaded(false);
      timeoutRef.current = setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 320);
    },
    [animating, current]
  );

  const next = useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1, 'next');
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1, 'prev');
  }, [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
      if (e.key === 'Escape') {
        if (sidebarOpen) setSidebarOpen(false);
        else onExit();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, onExit, sidebarOpen]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only trigger if horizontal swipe is dominant and long enough
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 48) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const slide = slides[current];

  // Group slides by sector for sidebar nav
  const sectorGroups = sectors.map((sector) => ({
    ...sector,
    slides: slides
      .map((s, i) => ({ ...s, globalIndex: i }))
      .filter((s) => s.sectorId === sector.id),
  }));

  return (
    <div className="slideshow-root">
      {/* ── Sidebar / bottom-sheet nav ── */}
      {/* Backdrop (mobile) */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`} aria-label="Slide navigation">
        <div className="sidebar-inner">
          {/* Drag handle (mobile) */}
          <div className="sidebar-handle" onClick={() => setSidebarOpen(false)} aria-hidden="true" />

          <div className="sidebar-header">
            <button className="back-btn" onClick={onExit}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9 1L3 7L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </button>
            <button
              className="sidebar-close-btn"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close navigation"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="sidebar-meta">
            <div className="sidebar-title">Nepal Budget <span>FY 2083/84</span></div>
            <div className="sidebar-progress-wrap">
              <div className="sidebar-progress">
                <div
                  className="sidebar-progress-bar"
                  style={{ width: `${((current + 1) / slides.length) * 100}%` }}
                />
              </div>
              <span className="sidebar-progress-label">{current + 1} / {slides.length}</span>
            </div>
          </div>

          <nav className="sidebar-nav">
            {sectorGroups.map((sector) => (
              <div key={sector.id} className="nav-sector">
                <div className="nav-sector-label" style={{ color: sector.color }}>
                  {sector.title}
                </div>
                <ul className="nav-bullets">
                  {sector.slides.map((s) => (
                    <li key={s.globalIndex}>
                      <button
                        className={`nav-bullet-btn ${s.globalIndex === current ? 'active' : ''} ${s.globalIndex < current ? 'done' : ''}`}
                        onClick={() => {
                          goTo(s.globalIndex, s.globalIndex > current ? 'next' : 'prev');
                          setSidebarOpen(false);
                        }}
                        style={s.globalIndex === current ? { borderLeftColor: sector.color } : {}}
                      >
                        <span className="nav-bullet-num">{s.bulletIndex + 1}</span>
                        <span className="nav-bullet-text">{s.text}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* ── Main slide ── */}
      <main
        className="slide-area"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`slide ${animating ? `exit-${direction}` : 'enter'}`}>
          {/* Background image */}
          <div className="slide-bg">
            <img
              key={slide.image}
              src={slide.image}
              alt=""
              className={`slide-img ${imgLoaded ? 'loaded' : ''}`}
              onLoad={() => setImgLoaded(true)}
              aria-hidden="true"
            />
            <div className="slide-overlay" />
          </div>

          {/* Top bar */}
          <div className="slide-topbar">
            <button className="topbar-back-btn" onClick={onExit} aria-label="Back to selection">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="topbar-sector" style={{ color: slide.sectorColor }}>
              {slide.sectorTitle}
            </div>

            <button
              className="topbar-menu-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                <path d="M1 1H17M1 7H17M1 13H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Slide content */}
          <div className="slide-content">
            <div className="slide-content-header">
              <div className="slide-sector-badge">
                <span className="slide-sector-tag">{slide.sectorTag}</span>
                <span className="slide-sector-sep">·</span>
                <span className="slide-sector-name" style={{ color: slide.sectorColor }}>
                  {slide.sectorTitle}
                </span>
              </div>

              <h2 className="slide-text">{slide.text}</h2>
            </div>

            <div className="slide-content-body">
              {/* Budget comparison card - only show on intro slides (sector overview) */}
              {slide.isIntroSlide && slide.budgetComparison && (
                <div className="budget-comparison-card">
                  <div className="budget-comparison-header">
                    Budget Comparison (FY 2082/83 vs 2083/84)
                  </div>
                  <div className="budget-comparison-content">
                    <div className="budget-comparison-row">
                      <div className="budget-item">
                        <div className="budget-label">Previous Year</div>
                        <div className="budget-value">Rs. {slide.budgetComparison.previous} {slide.budgetComparison.unit}</div>
                      </div>
                      <div className="budget-arrow">→</div>
                      <div className="budget-item">
                        <div className="budget-label">Current Year</div>
                        <div className="budget-value">Rs. {slide.budgetComparison.current} {slide.budgetComparison.unit}</div>
                      </div>
                    </div>
                    <div className="budget-change" style={{ 
                      color: slide.budgetComparison.change.startsWith('+') ? '#10b981' : 
                             slide.budgetComparison.change.startsWith('-') ? '#ef4444' : '#6b7280'
                    }}>
                      {slide.budgetComparison.change} • {slide.budgetComparison.category}
                    </div>
                  </div>
                </div>
              )}

              {/* Nepali text card */}
              {slide.nepaliText && (
                <div className="nepali-text-card">
                  <div className="nepali-text-header">
                    {slide.isIntroSlide ? 'बजेट वक्तव्य (Budget Speech - Sector Overview)' : 'सम्बन्धित वक्तव्य (Related Excerpt)'}
                  </div>
                  <div className="nepali-text-content">{slide.nepaliText}</div>
                </div>
              )}

              <div className="slide-counter">
                {slide.isIntroSlide ? (
                  <>
                    <span style={{ color: slide.sectorColor }}>Overview</span>
                    <span className="slide-counter-sep">·</span>
                    <span>{slide.totalBullets} decisions</span>
                  </>
                ) : (
                  <>
                    <span style={{ color: slide.sectorColor }}>{slide.bulletIndex + 1}</span>
                    <span className="slide-counter-sep">/</span>
                    <span>{slide.totalBullets}</span>
                    <span className="slide-counter-sector">in {slide.sectorTitle}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Bottom nav row */}
          <div className="slide-bottom-nav">
            <button
              className={`nav-arrow ${current === 0 ? 'invisible' : ''}`}
              onClick={prev}
              aria-label="Previous slide"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Sector dots */}
            <div className="slide-dots" role="tablist" aria-label="Sectors">
              {sectors.map((sector) => {
                const isActive = slide.sectorId === sector.id;
                return (
                  <button
                    key={sector.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`dot ${isActive ? 'active' : ''}`}
                    style={isActive ? { background: sector.color } : {}}
                    onClick={() => {
                      const first = slides.findIndex((s) => s.sectorId === sector.id);
                      goTo(first, first > current ? 'next' : 'prev');
                    }}
                    aria-label={`Go to ${sector.title}`}
                  />
                );
              })}
            </div>

            <button
              className={`nav-arrow ${current === slides.length - 1 ? 'invisible' : ''}`}
              onClick={next}
              aria-label="Next slide"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 2L12 8L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
