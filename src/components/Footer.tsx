import { profile } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="contact pad" id="contact">
      <div className="contact-grid rv in">
        <div>
          <span className="idx">05 // WHAT'S NEXT</span>
          <h2>
            LET'S BUILD
            <br />
            <span className="gr">SOMETHING.</span>
          </h2>
          <p>
            I’m actively looking for internships, entry-level AI/ML roles, and collaborative projects.
            Feel free to reach out directly via email or connect on social channels.
          </p>
        </div>

        <div className="channel-panel">
          <div className="lbl">DIRECT CHANNELS</div>
          <div className="channels">
            <a href={`mailto:${profile.email}`}>
              <em>EMAIL</em>
              <b>{profile.email}</b>
              <s>↗</s>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>LINKEDIN</em>
              <b>in/{profile.linkedinUser}</b>
              <s>↗</s>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>GITHUB</em>
              <b>github.com/raviraj12b</b>
              <s>↗</s>
            </a>
            <a href={profile.resume} download>
              <em>RESUME</em>
              <b>Download Resume (PDF)</b>
              <s>↗</s>
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div>© {currentYear} {profile.name.toUpperCase()}</div>
        <div>DATA ✦ MACHINE LEARNING ✦ APPLICATIONS</div>
        <div>
          <a href="#top" style={{ color: 'var(--cyan)' }}>
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
