import { Product } from "../types/pos";

export const mockProducts: Product[] = [
    {
        id: "no-barcode",
        name: "PROD. SIN CODIGO",
        price: 1.0,
        unit: "1.00 PZA",
        noBarcode: true,
    },
    {
        id: "coca-250",
        name: "COCA-COLA 250ML",
        price: 8.0,
        unit: "250 PZA",
        image: "/images/coca-250.png",
    },
    {
        id: "corona-940",
        name: "CERVEZA CORONA 940ML",
        price: 40.0,
        unit: "940 ML",
        image: "/images/corona-940.png",
    },
    {
        id: "coca-500",
        name: "COCA COLA 500ML",
        price: 13.0,
        unit: "500 PZA",
        image: "/images/coca-500.png",
    },
    {
        id: "coca-30",
        name: "COCA COLA 30/45...",
        price: 14.0,
        unit: "1 PZA",
        image: "/images/coca-30.png",
    },
    {
        id: "coca-600",
        name: "COCA-COLA 600ML",
        price: 18.0,
        unit: "1 PZA",
        image: "/images/coca-600.png",
    },
    {
        id: "coca-1l",
        name: "COCA-COLA 1L",
        price: 22.0,
        unit: "1 PZA",
        image: "/images/coca-1l.png",
    },
    {
        id: "sprite-500",
        name: "SPRITE 500ML",
        price: 13.0,
        unit: "1 PZA",
        image: "/images/sprite.png",
    },
    {
        id: "agua-1l",
        name: "AGUA 1L",
        price: 12.0,
        unit: "1 PZA",
        image: "/images/agua.png",
    },
];