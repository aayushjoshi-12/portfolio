"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, ChevronRightIcon } from 'lucide-react';

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  const breadcrumbList = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aayushjoshi.10xdevs.in"
        },
        ...pathSegments.map((segment, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          "item": `https://aayushjoshi.10xdevs.in/${pathSegments.slice(0, index + 1).join('/')}`
        }))
      ]
    }
  ];

  if (pathname === '/') return null;

  return (
    <nav aria-label="Breadcrumbs" className="py-3 px-4 text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/" className="text-gray-400 hover:text-white flex items-center">
            <HomeIcon size={16} />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          
          return (
            <li key={segment} className="flex items-center">
              <ChevronRightIcon size={16} className="text-gray-600" />
              {isLast ? (
                <span className="ml-1 text-white font-medium">
                  {segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')}
                </span>
              ) : (
                <Link href={href} className="ml-1 text-gray-400 hover:text-white">
                  {segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}