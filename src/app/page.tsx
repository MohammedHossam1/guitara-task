import BrowseRange from "@/components/layout/Home/browse-range";
import Hero from "@/components/layout/Home/hero";
import Products from "@/components/layout/Home/products";
import RoomsCarousel from "@/components/layout/Home/rooms-carousel";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <BrowseRange />
      <Products />
      <RoomsCarousel />
    </div>
  );
}
