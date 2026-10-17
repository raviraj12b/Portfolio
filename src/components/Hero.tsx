import NetworkOrb from './NetworkOrb';
import { profile } from '../data';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <NetworkOrb />
      </div>
      <div className="hero-grid" />

      <div className="hero-port">
        <img
          src={profile.avatar}
          alt={`${profile.name} Developer Avatar`}
          onError={(e) => {
            // fallback if avatar path issue
            (e.currentTarget as HTMLImageElement).src = '/avatar.jpg';
          }}
        />
      </div>

      <div className="hero-top">
        <div className="sn">{profile.degreeBadge}</div>
        <div className="vn">AVAILABLE FOR ROLES</div>
      </div>

      <div className="hero-inner pad">
        <div className="rv in">
          <div className="lbl" style={{ marginBottom: '12px' }}>
            {profile.name.toUpperCase()} — PORTFOLIO
          </div>
          <h1>
            <span className="thin">AI / ML</span>
            <br />
            <span className="gr">ENGINEER.</span>
          </h1>
          <div className="hero-meta">
            <span>
              <b>SPECIALIZATION:</b> {profile.specialization}
            </span>
            <span>
              <b>DEGREE:</b> {profile.degreeFull.toUpperCase()}
            </span>
          </div>
          <p className="hero-lead">
            Final-year engineering student building <b>machine learning models</b>,{' '}
            <b>retrieval-augmented generation (RAG)</b> systems, and{' '}
            <b>data-driven applications</b>. From data cleaning and model exploration to deployment.
          </p>
          <div className="hero-cta">
            <a className="cta" href="#work">
              Explore Work ↘
            </a>
            <a
              className="cta alt"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a className="cta alt" href={profile.resume} download>
              Resume (PDF) ↗
            </a>
          </div>
          <div className="scrollhint">
            <u />
            <span>SCROLL TO EXPLORE ARCHITECTURE & PROJECTS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
