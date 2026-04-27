import * as React from "react";
import { CardCheck } from "../components/CardCheck/CardCheck";
import { tokens } from "../Token";

export default function CardCheckDemoScreen() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: tokens.colors.backgroundPrimary,
        padding: tokens.spacing.lg,
      }}
    >
      <CardCheck
        title="Categoria 1"
        subTitle="label"
        label="| TQ"
        number="2"
        state="enabled"
        checked={checked}
        onCheckedChange={setChecked}
      />
    </div>
  );
}
