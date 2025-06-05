import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import Welcome from "@/components/dashboard/Welcome"
import { SectionCards } from "@/components/section-cards"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function Page() {
  const session = await auth.api.getSession({
      headers: await headers()
  })
  const user = {
    name: session?.user.name || "",
    email: session?.user.email || "",
    role: session?.user.role || "",
    avatar: session?.user.image || ""
  }

  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="py-4">
        <Welcome user={user}/>
      </div>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
      </div>
    </div>
  )
}
