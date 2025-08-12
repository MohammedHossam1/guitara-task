"use client";

import { user } from "@/data";
import { useTranslations } from "next-intl";
import { Logo } from "./logo";
import MobileNav from "./mobile-nav";
import { NavigationLinks } from "./navigation-links";
import AuthNavs from "./auth-navs";

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
        <div className="max-md:hidden">
          <AuthNavs />
        </div>
        {/* Mobile Nav  */}
        <MobileNav t={t} user={user} />
      </div>
    </nav>
  );
}
