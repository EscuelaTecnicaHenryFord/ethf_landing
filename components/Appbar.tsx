import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import AppbarLoginButton from "./AppbarLoginButton"
import { signOut } from "next-auth/react"
import AppbarSigonOutButton from "./AppbarSignOutButton"

export default async function Appbar() {
    const session = await getServerSession(authOptions)

    const isAuthenticated = !!session?.user

    return (
        <nav className="absolute top-1 right-3">
            {isAuthenticated ? (
                <div className="flex gap-2">
                    <p>{session.user!.name}</p>
                    <AppbarSigonOutButton />
                </div>
            ) : (
                <div>
                    <AppbarLoginButton />
                </div>
            )}
        </nav>
    )
}