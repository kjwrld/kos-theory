import VideoCanvas from "@/components/VideoBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative w-screen h-screen">
            <Navbar />
            <VideoCanvas />
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <h1 className="text-white text-7xl font-light">k.os theory</h1>
            </div>
            {/* Footer */}
            <Footer />
        </main>
    );
}
