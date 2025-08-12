"use client";

import { IUser } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavigationLinks } from "./navigation-links";
import AuthNavs from "./auth-navs";

interface IProps {
  t: (key: string) => string;
  user: IUser;
}

const MobileNav = ({ t }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Header buttons */}
      <div className="flex items-center gap-3">
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 !z-1 bg-white shadow-md border-t border-gray-200 py-6 flex flex-col items-center gap-4"
          >
            <NavigationLinks flexDir={"col"} setIsOpen={setIsOpen} t={t} />
            <AuthNavs />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
