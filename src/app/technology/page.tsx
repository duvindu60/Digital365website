'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { InfiniteLogoScroll } from '@/components/InfiniteLogoScroll';

const techPlatforms = [
  {
    name: 'Odoo ERP',
    logo: '/images/odoo-logo.png',
    description:
      'Custom implementation and configuration of Odoo to streamline business operations like finance, CRM, HR, inventory, and more—all in one unified platform.',
  },
  {
    name: 'Microsoft Ecosystem',
    logo: '/images/microsoft-logo.png',
    description:
      'Power BI – Interactive dashboards and data visualization\nAzure Cloud – Scalable cloud infrastructure\nMicrosoft 365 & Teams – Collaboration tools',
  },
  {
    name: 'Moodle LMS',
    logo: '/images/moodle-logo.png',
    description:
      'Custom deployment of Moodle for corporate and educational learning management systems that support growth and engagement.',
  },
];

export default function TechnologyPage() {
  const platformsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show scroll indicators on mobile devices
    const showScrollIndicators = () => {
      const container = platformsScrollRef.current;
      if (container && window.innerWidth < 768) {
        const hasOverflow = container.scrollWidth > container.clientWidth;
        container.classList.toggle('has-overflow', hasOverflow);
      }
    };

    window.addEventListener('resize', showScrollIndicators);
    showScrollIndicators();

    return () => window.removeEventListener('resize', showScrollIndicators);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/technologies.jpg"
            alt="Technology Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 md:to-transparent" />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Our Technology Solutions
            </h1>
            <p className="text-base md:text-xl text-gray-300">
              At Digital365, we leverage modern, enterprise-grade technologies to deliver robust
              digital solutions. From ERP systems and business intelligence to cloud infrastructure
              and automation, our technology stack ensures agility, security, and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-10 md:mb-16">
            Core Technologies & Platforms
          </h2>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {techPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="p-8 rounded-lg transition-transform hover:-translate-y-2"
              >
                <div className="h-40 mb-6">
                  <div className="relative w-full h-full">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{platform.name}</h3>
                {platform.name === 'Microsoft Ecosystem' ? (
                  <ul className="text-gray-400 list-disc list-inside space-y-2">
                    {platform.description.split('\n').map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">{platform.description}</p>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Scrollable View */}
          <div
            ref={platformsScrollRef}
            className="md:hidden flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Scroll Indicator */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 bg-gradient-to-l from-black to-transparent z-10 flex items-center justify-end pr-1 pointer-events-none opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white/70"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {techPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="flex-none w-[80%] snap-center bg-gray-900/50 p-6 rounded-lg shadow-lg"
              >
                <div className="h-24 mb-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{platform.name}</h3>
                {platform.name === 'Microsoft Ecosystem' ? (
                  <ul className="text-gray-400 text-sm list-disc list-inside space-y-1.5">
                    {platform.description.split('\n').map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm">{platform.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Scroll Animation */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black via-gray-900/90 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">
            Technologies We Use
          </h2>
          <div className="overflow-hidden">
            <InfiniteLogoScroll />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-10 md:mb-16">
            Benefits of Our Cutting-Edge Technology
          </h2>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Business Transformation</h3>
              <ul className="text-gray-400 space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>
                    Enhanced operational efficiency through automated workflows and integrated
                    systems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>
                    Improved decision-making with real-time data analytics and business intelligence
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Reduced operational costs through optimized resource utilization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Accelerated digital transformation with scalable cloud solutions</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Excellence</h3>
              <ul className="text-gray-400 space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>
                    Enhanced security with enterprise-grade protection and compliance measures
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>
                    Seamless integration capabilities across multiple platforms and systems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>
                    Future-proof architecture ensuring long-term scalability and adaptability
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Continuous innovation through AI and machine learning capabilities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-8">
            <div className="bg-gradient-to-br from-gray-900/80 to-black p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  1
                </span>
                Business Transformation
              </h3>
              <ul className="text-gray-400 space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Enhanced operational efficiency through automated workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Improved decision-making with real-time data analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Reduced operational costs through optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Accelerated digital transformation with cloud solutions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  2
                </span>
                Technical Excellence
              </h3>
              <ul className="text-gray-400 space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Enhanced security with enterprise-grade protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Seamless integration across multiple platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Future-proof architecture ensuring scalability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Continuous innovation through AI capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black to-[#3f0404]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals.
          </p>
          <button className="px-6 md:px-8 py-3 bg-primary text-white rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
            Get Started →
          </button>
        </div>
      </section>
    </div>
  );
}
