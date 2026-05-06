import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POS - Punto de Venta",
  description: "Sistema de punto de venta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}