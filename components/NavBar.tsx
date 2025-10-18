"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClassName =
    "text-white text-lg bg-brand py-2 px-4 first-of-type:rounded-l-full first-of-type:pl-6 last-of-type:rounded-r-full last-of-type:pr-6 hover:bg-brand-dark transition-all duration-300";

  const mobileLinkClassName =
    "text-brand text-lg font-medium hover:text-brand-dark transition-colors py-2 border-b border-gray-200 last:border-b-0";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={cn(
        "sticky top-0 w-full p-4 bg-background/80 backdrop-blur-md z-50"
      )}
    >
      {/* Desktop Navigation */}
      <div className="flex flex-row justify-between items-center">
        <Image
          src="/images/numerlett-logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-max"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-row">
          <Link href="/products" className={linkClassName}>
            Products
          </Link>
          <Link href="/solutions" className={linkClassName}>
            About
          </Link>
          <Link href="/contact" className={linkClassName}>
            Contact
          </Link>
          <Link href="/faq" className={linkClassName}>
            FAQ
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex flex-row gap-2">
          <Link
            href="/login"
            className="text-white text-lg bg-brand py-2 px-4 rounded-full hover:bg-brand-dark transition-all duration-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-brand text-lg bg-white py-2 px-4 rounded-full hover:bg-[#eee] transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-brand hover:text-brand-dark transition-colors"
          aria-label="Toggle mobile menu"
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-lg mx-2 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col space-y-1 px-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Mobile Navigation Links */}
              {[
                { href: "/products", label: "Products" },
                { href: "/solutions", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/faq", label: "FAQ" },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={mobileLinkClassName}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Auth Buttons */}
              <motion.div
                className="flex flex-col gap-3 pt-4 mt-4 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link
                  href="/login"
                  className="text-white text-center bg-brand py-3 px-4 rounded-full hover:bg-brand-dark transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-brand text-center bg-white py-3 px-4 rounded-full border border-brand hover:bg-gray-50 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
