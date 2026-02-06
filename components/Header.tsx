"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CartIcon from "./CartIcon";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";

function NavLink({ href, children, activePath }: { href: string; children: React.ReactNode; activePath: string }) {
    const isActive = activePath === href;

    return (
        <Button
            variant={isActive ? "default" : "ghost"}
            asChild
        >
            <Link href={href}>{children}</Link>
        </Button>
    );
}

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="border-b bg-background sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <Package className="h-6 w-6 text-primary" />
                    <span>MyShop</span>
                </Link>
                <div className="flex items-center gap-4">
                    <nav className="flex items-center gap-2">
                        <NavLink href="/login" activePath={pathname}>
                            Login
                        </NavLink>
                        <NavLink href="/register" activePath={pathname}>
                            Register
                        </NavLink>
                    </nav>
                    <CartIcon />
                </div>
            </div>
        </header>
    );
}