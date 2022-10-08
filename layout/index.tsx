import React from "react"

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className="flex-shrink-0"></header>
                <main className="flex-grow">{children}</main>
                <footer className="flex-shrink-0"></footer>
            </div>
        </>
    )
}

export default Layout
