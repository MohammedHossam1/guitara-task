"use client";

import ImageFallBack from "@/components/shared/image-fall-back";
import { Heart, Search } from "lucide-react";
import Link from "next/link";

const navs = [
    {
        href: "/user",
        label: "user",
        iconSrc: "/user.svg"
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
        iconSrc: "/cart.svg"
    }
]
const AuthNavs = () => {
    return (
        <div className="flex items-center gap-10 max-md:mt-4 ">
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
    )
}

export default AuthNavs