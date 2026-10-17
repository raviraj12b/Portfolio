import { useEffect, useRef, useState } from 'react';
import { paletteItems, PaletteItem } from '../data';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      const timer = setTimeout(() => inputRef.current?.focus(), 40);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const filteredItems = paletteItems.filter((item) => {
    const q = query.toLowerCase().trim();
    return item.label.toLowerCase().includes(q) || item.hint.toLowerCase().includes(q);
  });

  const handleSelect = (item: PaletteItem) => {
    onClose();
    if (item.href.startsWith('#')) {
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (filteredItems.length > 0) {
        setActiveIndex((prev) => (prev + 1) % filteredItems.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filteredItems.length > 0) {
        setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[activeIndex]) {
        handleSelect(filteredItems[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="palette-back open"
      id="paletteBack"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="palette" id="palette" role="dialog" aria-modal="true" aria-label="Quick jump">
        <div className="palette-in">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            id="paletteInput"
            type="text"
            placeholder="Jump to a section, or find a project…"
            autoComplete="off"
            spellCheck="false"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
          <kbd onClick={onClose} style={{ cursor: 'pointer' }}>
            ESC
          </kbd>
        </div>
        <div className="palette-list" id="paletteList">
          {filteredItems.length === 0 ? (
            <div
              style={{
                padding: '24px',
                textAlign: 'center',
                color: 'var(--grey-2)',
                fontSize: '13px',
              }}
            >
              No results found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <a
                key={item.href + item.code}
                className={`palette-row ${idx === activeIndex ? 'active' : ''}`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(item);
                }}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <em>{item.code}</em>
                <b>{item.label}</b>
                <s>{item.hint}</s>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
