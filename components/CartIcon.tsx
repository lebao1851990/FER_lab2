"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/button";

export default function CartIcon() {
    const { totalItems } = useCart();

    return (
        <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                        {totalItems}
                    </span>
                )}
                <span className="sr-only">Open cart</span>
            </Link>
        </Button>
    );
}
