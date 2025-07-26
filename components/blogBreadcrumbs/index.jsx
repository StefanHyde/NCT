import Link from 'next/link';

export default function Breadcrumbs({ title }) {
  return (
    <nav className="mb-6 text-sm text-gray-600">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="font-thin hover:text-primary-300">
            Accueil
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <span>|</span>
          <Link href="/actualites" className="font-thin hover:text-primary-300">
            Actualités
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <span>|</span>
          <span className="text-neutrals-1000">{title}</span>
        </li>
      </ol>
    </nav>
  );
}