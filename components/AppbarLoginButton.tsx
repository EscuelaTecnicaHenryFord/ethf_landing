"use client"

import { signIn } from "next-auth/react"

export default function AppbarLoginButton() {
    return (
        <button onClick={() => signIn('azure-ad')} className="font-semibold text-blue-500">
            Iniciar Sesión
        </button>
    )
}