import BackBtn from "@/component/country/BackBtn";

export default function CountryLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <main>
            <div className="center">
                <BackBtn />
                {children}
            </div>
        </main>
    )
}