"use client";

import { useState } from "react";
import { Headphones, Gamepad2, Users } from "lucide-react";

const TABS = [
    { name: "Music", icon: <Headphones size={20} /> },
    { name: "Gaming", icon: <Gamepad2 size={20} /> },
    { name: "Campaigns", icon: <Users size={20} /> },
];

export default function Footer() {
    const [activeTab, setActiveTab] = useState(TABS[0].name);

    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 p-4">
            <div className="flex items-center justify-center gap-8">
                {TABS.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                            activeTab === tab.name
                                ? "bg-blue-500 text-white"
                                : "bg-gray-700 text-gray-300"
                        } hover:bg-blue-400`}
                    >
                        {tab.icon}
                        <span className="text-sm mt-2">{tab.name}</span>
                    </button>
                ))}
            </div>
        </footer>
    );
}
