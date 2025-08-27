'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: 'ERP & Automation Solutions',
    description: 'Streamline operations with Odoo ERP integration and smart process optimization.',
    href: '/services/erp-automation',
    icon: '🔄',
    bgImage: '/images/ERP & Automation Solutions.png',
  },
  {
    title: 'Digital Transformation & Strategy',
    description:
      'Transform your business with digital roadmaps and enterprise architecture consulting.',
    href: '/services/digital-transformation',
    icon: '💡',
    bgImage: '/images/Digital Transformation & Strategy.jpg',
  },
  {
    title: 'Custom Software Development',
    description:
      'Tailored solutions for web, mobile, and desktop applications with full SDLC support.',
    href: '/services/software-development',
    icon: '💻',
    bgImage: '/images/Custom Software Development.jpeg',
  },
  {
    title: 'Data, AI/ML & Business Intelligence',
    description:
      'Leverage data analytics, machine learning, and predictive systems for smarter decisions.',
    href: '/services/data-ai',
    icon: '🤖',
    bgImage: '/images/data analytics.jpg',
  },
  {
    title: 'IT Services & Outsourcing',
    description:
      'Comprehensive IT support, infrastructure management, and staff augmentation services.',
    href: '/services/it-services',
    icon: '🛠️',
    bgImage: '/images/IT services outsource.jpg',
  },
  {
    title: 'Cloud & Network Monitoring Services',
    description:
      'We design, implement, and manage secure, scalable network and cloud solutions tailored to your business needs.',
    href: '/services/cloud-network',
    icon: '☁️',
    bgImage: '/images/network and cloud.jpg',
  },
];

const partners = [
  { name: 'Partner 1', logo: '/partners/partner1.svg' },
  { name: 'Partner 2', logo: '/partners/partner2.svg' },
  { name: 'Partner 3', logo: '/partners/partner3.svg' },
  { name: 'Partner 4', logo: '/partners/partner4.svg' },
];

export default function Home() {
  // Organize services in two rows for better layout
  const topRowServices = services.slice(0, 3);
  const bottomRowServices = services.slice(3);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen md:bg-black">
      {/* Hero Section - Enhanced for better visibility on all devices */}
      <section className="relative min-h-[80vh] sm:min-h-[70vh] md:min-h-[65vh] pt-28 pb-16 md:py-32 overflow-hidden">
        {/* Desktop Background - Hidden on mobile */}
        <div className="absolute inset-0 hidden md:block">
          <div className="relative w-full h-full">
            <Image
              src="/images/LOGO FOR BG.png"
              alt="Digital 365 Background Logo"
              fill
              className="object-cover opacity-80"
              style={{ objectPosition: 'center center' }}
              priority
              sizes="100vw"
              quality={100}
            />
          </div>
          {/* Desktop gradient overlay */}
          {/* Vertical side gradients (left and right) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/40 via-transparent to-transparent" />
          </div>
          {/* Top-to-bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/65" />
        </div>

        {/* Mobile Background - Hidden on desktop */}
        <div className="absolute inset-0 md:hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/LOGO FOR BG.png"
              alt="Digital 365 Mobile Background Logo"
              fill
              className="object-contain opacity-80"
              style={{
                objectPosition: 'center 38%',
              }}
              priority
              sizes="100vw"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/0" />
          </div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Text content with enhanced visibility */}
            <div className="md:bg-transparent md:p-0 relative z-10 pt-12 md:pt-0 pb-28">
              {/* Semi-transparent backdrop for mobile only */}
              {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-lg -z-10 md:hidden"></div> */}

              <div className="p-6 md:p-0">
                <h1 data-aos="fade-up"
                     data-aos-delay="100"
                      className="text-3xl sm:text-5xl md:text-7xl font-bold mb-2 md:mb-2 text-white leading-tight drop-shadow-md">
                  Transform Your Business With
                </h1>
                <h2
                    data-aos="fade-up"
                     data-aos-delay="200"
                      className="text-3xl sm:text-5xl md:text-7xl font-bold text-primary mb-4 md:mb-8 leading-tight drop-shadow-md">
                  Digital Excellence
                </h2>
                <p 
                    data-aos="fade-up"
                     data-aos-delay="300"
                     className="text-lg md:text-2xl text-gray-200 mb-8 md:mb-8 drop-shadow-sm max-w-2xl mx-auto">
                  Empowering businesses to operate smarter, faster, and more efficiently in the
                  digital age
                </p>
                {/* Enhanced CTA button */}
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-primary rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
                >
                  Empower Your Business Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-800 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 data-aos="fade-up"
                     data-aos-delay="100" className="text-6xl font-bold text-white mb-4">Our Services</h2>
            <p data-aos="fade-up"
                     data-aos-delay="100" className="text-gray-300 text-2xl mb-8 md:mb-12 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to transform and elevate your business
            </p>
          </div>

          {/* Desktop View - Services Grid */}
          <div className="hidden md:block">
            {/* Top Row - 3 Cards */}
            <div className="max-w-7xl mx-auto mb-8">
              <div className="grid grid-cols-3 gap-8">
                {topRowServices.map((service) => (
                  <div key={service.title} className="flex justify-center">
                    <div className="w-full max-w-sm">
                      <Link
                        href={service.href}
                        className="group relative overflow-hidden rounded-lg bg-black backdrop-blur-sm border border-gray-800 hover:border-primary transition-all duration-500 hover:-translate-y-1 block h-full"
                      >
                        <div className="relative h-64">
                          <Image
                            src={service.bgImage}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-75"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/50" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{service.icon}</span>
                            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                          </div>
                          <p className="text-gray-300 mb-4">{service.description}</p>
                          <span className="inline-flex items-center text-primary group-hover:text-white transition-colors">
                            Learn more →
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - 3 Cards */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                {bottomRowServices.map((service) => (
                  <div key={service.title} className="flex justify-center">
                    <div className="w-full max-w-sm">
                      <Link
                        href={service.href}
                        className="group relative overflow-hidden rounded-lg bg-black backdrop-blur-sm border border-gray-800 hover:border-primary transition-all duration-500 hover:-translate-y-1 block h-full"
                      >
                        <div className="relative h-64">
                          <Image
                            src={service.bgImage}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-75"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/50" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{service.icon}</span>
                            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                          </div>
                          <p className="text-gray-300 mb-4">{service.description}</p>
                          <span className="inline-flex items-center text-primary group-hover:text-white transition-colors">
                            Learn more →
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View - Horizontal Scrollable Services */}
          <div className="md:hidden">
            <div
              className="overflow-x-auto -mx-4 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex px-4 space-x-4" style={{ minWidth: 'min-content' }}>
                {services.map((service) => (
                  <div key={service.title} className="flex-shrink-0 w-[280px]">
                    <Link
                      href={service.href}
                      className="group relative overflow-hidden rounded-lg bg-black backdrop-blur-sm border border-gray-800 hover:border-primary transition-all duration-300 block h-full"
                    >
                      <div className="relative h-48">
                        <Image
                          src={service.bgImage}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110 opacity-75"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/50" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">{service.icon}</span>
                          <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        </div>
                        <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center text-sm text-primary group-hover:text-white transition-colors">
                          Learn more →
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 data-aos="fade-up"
                     data-aos-delay="100" className="text-6xl font-bold text-white mb-4">Our Partners</h2>
            <p data-aos="fade-up"
                     data-aos-delay="200" className="text-gray-300 text-2xl mb-12 max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver excellence
            </p>
          </div>

          {/* Desktop View - Hidden on Mobile */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Microsoft 
            <div className="group relative w-full max-w-[250px] h-28 mx-auto rounded-xl overflow-hidden bg-white shadow-lg p-3
             transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
               data-aos="zoom-in">
                <Image
                  src="/images/microsoft-logo.png"
                  alt="Microsoft"
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  priority
                />
              </div> */}

            {/* Odoo */}
            <div
             className="group relative w-full max-w-[250px] h-28 mx-auto rounded-xl overflow-hidden bg-white shadow-lg p-3
             transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
               data-aos="zoom-in">
              <Image
                src="/images/odoo-logo.png"
                alt="Odoo"
                fill
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* New Zing */}
            <div className="group relative w-full max-w-[250px] h-28 mx-auto rounded-xl overflow-hidden bg-white shadow-lg p-3
             transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
               data-aos="zoom-in">
                <Image
                  src="/images/New-Zing-Logo.png"
                  alt="New Zing"
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  priority
                />
              </div>
            </div>
          

          {/* Mobile View - Horizontal Scrollable - Hidden on Desktop */}
                    <div
            className="md:hidden overflow-x-auto -mx-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            data-aos="fade-left"
          >
            <div className="flex space-x-10 items-center">
              {/* Microsoft 
              <div className="flex-shrink-0 group rounded-xl bg-white p-3 shadow-md hover:shadow-xl transition-all duration-300 min-w-[140px]">
                <div className="relative w-24 h-12 mx-auto">
                  <Image
                    src="/images/microsoft-logo.png"
                    alt="Microsoft"
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
                    priority
                  />
                </div>
              </div> */}

              {/* Odoo */}
              <div className="flex-shrink-0 group rounded-xl bg-white p-3 shadow-md hover:shadow-xl transition-all duration-300 min-w-[160px]">
                <div className="relative w-24 h-12 mx-auto">
                  <Image
                    src="/images/odoo-logo.png"
                    alt="Odoo"
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
                    priority
                  />
                </div>
              </div>

              {/* New Zing */}
              <div className="flex-shrink-0 group rounded-xl bg-white p-3 shadow-md hover:shadow-xl transition-all duration-300 min-w-[160px]">
                <div className="relative w-24 h-12 mx-auto">
                  <Image
                    src="/images/New-Zing-Logo.png"
                    alt="New Zing"
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
                    priority
                  />
                </div>
              </div>
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
          <Link href="/contact">
          <button className="px-6 md:px-8 py-3 bg-primary text-white rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
            Get Started →
          </button>
        </Link>
        </div>
      </section>
    </div>
  );
}
