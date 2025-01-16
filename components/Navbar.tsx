"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [hasAnimated, setHasAnimated] = useState(false);

    return (
        <motion.nav
            initial={{ width: "50px" }}
            animate={{
                width: hasAnimated ? "50%" : "50px", // Animate only on first render
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-2 bg-black bg-opacity-20 rounded-full overflow-hidden"
            onAnimationComplete={() => setHasAnimated(true)} // Ensure animation runs only once
        >
            <div className="flex items-center justify-between gap-4 h-12">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/placeholder.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-full transform rotate-180 filter invert"
                    />
                </Link>

                {/* Navigation Links */}
                {hasAnimated && (
                    <motion.ul
                        initial={{ clipPath: "circle(0% at 0% 50%)" }}
                        animate={{ clipPath: "circle(100% at 50% 100%)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex items-center gap-8 ml-auto"
                    >
                        {["Learn", "Projects", "About", "Contact"].map(
                            (item) => (
                                <motion.li
                                    key={item}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative"
                                >
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-white uppercase tracking-wide text-sm"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-pink-500 opacity-0 navbar-clip navbar-hover group-hover:opacity-100 group-hover:navbar-hover transition-all duration-500">
                                            {item}
                                        </span>
                                        {item}
                                    </Link>
                                </motion.li>
                            )
                        )}
                    </motion.ul>
                )}
            </div>
        </motion.nav>
    );
}
