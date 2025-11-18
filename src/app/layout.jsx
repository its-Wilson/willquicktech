export const metadata = {
    title: "TechConsult — IT Consulting",
    description: "Modern IT consulting for cloud, security, and systems integration.",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-sans">{children}</body>
        </html>
    );
}