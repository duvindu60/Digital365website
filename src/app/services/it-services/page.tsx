'use client';

import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Remote IT Support',
    description: 'Round-the-clock technical support and monitoring for your IT infrastructure.',
    icon: '🔧',
  },
  {
    title: 'Infrastructure Management',
    description:
      'Comprehensive management of your IT infrastructure, ensuring optimal performance.',
    icon: '🏗️',
  },
  {
    title: 'Staff Augmentation',
    description: 'Access to skilled IT professionals to supplement your existing team.',
    icon: '👥',
  },
  {
    title: 'Managed Services',
    description: 'End-to-end management of specific IT functions or entire IT operations.',
    icon: '⚙️',
  },
  {
    title: 'Cloud Services',
    description: 'Expert cloud migration, management, and optimization services.',
    icon: '☁️',
  },
  {
    title: 'Security Services',
    description: 'Comprehensive cybersecurity solutions to protect your digital assets.',
    icon: '🔒',
  },
];

const benefits = [
  'Cost-effective solutions',
  '24/7 support availability',
  'Access to expert resources',
  'Scalable IT operations',
  'Reduced operational risk',
  'Improved efficiency',
];

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/IT services outsource.jpg"
            alt="IT Services & Outsourcing"
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
              IT Services & Outsourcing
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Enhance your IT capabilities with our comprehensive outsourcing solutions. Get access
              to expert resources, 24/7 support, and cost-effective IT management.
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our IT Services</h2>
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
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Service Approach</h2>
            <p className="text-gray-300 mb-12">
              We follow a systematic approach to IT service delivery, ensuring high quality,
              reliability, and continuous improvement in all our engagements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Service Delivery</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Requirements analysis
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Service level agreements
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Resource allocation
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Performance monitoring
                </li>
              </ul>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Quality Assurance</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Regular audits
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Continuous improvement
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Best practices
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Customer feedback
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
            Benefits of IT Outsourcing
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
