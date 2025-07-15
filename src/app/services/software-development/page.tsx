'use client';

import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Web Applications',
    description: 'Custom web solutions built with modern technologies and frameworks.',
    icon: '🌐',
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
  },
  {
    title: 'Enterprise Solutions',
    description: 'Scalable enterprise software tailored to your business needs.',
    icon: '🏢',
  },
  {
    title: 'API Development',
    description: 'Robust and secure APIs for seamless system integration.',
    icon: '🔌',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design with modern interfaces and experiences.',
    icon: '🎨',
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing and quality assurance processes.',
    icon: '✅',
  },
];

const benefits = [
  'Customized solutions',
  'Scalable architecture',
  'Modern technologies',
  'Agile development',
  'Ongoing support',
  'Competitive advantage',
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Custom Software Development.jpeg"
            alt="Custom Software Development"
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
              Custom Software Development
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your business with custom software solutions designed specifically for your
              needs. From web applications to enterprise systems, we deliver innovative solutions.
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
            Our Development Services
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
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Development Approach</h2>
            <p className="text-gray-300 mb-12">
              We follow an agile development methodology that ensures high-quality, scalable
              solutions delivered on time and within budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Development Process</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Requirements analysis
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Architecture design
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Agile development
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Continuous integration
                </li>
              </ul>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Quality Assurance</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Automated testing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Code reviews
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Performance testing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Security audits
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
            Benefits of Custom Software
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
