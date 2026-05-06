"use client";
import Sidebar from "./Sidebar";
import styles from "./PendingPage.module.css";

interface PendingPageProps {
    title: string;
    icon: string;
}

export default function PendingPage({ title, icon }: PendingPageProps) {
    return (
        <div className={styles.shell}>
            <Sidebar />
            <div className={styles.content}>
                <div className={styles.card}>
                    <span className={styles.icon}>{icon}</span>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.text}>Pendiente a desarrollar</p>
                </div>
            </div>
        </div>
    );
}
