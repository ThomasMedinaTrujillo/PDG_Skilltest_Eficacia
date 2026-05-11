

import React from 'react';
import { tokens } from '../Token';
import Alert from './Alert';
import Input from './Input';
import MenuBar from './MenuBar';
import MobileButton from './MobileButton';
import PrincipalMenu from './PrincipalMenu';

export default function ComponentsShowcase() {
  return (
    <div style={{ padding: tokens.spacing.lg, fontFamily: tokens.typography.body1.fontFamily }}>
      <h1 style={{ 
        fontSize: tokens.typography.text3xl.fontSize, 
        fontWeight: tokens.typography.text3xl.fontWeight,
        marginBottom: tokens.spacing.lg,
        color: tokens.colors.primary 
      }}>
        Components Showcase
      </h1>

      {/* Alert Components */}
      <section style={{ marginBottom: tokens.spacing.xl }}>
        <h2 style={{ 
          fontSize: tokens.typography.text2xl.fontSize, 
          marginBottom: tokens.spacing.md,
          color: tokens.colors.dark 
        }}>
          Alert Components
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.md }}>
          <Alert style="default" textAlert="Default alert message" />
          <Alert style="success" textAlert="Success! Operation completed" />
          <Alert style="warning" textAlert="Warning! Please review" />
          <Alert style="pending" textAlert="Pending: Processing..." />
        </div>
      </section>

      {/* Input Components */}
      <section style={{ marginBottom: tokens.spacing.xl }}>
        <h2 style={{ 
          fontSize: tokens.typography.text2xl.fontSize, 
          marginBottom: tokens.spacing.md,
          color: tokens.colors.dark 
        }}>
          Input Components
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
          <Input 
            labelText="Name" 
            placeholder="Enter your name"
            state="enable"
            type="textfield"
          />
          <Input 
            labelText="Email" 
            placeholder="Enter your email"
            state="selected"
            type="textfield"
            value="user@example.com"
          />
          <Input 
            labelText="Message" 
            placeholder="Type your message"
            state="error"
            type="multiline"
            alert={true}
          />
        </div>
      </section>

      {/* Menu Bar Components */}
      <section style={{ marginBottom: tokens.spacing.xl }}>
        <h2 style={{ 
          fontSize: tokens.typography.text2xl.fontSize, 
          marginBottom: tokens.spacing.md,
          color: tokens.colors.dark 
        }}>
          Menu Bar Components
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
          <MenuBar items={3} />
          <MenuBar items={4} />
          <MenuBar items={5} />
        </div>
      </section>

      {/* Mobile Button Components */}
      <section style={{ marginBottom: tokens.spacing.xl }}>
        <h2 style={{ 
          fontSize: tokens.typography.text2xl.fontSize, 
          marginBottom: tokens.spacing.md,
          color: tokens.colors.dark 
        }}>
          Mobile Button Components
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
          <MobileButton 
            size="small" 
            style="contained" 
            color="primary"
            label="Primary Button"
          />
          <MobileButton 
            size="small" 
            style="outline" 
            color="primary"
            label="Outline Button"
          />
          <MobileButton 
            size="medium" 
            style="text" 
            color="error"
            label="Error Button"
          />
          <MobileButton 
            size="small" 
            style="contained" 
            color="primary"
            label="With Icons"
            showIconStart={true}
            showIconEnd={true}
          />
        </div>
      </section>

      {/* Principal Menu Components */}
      <section style={{ marginBottom: tokens.spacing.xl }}>
        <h2 style={{ 
          fontSize: tokens.typography.text2xl.fontSize, 
          marginBottom: tokens.spacing.md,
          color: tokens.colors.dark 
        }}>
          Principal Menu Components
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing.lg }}>
          <PrincipalMenu variant="header" />
          <div style={{ marginTop: tokens.spacing.lg }}>
            <PrincipalMenu variant="floating" showItems={false} />
          </div>
        </div>
      </section>

      {/* Token Information */}
      <section style={{ 
        marginTop: tokens.spacing.xxl,
        padding: tokens.spacing.lg,
        backgroundColor: tokens.colors.bgGray,
        borderRadius: tokens.radius.md
      }}>
        <h2 style={{ 
          fontSize: tokens.typography.text2xl.fontSize, 
          marginBottom: tokens.spacing.md,
          color: tokens.colors.primary 
        }}>
          Design Tokens Used
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: tokens.spacing.md
        }}>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: tokens.spacing.xs }}>Colors</h4>
            <ul style={{ margin: 0, paddingLeft: tokens.spacing.lg }}>
              <li>Primary: {tokens.colors.primary}</li>
              <li>White: {tokens.colors.white}</li>
              <li>Error: {tokens.colors.error}</li>
              <li>Success: #3bd4ae</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: tokens.spacing.xs }}>Typography</h4>
            <ul style={{ margin: 0, paddingLeft: tokens.spacing.lg }}>
              <li>Body: {tokens.typography.body1.fontSize}</li>
              <li>Small: {tokens.typography.textSm.fontSize}</li>
              <li>Large: {tokens.typography.textLg.fontSize}</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: tokens.spacing.xs }}>Spacing</h4>
            <ul style={{ margin: 0, paddingLeft: tokens.spacing.lg }}>
              <li>Small: {tokens.spacing.sm}</li>
              <li>Medium: {tokens.spacing.md}</li>
              <li>Large: {tokens.spacing.lg}</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: tokens.spacing.xs }}>Shadows</h4>
            <ul style={{ margin: 0, paddingLeft: tokens.spacing.lg }}>
              <li>Component: {tokens.shadows.component}</li>
              <li>Medium: {tokens.shadows.md}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
