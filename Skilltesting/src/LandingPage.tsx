import { useState } from 'react'
import { Button, Input, Badge, Avatar, ProgressCard, PriceCard } from './components'
import './LandingPage.css'

export function LandingPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: any) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <span className="logo-icon">⚛️</span>
            <span className="logo-text">ComponentFlow</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <Badge variant="info" size="md">Now Available ✨</Badge>
          <h1>Beautiful React Components Built for Scale</h1>
          <p className="hero-subtitle">
            Production-ready UI components with TypeScript support, accessibility, 
            and a complete design system. Start building amazing apps today.
          </p>
          <div className="hero-buttons">
            <Button variant="primary" size="lg">Start Building</Button>
            <Button variant="outline" size="lg">View Docs</Button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">16+</span>
              <span className="stat-label">Components</span>
            </div>
            <div className="stat">
              <span className="stat-number">80+</span>
              <span className="stat-label">Design Tokens</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Type Safe</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-cards">
            <div className="hero-card">
              <Badge variant="success">Alert</Badge>
            </div>
            <div className="hero-card">
              <Badge variant="warning">Button</Badge>
            </div>
            <div className="hero-card">
              <Badge variant="error">Input</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <h2>Everything You Need</h2>
          <p>Comprehensive components and design system</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Carefully crafted components with a modern, professional aesthetic built on proven design principles.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Performance</h3>
            <p>Optimized components with minimal bundle size and CSS Modules for zero style conflicts.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Type Safe</h3>
            <p>Complete TypeScript support with full type safety and IDE autocomplete for all props.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">♿</div>
            <h3>Accessible</h3>
            <p>WCAG compliant components with proper ARIA attributes and keyboard navigation.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Consistent</h3>
            <p>Unified design system with 80+ tokens ensuring consistency across your application.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Easy Integration</h3>
            <p>Single import point, extensible props, and ref forwarding for seamless integration.</p>
          </div>
        </div>
      </section>

      {/* Components Showcase */}
      <section className="showcase">
        <div className="section-header">
          <h2>Component Library</h2>
          <p>16 production-ready components ready to use</p>
        </div>

        <div className="components-showcase">
          <div className="showcase-item">
            <h4>UI Elements</h4>
            <p>Button, Badge, Alert, Avatar</p>
          </div>
          <div className="showcase-item">
            <h4>Forms</h4>
            <p>Input, CheckBox, Toggle, Calendar</p>
          </div>
          <div className="showcase-item">
            <h4>Cards</h4>
            <p>PriceCard, ProgressCard, CardCheck</p>
          </div>
          <div className="showcase-item">
            <h4>Advanced</h4>
            <p>Table, MenuItem, Dialog, Notifications</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the perfect plan for your team</p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">0</span>
              <span className="period">/month</span>
            </div>
            <p className="description">Perfect for trying out</p>
            <ul className="features-list">
              <li>✓ 16 Components</li>
              <li>✓ Basic Support</li>
              <li>✓ MIT License</li>
              <li>✗ Priority Support</li>
              <li>✗ Custom Tokens</li>
            </ul>
            <Button variant="outline" size="lg" style={{width: '100%'}}>Get Started</Button>
          </div>

          <div className="pricing-card featured">
            <div className="badge-featured">Most Popular</div>
            <h3>Professional</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">29</span>
              <span className="period">/month</span>
            </div>
            <p className="description">Best for growing products</p>
            <ul className="features-list">
              <li>✓ 16 Components</li>
              <li>✓ Priority Support</li>
              <li>✓ Custom Tokens</li>
              <li>✓ Design System Access</li>
              <li>✓ Live Updates</li>
            </ul>
            <Button variant="primary" size="lg" style={{width: '100%'}}>Start Trial</Button>
          </div>

          <div className="pricing-card">
            <h3>Enterprise</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">99</span>
              <span className="period">/month</span>
            </div>
            <p className="description">For large-scale applications</p>
            <ul className="features-list">
              <li>✓ All Features</li>
              <li>✓ Dedicated Support</li>
              <li>✓ Custom Components</li>
              <li>✓ White Label</li>
              <li>✓ SLA Guarantee</li>
            </ul>
            <Button variant="outline" size="lg" style={{width: '100%'}}>Contact Sales</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Join thousands of developers building with ComponentFlow</p>
          <form onSubmit={handleSubscribe} className="email-form">
            <Input 
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              style={{flex: 1}}
            />
            <Button variant="primary" type="submit">Subscribe</Button>
          </form>
          {subscribed && (
            <p className="success-message">✓ Thanks for subscribing!</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#components">Components</a>
            <a href="#docs">Documentation</a>
            <a href="#changelog">Changelog</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 ComponentFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
