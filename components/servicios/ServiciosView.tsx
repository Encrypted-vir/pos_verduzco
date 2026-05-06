"use client";
import { useState } from "react";
import Sidebar from "../layout/Sidebar";
import ServiceModal from "./ServiceModal";
import styles from "./ServiciosView.module.css";
import { ServiceDetail } from "./types";

interface ServiceItem extends ServiceDetail {
    desc?: string;
}

interface Category {
    title: string;
    icon: string;
    services: ServiceItem[];
}

const categories: Category[] = [
    {
        title: "Recargas",
        icon: "📱",
        services: [
            {
                name: "Telcel", label: "TEL", bg: "#0057a8", category: "Recargas",
                desc: "Desde $10",
                info: "Recarga saldo a cualquier número Telcel al instante. Compatible con planes de prepago y pospago.",
                amounts: [10, 20, 30, 50, 100, 150, 200, 300],
                steps: ["Ingresa el número celular del cliente", "Selecciona el monto", "Confirma la recarga", "Entrega el comprobante"],
                commission: "Comisión: $1.50 por recarga",
            },
            {
                name: "AT&T", label: "AT&T", bg: "#00a8e0", category: "Recargas",
                desc: "Desde $10",
                info: "Recargas para líneas AT&T prepago. El saldo se aplica de inmediato en la línea del cliente.",
                amounts: [10, 20, 30, 50, 100, 200, 300],
                steps: ["Ingresa el número AT&T", "Elige el monto", "Confirma y cobra al cliente", "Imprime comprobante"],
                commission: "Comisión: $1.50 por recarga",
            },
            {
                name: "Movistar", label: "MOV", bg: "#019df4", category: "Recargas",
                desc: "Desde $10",
                info: "Recargas Movistar para prepago. El saldo está disponible de forma inmediata.",
                amounts: [10, 20, 30, 50, 100, 200],
                steps: ["Captura el número Movistar", "Selecciona monto", "Confirma la operación", "Entrega ticket"],
                commission: "Comisión: $1.50 por recarga",
            },
            {
                name: "Unefon", label: "UNE", bg: "#e20074", category: "Recargas",
                desc: "Desde $10",
                info: "Recargas para líneas Unefon prepago. Red AT&T con excelente cobertura nacional.",
                amounts: [10, 20, 30, 50, 100, 200],
                steps: ["Ingresa el número Unefon", "Selecciona el monto", "Confirma la recarga", "Entrega el comprobante"],
                commission: "Comisión: $1.50 por recarga",
            },
            {
                name: "Bait", label: "BAIT", bg: "#ff6600", category: "Recargas",
                desc: "Desde $10",
                info: "Recargas Bait, la operadora de Walmart. Ofrece datos ilimitados en sus planes de prepago.",
                amounts: [10, 20, 30, 50, 100, 200],
                steps: ["Captura el número Bait", "Elige el monto", "Confirma y cobra", "Imprime ticket"],
                commission: "Comisión: $1.00 por recarga",
            },
            {
                name: "Virgin Mobile", label: "VIR", bg: "#cc0000", category: "Recargas",
                desc: "Desde $10",
                info: "Recargas para líneas Virgin Mobile. Opera sobre la red Telcel con cobertura amplia.",
                amounts: [10, 20, 30, 50, 100],
                steps: ["Ingresa el número Virgin", "Selecciona monto", "Confirma la operación", "Entrega comprobante"],
                commission: "Comisión: $1.00 por recarga",
            },
            {
                name: "Flash Mobile", label: "FLA", bg: "#ffcc00", category: "Recargas",
                desc: "Desde $10",
                info: "Recargas Flash Mobile. Operador virtual con planes económicos de datos y voz.",
                amounts: [10, 20, 30, 50, 100],
                steps: ["Captura el número Flash", "Elige el monto", "Confirma y cobra", "Imprime ticket"],
                commission: "Comisión: $1.00 por recarga",
            },
            {
                name: "Oui Mobile", label: "OUI", bg: "#6600cc", category: "Recargas",
                desc: "Desde $10",
                info: "Recargas Oui Mobile, operador virtual sobre red Telcel. Ideal para clientes con planes básicos.",
                amounts: [10, 20, 30, 50, 100],
                steps: ["Ingresa el número Oui", "Selecciona el monto", "Confirma la recarga", "Entrega ticket"],
                commission: "Comisión: $1.00 por recarga",
            },
        ],
    },
    {
        title: "Pago de Servicios",
        icon: "🏠",
        services: [
            {
                name: "CFE", label: "CFE", bg: "#006400", category: "Pago de Servicios",
                desc: "Luz",
                info: "Pago de recibos de luz CFE. El pago se refleja en máximo 24 horas hábiles en el sistema de la Comisión Federal de Electricidad.",
                steps: ["Solicita el número de servicio (recibo de luz)", "Consulta el saldo a pagar", "Cobra al cliente", "Imprime comprobante de pago"],
                commission: "Sin comisión para el cliente. Comisión interna: $2.00",
            },
            {
                name: "TELMEX", label: "TLM", bg: "#0057a8", category: "Pago de Servicios",
                desc: "Internet / Tel.",
                info: "Pago de recibos TELMEX para servicios de teléfono fijo e internet Infinitum. Aplica también para Telmex Empresarial.",
                steps: ["Ingresa el número de teléfono fijo o cuenta", "Verifica el monto del recibo", "Realiza el cobro", "Entrega comprobante"],
                commission: "Comisión: $2.50 por pago",
            },
            {
                name: "Izzi", label: "IZZ", bg: "#e31837", category: "Pago de Servicios",
                desc: "Cable / Internet",
                info: "Pago de recibos Izzi (cable e internet). Cubre servicios residenciales y empresariales en todo México.",
                steps: ["Solicita el número de cuenta Izzi", "Consulta el saldo pendiente", "Cobra al cliente", "Imprime comprobante"],
                commission: "Comisión: $2.50 por pago",
            },
            {
                name: "Megacable", label: "MEG", bg: "#ff6600", category: "Pago de Servicios",
                desc: "Cable / Internet",
                info: "Pago de recibos Megacable. Servicio disponible para clientes residenciales con cobertura en el norte del país.",
                steps: ["Ingresa el número de cliente Megacable", "Verifica monto", "Realiza cobro", "Entrega ticket"],
                commission: "Comisión: $2.50 por pago",
            },
            {
                name: "Totalplay", label: "TOT", bg: "#003087", category: "Pago de Servicios",
                desc: "Fibra óptica",
                info: "Pago de recibos Totalplay, servicio de fibra óptica con internet, telefonía y TV. Cobertura en principales ciudades.",
                steps: ["Solicita número de cliente Totalplay", "Consulta saldo", "Cobra al cliente", "Imprime comprobante"],
                commission: "Comisión: $2.50 por pago",
            },
            {
                name: "Sky", label: "SKY", bg: "#0099cc", category: "Pago de Servicios",
                desc: "TV satelital",
                info: "Pago de recibos Sky (televisión satelital). Aplica para paquetes prepago y postpago en todo el territorio nacional.",
                steps: ["Ingresa el número de cliente Sky", "Verifica monto pendiente", "Realiza el cobro", "Entrega comprobante"],
                commission: "Comisión: $2.00 por pago",
            },
            {
                name: "Agua SADM", label: "H₂O", bg: "#00aaff", category: "Pago de Servicios",
                desc: "Servicio de agua",
                info: "Pago de recibos de agua potable SADM (Servicios de Agua y Drenaje de Monterrey). Disponible para usuarios del área metropolitana de Monterrey.",
                steps: ["Solicita número de contrato SADM", "Consulta adeudo", "Cobra al cliente", "Imprime comprobante"],
                commission: "Sin comisión para el cliente",
            },
            {
                name: "Gas Natural", label: "GAS", bg: "#ff8c00", category: "Pago de Servicios",
                desc: "Gas doméstico",
                info: "Pago de recibos de Gas Natural Fenosa. Disponible para cuentas de uso residencial y comercial.",
                steps: ["Ingresa el número de contrato de gas", "Verifica el monto", "Realiza el cobro", "Entrega ticket de pago"],
                commission: "Comisión: $2.00 por pago",
            },
        ],
    },
    {
        title: "Pagos y Transferencias",
        icon: "💰",
        services: [
            {
                name: "OXXO Pay", label: "OXO", bg: "#e31837", category: "Pagos y Transferencias",
                desc: "Pago en efectivo",
                info: "Servicio de pagos en efectivo con referencia OXXO. Permite al cliente pagar compras en línea o servicios con su referencia de 18 dígitos.",
                steps: ["Solicita la referencia de pago (18 dígitos)", "Captura la referencia en el sistema", "Cobra el monto al cliente", "Entrega comprobante de pago"],
                commission: "Comisión: $10.00 por operación",
            },
            {
                name: "PayCash", label: "PAY", bg: "#1a7f37", category: "Pagos y Transferencias",
                desc: "Pago digital",
                info: "PayCash permite a los clientes pagar compras digitales en efectivo mediante un código de barras generado desde su app o sitio web.",
                steps: ["Escanea o captura el código PayCash", "Verifica el monto", "Cobra en efectivo", "El cliente recibe confirmación en su app"],
                commission: "Comisión: $8.00 por operación",
            },
            {
                name: "CoDi", label: "CDI", bg: "#006847", category: "Pagos y Transferencias",
                desc: "Cobro digital",
                info: "CoDi es la plataforma de cobros digitales del Banco de México. Permite recibir pagos instantáneos mediante código QR desde cualquier banco.",
                steps: ["Genera el cobro con el monto a pagar", "Muestra el código QR al cliente", "El cliente paga desde su app bancaria", "El dinero llega de forma inmediata"],
                commission: "Sin comisión",
            },
            {
                name: "Spin by OXXO", label: "SPN", bg: "#7c3aed", category: "Pagos y Transferencias",
                desc: "Transferencias",
                info: "Spin es la billetera digital de OXXO. Permite recargar saldo, transferir dinero y pagar servicios desde el celular.",
                amounts: [50, 100, 200, 300, 500, 1000],
                steps: ["Solicita el número de teléfono del cliente", "Selecciona el monto de recarga", "Cobra en efectivo", "El saldo se acredita de inmediato"],
                commission: "Comisión: $5.00 por recarga",
            },
            {
                name: "Kueski Pay", label: "KSK", bg: "#ff4500", category: "Pagos y Transferencias",
                desc: "Pago a plazos",
                info: "Kueski Pay permite a los clientes pagar compras en línea a plazos sin tarjeta de crédito. El pago en tienda aplica el importe de la cuota correspondiente.",
                steps: ["Solicita el código de pago Kueski", "Captura la referencia", "Cobra la cuota al cliente", "Entrega comprobante"],
                commission: "Comisión: $8.00 por operación",
            },
            {
                name: "MercadoPago", label: "MP", bg: "#009ee3", category: "Pagos y Transferencias",
                desc: "Pagos QR",
                info: "Recepción de pagos vía MercadoPago mediante QR. Ideal para clientes que utilizan la app para compras y transferencias.",
                steps: ["Muestra el código QR de la tienda", "El cliente escanea y confirma el pago", "Verifica la notificación de cobro recibido", "Entrega comprobante al cliente"],
                commission: "Sin comisión para el cliente",
            },
        ],
    },
    {
        title: "Entretenimiento",
        icon: "🎬",
        services: [
            {
                name: "Netflix", label: "NET", bg: "#e50914", category: "Entretenimiento",
                desc: "Streaming",
                info: "Venta de tarjetas de regalo y recarga de suscripción Netflix. Disponible en distintos montos para los planes estándar y premium.",
                amounts: [99, 199, 299],
                steps: ["Selecciona el plan del cliente", "Cobra el monto", "Entrega la tarjeta de regalo o código", "El cliente lo canjea en netflix.com/redeem"],
                commission: "Comisión: $5.00 por venta",
            },
            {
                name: "Spotify", label: "SPO", bg: "#1db954", category: "Entretenimiento",
                desc: "Música",
                info: "Tarjetas de regalo Spotify Premium para 1, 3 o 6 meses. El cliente canjea el código en spotify.com/redeem.",
                amounts: [99, 249, 449],
                steps: ["Elige el plan del cliente (1, 3 o 6 meses)", "Realiza el cobro", "Entrega el código impreso", "El cliente lo activa en la app"],
                commission: "Comisión: $4.00 por venta",
            },
            {
                name: "Disney+", label: "DIS", bg: "#113ccf", category: "Entretenimiento",
                desc: "Streaming",
                info: "Recargas y tarjetas de regalo Disney+. Incluye contenido de Marvel, Star Wars, Pixar y National Geographic.",
                amounts: [139, 399],
                steps: ["Selecciona el plan (mensual o anual)", "Cobra al cliente", "Entrega código de activación", "El cliente activa en disneyplus.com"],
                commission: "Comisión: $5.00 por venta",
            },
            {
                name: "Xbox", label: "XBX", bg: "#107c10", category: "Entretenimiento",
                desc: "Game Pass",
                info: "Tarjetas de regalo Xbox y suscripciones Game Pass Ultimate. Acceso a cientos de juegos en consola y PC.",
                amounts: [199, 399, 799],
                steps: ["Selecciona el monto o plan", "Cobra al cliente", "Entrega tarjeta de regalo", "El cliente canjea en microsoft.com/redeem"],
                commission: "Comisión: $6.00 por venta",
            },
            {
                name: "PlayStation", label: "PS", bg: "#003087", category: "Entretenimiento",
                desc: "PS Plus",
                info: "Tarjetas PSN y suscripciones PlayStation Plus. Acceso a juegos en línea, títulos mensuales gratis y descuentos exclusivos.",
                amounts: [199, 399, 699],
                steps: ["Elige el plan del cliente", "Realiza el cobro", "Entrega el código PSN", "El cliente activa en la PS Store"],
                commission: "Comisión: $6.00 por venta",
            },
            {
                name: "Cinépolis", label: "CIN", bg: "#d4a017", category: "Entretenimiento",
                desc: "Boletos cine",
                info: "Venta de boletos y tarjetas de regalo Cinépolis. El cliente puede usarlos en cualquier sucursal del país.",
                amounts: [80, 160, 240, 500],
                steps: ["Pregunta al cliente la función o monto deseado", "Cobra el importe", "Entrega los boletos o tarjeta de regalo", "El cliente presenta en taquilla"],
                commission: "Comisión: $5.00 por transacción",
            },
            {
                name: "Blim TV", label: "BLM", bg: "#e31837", category: "Entretenimiento",
                desc: "Streaming",
                info: "Recargas Blim TV, la plataforma de streaming de Televisa. Acceso a telenovelas, deportes y contenido en vivo.",
                amounts: [89, 249],
                steps: ["Selecciona el plan", "Cobra al cliente", "Entrega código de activación", "El cliente activa en blim.tv"],
                commission: "Comisión: $4.00 por venta",
            },
            {
                name: "Paramount+", label: "PAR", bg: "#0064ff", category: "Entretenimiento",
                desc: "Streaming",
                info: "Suscripciones Paramount+ con acceso a series, películas y eventos deportivos en vivo como la UEFA Champions League.",
                amounts: [99, 299],
                steps: ["Selecciona el plan mensual o anual", "Realiza el cobro", "Entrega código de activación", "El cliente activa en paramountplus.com"],
                commission: "Comisión: $4.00 por venta",
            },
        ],
    },
    {
        title: "Lotería y Juegos",
        icon: "🎰",
        services: [
            {
                name: "Melate", label: "MEL", bg: "#cc0000", category: "Lotería y Juegos",
                desc: "Sorteo nacional",
                info: "Venta de boletos Melate. El cliente elige 6 números del 1 al 56. El sorteo se realiza los miércoles y domingos.",
                amounts: [25],
                steps: ["Pregunta al cliente sus 6 números", "Registra los números en el sistema", "Cobra $25 por boleto", "Imprime y entrega el boleto"],
                commission: "Comisión: $2.50 por boleto vendido",
            },
            {
                name: "Tris", label: "TRI", bg: "#006400", category: "Lotería y Juegos",
                desc: "Sorteo diario",
                info: "Venta de boletos Tris clásico. Se eligen 5 números del 0 al 9. Hay sorteos cada hora de lunes a domingo.",
                amounts: [10, 20, 50],
                steps: ["El cliente elige sus 5 números", "Selecciona el monto de apuesta", "Cobra y registra en el sistema", "Entrega el boleto impreso"],
                commission: "Comisión: $1.50 por boleto",
            },
            {
                name: "Chispazo", label: "CHI", bg: "#ff8c00", category: "Lotería y Juegos",
                desc: "Sorteo",
                info: "Boletos Chispazo. Se eligen 3 números del 0 al 9. Sorteos diarios con premios instantáneos.",
                amounts: [5, 10, 20],
                steps: ["Cliente elige 3 números", "Selecciona el monto", "Cobra y registra", "Entrega boleto"],
                commission: "Comisión: $1.00 por boleto",
            },
            {
                name: "Raspaditos", label: "RAS", bg: "#ff4500", category: "Lotería y Juegos",
                desc: "Lotería instantánea",
                info: "Venta de billetes raspaditos de Pronósticos. Premio instantáneo al raspar. Disponibles en distintos precios y premios.",
                amounts: [20, 50, 100],
                steps: ["Cliente elige el tipo de raspadito", "Cobra el precio del billete", "Entrega el billete físico", "El cliente raspa y verifica si ganó"],
                commission: "Comisión: $2.00 por billete",
            },
            {
                name: "Keno", label: "KEN", bg: "#7c3aed", category: "Lotería y Juegos",
                desc: "Sorteo",
                info: "Boletos Keno. El jugador elige entre 2 y 10 números del 1 al 80. Sorteos cada 5 minutos.",
                amounts: [10, 20, 50],
                steps: ["Cliente elige sus números (2 a 10)", "Selecciona el monto de apuesta", "Registra y cobra", "Entrega boleto impreso"],
                commission: "Comisión: $1.50 por boleto",
            },
            {
                name: "Progol", label: "PRO", bg: "#006847", category: "Lotería y Juegos",
                desc: "Quiniela",
                info: "Venta de boletos Progol (quiniela de fútbol). El jugador pronostica los resultados de 14 partidos: local, empate o visitante.",
                amounts: [15, 30],
                steps: ["Cliente llena su pronóstico de 14 partidos", "Cobra el boleto ($15 básico, $30 revancha)", "Registra en el sistema", "Entrega boleto con folio"],
                commission: "Comisión: $2.00 por boleto",
            },
        ],
    },
    {
        title: "Transporte",
        icon: "🚌",
        services: [
            {
                name: "SUBE", label: "SUB", bg: "#006847", category: "Transporte",
                desc: "Tarjeta transporte",
                info: "Recarga de tarjeta SUBE para transporte público (metro, metrobús, tren suburbano). Disponible en múltiples ciudades de México.",
                amounts: [50, 100, 150, 200, 300, 500],
                steps: ["Solicita la tarjeta SUBE física del cliente", "Selecciona el monto de recarga", "Cobra al cliente", "Acerca la tarjeta al lector y confirma"],
                commission: "Comisión: $3.00 por recarga",
            },
            {
                name: "Autopistas", label: "TAG", bg: "#003087", category: "Transporte",
                desc: "TAG / IAVE",
                info: "Recarga de TAG e IAVE para el pago electrónico de casetas de autopista. Funciona en toda la red de autopistas concesionadas de México.",
                amounts: [100, 200, 300, 500, 1000],
                steps: ["Ingresa el número de TAG o IAVE del cliente", "Selecciona el monto", "Cobra en efectivo", "El saldo se acredita en minutos"],
                commission: "Comisión: $5.00 por recarga",
            },
            {
                name: "Cabify", label: "CAB", bg: "#7c3aed", category: "Transporte",
                desc: "Recarga saldo",
                info: "Recarga de saldo para la app Cabify. El cliente puede usar el saldo para pagar viajes sin necesidad de tarjeta de crédito.",
                amounts: [50, 100, 200, 300, 500],
                steps: ["Solicita el número de teléfono del cliente", "Selecciona el monto", "Cobra en efectivo", "El saldo se acredita en la app"],
                commission: "Comisión: $4.00 por recarga",
            },
            {
                name: "DiDi", label: "DDI", bg: "#ff6600", category: "Transporte",
                desc: "Recarga saldo",
                info: "Recarga de saldo DiDi para pagar viajes en la app. Ideal para clientes sin tarjeta bancaria que usan el servicio de transporte.",
                amounts: [50, 100, 200, 300, 500],
                steps: ["Solicita el número de teléfono del cliente", "Selecciona el monto a recargar", "Cobra al cliente", "El saldo aparece en la app DiDi"],
                commission: "Comisión: $4.00 por recarga",
            },
        ],
    },
];

export default function ServiciosView() {
    const [selected, setSelected] = useState<ServiceDetail | null>(null);

    return (
        <div className={styles.shell}>
            <Sidebar />
            <div className={styles.main}>
                <header className={styles.topbar}>
                    <span className={styles.topbarIcon}>⚙️</span>
                    <span className={styles.topbarTitle}>Servicios</span>
                </header>

                <div className={styles.content}>
                    {categories.map((cat) => (
                        <div key={cat.title} className={styles.category}>
                            <div className={styles.categoryHeader}>
                                <span className={styles.categoryIcon}>{cat.icon}</span>
                                <span className={styles.categoryTitle}>{cat.title}</span>
                                <div className={styles.categoryDivider} />
                            </div>
                            <div className={styles.grid}>
                                {cat.services.map((svc) => (
                                    <div
                                        key={svc.name}
                                        className={styles.card}
                                        onClick={() => setSelected(svc)}
                                    >
                                        <div className={styles.cardLogo} style={{ background: svc.bg }}>
                                            {svc.label}
                                        </div>
                                        <span className={styles.cardName}>{svc.name}</span>
                                        {svc.desc && (
                                            <span className={styles.cardDesc}>{svc.desc}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <ServiceModal service={selected} onClose={() => setSelected(null)} />
            )}
        </div>
    );
}
