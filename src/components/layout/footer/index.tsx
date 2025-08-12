import NewsLetter from "./news-letter";

export default function Footer() {
  return (
    <footer className="border-t-2 custom-container  py-10 ">
      <div className="  grid grid-cols-12 gap-8  text-gray-700 ">
        {/* Brand */}
        <div className=" col-span-12 md:col-span-4">
          <h2 className="font-bold text-xl  mb-2 lg:mb-10 lg:text-2xl ">Funiro.</h2>
          <p className=" text-sm lg:text-base text-[#9F9F9F] lg:w-3/4">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>

        {/* links */}
        <div className=" col-span-6 md:col-span-2">
          <h3 className=" text-[#9F9F9F] font-medium mb-3  lg:mb-10">Links</h3>
          <ul className="space-y-5 lg:space-y-10 text-sm " >
            <li><a href="#" className="hover:underline font-medium">Home</a></li>
            <li><a href="#" className="hover:underline font-medium">Shop</a></li>
            <li><a href="#" className="hover:underline font-medium">About</a></li>
            <li><a href="#" className="hover:underline font-medium">Contact</a></li>
          </ul>
        </div>

        {/* help */}
        <div className=" col-span-6 md:col-span-2">
          <h3 className=" text-[#9F9F9F] font-medium mb-3  lg:mb-10">Help</h3>
          <ul className="space-y-5 lg:space-y-10 text-sm">
            <li><a href="#" className="hover:underline font-medium">Payment Options</a></li>
            <li><a href="#" className="hover:underline font-medium">Returns</a></li>
            <li><a href="#" className="hover:underline font-medium">Privacy Policies</a></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-3">
          <NewsLetter />
        </div>
      </div>

      {/* bottom footer */}
      <div className=" mt-10 border-t border-gray-300 pt-4 text-sm lg:text-base text-black">
        © 2023 funiro. All rights reserved
      </div>
    </footer>
  );
}

