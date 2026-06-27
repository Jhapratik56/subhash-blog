"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            Saurya Global Trading
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            <Link href="/" className="text-gray-700 hover:text-black transition">
              Home
            </Link>

            <Link href="/about" className="text-gray-700 hover:text-black transition">
              About
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-black transition">
              Contact
            </Link>

            <Link href="/categories" className="text-gray-700 hover:text-black transition">
              Categories
            </Link>

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Search size={20} />
            </button>

            <Link
              href="/subscribe"
              className="hidden md:block bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Subscribe
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">

          <nav className="flex flex-col p-6 gap-5">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="/categories"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/subscribe"
              onClick={() => setIsOpen(false)}
            >
              Subscribe
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}