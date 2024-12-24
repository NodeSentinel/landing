export default function PricingSection() {
  const plans = [
    { name: 'Basic', price: '$3', features: ['up to 100 Nodes', '24/7 Monitoring'] },
    { name: 'Pro', price: '$10', features: ['up to 500 Nodes', '24/7 Monitoring', 'SMS & Email Alerts', 'Advanced Analytics', 'API Access'] },
    { name: 'Enterprise', price: '$18', features: ['up to 1000 ', '24/7 Monitoring', 'Custom Alert Channels', 'Full Analytics Suite', 'Dedicated Support'] },
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Plans and Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-card rounded-lg p-6 flex flex-col border border-border hover:border-primary transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6 text-foreground">{plan.price}
                <span className="text-lg font-normal text-muted-foreground">/month</span>
              </div>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2 text-muted-foreground">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold hover:bg-primary/90 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

