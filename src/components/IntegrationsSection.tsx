const INTEGRATIONS = [
  "Shop App",
  "Shopify",
  "Tapcart",
  "Klaviyo",
  "VTEX",
  "Yotpo",
  "Magento",
  "WooCommerce",
  "Gorgias",
  "BigCommerce",
  "Wix",
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="integrations">
      <div className="integrations-inner">
        <h2>Deeply integrated with the rest of your tech stack</h2>
        <div className="integrations-grid">
          {INTEGRATIONS.map((name) => (
            <div key={name} className="integration-card">
              <span className="integration-logo">{name.charAt(0)}</span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
