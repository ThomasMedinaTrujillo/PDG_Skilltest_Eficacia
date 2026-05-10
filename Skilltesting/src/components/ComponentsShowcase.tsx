import { MobileButtons } from './MobileButtons';
import { Input } from './Input';
import { AlertsState } from './AlertsState';
import { PrincipalMenu } from './PrincipalMenu';
import { MenuBar } from './MenuBar';

export default function ComponentsShowcase() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '4rem', fontFamily: 'var(--sans)', background: 'var(--background-primary)' }}>
      <h1>Components Showcase</h1>
      
      <section>
        <h2>Mobile Buttons</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <MobileButtons label="Primary Contained" btnStyle="Contained" color="Primary" />
          <MobileButtons label="Primary Outline" btnStyle="Outline" color="Primary" />
          <MobileButtons label="Primary Text" btnStyle="Text" color="Primary" />
          <MobileButtons label="Error Contained" btnStyle="Contained" color="Error" />
          <MobileButtons label="Error Outline" btnStyle="Outline" color="Error" />
          <MobileButtons label="Disabled" btnState="disable" />
          <MobileButtons label="With Start Icon" iconStart="★" showIconStart />
          <MobileButtons label="With End Icon" iconEnd="➔" showIconEnd />
          <MobileButtons label="Large Full Width" size="Medium" orientation="left" iconEnd="➔" showIconEnd style={{ width: '100%' }} />
        </div>
      </section>

      <section>
        <h2>Input Fields</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '400px' }}>
          <Input labelText="Standard Input" inputType="TextField" placeholder="Type here..." />
          <Input labelText="Selected Input" inputType="TextField" state="Selected" value="User typed value" />
          <Input labelText="Error Input" inputType="TextField" state="Error" value="Invalid input" />
          <Input labelText="With Alert" inputType="TextField" alert={true} alertText="Attention needed here" />
          <Input labelText="With Icon" inputType="TextField" icon={true} selectIcon="★" />
          <Input labelText="Multiline text area" inputType="Multiline" placeholder="Enter long text..." />
        </div>
      </section>

      <section>
        <h2>Alerts State</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <AlertsState alertStyle="Default" textAlert="Default Information Message" />
          <AlertsState alertStyle="Succes" textAlert="Operation Completed Successfully!" />
          <AlertsState alertStyle="Pending" textAlert="Pending Action Required" />
          <AlertsState alertStyle="Warning" textAlert="Warning: Something is wrong" />
        </div>
      </section>

      <section>
        <h2>Menu Bar</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h3>3 Items</h3>
            <MenuBar items="3" activeItem="Inicio" />
          </div>
          <div>
            <h3>4 Items</h3>
            <MenuBar items="4" activeItem="Agenda" />
          </div>
          <div>
            <h3>5 Items</h3>
            <MenuBar items="5" activeItem="Perfil" />
          </div>
        </div>
      </section>

      <section>
        <h2>Principal Menu</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start' }}>
          <div style={{ width: '375px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
            <h3>Header Variant</h3>
            <PrincipalMenu variant="Header" />
          </div>
          <div style={{ width: '375px', border: '1px solid #ccc', height: '600px', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <h3 style={{ position: 'absolute', zIndex: 10, background: 'white', padding: '4px', right: 0 }}>Floating Variant</h3>
            <PrincipalMenu variant="floating" />
          </div>
        </div>
      </section>
    </div>
  );
}
