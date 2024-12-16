export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold">
            Paynau Team
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm hover:text-gray-600">Features</a>
            <a href="#" className="text-sm hover:text-gray-600">Examples</a>
            <a href="#" className="text-sm hover:text-gray-600">About</a>
          </nav>
        </div>
      </div>
    </header>
  )
}