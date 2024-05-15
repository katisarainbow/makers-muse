"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import NavbarItem from "./NavbarItem";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../ui/avatar";

const NavItems = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    const categories = PRODUCT_CATEGORIES;

    return (
        <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
            <DropdownMenuTrigger asChild className="overflow-hidden">
                <Button
                    variant={isOpen ? "secondary" : "ghost"}
                    className="justify-center items-center gap-2"
                >
                    <span>{categories.label}</span>
                    <ChevronDown
                        className={cn(
                            "w-4 h-4 transition-all text-muted-foreground",
                            { "-rotate-180": isOpen }
                        )}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2">
                {categories.featured.map((category) => (
                    <DropdownMenuItem key={category.name}>
                        <Avatar className="relative w-8 h-8 mr-3 rounded-none">
                            <div className="relative aspect-square h-full w-full">
                                <Image
                                    fill
                                    src={category.image}
                                    alt={category.name}
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </Avatar>
                        <Link href={category.href} className=" font-medium">
                            {category.name}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default NavItems;
