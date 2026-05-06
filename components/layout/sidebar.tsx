"use client";
import styles from "./Sidebar.module.css";

const sidebarItems = [
    { label: "Prepago", icon: "💳" },
    { label: "Ventas", icon: "🛒" },
    { label: "Servicios", icon: "⚙️" },
    { label: "Administración", icon: "📊" },
    { label: "Reportes", icon: "📈" },
    { label: "Mi Pedido", icon: "📦" },
    { label: "Proveedores", icon: "🏭" },
];

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <span className={styles.logoText}>yomp!</span>
            </div>

            <nav className={styles.nav}>
                {sidebarItems.map((item) => (
                    <button key={item.label} className={styles.navItem}>
                        <span className={styles.icon}>{item.icon}</span>
                        <span className={styles.label}>{item.label}</span>
                    </button>
                ))}
            </nav>

            <button className={styles.closeBtn}>
                <span className={styles.icon}>🔒</span>
                <span className={styles.label}>Cierre de Caja</span>
            </button>
        </aside>
    );
}