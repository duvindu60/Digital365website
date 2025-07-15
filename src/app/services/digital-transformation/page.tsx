'use client';

import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Digital Strategy Development',
    description:
      'Create comprehensive digital roadmaps aligned with your business objectives and market trends.',
    icon: '🎯',
  },
  {
    title: 'Process Digitization',
    description:
      'Transform manual processes into efficient digital workflows for improved productivity.',
    icon: '⚡',
  },
  {
    title: 'Enterprise Architecture',
    description:
      'Design and implement scalable enterprise architecture for sustainable digital growth.',
    icon: '🏗️',
  },
  {
    title: 'Change Management',
    description:
      'Guide your organization through digital transformation with effective change management.',
    icon: '🔄',
  },
  {
    title: 'Digital Innovation',
    description:
      'Implement cutting-edge technologies to create competitive advantages in your market.',
    icon: '💡',
  },
  {
    title: 'Technology Consulting',
    description:
      'Expert guidance on selecting and implementing the right digital solutions for your needs.',
    icon: '🔍',
  },
];

const benefits = [
  'Enhanced competitiveness',
  'Improved customer experience',
  'Operational efficiency',
  'Data-driven decisions',
  'Innovation capabilities',
  'Future-ready operations',
];

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Digital Transformation & Strategy.jpg"
            alt="Digital Transformation & Strategy"
            fill
            className="object-cover opacity-75"
            priority
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Digital Transformation & Strategy
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your business for the digital age with our comprehensive digital
              transformation solutions. We help you navigate change, implement new technologies, and
              create sustainable competitive advantages.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-full hover:opacity-90 transition-all transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Digital Transformation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900/90 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Transformation Approach</h2>
            <p className="text-gray-300 mb-12">
              We take a holistic approach to digital transformation, ensuring that technology,
              processes, and people are aligned for successful change. Our methodology focuses on
              delivering measurable business value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Strategy & Planning</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Digital maturity assessment
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Technology roadmap
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Risk analysis
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Change management plan
                </li>
              </ul>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Implementation & Support</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Technology deployment
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Process optimization
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Staff training
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Continuous improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Benefits of Digital Transformation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
