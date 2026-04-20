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
import { ActionMenu } from "../components/ActionMenu/ActionMenu";
import { AvatarMobile } from "../components/AvatarMobile/AvatarMobile";
import { CaptionWarning } from "../components/CaptionWarning/CaptionWarning";
import { CheckBox } from "../components/CheckBox/CheckBox";
import { EmailAlert } from "../components/EmailAlert/EmailAlert";
import { FormAlert } from "../components/FormAlert/FormAlert";
import { IconText } from "../components/IconText/IconText";
import { PriceCardSmall } from "../components/PriceCardSmall/PriceCardSmall";
import { Toggle } from "../components/Toggle/Toggle";
import { RadioButtons } from "../components/RadioButtons/RadioButtons";
import { QuestionButton } from "../components/QuestionButton/QuestionButton";
import { InputCheck } from "../components/InputCheck/InputCheck";
import { ContenidoDeTabla } from "../components/ContenidoDeTabla/ContenidoDeTabla";
import { TablaDeSeleccion } from "../components/TablaDeSeleccion/TablaDeSeleccion";

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

            <Section title="New Batch Components">
                <div style={{ display: "grid", gap: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px", alignItems: "start" }}>
                        <FormAlert textAlert="Participación diferente de lo esperado" />
                        <EmailAlert name="Daniela Perez" email="daniela1.perez2@xxx.co" />
                        <CaptionWarning caption="Debes completar las preguntas (*)" />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", alignItems: "start" }}>
                        <IconText text="C.C 1130618976 Gaiman, Argentina" />
                        <PriceCardSmall productName="Adhesivo Aquence" price="$120.000" />
                        <ActionMenu editLabel="Editar" deleteLabel="Eliminar" />
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                        <CheckBox defaultChecked={false} />
                        <CheckBox defaultChecked={true} />
                        <Toggle defaultChecked={false} />
                        <Toggle defaultChecked={true} />
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
                        <AvatarMobile size="18" content="text" avatarText="AA" showBadge />
                        <AvatarMobile size="24" content="image" showBadge />
                        <AvatarMobile size="32" content="text" avatarText="AA" showBadge />
                        <AvatarMobile size="40" content="image" showBadge />
                        <AvatarMobile size="92" content="text" avatarText="AA" showBadge />
                    </div>
                </div>
            </Section>

            <Section title="Selection Components">
                <div style={{ display: "grid", gap: "20px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                        <RadioButtons defaultChecked={false} />
                        <RadioButtons defaultChecked />
                        <InputCheck label="Input" controlType="round" defaultChecked />
                        <InputCheck label="Input" controlType="check" defaultChecked={false} />
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
                        <QuestionButton defaultActive={false} />
                        <QuestionButton defaultActive />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px", alignItems: "start" }}>
                        <ContenidoDeTabla mode="radio" />
                        <ContenidoDeTabla mode="checkbox" />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "20px", alignItems: "start" }}>
                        <TablaDeSeleccion mode="radio" />
                        <TablaDeSeleccion mode="checkbox" title="selecciona multiples respuestas" />
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default ShowcaseScreen;