import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenuItem } from "../ui/dropdown-menu";

type Categories = typeof PRODUCT_CATEGORIES;

interface NavItemProps {
    categories: Categories;
}

const NavbarItem = ({ categories }: NavItemProps) => {
    return (
        <div>
            
        </div>
    );
};
export default NavbarItem;
