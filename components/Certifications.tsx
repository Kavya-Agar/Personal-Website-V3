const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jun 2025",
    credentialId: "CLF-C02 · Expires Jun 2028",
  },
  {
    name: "IBM DevOps & Software Engineering",
    issuer: "IBM",
    date: "Jul 2025",
    credentialId: "15-Course Professional Certificate",
  },
  {
    name: "Databricks Generative AI Fundamentals",
    issuer: "Databricks",
    date: "Aug 2025",
    credentialId: "Expires Aug 2027",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 md:py-32 px-4 sm:px-8 md:px-20"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-[11px] mb-2" style={{ color: "var(--green)" }}>
          [ CREDENTIALS ]
        </p>
        <h2
          className="font-bold mb-12"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 48, color: "var(--text-primary)" }}
        >
          Certifications
        </h2>

        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <div key={i} className="card p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-semibold text-base"
                    style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}>
                    {cert.name}
                  </h3>
                  <p className="font-mono text-sm" style={{ color: "var(--green)" }}>
                    {cert.issuer}
                  </p>
                </div>
                <span className="font-mono text-[10px]" style={{ color: "var(--text-dim)" }}>
                  {cert.date}
                </span>
              </div>
              {cert.credentialId && (
                <p className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
                  {cert.credentialId}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
