"use client";

import { ReactNode } from "react";

interface FooterTabProps {
    name: string;
    icon: ReactNode;
    isActive: boolean;
    onClick: () => void;
}

export default function FooterTab({
    name,
    icon,
    isActive,
    onClick,
}: FooterTabProps) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center gap-1 p-4 rounded-full ${
                isActive
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
            } hover:bg-blue-400 transition-all`}
        >
            {icon}
            <span className="text-sm">{name}</span>
        </button>
    );
}
