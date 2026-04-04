import {
  SiPython, SiOpenjdk, SiJavascript, SiTypescript, SiCplusplus,
  SiSwift, SiR, SiHtml5,
  SiReact, SiDjango, SiFlask, SiSelenium, SiPytorch, SiTensorflow,
  SiHuggingface, SiLangchain, SiScikitlearn, SiPandas,
  SiDocker, SiKubernetes, SiTerraform,
  SiGit, SiGithubactions, SiJenkins,
  SiPostgresql, SiMongodb, SiApachecassandra, SiElasticsearch,
  SiMysql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons";

type Skill = { name: string; level: number; Icon: IconType };

const skillColumns: { title: string; borderColor: string; barColor: string; skills: Skill[] }[] = [
  {
    title: "LANGUAGES",
    borderColor: "#00c853",
    barColor: "#00c853",
    skills: [
      { name: "Python",          level: 92, Icon: SiPython },
      { name: "Java",            level: 88, Icon: SiOpenjdk },
      { name: "JavaScript / TS", level: 85, Icon: SiTypescript },
      { name: "C / C++",         level: 78, Icon: SiCplusplus },
      { name: "SQL",             level: 82, Icon: SiMysql },
    ],
  },
  {
    title: "FRAMEWORKS & ML",
    borderColor: "#58a6ff",
    barColor: "#58a6ff",
    skills: [
      { name: "React / Django",     level: 88, Icon: SiReact },
      { name: "PyTorch / TensorFlow",level: 82, Icon: SiPytorch },
      { name: "HuggingFace",        level: 80, Icon: SiHuggingface },
      { name: "Scikit-learn",       level: 85, Icon: SiScikitlearn },
      { name: "Pandas",             level: 88, Icon: SiPandas },
    ],
  },
  {
    title: "CLOUD & DEVOPS",
    borderColor: "#ffd700",
    barColor: "#ffd700",
    skills: [
      { name: "AWS",             level: 85, Icon: FaAws },
      { name: "Docker",          level: 80, Icon: SiDocker },
      { name: "Kubernetes",      level: 72, Icon: SiKubernetes },
      { name: "Terraform",       level: 72, Icon: SiTerraform },
      { name: "Git / CI/CD",     level: 92, Icon: SiGit },
    ],
  },
];

const additional: { name: string; Icon: IconType }[] = [
  { name: "Swift",         Icon: SiSwift },
  { name: "R",             Icon: SiR },
  { name: "Flask",         Icon: SiFlask },
  { name: "Selenium",      Icon: SiSelenium },
  { name: "PostgreSQL",    Icon: SiPostgresql },
  { name: "MongoDB",       Icon: SiMongodb },
  { name: "DynamoDB",      Icon: FaAws },
  { name: "Cassandra",     Icon: SiApachecassandra },
  { name: "Elasticsearch", Icon: SiElasticsearch },
  { name: "LangChain",     Icon: SiLangchain },
  { name: "GitHub Actions",Icon: SiGithubactions },
  { name: "Jenkins",       Icon: SiJenkins },
  { name: "HTML/CSS",      Icon: SiHtml5 },
  { name: "JavaScript",    Icon: SiJavascript },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-20"
      style={{ background: "#161b22", borderTop: "1px solid #30363d" }}
    >
      <div className="max-w-5xl">
        <p className="font-mono text-[11px] mb-2" style={{ color: "#00c853" }}>
          [ SKILLS &amp; TECHNOLOGIES ]
        </p>
        <h2
          className="font-bold mb-2"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 48, color: "#e6edf3" }}
        >
          Tech Stack
        </h2>
        <p className="font-mono text-sm mb-12" style={{ color: "#8b949e" }}>
          Proficiency measured in market confidence
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {skillColumns.map(({ title, borderColor, barColor, skills }) => (
            <div key={title} className="card p-5" style={{ borderColor: `${borderColor}40` }}>
              <p className="font-mono text-[11px] mb-5" style={{ color: borderColor }}>{title}</p>
              <div className="space-y-4">
                {skills.map(({ name, level, Icon }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-mono text-[11px] flex items-center gap-1.5" style={{ color: "#e6edf3" }}>
                        <Icon style={{ color: borderColor, opacity: 0.8, flexShrink: 0 }} size={12} />
                        {name}
                      </span>
                      <span className="font-mono text-[10px]" style={{ color: "#8b949e" }}>{level}%</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(48,54,61,0.8)" }}>
                      <div className="h-full rounded-full" style={{ width: `${level}%`, background: barColor, opacity: 0.8 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional */}
        <div>
          <p className="font-mono text-[11px] mb-3" style={{ color: "#8b949e" }}>Also familiar with:</p>
          <div className="flex flex-wrap gap-2">
            {additional.map(({ name, Icon }) => (
              <span key={name} className="font-mono text-[11px] px-2.5 py-1 rounded inline-flex items-center gap-1.5"
                style={{ color: "#8b949e", background: "rgba(48,54,61,0.6)", border: "1px solid #30363d" }}>
                <Icon size={11} />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
