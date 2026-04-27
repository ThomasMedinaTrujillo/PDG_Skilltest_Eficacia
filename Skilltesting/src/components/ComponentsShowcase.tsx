import { ProductCard } from "./ProductCard/ProductCard";
import { ProgressCard } from "./ProgressCard/ProgressCard";
import { tokens } from "../Token";

export default function ComponentsShowcase() {
  return (
    <div style={{ padding: "40px", backgroundColor: tokens.colors.backgroundPrimary, minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "40px", color: tokens.colors.primary }}>Component Showcase</h1>

      {/* ProductCard Variants */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "20px", fontWeight: 600, color: tokens.colors.primary }}>
          ProductCard Variants
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "20px" }}>
          <div>
            <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Product</h3>
            <ProductCard variant="product" />
          </div>

          <div>
            <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Price Card</h3>
            <ProductCard variant="price-card" />
          </div>

          <div>
            <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Little Card</h3>
            <ProductCard variant="little-card" />
          </div>

          <div>
            <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Type 5</h3>
            <ProductCard variant="type5" />
          </div>

          <div>
            <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Type 6</h3>
            <ProductCard variant="type6" />
          </div>

          <div>
            <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Floating</h3>
            <ProductCard variant="floating" />
          </div>
        </div>
      </section>

      {/* ProgressCard Variants */}
      <section>
        <h2 style={{ marginBottom: "20px", fontSize: "20px", fontWeight: 600, color: tokens.colors.primary }}>
          ProgressCard
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "20px" }}>
          <div>
            <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Default (65%)</h3>
            <ProgressCard percent={65} />
          </div>

          <div>
            <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>High Progress (90%)</h3>
            <ProgressCard percent={90} status="green" />
          </div>

          <div>
            <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Warning (50%)</h3>
            <ProgressCard percent={50} status="yellow" />
          </div>

          <div>
            <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Without Percent Display</h3>
            <ProgressCard percent={45} showPercent={false} />
          </div>

          <div>
            <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Compact (No Title)</h3>
            <ProgressCard showTitle={false} />
          </div>
        </div>
      </section>
    </div>
  );
}
