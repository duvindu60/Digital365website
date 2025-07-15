'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const founders = [
  {
    name: 'Kushal Perera',
    role: 'CEO & Co-founder',
    image: '/images/team/founder1.jpg',
    description: 'Technology visionary with 15+ years of experience in digital transformation.',
  },
  {
    name: 'Stefan De Alwis',
    role: 'CTO & Co-founder',
    image: '/images/Ps Stefan 12.png',
    description: 'AI and machine learning expert with a passion for innovation.',
  },
  {
    name: 'Shiral Soysa',
    role: 'COO & Co-founder',
    image: '/images/team/founder3.jpg',
    description: 'Operations strategist specializing in business growth and scaling.',
  },
];

const sections = [
  {
    title: 'Our Mission',
    description:
      'To empower businesses through innovative digital solutions that drive growth, efficiency, and competitive advantage in the modern marketplace.',
    image: '/images/about/mission.jpg',
  },
  {
    title: 'Our Story',
    description:
      'Founded in 2020, Digital 365 emerged from a shared vision to bridge the gap between traditional business practices and cutting-edge technology solutions.',
    image: '/images/about/story.jpg',
  },
  {
    title: 'Our Vision',
    description:
      'To be the leading catalyst for digital transformation, helping businesses thrive in an increasingly connected and technology-driven world.',
    image: '/images/about/vision.jpg',
  },
  {
    title: 'Our Team',
    description:
      'A diverse group of passionate experts committed to delivering excellence and innovation in every project we undertake.',
    image: '/images/about/team.jpg',
  },
];

export default function About() {
  const foundersScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle mobile scroll indicators
    const showScrollIndicators = () => {
      const container = foundersScrollRef.current;
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
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering digital transformation through innovation, expertise, and dedication
          </p>
        </div>
      </section>

      {/* Co-founders Section - Mobile Scrollable */}
      <section className="py-10 md:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-12 text-center">
            Meet Our Co-founders
          </h2>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="group overflow-hidden">
                {/* Image Card with Gradient Square */}
                <div className="relative h-[500px] rounded-t-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                  {/* Dark Gray Gradient Square */}
                  <div className="absolute -bottom-8 -left-8 w-[120%] h-[120%] bg-gradient-to-br from-gray-800 to-gray-900 transform -rotate-6 z-0" />
                  <div className="absolute inset-0 z-10">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  </div>
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-20">
                    <h3 className="text-2xl font-bold mb-2 transform group-hover:translate-y-[-4px] transition-transform">
                      {founder.name}
                    </h3>
                    <p className="text-primary text-lg mb-4 transform group-hover:translate-y-[-4px] transition-transform">
                      {founder.role}
                    </p>
                  </div>
                </div>
                {/* Dark Gray Info Section */}
                <div className="bg-gray-900 p-6 rounded-b-lg relative z-10">
                  <p className="text-gray-300 text-sm leading-relaxed">{founder.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scrollable View */}
          <div
            ref={foundersScrollRef}
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

            {founders.map((founder) => (
              <div
                key={founder.name}
                className="flex-none w-[85%] snap-center group overflow-hidden"
              >
                {/* Image Card with Gradient Square */}
                <div className="relative h-[350px] rounded-t-lg overflow-hidden">
                  {/* Dark Gray Gradient Square */}
                  <div className="absolute -bottom-8 -left-8 w-[120%] h-[120%] bg-gradient-to-br from-gray-800 to-gray-900 transform -rotate-6 z-0" />
                  <div className="absolute inset-0 z-10">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, 33vw"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                  </div>
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white z-20">
                    <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-primary text-base mb-2">{founder.role}</p>
                  </div>
                </div>
                {/* Dark Gray Info Section */}
                <div className="bg-gray-900 p-5 rounded-b-lg relative z-10">
                  <p className="text-gray-300 text-sm leading-relaxed">{founder.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-10 md:py-16 px-4">
        <div className="container mx-auto">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 gap-12">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="group bg-gradient-to-br from-black to-gray-900 rounded-lg overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-gray-400">{section.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Stacked View */}
          <div className="md:hidden space-y-6">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="group bg-gradient-to-br from-black to-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-36 w-full">
                  <Image src={section.image} alt={section.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
            Join Us in Shaping the Digital Future
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
            Be part of our journey in transforming businesses through innovative digital solutions.
          </p>
          <button className="px-6 md:px-8 py-3 bg-primary text-white rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
            Get in Touch →
          </button>
        </div>
      </section>
    </div>
  );
}
