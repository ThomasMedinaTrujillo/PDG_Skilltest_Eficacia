import './ComponentsShowcase.css'
import { Badge } from './Badge/Badge';
import { Button } from './Button/Button';
import { Checkbox } from './Checkbox/Checkbox';
import { Input } from './Input/Input';
import { Menu } from './Menu/Menu';
import { Message } from './Message/Message';
import { Popover } from './Popover/Popover';
import { Statistic } from './Statistic/Statistic';
import { Steps } from './Steps/Steps';
import { Switch } from './Switch/Switch';
import { Upload } from './Upload/Upload';

export default function ComponentsShowcase() {
  return (
    <main className="components-showcase">
      <header className="showcase-header">
        <span>Ant Design System</span>
        <h1>Extracted Components</h1>
      </header>

      <section className="showcase-section">
        <h2>Button</h2>
        <div className="showcase-row">
          <Button type="primary">Button</Button>
          <Button>Button</Button>
          <Button type="dashed">Button</Button>
          <Button type="text">Button</Button>
          <Button type="link">Button</Button>
          <Button type="primary" danger>Button</Button>
          <Button size="small">Button</Button>
          <Button size="large">Button</Button>
          <Button disabled>Button</Button>
        </div>
      </section>

      <section className="showcase-section">
        <h2>Input</h2>
        <div className="showcase-grid">
          <Input placeholder="Input" />
          <Input status="error" placeholder="Error" />
          <Input status="warning" placeholder="Warning" />
          <Input status="success" placeholder="Success" />
          <Input size="small" placeholder="Small" />
          <Input size="large" placeholder="Large" />
          <Input prefix="https://" suffix=".com" defaultValue="ant.design" />
          <Input disabled placeholder="Disabled" />
        </div>
      </section>

      <section className="showcase-section">
        <h2>Checkbox & Badge</h2>
        <div className="showcase-row">
          <Checkbox defaultChecked label="Checkbox" />
          <Checkbox label="Checkbox" />
          <Checkbox indeterminate label="Checkbox" />
          <Checkbox disabled label="Checkbox" />
        </div>
        <div className="showcase-row">
          <Badge status="success" />
          <Badge status="error" />
          <Badge status="default" />
          <Badge status="processing" />
          <Badge status="warning" />
        </div>
      </section>

      <section className="showcase-section">
        <h2>Message</h2>
        <div className="showcase-row">
          <Message />
          <Message type="warning" />
          <Message type="success" />
          <Message type="error" />
          <Message type="loading" />
        </div>
      </section>

      <section className="showcase-section">
        <h2>Switch</h2>
        <div className="showcase-row">
          <Switch defaultChecked />
          <Switch />
          <Switch size="small" defaultChecked />
          <Switch type="number" checkedChildren="1" unCheckedChildren="0" defaultChecked />
          <Switch state="loading" defaultChecked />
          <Switch state="disabled" />
        </div>
      </section>

      <section className="showcase-section">
        <h2>Upload</h2>
        <div className="showcase-grid">
          <Upload />
        </div>
      </section>

      <section className="showcase-section">
        <h2>Menu</h2>
        <div className="showcase-row">
          <Menu />
        </div>
      </section>

      <section className="showcase-section">
        <h2>Steps</h2>
        <div className="showcase-grid">
          <Steps />
        </div>
      </section>

      <section className="showcase-section">
        <h2>Popover</h2>
        <div className="showcase-row showcase-row--popover">
          <Popover placement="top" title="Title" content="Top placement" />
          <Popover placement="bottom" title="Title" content="Bottom placement" />
          <Popover placement="right" title="Title" content="Right placement" />
        </div>
      </section>

      <section className="showcase-section">
        <h2>Statistic</h2>
        <div className="showcase-row">
          <Statistic />
          <Statistic type="up" />
          <Statistic type="down" />
        </div>
      </section>
    </main>
  );
}
