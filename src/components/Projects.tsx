import {
  manifestList,
  featuredProject,
  rowProjects,
  alsoBuiltProject,
} from '../data';

export default function Projects() {
  return (
    <section className="sec pad" id="work">
      {/* Section Header */}
      <div className="head rv in">
        <div>
          <span className="idx">01 // SELECTED WORK</span>
          <h2>
            BUILDING
            <br />
            IDEAS INTO
            <br />
            <span style={{ color: 'var(--cyan)' }}>SYSTEMS.</span>
          </h2>
        </div>
        <p>
          Applications, retrieval pipelines, and machine learning models created with Python,
          vector databases, and modern frameworks.
        </p>
      </div>

      {/* Manifest Index Table */}
      <div className="manifest rv in" style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}>
        {manifestList.map((item) => (
          <a href={item.href} key={item.href}>
            <em>{item.num}</em>
            <strong>{item.title}</strong>
            <span>{item.tag}</span>
          </a>
        ))}
      </div>

      {/* Featured Project 01: RAG */}
      <div className="feat rv in" id={featuredProject.id}>
        <div>
          <div className="pmeta">
            <span className="no">{featuredProject.num}</span>
            <span className="flag">{featuredProject.flag}</span>
            <span>{featuredProject.category}</span>
          </div>
          <h3
            className="ptitle"
            dangerouslySetInnerHTML={{
              __html: featuredProject.titleHtml || featuredProject.title,
            }}
          />
          <p className="prole">{featuredProject.role}</p>
          <p
            className="ptxt"
            dangerouslySetInnerHTML={{ __html: featuredProject.descriptionHtml }}
          />
          <div className="tags">
            {featuredProject.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {featuredProject.demo && (
              <a
                className="cta"
                href={featuredProject.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {featuredProject.demoLabel || 'Live Demo ↗'}
              </a>
            )}
            {featuredProject.source && (
              <a
                className="cta alt"
                href={featuredProject.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                {featuredProject.sourceLabel || 'View Code ↗'}
              </a>
            )}
          </div>
        </div>

        {/* RAG Architecture SVG Diagram */}
        <div className="arch arch-wrap rv in">
          <svg viewBox="0 0 460 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="130" height="60" rx="4" fill="#0C0E14" stroke="#262A33" />
            <text x="22" y="34" fill="#7C5CFF" fontFamily="monospace" fontSize="10" fontWeight="bold">
              INPUT DOCS
            </text>
            <text x="22" y="52" fill="#F2F2F0" fontFamily="monospace" fontSize="11">
              PDF / Text Files
            </text>

            <path d="M140 40 H180" stroke="#7C5CFF" strokeWidth="1.5" className="flow" />

            <rect x="180" y="10" width="130" height="60" rx="4" fill="#0C0E14" stroke="#262A33" />
            <text x="192" y="34" fill="#00E5FF" fontFamily="monospace" fontSize="10" fontWeight="bold">
              INDEXING
            </text>
            <text x="192" y="52" fill="#F2F2F0" fontFamily="monospace" fontSize="11">
              Chunk & Embed
            </text>

            <path d="M310 40 H350" stroke="#00E5FF" strokeWidth="1.5" className="flow" />

            <rect x="350" y="10" width="100" height="60" rx="4" fill="#0C0E14" stroke="#7C5CFF" />
            <text x="360" y="34" fill="#7C5CFF" fontFamily="monospace" fontSize="10" fontWeight="bold">
              VECTOR DB
            </text>
            <text x="360" y="52" fill="#00E5FF" fontFamily="monospace" fontSize="11">
              Similarity
            </text>

            <path d="M400 70 V120" stroke="#00E5FF" strokeWidth="1.5" className="flow" />

            <rect x="270" y="120" width="180" height="60" rx="4" fill="#0C0E14" stroke="#262A33" />
            <text x="282" y="144" fill="#FF5CA8" fontFamily="monospace" fontSize="10" fontWeight="bold">
              CONTEXT RETRIEVAL
            </text>
            <text x="282" y="162" fill="#F2F2F0" fontFamily="monospace" fontSize="11">
              Top-K Context Chunks
            </text>

            <path d="M270 150 H180" stroke="#FF5CA8" strokeWidth="1.5" className="flow" />

            <rect x="10" y="120" width="170" height="60" rx="4" fill="#0C0E14" stroke="#3DDC84" />
            <text x="22" y="144" fill="#3DDC84" fontFamily="monospace" fontSize="10" fontWeight="bold">
              LLM GENERATION
            </text>
            <text x="22" y="162" fill="#F2F2F0" fontFamily="monospace" fontSize="11">
              Prompt + Context
            </text>

            <path d="M95 180 V210" stroke="#3DDC84" strokeWidth="1.5" className="flow" />

            <rect
              x="10"
              y="210"
              width="440"
              height="50"
              rx="4"
              fill="#08090C"
              stroke="#7C5CFF"
              strokeDasharray="3 3"
            />
            <text x="22" y="232" fill="#00E5FF" fontFamily="monospace" fontSize="10" fontWeight="bold">
              OUTPUT RESPONSE
            </text>
            <text x="22" y="248" fill="#8A8F99" fontFamily="monospace" fontSize="10">
              Grounded Answer + Verifiable Citation Links
            </text>
          </svg>
          <div className="cap">
            <span>FIG 1.1 — DOCUMENT INTELLIGENCE PIPELINE</span>
            <span>RAG ARCHITECTURE</span>
          </div>
        </div>
      </div>

      {/* Row Projects */}
      {rowProjects.map((p) => (
        <div className="row rv in" id={p.id} key={p.id}>
          <div className="bignum">{p.num}</div>
          <div>
            <div className="pmeta">
              <span className="no">{p.flag}</span>
              <span>{p.category}</span>
            </div>
            <h3
              style={{
                fontSize: 'clamp(24px, 3.5vw, 42px)',
                fontFamily: 'var(--disp)',
                fontWeight: 700,
                margin: '12px 0',
              }}
            >
              {p.title}
            </h3>
            <p
              className="ptxt"
              dangerouslySetInnerHTML={{ __html: p.descriptionHtml }}
            />

            {p.pipeline && (
              <div className="pipe">
                {p.pipeline.map((step, idx) => (
                  <span key={step} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <i className={idx % 2 === 0 ? 'hot' : ''}>{step}</i>
                    {idx < p.pipeline!.length - 1 && <u />}
                  </span>
                ))}
              </div>
            )}

            {p.tags && p.tags.length > 0 && (
              <div className="tags" style={{ marginTop: '16px' }}>
                {p.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="side">
            <div className="spec">
              {p.specs.map((s) => (
                <div key={s.label}>
                  <em>{s.label}</em>
                  <b>
                    {s.link ? (
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color:
                            s.accent === 'cyan'
                              ? 'var(--cyan)'
                              : s.accent === 'violet'
                              ? 'var(--violet)'
                              : 'var(--white)',
                        }}
                      >
                        {s.value}
                      </a>
                    ) : (
                      s.value
                    )}
                  </b>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Also Built Section (Project 06: Data Health Inspector) */}
      <div
        className="also rv in"
        id={alsoBuiltProject.id}
        style={{ marginTop: 'clamp(40px, 6vw, 80px)' }}
      >
        <div>
          <span className="lbl">{alsoBuiltProject.badge}</span>
          <h4>{alsoBuiltProject.title}</h4>
          <p>{alsoBuiltProject.description}</p>
          {alsoBuiltProject.source && (
            <div style={{ marginTop: '16px' }}>
              <a
                className="cta alt"
                href={alsoBuiltProject.source}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '8px 16px', fontSize: '11px' }}
              >
                GitHub Profile / Code ↗
              </a>
            </div>
          )}
        </div>
        <div>
          <span className="lbl">KEY CAPABILITIES</span>
          <p>{alsoBuiltProject.capabilities}</p>
        </div>
      </div>
    </section>
  );
}
