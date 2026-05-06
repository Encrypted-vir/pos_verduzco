"use client";
import { useEffect } from "react";
import styles from "./ServiceModal.module.css";
import { ServiceDetail } from "./types";

interface ServiceModalProps {
    service: ServiceDetail;
    onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <div className={styles.logo} style={{ background: service.bg }}>
                        {service.label}
                    </div>
                    <div className={styles.headerInfo}>
                        <p className={styles.name}>{service.name}</p>
                        <span className={styles.categoryTag}>{service.category}</span>
                    </div>
                    <button className={styles.closeBtn} onClick={onClose}>✕</button>
                </div>

                <div className={styles.body}>
                    <p className={styles.infoText}>{service.info}</p>

                    {service.amounts && service.amounts.length > 0 && (
                        <div className={styles.section}>
                            <span className={styles.sectionLabel}>Montos disponibles</span>
                            <div className={styles.amounts}>
                                {service.amounts.map((a) => (
                                    <button key={a} className={styles.amountBtn}>${a}</button>
                                ))}
                            </div>
                        </div>
                    )}

                    {service.steps && service.steps.length > 0 && (
                        <div className={styles.section}>
                            <span className={styles.sectionLabel}>¿Cómo funciona?</span>
                            <div className={styles.steps}>
                                {service.steps.map((step, i) => (
                                    <div key={i} className={styles.step}>
                                        <span className={styles.stepNum}>{i + 1}</span>
                                        <span>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {service.commission && (
                        <p className={styles.commission}>💡 {service.commission}</p>
                    )}
                </div>

                <div className={styles.footer}>
                    <button className={styles.processBtn}>Procesar servicio</button>
                </div>
            </div>
        </div>
    );
}
