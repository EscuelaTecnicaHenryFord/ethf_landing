export default function InfoCard({ children }: { children: React.ReactNode }) {
    return (
        <a className="block border border-opacity-30 rounded-xl px-4 py-2 border-purple-600 font-semibold text-lg text-purple-600">
            {children}
        </a>
    )
}