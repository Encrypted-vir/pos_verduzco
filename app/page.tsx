"use client";
import { useState } from "react";
import styles from "./page.module.css";

import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/pos/TopBar";
import CategoryTabs from "@/components/pos/CategoryTabs";
import ProductGrid from "@/components/pos/ProductGrid";
import CartPanel from "@/components/pos/CartPanel";

import { mockProducts } from "@/data/mockProducts";
import { CartItem, CategoryTab, Product } from "@/types/pos";

export default function POSPage() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("Más vendidos");
  const [activeCart, setActiveCart] = useState(0);

  // Each cart has its own items array
  const [carts, setCarts] = useState<CartItem[][]>([[], [], []]);

  const currentItems = carts[activeCart];

  function addToCart(product: Product) {
    setCarts((prev) => {
      const updated = [...prev];
      const cart = [...updated[activeCart]];
      const existing = cart.findIndex((i) => i.product.id === product.id);

      if (existing >= 0) {
        cart[existing] = { ...cart[existing], quantity: cart[existing].quantity + 1 };
      } else {
        cart.push({ product, quantity: 1 });
      }

      updated[activeCart] = cart;
      return updated;
    });
  }

  function clearCart() {
    setCarts((prev) => {
      const updated = [...prev];
      updated[activeCart] = [];
      return updated;
    });
  }

  function handleCharge() {
    alert(`Cobrando $${currentItems.reduce((s, i) => s + i.product.price * i.quantity, 0).toFixed(2)}`);
  }

  return (
    <div className={styles.appShell}>
      {/* Left sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className={styles.main}>
        {/* Top bar */}
        <TopBar />

        {/* Center + Right */}
        <div className={styles.body}>
          {/* Product panel */}
          <div className={styles.productPanel}>
            <CategoryTabs active={activeTab} onChange={setActiveTab} />
            <ProductGrid products={mockProducts} onAddToCart={addToCart} />
          </div>

          {/* Cart panel */}
          <CartPanel
            activeCart={activeCart}
            onChangeCart={setActiveCart}
            items={currentItems}
            onClear={clearCart}
            onCharge={handleCharge}
          />
        </div>
      </div>
    </div>
  );
}