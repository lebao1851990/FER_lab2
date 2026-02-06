"use client";

import { Product } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/CartContext";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1); // Reset after adding
    };

    return (
        <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <CardHeader>
                <CardTitle className="line-clamp-1">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-xl font-bold text-primary">${product.price}</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
                <div className="flex items-center justify-center gap-4 w-full">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                        className="h-8 w-8"
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-medium w-8 text-center">{quantity}</span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={increaseQuantity}
                        className="h-8 w-8"
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                <Button onClick={handleAddToCart} className="w-full">
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}
