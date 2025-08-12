
// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t-2 custom-container  py-10 ">
      <div className=" px-4 grid grid-cols-12 gap-8  text-gray-700 ">
        {/* Brand */}
        <div className=" col-span-12 md:col-span-4">
          <h2 className="font-bold text-xl  mb-2 lg:mb-10 lg:text-2xl ">Funiro.</h2>
          <p className=" text-sm lg:text-base text-[#9F9F9F] lg:w-3/4">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div className=" col-span-6 md:col-span-2"> 
          <h3 className=" text-[#9F9F9F] font-medium mb-10">Links</h3>
          <ul className="space-y-10 text-sm " >
            <li><a href="#" className="hover:underline font-medium">Home</a></li>
            <li><a href="#" className="hover:underline font-medium">Shop</a></li>
            <li><a href="#" className="hover:underline font-medium">About</a></li>
            <li><a href="#" className="hover:underline font-medium">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div className=" col-span-6 md:col-span-2">
          <h3 className=" text-[#9F9F9F] font-medium mb-10">Help</h3>
          <ul className="space-y-10 text-sm">
            <li><a href="#" className="hover:underline font-medium">Payment Options</a></li>
            <li><a href="#" className="hover:underline font-medium">Returns</a></li>
            <li><a href="#" className="hover:underline font-medium">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className=" col-span-12 md:col-span-3">
          <h3 className=" text-[#9F9F9F] font-medium mb-10">Newsletter</h3>
          <form className="flex  gap-2">
            <input
              type="email"
              required
              placeholder="Enter Your Email Address"
              className="border-b border-gray-400 outline-none lg:flex-1 py-1 text-sm"
            />
            <button
              type="submit"
              className="text-sm font-bold border-b border-black hover:text-main transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" mt-10 border-t border-gray-300 pt-4 text-sm lg:text-base text-black">
        © 2023 funiro. All rights reserved
      </div>
    </footer>
  );
}

