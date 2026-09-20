import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { profile } from '../data';
const groups = [
  {name:'Data & machine learning',tools:['Python','Pandas','NumPy','Scikit-learn','Matplotlib','Seaborn']},
  {name:'AI & applications',tools:['React.js','FastAPI','Flask','Streamlit','FAISS','Groq','LangChain']},
  {name:'Development & workflow',tools:['JavaScript','HTML / CSS','SQL','Git / GitHub','Linux','Shell scripting','Google Colab']},
];
export default function About() {
  return <section id="about" className="border-y border-black/[0.06] bg-white/70"><div className="section-shell">
    <p className="eyebrow">02 / About me</p><div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
      <div><h2 className="section-title">Curious by nature.<br/><span className="gradient-text">Hands-on by choice.</span></h2><p className="mb-5 mt-8 text-lg leading-relaxed text-zinc-600">I’m Rajesh, a final-year B.E. student in Artificial Intelligence & Data Science based in Pune, India.</p><p className="text-base leading-relaxed text-zinc-600">I’m interested in the whole process: understanding the data, choosing an approach, testing its limits, and making the result usable. My internships and projects have taken me from sales forecasting to document intelligence and interactive applications.</p>
        <div className="my-8 flex items-start gap-4 rounded-2xl border border-black/[0.07] bg-white p-5"><GraduationCap size={25} className="shrink-0 text-plasma" /><div><h3 className="font-semibold">B.E. · Artificial Intelligence & Data Science</h3><p className="mt-2 text-sm leading-relaxed text-zinc-600">Shree Ramchandra College of Engineering<br/>Savitribai Phule Pune University</p><p className="mt-3 font-mono text-xs text-plasma">EXPECTED GRADUATION / MAY 2027</p></div></div>
        <a className="text-link" href={profile.resume} download>Download resume <ArrowUpRight size={16}/></a>
      </div>
      <div><p className="mb-6 font-mono text-xs uppercase tracking-widest text-zinc-500">The toolbox</p>{groups.map((g,i)=><div className="border-t border-black/[0.08] py-7" key={g.name}><h3 className="mb-4 text-lg font-semibold"><span className="mr-4 font-mono text-xs text-flame">0{i+1}</span>{g.name}</h3><ul className="flex flex-wrap gap-2">{g.tools.map(t=><li className="tag" key={t}>{t}</li>)}</ul></div>)}</div>
    </div>
  </div></section>;
}
