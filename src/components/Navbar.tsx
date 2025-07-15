'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Technology', href: '/technology' },
  { name: 'Who We Are', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'ERP & Automation Solutions', href: '/services/erp-automation' },
      {
        name: 'Digital Transformation & Strategy',
        href: '/services/digital-transformation',
      },
      {
        name: 'Custom Software Development',
        href: '/services/software-development',
      },
      {
        name: 'Data, AI/ML & Business Intelligence',
        href: '/services/data-ai',
      },
      { name: 'IT Services & Outsourcing', href: '/services/it-services' },
      {
        name: 'Cloud & Network Monitoring Services',
        href: '/services/cloud-network',
      },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed w-full bg-black/95 backdrop-blur-sm z-50">
      <nav className="container py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <div className="relative w-40 h-12">
                <Image
                  src="/images/LOGO FOR SM.png"
                  alt="Digital 365 Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <span className="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors cursor-pointer">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
                {'children' in item && (
                  <div
                    className={clsx(
                      'absolute left-0 mt-2 w-64 rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200',
                      activeDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                    )}
                  >
                    {item.children?.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 bg-primary text-white px-4 py-2 rounded-full hover:opacity-90 transition-all"
            >
              Consult Now →
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <div className="relative w-32 h-10">
                  <Image
                    src="/images/LOGO FOR SM.png"
                    alt="Digital 365 Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <span className="block -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                        {item.name}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                    {'children' in item && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-300 hover:bg-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export { Navbar };
