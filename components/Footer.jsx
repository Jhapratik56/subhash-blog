import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Saurya Global Trading
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Practical articles, coding tutorials, SEO guides,
              business insights, AI tools and web development resources
              to help you grow online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li>
                <Link href="/" className="hover:text-black">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-black">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-black">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="hover:text-black">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms-and-conditions" className="hover:text-black">
                  Terms & Conditions
                </Link>
              </li>

            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li>
                <Link href="/category/seo">
                  SEO
                </Link>
              </li>

              <li>
                <Link href="/category/nextjs">
                  Next.js
                </Link>
              </li>

              <li>
                <Link href="/category/react">
                  React
                </Link>
              </li>

              <li>
                <Link href="/category/ai">
                  Artificial Intelligence
                </Link>
              </li>

              <li>
                <Link href="/category/business">
                  Business
                </Link>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Stay Updated
            </h3>

            <p className="text-gray-600 mb-5">
              Subscribe to receive the latest articles directly in your inbox.
            </p>

            <form className="space-y-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                className="w-full rounded-lg bg-black text-white py-3 hover:bg-gray-800 transition"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Saurya Global Trading.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-600">

            <Link href="https://facebook.com">
              Facebook
            </Link>

            <Link href="https://linkedin.com">
              LinkedIn
            </Link>

            <Link href="https://github.com">
              GitHub
            </Link>

            <Link href="https://x.com">
              X
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}