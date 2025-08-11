"use client";

import { user } from "@/data";
import { useTranslations } from "next-intl";
import { Logo } from "./logo";
import MobileNav from "./mobile-nav";
import { NavigationLinks } from "./navigation-links";
import { Heart, Search } from "lucide-react";
import Link from "next/link";
import ImageFallBack from "@/components/shared/image-fall-back";

const navs = [
  {
    href: "/user",
    label: "user",
    iconSrc: "/home/user.svg"
  },
  {
    href: "/search",
    label: "search",
    icon: <Search />
  },
  {
    href: "/favorite",
    label: "favorite",
    icon: <Heart />
  },
  {
    href: "/cart",
    label: "cart",
    iconSrc: "/home/cart.svg"
  }
]
export default function Navbar() {
  const t = useTranslations("navbar");

  return (
    <nav className="border-b bg-background/95">
      <div className="custom-container mx-auto flex h-16 items-center justify-between gap-4  gap-x-6">
        <Logo />
        {/* Desktop Links */}
        <div className="max-md:hidden">
          <NavigationLinks t={t} />
        </div>
        <div className="hidden md:flex items-center gap-10 ">
          {navs.map((nav, ind) => (
            <Link
              key={ind}
              href={nav.href}
              title={nav.label}
              className=""
            >
              {nav.icon || <ImageFallBack src={nav?.iconSrc} alt={nav?.label || "icon"} width={20} height={20} />}
            </Link>
          ))}
        </div>
        {/* Mobile Nav  */}
        <MobileNav t={t} user={user} />
      </div>
    </nav>
  );
}
