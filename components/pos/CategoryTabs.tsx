"use client";
import styles from "./CategoryTabs.module.css";
import { CategoryTab } from "@/types/pos";

const TABS: CategoryTab[] = ["Más vendidos", "Favoritos", "Granel"];

interface CategoryTabsProps {
    active: CategoryTab;
    onChange: (tab: CategoryTab) => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.tabs}>
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tab} ${active === tab ? styles.active : ""}`}
                        onClick={() => onChange(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <button className={styles.addBtn}>
                <span>+</span>
            </button>
        </div>
    );
}