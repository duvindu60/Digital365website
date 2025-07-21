'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const founders = [
  {
    name: 'Kushal Perera',
    role: 'Executive Chairman',
    image: '/images/team/founder1.png',
    description: '30 years of experience in growing businesses into multi-million-dollar enterprises in the apparel export industry. Expertise spans over a spectrum of other diverse industries such as real estate, insurance, medical and wellness, tourism and hospitality, health foods, Agriculture and Digital transformation solutions.',
  },
  {
    name: 'Stefan De Alwis',
    role: 'Chief Executive Officer',
    image: '/images/team/founder2.png',
    description: 'Stefan has represented many renowned organizations in Sri Lanka such as Dusit International, ZingHR, Manipal Education and China Merchants Group (Fortune 500 Company) to name a few. Stefan attended Dulwich Prep London and then went on to complete his secondary education at Millfield School (UK). He has an extensive international experience across multiple sectors.',
  },
  {
    name: 'Shiral Soysa',
    role: 'Chief Operating Officer',
    image: '/images/team/founder3.png',
    description: '18 years of Experience in System implementation/BPR operations. Further Shiral has played a variety of roles in different capacities from Implementation Consultant to COO. He has successfully concluded implementations in 8 different countries for 12 different industries and managed 13 end to end ERP implementations/BPR projects in various capacities for SAP/IFS and Infor M3 ERPs.',
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
      'OUR VISION is to become a leading digital organization that leverages the latest technologies and innovative solutions.',
    image: '/images/about/vision.jpg',
  },
  {
    title: 'Our Team',
    description:
      'A diverse group of passionate experts committed to delivering excellence and innovation in every project we undertake.',
    image: '/images/about/team.jpg',
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technology and creative solutions.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Partnership',
    description: 'We build lasting relationships with our clients.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Clients Served' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
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
          <h1 data-aos="fade-up"
                     data-aos-delay="100" className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Who We Are
          </h1>
          <p data-aos="fade-up"
                     data-aos-delay="100" className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            we are dedicated to transforming businesses through smart, innovative digital solutions. Since our founding in 2020, our mission has been to bridge the gap between traditional business models and modern technology empowering organizations to grow, streamline operations, and stay ahead in a competitive landscape
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
                    {/* Image Card */}
                    <div className="relative h-[500px] rounded-t-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex items-center justify-center bg-gray-800">
                      {/* Optional: Background decoration */}
                      <div className="absolute -bottom-8 -left-8 w-[120%] h-[120%] bg-gradient-to-br from-gray-800 to-gray-900 transform -rotate-6 z-0" />

                      {/* Consistent-sized Image */}
                      <div className="relative w-full h-[500px] rounded-t-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                          <Image
                            src={founder.image}
                            alt={founder.name}
                            fill
                            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity z-10" />

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 p-6 text-white z-20">
                        <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                        <p className="text-primary text-lg">{founder.role}</p>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-4 flex-grow flex flex-col justify-start">
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
                    <div className="w-full h-[300px] flex items-center justify-center relative">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={240}
                        height={240}
                        className="object-contain max-h-full max-w-full"
                        priority
                      />
                    </div>
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
                    className="object-cover transition-transform duration-800 group-hover:scale-95"
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

       {/* Values Section */}
      <section className="py-20 bg-black/90">
        <div className="container">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-black/50 rounded-lg border border-gray-800 hover:border-primary transition-colors"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-black">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
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
          <Link href="/contact">
          <button className="px-6 md:px-8 py-3 bg-primary text-white rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
            Get in Touch →
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
