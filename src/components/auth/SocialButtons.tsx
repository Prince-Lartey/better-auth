import React from 'react'
import { Button } from '../ui/button'
import { Icons } from '../global/icons'
import { signIn } from '@/lib/auth-client'

export default function SocialButtons() {
    async function handleSignInWithSocials (providers: "google" | "github") {
        await signIn.social({
            provider: providers
        })
    }

    return (
        <div className="mt-6 grid grid-cols-2 gap-3">
            <Button type="button" variant="outline" onClick={() => handleSignInWithSocials("google")}>
                <Icons.google />
                <span>Google</span>
            </Button>
            <Button type="button" variant="outline" onClick={() => handleSignInWithSocials("github")}>
                <Icons.gitHub />
                <span>Github</span>
            </Button>
        </div>
    )
}
