import { educationList } from '../data';

export default function Education() {
  return (
    <section className="sec pad" id="education">
      {/* Section Header */}
      <div className="head rv in">
        <div>
          <span className="idx">04 // EDUCATION</span>
          <h2>
            ACADEMIC
            <br />
            <span style={{ color: 'var(--violet)' }}>FOUNDATION.</span>
          </h2>
        </div>
        <p>
          Formal engineering degree in Artificial Intelligence & Data Science with emphasis on
          computer science fundamentals and applied machine learning.
        </p>
      </div>

      {/* Ladder Rungs */}
      <div className="ladder rv in">
        {educationList.map((edu) => (
          <div className="rung" key={edu.degree}>
            <div className="ry">
              {edu.years.split('—')[0].trim()} <b>—</b> {edu.years.split('—')[1]?.trim() || '2027'}
            </div>
            <div>
              <h3>{edu.degree}</h3>
              <span>{edu.institution}</span>
              <div className="langs">
                {edu.courses.map((course) => (
                  <span className="tag" key={course}>
                    {course}
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
