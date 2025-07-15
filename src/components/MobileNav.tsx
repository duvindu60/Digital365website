'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Technology', href: '/technology' },
  { name: 'Who We Are', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    subItems: [
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

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Auto-close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Disable body scroll when menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Tech-inspired Hamburger Button */}
      <button
        className={`lg:hidden fixed top-4 right-4 z-50 p-3 rounded-xl transition-all duration-300 ${
          isOpen
            ? 'bg-primary/20 shadow-[0_0_15px_rgba(0,128,255,0.5)] rotate-180'
            : 'hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(0,128,255,0.3)]'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 relative flex flex-col justify-center items-center">
          <span
            className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </div>
      </button>

      {/* Overlay with blur effect */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Menu with enhanced styling */}
      <div
        className={`fixed top-0 right-0 w-[280px] h-full bg-black/95 backdrop-blur-md z-50 transform transition-all duration-500 ease-in-out lg:hidden
          ${isOpen ? 'translate-x-0 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]' : 'translate-x-full'}
          border-l border-gray-800/50`}
      >
        <div className="h-full overflow-y-auto py-20 px-6">
          <nav className="space-y-2">
            {navigationLinks.map((link) => (
              <div key={link.name} className="py-1">
                {link.subItems ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.name ? null : link.name)
                      }
                      className="w-full flex items-center justify-between py-2 text-gray-300 hover:text-white transition-all duration-300 hover:bg-primary/10 rounded-lg px-3"
                    >
                      <span>{link.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`pl-4 space-y-2 transition-all duration-300 ${
                        activeDropdown === link.name
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block py-2 px-3 rounded-lg transition-all duration-300 text-sm ${
                            pathname === subItem.href
                              ? 'text-primary bg-primary/10'
                              : 'text-gray-400 hover:text-white hover:bg-primary/5'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block py-2 px-3 rounded-lg transition-all duration-300 ${
                      pathname === link.href
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-300 hover:text-white hover:bg-primary/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="w-full text-center text-base font-semibold leading-6 bg-primary text-white px-4 py-3 rounded-full hover:opacity-90 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Consult Now &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { MobileNav };
