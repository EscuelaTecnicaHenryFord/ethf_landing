"use client"

import { signOut } from "next-auth/react"

export default function AppbarSigonOutButton() {
    return (
        <button onClick={() => signOut()} className="font-semibold text-blue-500">
            salir
        </button>
    )
}