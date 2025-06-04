import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

import { ReactNode } from "react"

export default async function DashboardLayout({children}: {children: ReactNode}) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = {
        name: session?.user.name || "",
        email: session?.user.email || "",
        avatar: session?.user.image || ""
    }

    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" user={user}/>
            <SidebarInset>
                <SiteHeader />
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}
