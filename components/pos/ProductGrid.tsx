"use client";
import styles from "./ProductGrid.module.css";
import ProductCard from "./ProductCard";
import { Product } from "@/types/pos";

interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={onAddToCart}
                />
            ))}
        </div>
    );
}