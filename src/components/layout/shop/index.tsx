"use client";
import { ProductsData } from "@/data";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ProductCard } from "../Home/products/product-card";
import PaginationContainer from "@/components/shared/pagination";
import BottomSection from "./bottom-section";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { motion } from 'framer-motion';
export default function ProductList() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isHorizontal, setIsHorizontal] = useState(false);
    const [showCount, setShowCount] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    const categories = ["All", "Chairs", "Sofas", "Decor"];

    const filteredProducts =
        selectedCategory === "All"
            ? ProductsData
            : ProductsData.filter((p) => p.category === selectedCategory);

    const totalPages = Math.ceil(filteredProducts.length / showCount);
    const startIndex = (currentPage - 1) * showCount;
    const endIndex = startIndex + showCount;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    return (
        <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 custom-container bg-main-light py-4">
                <div className="flex items-center gap-1 lg:gap-4">
                    <button className="flex items-center gap-2 font-medium max-lg:text-xs">
                        <SlidersHorizontal className="size-5 lg:size-6" />{" "}
                        <span className="max-lg:hidden">Filter</span>
                    </button>
                    <button
                        className={cn("p-1 rounded-sm", !isHorizontal && "bg-gray-100")}
                        onClick={() => setIsHorizontal(false)}
                    >
                        <Image src="/2grid.svg" alt="sort" width={20} height={20} className="size-5 lg:size-6" />
                    </button>
                    <button
                        className={cn("p-1 rounded-sm", isHorizontal && "bg-gray-100")}
                        onClick={() => setIsHorizontal(true)}
                    >
                        <Image src="/1grid.svg" alt="sort" width={20} height={20} className="size-5 lg:size-6" />
                    </button>
                    <span className="ml-4 text-sm lg:text-base font-normal text-black">
                        Showing {startIndex + 1}–{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} results
                    </span>
                </div>

                <div className="flex items-center gap-2 lg:gap-4 max-lg:text-sm">
                    <div className="flex items-center gap-2">
                        <span>Show</span>
                        <input
                            type="number"
                            min={1}
                            value={showCount}
                            onChange={(e) => {
                                const val = Math.max(1, Number(e.target.value));
                                setShowCount(val);
                                setCurrentPage(1);
                            }}
                            className="w-10 lg:w-14 bg-white px-2 py-1"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Short by</span>
                        <Select
                            value={selectedCategory}
                            onValueChange={(value) => {
                                setSelectedCategory(value);
                                setCurrentPage(1);
                            }}
                        >
                            <SelectTrigger className="w-[100px] rounded-none bg-white">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent className="rounded-none">
                                {categories.map((cat) => (
                                    <SelectItem key={cat} value={cat}>
                                        {cat}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Products Grid */}


            <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 custom-container ${isHorizontal && 'sm:!grid-cols-1 lg:!grid-cols-2'
                    }`}
            >
                {productsToShow.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.15, // كل عنصر يتأخر شوي
                            ease: 'easeOut',
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <ProductCard isColumn={isHorizontal} {...product} />
                    </motion.div>
                ))}
            </div>


            {/* Pagination */}
            <div className="custom-container flex justify-center">
                <PaginationContainer
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
            <BottomSection />
        </div>
    );
}
