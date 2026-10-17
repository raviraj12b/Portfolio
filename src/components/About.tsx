import { profile, skillCategories } from '../data';

export default function About() {
  return (
    <section className="sec pad" id="about">
      {/* Section Header */}
      <div className="head rv in">
        <div>
          <span className="idx">02 // ABOUT & SKILLS</span>
          <h2>
            CURIOUS ABOUT DATA.
            <br />
            <span style={{ color: 'var(--violet)' }}>SERIOUS ABOUT BUILDING.</span>
          </h2>
        </div>
        <p>
          Final-year Artificial Intelligence & Data Science student with practical experience in
          machine learning pipelines, RAG systems, and full-stack software integration.
        </p>
      </div>

      {/* About & Current Status Panel */}
      <div className="about rv in">
        <div>
          {profile.bio.map((paragraph, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
          <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a className="cta" href={profile.resume} download>
              Download Resume (PDF) ↗
            </a>
            <a className="cta alt" href="#education">
              View Education ↘
            </a>
          </div>
        </div>

        <div className="panel">
          <div className="panel-h">CURRENT STATUS</div>
          <div className="now">
            <div>
              <span>DEGREE</span>
              <b>BE AI & Data Science (2027)</b>
            </div>
            <div>
              <span>LOCATION</span>
              <b>{profile.location}</b>
            </div>
            <div>
              <span>AVAILABILITY</span>
              <b>
                <s />
                Open for Roles
              </b>
            </div>
            <div>
              <span>GITHUB</span>
              <b>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--cyan)' }}
                >
                  {profile.githubUser} ↗
                </a>
              </b>
            </div>
            <div>
              <span>LINKEDIN</span>
              <b>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--violet)' }}
                >
                  {profile.linkedinUser} ↗
                </a>
              </b>
            </div>
            <div>
              <span>RESUME</span>
              <b>
                <a href={profile.resume} download style={{ color: 'var(--white)' }}>
                  PDF Document ↗
                </a>
              </b>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack List */}
      <div style={{ marginTop: 'clamp(60px, 8vw, 100px)' }}>
        <div className="lbl rv in" style={{ marginBottom: '20px' }}>
          TECHNICAL STACK & TOOLKIT
        </div>
        <div className="stacklist rv in">
          {skillCategories.map((cat) => (
            <div className="srow" key={cat.title}>
              <h3>{cat.title}</h3>
              <p>{cat.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
