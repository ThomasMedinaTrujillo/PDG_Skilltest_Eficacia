
import { 
  Alert, Avatar, Badge, Button, CheckBox, Input, Toggle, 
  PriceCard, ProgressCard, Table, MenuItem, Calendar 
} from './components'
import './SimplePage.css'

export function SimplePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agree: false,
    notifications: true
  })

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="simple-page">
      {/* Header */}
      <header className="header">
        <h1>Component Library Demo</h1>
        <p>Beautiful, production-ready React components</p>
      </header>

      {/* Main Grid */}
      <main className="grid">
        {/* Left Column - Form Section */}
        <section className="card">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit} className="form">
            <Input 
              label="Name" 
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <Input 
              label="Email" 
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <Toggle 
              label="Enable notifications"
              checked={formData.notifications}
              onChange={(e) => setFormData({...formData, notifications: e.target.checked})}
            />
            <CheckBox 
              label="I agree to terms"
              checked={formData.agree}
              onChange={(e) => setFormData({...formData, agree: e.target.checked})}
            />
            <Button variant="primary" type="submit" style={{width: '100%'}}>Submit</Button>
          </form>
        </section>

        {/* Right Column - Status Section */}
        <section className="card">
          <h2>Status Alerts</h2>
          <Alert variant="success" message="✓ Everything is working!" showIcon />
          <Alert variant="warning" message="⚠ Please review settings" showIcon />
          <Alert variant="error" message="✗ An error occurred" showIcon />
        </section>

        {/* Buttons Section */}
        <section className="card">
          <h2>Button Variants</h2>
          <div className="button-grid">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="error">Error</Button>
          </div>
        </section>

        {/* Badges Section */}
        <section className="card">
          <h2>Status Badges</h2>
          <div className="badge-grid">
            <Badge variant="success">Active</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="error">Inactive</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </section>

        {/* Avatars Section */}
        <section className="card">
          <h2>User Avatars</h2>
          <div className="avatar-grid">
            <div className="avatar-item">
              <Avatar size="lg" initials="JD" />
              <span>John Doe</span>
            </div>
            <div className="avatar-item">
              <Avatar size="lg" initials="AS" />
              <span>Alice Smith</span>
            </div>
            <div className="avatar-item">
              <Avatar size="lg" initials="MJ" />
              <span>Mike Johnson</span>
            </div>
          </div>
        </section>

        {/* Progress Cards */}
        <section className="card">
          <h2>Project Progress</h2>
          <ProgressCard title="Design" subtitle="50% Complete" percentage={50} color="primary" />
          <ProgressCard title="Development" subtitle="75% Complete" percentage={75} color="success" />
          <ProgressCard title="Testing" subtitle="25% Complete" percentage={25} color="warning" />
        </section>

        {/* Pricing Cards */}
        <section className="card">
          <h2>Pricing Plans</h2>
          <div className="pricing-grid">
            <PriceCard title="Starter" price="$29" />
            <PriceCard title="Pro" price="$79" />
            <PriceCard title="Enterprise" price="$299" />
          </div>
        </section>

        {/* Table */}
        <section className="card" style={{gridColumn: '1 / -1'}}>
          <h2>Recent Orders</h2>
          <Table striped>
            <thead>
              <Table.Row isHeader>
                <Table.Cell isHeader>Product</Table.Cell>
                <Table.Cell isHeader textAlign="center">Quantity</Table.Cell>
                <Table.Cell isHeader textAlign="right">Price</Table.Cell>
              </Table.Row>
            </thead>
            <tbody>
              <Table.Row>
                <Table.Cell>Adhesivo Aquence</Table.Cell>
                <Table.Cell textAlign="center">2</Table.Cell>
                <Table.Cell textAlign="right">$240.000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Sellador Epóxico</Table.Cell>
                <Table.Cell textAlign="center">1</Table.Cell>
                <Table.Cell textAlign="right">$85.500</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Pintura Antihumedal</Table.Cell>
                <Table.Cell textAlign="center">3</Table.Cell>
                <Table.Cell textAlign="right">$735.000</Table.Cell>
              </Table.Row>
            </tbody>
          </Table>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Component Library. Built with React + TypeScript.</p>
      </footer>
    </div>
  )
}

import { useState } from 'react'
export default SimplePage
