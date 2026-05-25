
import { Button } from "./Button";
import { Input } from "./Input";
import { Checkbox } from "./Checkbox";
import { Badge } from "./Badge";
import { Message } from "./Message";
import { Statistic } from "./Statistic";
import "./ComponentsShowcase.css";


export default function ComponentsShowcase() {
  return (
    <main className="components-showcase">
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="dashed">Dashed</Button>
          <Button variant="text">Text</Button>
          <Button variant="link">Link</Button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="default">Default</Button>
          <Button variant="primary" size="large">Large</Button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" danger>Danger Primary</Button>
          <Button variant="default" danger>Danger Default</Button>
          <Button variant="primary" ghost style={{ background: '#002329' }}>Ghost Primary</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <h2>Inputs</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
          <Input placeholder="Default Input" />
          <Input status="success" placeholder="Success Input" />
          <Input status="warning" placeholder="Warning Input" />
          <Input status="error" placeholder="Error Input" />
          <Input disabled placeholder="Disabled Input" />
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Input size="small" placeholder="Small" />
          <Input size="default" placeholder="Default" />
          <Input size="large" placeholder="Large" />
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <h2>Checkbox</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Checkbox>Default</Checkbox>
          <Checkbox defaultChecked>Checked</Checkbox>
          <Checkbox indeterminate>Indeterminate</Checkbox>
          <Checkbox disabled>Disabled</Checkbox>
          <Checkbox disabled defaultChecked>Disabled Checked</Checkbox>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <h2>Badge</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Badge status="success" text="Success" />
          <Badge status="error" text="Error" />
          <Badge status="default" text="Default" />
          <Badge status="processing" text="Processing" />
          <Badge status="warning" text="Warning" />
        </div>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <Badge type="dot">
            <div style={{ width: 40, height: 40, background: '#eee', borderRadius: 4 }} />
          </Badge>
          <Badge type="default" text="5">
            <div style={{ width: 40, height: 40, background: '#eee', borderRadius: 4 }} />
          </Badge>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <h2>Message</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
          <Message type="normal">Normal message text here</Message>
          <Message type="success">Success message text here</Message>
          <Message type="warning">Warning message text here</Message>
          <Message type="error">Error message text here</Message>
          <Message type="loading">Loading message text here</Message>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <h2>Statistic</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <Statistic title="Active Users" value="112,893" type="basic" />
          <Statistic title="Revenue" value="$12,045" type="up" />
          <Statistic title="Bounce Rate" value="1.2%" type="down" />
        </div>
      </section>
    </main>
  );
}
