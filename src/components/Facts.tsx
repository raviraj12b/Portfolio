import { facts } from '../data';

export default function Facts() {
  return (
    <section className="facts">
      {facts.map((fact) => (
        <div className="fact rv in" key={fact.label}>
          <b>{fact.val}</b>
          <span>{fact.label}</span>
        </div>
      ))}
    </section>
  );
}
