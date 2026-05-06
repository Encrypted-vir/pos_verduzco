"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const sidebarItems = [
    { label: "Prepago", icon: "💳", href: "/prepago" },
    { label: "Ventas", icon: "🛒", href: "/" },
    { label: "Servicios", icon: "⚙️", href: "/servicios" },
    { label: "Administración", icon: "📊", href: "/administracion" },
    { label: "Reportes", icon: "📈", href: "/reportes" },
    { label: "Mi Pedido", icon: "📦", href: "/pedido" },
    { label: "Proveedores", icon: "🏭", href: "/proveedores" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <span className={styles.logoText}>Abarrotes Verduzco</span>
            </div>

            <nav className={styles.nav}>
                {sidebarItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`${styles.navItem} ${pathname === item.href ? styles.navItemActive : ""}`}
                    >
                        <span className={styles.icon}>{item.icon}</span>
                        <span className={styles.label}>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <button className={styles.closeBtn}>
                <span className={styles.icon}>🔒</span>
                <span className={styles.label}>Cierre de Caja</span>
            </button>
        </aside>
    );
}