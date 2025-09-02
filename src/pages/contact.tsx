'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './contact.module.css';
import GoogleMap from '@/components/GoogleMap';



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    comments: '',
  });

  const router = useRouter();

  const services = [
    'ERP & Automation Solutions',
    'Digital Transformation & Strategy',
    'Custom Software Development',
    'Data, AI/ML & Business Intelligence',
    'IT Services & Outsourcing',
    'Cloud & Network Monitoring Services',
    'Other',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // creating frontend only email sending form

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

    // Phone number validation: must be 10 digits
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(formData.phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  const formBody = new URLSearchParams({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    serviceType: formData.serviceType,
    comments: formData.comments,
    _captcha: "false",
  });

      try {
        const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });


    if (response.ok) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        comments: '',
      });
      router.push('/thank-you');
    } else {
      alert("Error submitting form.");
    }
  } catch (err) {
    console.error("Submit error:", err);
    alert("Error submitting form.");
  }
};


  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px] bg-gradient-to-b from-black to-transparent">
        <div className="absolute inset-0 bg-black/70 md:bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 pt-[100px] md:pt-0">Contact Us</h1>
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <a href="/" className="hover:text-red-500">
                Home
              </a>
              <span className="mx-2">/</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {/* Contact Form - COMMENTED OUT */}
          {/* <div className="bg-[#111] p-5 md:p-8 rounded-lg shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 lg:hidden">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-1 md:mb-2 text-sm md:text-base"
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white text-sm md:text-base ${styles.formInput}`}
                  placeholder="Add Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-1 md:mb-2 text-sm md:text-base"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white text-sm md:text-base ${styles.formInput}`}
                  placeholder="Add email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-300 mb-1 md:mb-2 text-sm md:text-base"
                >
                  Phone Number *
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onInput={e => {
                      // @ts-ignore
                      e.target.value = e.target.value.replace(/\D/g, '');
                    }}
                    className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white text-sm md:text-base ${styles.formInput}`}
                    placeholder="Add Phone Number"
                    required
                  />
                </div>
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-gray-300 mb-1 md:mb-2 text-sm md:text-base"
                >
                  Service Type
                </label>
                <div className="relative">
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white appearance-none cursor-pointer text-sm md:text-base ${styles.formInput}`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="comments"
                  className="block text-gray-300 mb-1 md:mb-2 text-sm md:text-base"
                >
                  Comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className={`w-full px-3 md:px-4 py-2.5 md:py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white h-24 md:h-32 text-sm md:text-base ${styles.formInput}`}
                  placeholder="Add Comments"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition duration-300 text-sm md:text-base font-medium shadow-lg"
              >
                Submit Form
              </button>
            </form>
          </div> */}

          {/* Contact Info and Map */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#111] p-5 md:p-8 rounded-lg shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Contact Information
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="text-red-500 flex-shrink-0 p-1 bg-red-500/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm md:text-base">Address</h4>
                    <p className="text-gray-400 text-sm">DIGITAL 365 (PVT) LTD
NO 31, LAYARDS ROAD, COLOMBO 05, SRI LANKA.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="text-red-500 flex-shrink-0 p-1 bg-red-500/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm md:text-base">Phone</h4>
                    <p className="text-gray-400 text-sm">+94 77 266 2064</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="text-red-500 flex-shrink-0 p-1 bg-red-500/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm md:text-base">Email</h4>
                    <p className="text-gray-400 text-sm">shiral@digital365.group</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="w-full h-[250px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
              <GoogleMap className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
