import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Logo and Newsletter Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/numerlett-logo.png"
              alt="NumerLett Logo"
              width={120}
              height={40}
              className="mb-4 md:mb-6"
            />
            <p className="text-muted-foreground text-sm mb-4 md:mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest features, updates, and
              exclusive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand/50"
                />
              </div>
              <button className="px-6 py-2 bg-brand text-white text-sm rounded-lg hover:bg-brand-dark transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Lines</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/success"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Customer Success
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Career Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Connect with Us
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/link-eleven"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Link Eleven
                </Link>
              </li>
              <li>
                <Link
                  href="/link-twelve"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Link Twelve
                </Link>
              </li>
              <li>
                <Link
                  href="/link-thirteen"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Link Thirteen
                </Link>
              </li>
              <li>
                <Link
                  href="/link-fourteen"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Link Fourteen
                </Link>
              </li>
              <li>
                <Link
                  href="/link-fifteen"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Link Fifteen
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://facebook.com"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="w-4 h-4" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-4 h-4" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-4 h-4" />X
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-red-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="w-4 h-4" />
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            ©2025, All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <Link
              href="/privacy"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              Cookie Setting
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
