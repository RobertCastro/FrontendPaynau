// components/layout/Header.tsx
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Paynau
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/people" className="text-sm text-gray-600 hover:text-gray-900">
              People
            </Link>
          </nav>
        </div>
        <Link 
          to="/people/create"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Person
        </Link>
      </div>
    </header>
  )
}