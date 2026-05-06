"use client";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
    onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    return (
        <div className={styles.wrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input
                type="text"
                placeholder="Buscar producto po..."
                className={styles.input}
                onChange={(e) => onSearch?.(e.target.value)}
            />
            <button className={styles.micBtn}>🎤</button>
        </div>
    );
}