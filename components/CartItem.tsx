"use client";

import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
    item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <Card className="mb-4">
            <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
                <div className="relative h-24 w-24 shrink-0 rounded-md overflow-hidden border">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex-grow text-center sm:text-left">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-muted-foreground">${item.price}</p>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>

                <div className="w-24 text-right font-bold">
                    ${item.price * item.quantity}
                </div>

                <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </CardContent>
        </Card>
    );
}
