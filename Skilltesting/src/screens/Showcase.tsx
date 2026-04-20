import type { CSSProperties, ReactNode } from "react";
import { AlertsState } from "../components/AlertsState/AlertsState";
import { CardCheck } from "../components/CardCheck/CardCheck";
import { CheckBoxStatus } from "../components/CheckBoxStatus/CheckBoxStatus";
import { DropdownCard } from "../components/DropdownCard/DropdownCard";
import { Input } from "../components/Input/Input";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { MobileButtons } from "../components/MobileButtons/MobileButtons";
import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import { PrincipalMenuMenuItem } from "../components/PrincipalMenuMenuItem/PrincipalMenuMenuItem";

const pageStyle: CSSProperties = {
    minHeight: "100vh",
    padding: "32px",
    background:
        "radial-gradient(circle at top left, rgba(0,65,163,0.2), transparent 28%), linear-gradient(180deg, #111 0%, #1a1a1a 100%)",
    color: "#fff",
    fontFamily: "Solomon Sans, sans-serif",
};

const sectionStyle: CSSProperties = {
    marginBottom: "32px",
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(8px)",
};

const gridStyle: CSSProperties = {
    display: "grid",
    gap: "16px",
};

function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section style={sectionStyle}>
            <h2 style={{ margin: "0 0 16px", fontSize: "18px", fontWeight: 700 }}>{title}</h2>
            {children}
        </section>
    );
}

function ShowcaseScreen() {
    const buttonCombos = [
        { size: "small", color: "primary", state: "active", styleType: "contained", orientation: "center" },
        { size: "small", color: "primary", state: "active", styleType: "outline", orientation: "center" },
        { size: "small", color: "primary", state: "active", styleType: "text", orientation: "center" },
        { size: "small", color: "primary", state: "pressed", styleType: "contained", orientation: "left" },
        { size: "small", color: "error", state: "active", styleType: "contained", orientation: "center" },
        { size: "small", color: "error", state: "active", styleType: "outline", orientation: "center" },
        { size: "small", color: "error", state: "active", styleType: "text", orientation: "center" },
        { size: "small", color: "error", state: "pressed", styleType: "contained", orientation: "left" },
        { size: "medium", color: "primary", state: "active", styleType: "contained", orientation: "center" },
        { size: "medium", color: "primary", state: "active", styleType: "outline", orientation: "left" },
        { size: "medium", color: "primary", state: "pressed", styleType: "text", orientation: "center" },
        { size: "medium", color: "error", state: "disable", styleType: "contained", orientation: "center" },
    ] as const;

    return (
        <main style={pageStyle}>
            <h1 style={{ margin: "0 0 24px", fontSize: "28px", fontWeight: 800 }}>Showcase</h1>

            <Section title="Principal Menu">
                <div style={{ ...gridStyle, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
                    <PrincipalMenu mode="header" />
                    <PrincipalMenu mode="floating" />
                </div>
            </Section>

            <Section title="Menu Bar">
                <div style={{ ...gridStyle, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    <MenuBar items={3} />
                    <MenuBar items={4} />
                    <MenuBar items={5} />
                </div>
            </Section>

            <Section title="Mobile Buttons">
                <div style={{ display: "grid", gap: "24px" }}>
                    <div style={{ display: "grid", gap: "12px" }}>
                        <h3 style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>All variants</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "12px" }}>
                            {buttonCombos.map((combo) => (
                                <MobileButtons
                                    key={`${combo.size}-${combo.color}-${combo.state}-${combo.styleType}-${combo.orientation}`}
                                    size={combo.size}
                                    color={combo.color}
                                    state={combo.state}
                                    styleType={combo.styleType}
                                    orientation={combo.orientation}
                                    leftIcon={combo.orientation === "left" ? "←" : undefined}
                                    rightIcon="→"
                                    disabled={combo.state === "disable"}
                                >
                                    button
                                </MobileButtons>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="Alerts State">
                <div style={{ ...gridStyle, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
                    <AlertsState styleType="default" textAlert="Estado" />
                    <AlertsState styleType="success" textAlert="Estado" />
                    <AlertsState styleType="pending" textAlert="Estado" />
                    <AlertsState styleType="warning" textAlert="Estado" />
                </div>
            </Section>

            <Section title="Dropdown Card">
                <div style={{ ...gridStyle, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
                    <DropdownCard state="card-close" />
                    <DropdownCard state="card-open" />
                    <DropdownCard/>
                </div>
            </Section>

            <Section title="Inputs">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
                    <Input state="enable" type="textfield" />
                    <Input state="enable" type="multiline" />
                    <Input state="selected" type="textfield"  />
                    <Input
                        state="selected"
                        type="multiline"
                        
                    />
                    <Input state="error" type="textfield" />
                    <Input state="error" type="multiline" />
                </div>
            </Section>

            <Section title="Card Check">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }}>
                    <CardCheck state="enabled" checked={false} />
                    <CardCheck state="disabled" checked={true} />
                    <CardCheck state="prueba" checked={false} />
                </div>
            </Section>

            <Section title="Checkbox Status">
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <CheckBoxStatus status="add" />
                    <CheckBoxStatus status="remove" />
                </div>
            </Section>

            <Section title="Menu Item">
                <div style={{ display: "grid", gap: "12px", maxWidth: "360px" }}>
                    <PrincipalMenuMenuItem itemMenuText="Text" />
                    <PrincipalMenuMenuItem itemMenuText="Text" active leftIcon="↩" />
                </div>
            </Section>
        </main>
    );
}

export default ShowcaseScreen;