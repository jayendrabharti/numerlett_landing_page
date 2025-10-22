import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-border/50 border-t px-4 py-8 md:px-6 md:py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Logo and Newsletter Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/numerlett_logo_small.png"
              alt="NumerLett Logo"
              width={120}
              height={40}
              className="mb-4 md:mb-6"
            />
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed md:mb-6">
              Subscribe to our newsletter for the latest features, updates, and exclusive insights.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-border bg-background focus:ring-brand/50 w-full rounded-lg border py-2 pr-4 pl-10 text-sm focus:ring-2 focus:outline-none"
                />
              </div>
              <button className="bg-brand hover:bg-brand-dark rounded-lg px-6 py-2 text-sm whitespace-nowrap text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">Quick Lines</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/success"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Customer Success
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Career Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">Connect with Us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/link-eleven"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Link Eleven
                </Link>
              </li>
              <li>
                <Link
                  href="/link-twelve"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Link Twelve
                </Link>
              </li>
              <li>
                <Link
                  href="/link-thirteen"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Link Thirteen
                </Link>
              </li>
              <li>
                <Link
                  href="/link-fourteen"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Link Fourteen
                </Link>
              </li>
              <li>
                <Link
                  href="/link-fifteen"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Link Fifteen
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">Stay Updated</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://facebook.com"
                  className="text-muted-foreground flex items-center gap-2 text-sm transition-colors hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="h-4 w-4" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="text-muted-foreground flex items-center gap-2 text-sm transition-colors hover:text-pink-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-4 w-4" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  className="text-muted-foreground flex items-center gap-2 text-sm transition-colors hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="h-4 w-4" />X
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  className="text-muted-foreground flex items-center gap-2 text-sm transition-colors hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com"
                  className="text-muted-foreground flex items-center gap-2 text-sm transition-colors hover:text-red-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="h-4 w-4" />
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-border/50 mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 md:mt-12 md:flex-row md:pt-8">
          <p className="text-muted-foreground text-center text-sm md:text-left">
            ©2025, All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-end md:gap-6">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Cookie Setting
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
