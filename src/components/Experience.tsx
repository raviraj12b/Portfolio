import { experienceList } from '../data';

export default function Experience() {
  return (
    <section className="sec pad" id="experience">
      {/* Section Header */}
      <div className="head rv in">
        <div>
          <span className="idx">03 // EXPERIENCE</span>
          <h2>
            PUTTING IT INTO
            <br />
            <span style={{ color: 'var(--cyan)' }}>PRACTICE.</span>
          </h2>
        </div>
        <p>
          Hands-on engineering internships focusing on predictive modeling, data analysis, and
          generative AI application building.
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline rv in">
        {experienceList.map((job) => (
          <div className="job" key={job.company}>
            <div>
              <h3>{job.title}</h3>
              <div className="when">{job.when}</div>
              <div className="loc">{job.company}</div>
              <div style={{ fontSize: '11px', color: 'var(--grey-2)', marginTop: '4px' }}>
                {job.loc}
              </div>
            </div>
            <div>
              <p>{job.summary}</p>
              <ul>
                {job.bullets.map((b, idx) => (
                  <li key={idx}>
                    <em>0{idx + 1}</em>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="tags" style={{ marginTop: '16px' }}>
                {job.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
