import "../components/ComponentsShowcase.css";
import "./WorkspaceCreationScreen.css";
import { Button } from "../components/Button/Button";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { Input } from "../components/Input/Input";
import { Menu, type MenuItem } from "../components/Menu/Menu";
import { Steps } from "../components/Steps/Steps";
import { Upload } from "../components/Upload/Upload";

const workspaceMenuItems: MenuItem[] = [
  { key: "overview", label: "Overview", icon: "mail" },
  { key: "team", label: "Team & Roles", icon: "mail" },
  {
    key: "documents",
    label: "Documents",
    icon: "mail",
    children: [
      { key: "business-registration", label: "Business Registration" },
      { key: "tax-information", label: "Tax Information" },
      { key: "supporting-files", label: "Supporting Files" },
    ],
  },
  { key: "review", label: "Review", icon: "mail" },
  { key: "submit", label: "Submit", icon: "mail" },
];

const setupSteps = [
  {
    title: "Workspace Details",
    description: "Complete basic configuration",
    status: "finish" as const,
  },
  {
    title: "Setup Information",
    description: "Add ownership and project details",
    status: "process" as const,
  },
  {
    title: "Upload Documents",
    description: "Attach supporting files",
    status: "wait" as const,
  },
  {
    title: "Review & Submit",
    description: "Confirm and finalize submission",
    status: "wait" as const,
  },
];

export default function WorkspaceCreationScreen() {
  return (
    <main className="components-showcase workspace-screen" data-node-id="995:5292">
      <Menu
        className="workspace-screen__menu"
        items={workspaceMenuItems}
        selectedKey="overview"
        defaultOpenKeys={["documents"]}
        logo="Company"
      />

      <section className="workspace-screen__content" aria-labelledby="workspace-title">
        <form className="workspace-screen__form">
          <header className="workspace-screen__header">
            <h1 id="workspace-title">Create a New Workspace</h1>
            <p>Set up your workspace information and upload the required documentation to continue.</p>
          </header>

          <label className="workspace-screen__field">
            <span>Workspace name</span>
            <Input defaultValue="Acme Growth Dashboard" aria-label="Workspace name" />
          </label>

          <label className="workspace-screen__field">
            <span>Project owner</span>
            <Input placeholder="Enter full name" aria-label="Project owner" />
          </label>

          <section className="workspace-screen__field" aria-labelledby="supporting-documents">
            <span id="supporting-documents">Supporting documents</span>
            <p>Upload relevant files such as contracts, screenshots, reports, or supporting documentation.</p>
            <Upload />
          </section>

          <Checkbox label="I confirm all workspace information is accurate." />

          <footer className="workspace-screen__actions">
            <Button>Save as draft</Button>
            <Button type="primary">Continue</Button>
          </footer>
        </form>

        <aside className="workspace-screen__steps" aria-label="Workspace setup progress">
          <Steps items={setupSteps} current={1} />
        </aside>
      </section>
    </main>
  );
}
