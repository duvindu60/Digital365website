'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: 'Data Visualization',
    description:
      'Interactive dashboards and reports using Power BI and Tableau for clear, actionable insights.',
    icon: '📊',
  },
  {
    title: 'Predictive Analytics',
    description:
      'Advanced analytics models to forecast trends and make data-driven decisions for your business.',
    icon: '📈',
  },
  {
    title: 'Machine Learning Solutions',
    description:
      'Custom ML models for automation and intelligent decision-making, tailored to your needs.',
    icon: '🤖',
  },
  {
    title: 'Business Intelligence',
    description:
      'Transform raw data into meaningful insights that drive strategic business decisions.',
    icon: '💡',
  },
  {
    title: 'Real-time Analytics',
    description:
      'Monitor and analyze data streams in real-time for immediate insights and actions.',
    icon: '⚡',
  },
  {
    title: 'AI Integration',
    description:
      'Seamlessly integrate AI capabilities into your existing business processes and applications.',
    icon: '🔄',
  },
];

const benefits = [
  'Data-driven decision making',
  'Improved operational efficiency',
  'Enhanced customer insights',
  'Predictive capabilities',
  'Automated analytics workflows',
  'Competitive advantage',
];

export default function DataAIPage() {

  useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/data analytics.jpg"
            alt="Data, AI/ML & Business Intelligence"
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
            <h1 
            data-aos="fade-up"
                     data-aos-delay="100" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Data, AI/ML & Business Intelligence
            </h1>
            <p 
            data-aos="fade-up"
                     data-aos-delay="200" className="text-xl text-gray-200 mb-8">
              Transform your business with advanced analytics, machine learning, and AI-powered
              insights. We help you harness the power of your data to drive innovation and growth.
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
          <h2 
          data-aos="fade-up"
                     data-aos-delay="100" className="text-3xl font-bold text-white mb-12 text-center">
            Our Data & AI Services
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
            <h2 
            data-aos="fade-up"
                     data-aos-delay="100" className="text-3xl font-bold text-white mb-8">Our Data-First Approach</h2>
            <p
             data-aos="fade-up"
                     data-aos-delay="200" className="text-gray-300 mb-12">
              We help organizations unlock the full potential of their data through advanced
              analytics and AI solutions. Our comprehensive approach ensures you get actionable
              insights that drive business success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Data collection & processing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Advanced analytics models
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Custom dashboards & reports
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Predictive modeling
                </li>
              </ul>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">AI/ML Solutions</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Machine learning models
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  AI integration services
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Automated workflows
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Performance optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 
          data-aos="fade-up"
                     data-aos-delay="100" className="text-3xl font-bold text-white mb-12 text-center">
            Benefits of Our Services
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
