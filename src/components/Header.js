import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a 
            aria-label="Project Edge Blog"
            className="text-4xl font-bold text-gray-700 hover:text-green-500"
          >
           ⚛️ project edge blog
          </a>
        </Link>
      </div>
      <div className="text-base leading-5">
        <a
          href="https://project-edge.org"
          className="font-medium text-gray-500 hover:text-gray-700"
        >
          Main website &rarr;
        </a>
      </div>
    </header>
  )
}
