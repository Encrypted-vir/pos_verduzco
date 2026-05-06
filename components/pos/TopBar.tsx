"use client";
import styles from "./TopBar.module.css";
import SearchBar from "@/components/ui/SearchBar";

function formatDate(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} | ${hours}:${minutes}`;
}

export default function TopBar() {
    return (
        <header className={styles.topbar}>
            <SearchBar />

            <div className={styles.meta}>
                <span className={styles.datetime}>{formatDate()}</span>
                <span className={styles.separator}>🖥️</span>
                <span className={styles.sessionId}>ID 265037</span>
            </div>

            <div className={styles.actions}>
                <button className={styles.iconBtn}>💰</button>
                <button className={styles.iconBtn}>🔔</button>
                <button className={styles.iconBtn}>📷</button>
                <button className={styles.avatar}>👤</button>
                <button className={styles.iconBtn}>⋮</button>
            </div>
        </header>
    );
}