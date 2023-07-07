"use client"

import { signIn } from "next-auth/react"

export default function SignInLarge() {
    return <div className="w-full flex items-center justify-center p-3">
        <button className="border py-4 px-8 rounded-xl text-xl border-2 border-blue-500 text-blue-500 font-bold" onClick={() => signIn('azure-ad')}>
            Iniciar sesión para ver todo
        </button>
    </div>
}