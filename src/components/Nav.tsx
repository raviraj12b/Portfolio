import { useEffect, useState } from 'react';
import { profile } from '../data';

interface NavProps {
  onOpenPalette: () => void;
}

export default function Nav({ onOpenPalette }: NavProps) {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    }
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bar">
      <div className="bar-in">
        <a className="brand" href="#top">
          <span className="dot" />
          <span>
            {profile.name.toUpperCase()}
            <small>{profile.role}</small>
          </span>
        </a>

        <div className="bar-right">
          <span className="live">
            <s />
            {profile.availability}
          </span>
          <span className="clock">
            <i>IST/</i>
            <b>{time}</b>
          </span>
          <a
            className="bar-resume"
            href={`mailto:${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <a
            className="bar-resume"
            href={profile.resume}
            download
            style={{ marginLeft: '-4px' }}
          >
            Resume
          </a>
          <button
            className="jumpbtn"
            id="jumpBtn"
            type="button"
            aria-haspopup="dialog"
            aria-controls="palette"
            onClick={onOpenPalette}
          >
            <kbd>/</kbd>Jump
          </button>
        </div>
      </div>
    </header>
  );
}
