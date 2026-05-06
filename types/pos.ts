export interface Product {
    id: string;
    name: string;
    price: number;
    unit: string;
    stock?: number;
    image?: string;
    category?: string;
    noBarcode?: boolean;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Cart {
    id: number; // 1, 2, 3 (VENTA 1, 2, 3)
    items: CartItem[];
}

export type CategoryTab = "Más vendidos" | "Favoritos" | "Granel";

export interface SidebarItem {
    label: string;
    icon: string;
    href: string;
}