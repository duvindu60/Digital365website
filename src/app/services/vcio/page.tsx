import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Strategic IT Leadership',
    description: 'Expert guidance to align technology with your business goals.',
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'Optimize your IT investments and reduce operational costs.',
  },
  {
    title: 'Technology Roadmap',
    description: 'Plan and implement future-proof technology solutions.',
  },
  {
    title: 'Risk Management',
    description: 'Identify and mitigate potential technology risks.',
  },
  {
    title: 'Cloud Strategy',
    description: 'Develop and execute effective cloud adoption strategies.',
  },
  {
    title: 'Security & Compliance',
    description: 'Ensure your systems meet industry standards and regulations.',
  },
  {
    title: 'Digital Innovation',
    description: 'Drive business growth through technological innovation.',
  },
  {
    title: 'Performance Monitoring',
    description: 'Track and optimize your IT infrastructure performance.',
  },
];

export default function VCIOPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-primary/20">
          <Image
            src="/services/vcio.svg"
            alt="vCIO Services"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in">
              Virtual CIO Services
            </h1>
            <p className="text-lg text-gray-300 animate-fade-in-up">
              Future-proof your business with strategic IT leadership and technology guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Every CEO Needs a vCIO</h2>
              <p className="text-gray-300 mb-8">
                In today's rapidly evolving technology landscape, having strategic IT leadership is
                crucial for business success. Our vCIO service provides the expertise and guidance
                you need to make informed technology decisions and drive digital transformation.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex items-start space-x-4 transition-all duration-300 ease-in-out hover:translate-x-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/services/vcio-features.svg"
                alt="vCIO Features"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-primary/20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your IT Strategy?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-full hover:opacity-90 transition-all"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
