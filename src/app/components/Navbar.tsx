"use client"
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="mx-8 md:mx-[5.25rem] my-8 ">
            <div className="flex items-center justify-between">
                <div>
                    <Image
                        src='/logo.svg' // Replace with your logo path
                        alt="Savani Logo"
                        width={48}
                        height={48}
                    />
                </div>
                <button
                    className="text-blue-600 md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
                <ul className={`hidden md:flex gap-20 text-lg`}>
                    <li>
                        <Link legacyBehavior href="/">
                            <a className="font-figtree font-regular text-2xl hover:text-blue-600">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/">
                            <a className="font-figtree font-regular text-2xl hover:text-blue-600">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/legacy">
                            <a className="font-figtree font-regular text-2xl hover:text-blue-600">Legacy</a>
                        </Link>
                    </li>
                </ul>
                {/* Button */}
                <div className="hidden md:block">
                    <Link legacyBehavior href="/track-shipment">
                        <a className="px-8 py-4 bg-transparent border border-blue-600 text-blue-600 font-semibold test-base hover:bg-blue-600 hover:text-white transition">
                            Track Shipment
                        </a>
                    </Link>
                </div>
            </div>
            {/* Mobile Button */}
            {isOpen && (
                <ul className={`md:hidden flex flex-col justify-center items-center gap-16 my-4 list-none`}>
                    <li>
                        <Link legacyBehavior href="/">
                            <a className="font-figtree font-regular text-2xl hover:text-blue-600">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/">
                            <a className="font-figtree font-regular text-2xl hover:text-blue-600">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/legacy">
                            <a className="font-figtree font-regular text-2xl hover:text-blue-600">Legacy</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/track-shipment">
                            <a className="px-8 py-4 bg-transparent border border-blue-600 text-blue-600 font-semibold test-base hover:bg-blue-600 hover:text-white transition">
                                Track Shipment
                            </a>
                        </Link>
                    </li>
                </ul>
            )
            }
        </nav>
    );
}