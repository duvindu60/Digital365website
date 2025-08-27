'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CloudNetworkServices() {
  const features = [
    {
      title: '24/7 Network Monitoring',
      description:
        'Continuous monitoring of your network infrastructure with real-time alerts and proactive issue detection.',
      icon: '📊',
    },
    {
      title: 'Cloud Migration Strategy',
      description:
        'Expert guidance on cloud adoption, helping you choose the right cloud services and planning seamless migrations.',
      icon: '☁️',
    },
    {
      title: 'Performance Analytics',
      description:
        'Detailed insights into network performance, bandwidth utilization, and application behavior.',
      icon: '📈',
    },
    {
      title: 'Security Monitoring',
      description:
        'Continuous security monitoring with threat detection and immediate response protocols.',
      icon: '🔒',
    },
    {
      title: 'Cloud Cost Optimization',
      description:
        'Optimize your cloud spending with resource utilization analysis and cost-saving recommendations.',
      icon: '💰',
    },
    {
      title: 'Hybrid Cloud Management',
      description:
        'Unified monitoring and management of both on-premises and cloud infrastructure.',
      icon: '🔄',
    },
  ];

  const benefits = [
    'Proactive issue detection and resolution',
    'Reduced network downtime',
    'Optimized cloud resource utilization',
    'Enhanced security posture',
    'Cost-effective cloud operations',
    'Improved performance and reliability',
  ];

  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/network and cloud.jpg"
            alt="Cloud & Network Monitoring"
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
              Cloud & Network Monitoring Services
            </h1>
            <p 
            data-aos="fade-up"
                     data-aos-delay="200" className="text-xl text-gray-200 mb-8">
              Comprehensive monitoring solutions to ensure your network and cloud infrastructure
              performs at its best. We focus on proactive monitoring, optimization, and strategic
              guidance for cloud adoption.
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
            Our Monitoring & Cloud Services
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
            <h2 
            data-aos="fade-up"
                     data-aos-delay="100" className="text-3xl font-bold text-white mb-8">Our Monitoring-First Approach</h2>
            <p data-aos="fade-up"
                     data-aos-delay="200" className="text-gray-300 mb-12">
              We prioritize proactive monitoring over reactive problem-solving. Our comprehensive
              monitoring strategy helps identify and resolve potential issues before they impact
              your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Network Monitoring</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Real-time performance monitoring
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Bandwidth utilization tracking
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Application performance analysis
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Automated alert systems
                </li>
              </ul>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Advisory</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Cloud readiness assessment
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Migration strategy development
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Cost optimization guidance
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Security best practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 data-aos="fade-up"
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
