"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import {
  PiShoppingCartLight,
  PiHeartLight,
  PiUserCircleDashedLight,
  PiUserCircleCheckLight,
  PiMagnifyingGlassLight,
} from "react-icons/pi";

const categories = [
  {
    title: "Men",
    href: "/categories/men",
    subcategories: [
      { title: "T-shirts", href: "/categories/men/tshirts" },
      { title: "Casual Shirts", href: "/categories/men/casual-shirts" },
      { title: "Formal Shirts", href: "/categories/men/formal-shirts" },
      { title: "Jackets", href: "/categories/men/jackets" },
      { title: "Blazers & Coats", href: "/categories/men/blazers-coats" },
    ],
  },
  {
    title: "Indian & Festive Wear",
    href: "/categories/indian-festive",
    subcategories: [
      {
        title: "Kurta & Kurta Sets",
        href: "/categories/indian-festive/kurta-sets",
      },
      { title: "Sherwanis", href: "/categories/indian-festive/sherwanis" },
    ],
  },
  {
    title: "Women",
    href: "/categories/women",
    subcategories: [
      { title: "Kurtas & Suits", href: "/categories/women/kurtas-suits" },
      { title: "Sarees", href: "/categories/women/sarees" },
      { title: "Ethnic Wear", href: "/categories/women/ethnic-wear" },
      { title: "Lehenga Cholis", href: "/categories/women/lehenga-cholis" },
      { title: "Jackets", href: "/categories/women/jackets" },
    ],
  },
  {
    title: "Western Wear",
    href: "/categories/western",
    subcategories: [
      {
        title: "Dresses & Jumpsuits",
        href: "/categories/western/dresses-jumpsuits",
      },
    ],
  },
  {
    title: "Kids",
    href: "/categories/kids",
    subcategories: [
      { title: "T-shirts", href: "/categories/kids/tshirts" },
      { title: "Shirts", href: "/categories/kids/shirts" },
      { title: "Jeans", href: "/categories/kids/jeans" },
      { title: "Trousers", href: "/categories/kids/trousers" },
      { title: "Party Wears", href: "/categories/kids/party-wears" },
    ],
  },
  {
    title: "Footwear",
    href: "/categories/footwear",
    subcategories: [
      { title: "Flats", href: "/categories/footwear/flats" },
      { title: "Casual Shoes", href: "/categories/footwear/casual-shoes" },
      { title: "Heels", href: "/categories/footwear/heels" },
      { title: "Boots", href: "/categories/footwear/boots" },
      {
        title: "Sports Shoes & Floaters",
        href: "/categories/footwear/sports-floaters",
      },
    ],
  },
];

export function NavMenu() {
  return (
    <NavigationMenu className="flex items-center justify-between p-5">
      <NavigationMenuList className="flex items-center space-x-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="font-bold text-2xl">
              Funiro
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="flex items-center space-x-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="text-md">Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/shop" legacyBehavior passHref>
            <NavigationMenuLink className="text-md">Shop</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md p-0 ">
            Shop
          </NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.map((category) => (
                <ListItem
                  key={category.title}
                  title={category.title}
                  href={category.href}
                >
                  Browse our {category.title} collection.
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className="text-md">About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className="text-md">Contact</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className="flex items-center space-x-4">
        <NavigationMenuItem>
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink>
              <PiUserCircleDashedLight className="text-xl" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/search" legacyBehavior passHref>
            <NavigationMenuLink>
              <PiMagnifyingGlassLight className="text-xl" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/wishlist" legacyBehavior passHref>
            <NavigationMenuLink>
              <PiHeartLight className="text-xl" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/cart" legacyBehavior passHref>
            <NavigationMenuLink>
              <PiShoppingCartLight className="text-xl" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
