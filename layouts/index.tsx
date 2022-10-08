import React from "react"
import clsx from "clsx"

// project-imports
import Navbar from "@/layouts/navbar"
import Footer from "@/layouts/footer"

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
}

const Layouts: React.FC<LayoutProps> = ({ children, className }) => {
    return (
        <div className="flex flex-col min-h-screen max-w-3xl 3xl:container mx-auto p-2">
            <Navbar />
            <main className={clsx("flex-grow py-2", className)}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layouts
