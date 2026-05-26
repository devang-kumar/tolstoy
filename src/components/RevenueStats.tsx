export default function RevenueStats() {
  const stats = [
    { value: "307%", label: "Conversion uplift" },
    { value: "4X", label: "Increase in time on site" },
    { value: "3X", label: "AOV uplift" },
  ];

  return (
    <section className="revenue-stats">
      <div className="revenue-stats-inner">
        <h2>How video translates to revenue</h2>
        <div className="revenue-stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="revenue-stat-card">
              <span className="revenue-stat-up">up to</span>
              <div className="revenue-stat-value">{s.value}</div>
              <div className="revenue-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
