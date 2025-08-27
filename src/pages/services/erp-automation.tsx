'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: 'Odoo ERP Integration',
    description:
      'Seamless implementation and customization of Odoo ERP for comprehensive business management.',
    icon: '🔄',
  },
  {
    title: 'Process Automation',
    description:
      'Streamline workflows and reduce manual tasks with intelligent automation solutions.',
    icon: '⚡',
  },
  {
    title: 'Custom Module Development',
    description: 'Tailor-made Odoo modules designed to meet your specific business requirements.',
    icon: '💻',
  },
  {
    title: 'System Integration',
    description:
      'Connect your ERP with other business systems for seamless data flow and operations.',
    icon: '🔗',
  },
  {
    title: 'Business Process Optimization',
    description:
      'Analyze and improve your business processes for maximum efficiency and productivity.',
    icon: '📈',
  },
  {
    title: 'Training & Support',
    description: 'Comprehensive training and ongoing support to ensure successful ERP adoption.',
    icon: '🎯',
  },
];

const benefits = [
  'Streamlined operations',
  'Improved efficiency',
  'Real-time business insights',
  'Cost optimization',
  'Enhanced productivity',
  'Better decision making',
];

export default function ERPAutomationPage() {
  const featuresScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setup scroll indicators for mobile view
    const showScrollIndicators = () => {
      const container = featuresScrollRef.current;
      if (container && window.innerWidth < 768) {
        const hasOverflow = container.scrollWidth > container.clientWidth;
        container.classList.toggle('has-overflow', hasOverflow);
      }
  
         AOS.init({ duration: 1000 });
      
    };

    window.addEventListener('resize', showScrollIndicators);
    showScrollIndicators();

    return () => window.removeEventListener('resize', showScrollIndicators);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ERP & Automation Solutions.png"
            alt="ERP & Automation Solutions"
            fill
            className="object-cover opacity-75"
            priority
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 md:from-black/60 md:via-black/50 md:to-black/60" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 data-aos= "fade-up"
                     data-aos-delay="100" className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              ERP & Automation Solutions
            </h1>
            <p data-aos="fade-up"
                     data-aos-delay="200" className="text-base md:text-xl text-gray-200 mb-6 md:mb-8">
              Transform your business operations with our comprehensive ERP solutions and
              intelligent automation. Streamline processes, improve efficiency, and drive growth
              with cutting-edge technology.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium text-white bg-primary rounded-full hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 data-aos= "fade-up"
                     data-aos-delay="300" className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">
            Our ERP & Automation Services
          </h2>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-800 hover:border-primary transition-all"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile Scrollable Features */}
          <div
            ref={featuresScrollRef}
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

            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-none w-[80%] snap-center bg-gradient-to-br from-gray-900 to-black p-5 rounded-lg border border-gray-800"
              >
                <span className="text-3xl mb-3 block">{feature.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black via-gray-900/90 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 data-aos= "fade-up"
                     data-aos-delay="100" className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8">
              Our Implementation Approach
            </h2>
            <p data-aos= "fade-up"
                     data-aos-delay="200" className="text-sm md:text-base text-gray-300 mb-8 md:mb-12">
              We follow a systematic approach to ERP implementation and automation, ensuring smooth
              transition and maximum business value. Our methodology focuses on your specific needs
              while maintaining industry best practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto">
            <div className="bg-black/50 p-5 md:p-6 rounded-lg border border-gray-800 shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 flex items-center">
                <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 md:hidden">
                  1
                </span>
                ERP Implementation
              </h3>
              <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Business process analysis
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Custom configuration
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Data migration
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  User training
                </li>
              </ul>
            </div>
            <div className="bg-black/50 p-5 md:p-6 rounded-lg border border-gray-800 shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 flex items-center">
                <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 md:hidden">
                  2
                </span>
                Automation Solutions
              </h3>
              <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Workflow automation
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Process optimization
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Integration setup
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Performance monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 data-aos= "fade-up"
                     data-aos-delay="100" className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-12 text-center">
            Benefits of Our Services
          </h2>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-gray-900 to-black rounded-lg"
              >
                <span className="text-primary mr-3">✓</span>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Mobile List */}
          <div className="md:hidden space-y-3 max-w-lg mx-auto bg-gradient-to-br from-gray-900/50 to-black p-5 rounded-lg shadow-lg">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <span className="text-primary mr-3 bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-300 text-sm">{benefit}</span>
              </div>
            ))}
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
