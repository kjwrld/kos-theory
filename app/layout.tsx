import "./globals.css";

export const metadata = {
    title: "kos-theory",
    description: "new age consultancy",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
