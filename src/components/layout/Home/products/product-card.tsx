import ImageFallBack from "@/components/shared/image-fall-back";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Shuffle } from "lucide-react";

interface ProductCardProps {
    title: string;
    description: string;
    price: number;
    oldPrice?: number;
    isColumn?: boolean;
    image: string;
    label?: undefined | "sale" | "new";
}

export function ProductCard({
    title,
    description,
    price,
    isColumn = false,
    oldPrice,
    image,
    label = undefined,
}: ProductCardProps) {
    return (
        <div className={`group relative w-full h-full overflow-hidden flex flex-col ${isColumn && "flex-row items-center "} bg-[#F4F5F7]  transition`}>
            {/* Product Image */}
            <div className={`relative ${isColumn && "w-[40%]"} `}>
                <div
                className={`w-full h-[12rem] md:h-[20rem] object-cover overflow-hidden ${isColumn && ""}`}
                >

                    <ImageFallBack
                        src={image}
                        alt={title}
                        width={400}
                        height={400}
                        className={`w-full h-full object-cover `}
                    />
                </div>

                {/* Label */}
                {label && (
                    <span
                        className={`absolute top-3 size-9 md:size-14 flex items-center justify-center right-3 rounded-full px-3 py-1 text-xs md:text-base font-semibold text-white ${label === "sale" ? "bg-[#E97171]" : "bg-[#2EC1AC]"
                            }`}
                    >
                        {label === "sale" ? "-30%" : "New"}
                    </span>
                )}
            </div>
            {/* Product Info */}
            <div className={`p-4   h-full flex flex-col justify-between ${isColumn && "justify-center w-[60%]"}`}>
                <div className="">
                    <h3 className="text-lg md:text-2xl line-clamp-1 text-[#3A3A3A] font-semibold">{title}</h3>
                    <p className="text-[#898989] text-sm md:text-base font-medium line-clamp-3">{description}</p>
                </div>
                <div className="mt-2 flex items-center gap-3">
                    <span className=" font-semibold text-base md:text-xl text-[#3A3A3A]">Rp {price.toLocaleString()}</span>
                    {oldPrice && (
                        <span className="text-[#B0B0B0] text-sm md:text-base line-through">
                            Rp {oldPrice.toLocaleString()}
                        </span>
                    )}
                </div>
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100  group-hover:bg-[#3A3A3A]/75  transition-all duration-300">
                <Button className=" bg-white text-main w-3/4 mx-auto py-4 lg:py-6 font-semibold hover:text-white">
                    Add to cart
                </Button>
                <div className="flex items-center gap-6 max-sm:flex-col text-white">
                    <button className="flex items-center gap-1 text-base font-semibold cursor-pointer hover:text-yellow-400">
                        <Share2 size={18} /> Share
                    </button>
                    <button className="flex items-center gap-1 text-base font-semibold cursor-pointer hover:text-yellow-400">
                        <Shuffle size={18} /> Compare
                    </button>
                    <button className="flex items-center gap-1 text-base font-semibold cursor-pointer hover:text-yellow-400">
                        <Heart size={18} /> Like
                    </button>
                </div>
            </div>
        </div>
    );
}
