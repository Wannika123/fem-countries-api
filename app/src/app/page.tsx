import Countries from "@/component/feed/Countries";
import Navbar from "@/component/feed/Navbar";
import { redirect } from "next/navigation";

export default function Home() {
    redirect('/feed')
    
    // This component can simply return null, but this is just for the screenshot for the Frontend Mentor.
    return (
        <main>
            <div className="center">
                <Navbar />
                <Countries query={undefined} />
            </div>
        </main>
    )
}         