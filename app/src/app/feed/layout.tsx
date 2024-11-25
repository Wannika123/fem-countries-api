import Navbar from "@/component/feed/Navbar";

export default function FeedLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode
    modal: React.ReactNode
}>) {
    return (
        <main>
            <div className="center">
                <Navbar />
                {children}
            </div>
            {modal}
        </main>
    );
}