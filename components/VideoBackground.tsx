"use client";

import { Canvas } from "@react-three/fiber";
import { useVideoTexture, useAspect } from "@react-three/drei";
import { useState } from "react";

function VideoBackground() {
    const videoUrl = "/kosbutterfly.mp4";
    const [error, setError] = useState<string | null>(null);

    const texture = useVideoTexture(videoUrl, {
        unsuspend: "canplay",
        crossOrigin: "anonymous",
        muted: true,
        loop: true,
        start: true,
        playsInline: true,
    });

    const size = useAspect(1920, 1080);

    if (error) {
        console.error("Video texture error:", error);
        return null;
    }

    return (
        <mesh scale={size}>
            <planeGeometry />
            <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
    );
}

export default function VideoCanvas() {
    return (
        <Canvas className="absolute inset-0">
            <VideoBackground />
        </Canvas>
    );
}
