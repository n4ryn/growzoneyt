"use client";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar-end">
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="/about-us"
              className={`${
                pathname === "/about-us" && "font-semibold underline"
              } hover:bg-base-300`}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/term-condition"
              className={`${
                pathname === "/term-condition" && "font-semibold underline"
              } hover:bg-base-300`}
            >
              Term & Conditions
            </a>
          </li>
          <li>
            <a
              href="/refund-policy"
              className={`${
                pathname === "/refund-policy" && "font-semibold underline"
              } hover:bg-base-300`}
            >
              Refund Policy
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              className={`${
                pathname === "/privacy-policy" && "font-semibold underline"
              } hover:bg-base-300`}
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-4 w-52 p-2 shadow"
        >
          <li>
            <a
              href="/about-us"
              className={`${
                pathname === "/about-us" && "font-semibold underline"
              }`}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/term-condition"
              className={`${
                pathname === "/term-condition" && "font-semibold underline"
              }`}
            >
              Term & Conditions
            </a>
          </li>
          <li>
            <a
              href="/refund-policy"
              className={`${
                pathname === "/refund-policy" && "font-semibold underline"
              }`}
            >
              Refund Policy
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              className={`${
                pathname === "/privacy-policy" && "font-semibold underline"
              }`}
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
