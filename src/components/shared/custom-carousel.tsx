"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ImageFallBack from "./image-fall-back";

interface IProp {
  dots?: boolean;
  arrows?: boolean;
  arrowsBottom?: boolean;
  data: any[];
}

export function CustomCarousel({
  dots = true,
  arrows = false,
  data,
}: IProp) {
  const [api, setApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  useEffect(() => {
    if (!api) return;
    const update = () => {
      const selected = api.selectedScrollSnap();
      setSelectedIndex(selected);
      setScrollSnaps(api.scrollSnapList());
    };

    api.on("select", update);
    update();

    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <div className="relative w-full  block">
      <Carousel
        opts={{ align: "start" }}
        className="w-full"
        dir="ltr"
        
        setApi={setApi}
      >
        <CarouselContent className="h-[20rem] lg:h-[35rem]  lg:gap-4">
          {data.slice(0, 6).map((item: any, index: number) => (
            <CarouselItem
              key={index}
              className=" relative basis-[65%] md:basis-[45%] xl:basis-[40%] "
            >
              <ImageFallBack src={item.image} width={1600} height={1600} className={cn("transition-all duration-500",
                selectedIndex === index ? "h-[20rem] lg:h-[35rem]" : "h-[15rem] lg:h-[30rem]")} />
              <AnimatePresence mode="wait">

                {selectedIndex === index &&
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute start-1/2 max-lg:-translate-x-1/2 lg:start-10  text-nowrap bottom-4 lg:bottom-10 flex ">
                    <div className=" bg-white/75 backdrop-blur-sm py-4 lg:py-10 p-2  ">
                      <h3 className="text-xs md:text-base font-medium text-[#616161] flex items-center gap-2"> <span>0{0 + index + 1}</span>
                        <span className="w-6 h-[1px] bg-gray-600 inline-block"></span>{item.category}</h3>
                      <h3 className="text-sm md:text-2xl font-semibold text-[#3a3a3a]"> {item.title}</h3>
                    </div>
                    <div className="bg-main text-white p-1 lg:p-2 self-end ">
                      <ArrowRight className="size-3 lg:size-6" />
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </CarouselItem>))}
        </CarouselContent>

        {arrows && (
          <div
            className={`flex items-center  gap-2 `}
          >
            <CarouselPrevious
              className={` bg-white max-xl:opacity-50 focus:opacity-100 hover:opacity-100  shadow-2xl size-10 text-2xl  translate-x-[6rem]
                ${selectedIndex == 0 ? "hidden" : ""} 
                `}
            />
            <CarouselNext
              className={` bg-white max-xl:opacity-50 focus:opacity-100 hover:opacity-100 shadow-2xl  -translate-x-[6rem]
                ${selectedIndex == scrollSnaps.length - 1 ? "hidden" : ""} 
                size-10 text-2xl   `}
            />
          </div>
        )}
      </Carousel>


      {dots && (
        <div className=" absolute  max-xl:end-10 xl:start-[30rem] bottom-10 flex justify-center gap-2 xl:mt-4 xl:gap-4" dir="ltr">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`size-2 lg:size-3 rounded-full   ${index === selectedIndex ? " outline-2 outline-offset-2 lg:outline-offset-6 outline-main bg-main" : "bg-[#D8D8D8]"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
