'use client';

import { useState, useEffect } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

type Message = {
  id: string;
  text: string;
  isBot: boolean;
};

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! How can I help you today?',
    isBot: true,
  },
];

const services = [
  'IT Support',
  'Cloud Services',
  'Cybersecurity',
  'Digital Transformation',
  'Other',
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [contactInfo, setContactInfo] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text: service, isBot: false },
      {
        id: (Date.now() + 1).toString(),
        text: 'Would you like immediate help or schedule a call?',
        isBot: true,
      },
    ]);
    setShowContactForm(true);
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text: contactInfo, isBot: false },
      {
        id: (Date.now() + 1).toString(),
        text: 'Thank you! Our team will contact you shortly.',
        isBot: true,
      },
    ]);
    setContactInfo('');
    setShowContactForm(false);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          'fixed bottom-4 right-4 z-50 rounded-full bg-primary p-4 text-white shadow-lg transition-transform hover:scale-110',
          isOpen && 'scale-0'
        )}
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
      </button>

      {/* Chat window */}
      <div
        className={clsx(
          'fixed bottom-4 right-4 z-50 w-96 rounded-lg bg-white shadow-xl transition-all duration-300',
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-lg bg-primary p-4">
          <h3 className="text-lg font-semibold text-white">Chat with us</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 text-white hover:bg-white/20"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={clsx(
                'mb-4 max-w-[80%] rounded-lg p-3',
                message.isBot ? 'bg-gray-100 text-gray-900' : 'bg-primary text-white ml-auto'
              )}
            >
              {message.text}
            </div>
          ))}

          {!selectedService && (
            <div className="grid gap-2">
              <p className="text-sm text-gray-500">Please select a service:</p>
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => handleServiceSelect(service)}
                  className="rounded-lg bg-gray-100 p-2 text-left text-sm hover:bg-primary hover:text-white"
                >
                  {service}
                </button>
              ))}
            </div>
          )}

          {showContactForm && (
            <form onSubmit={handleSubmitContact} className="mt-4">
              <input
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="Enter your email or phone number"
                className="w-full rounded-lg border p-2 text-sm"
                required
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-primary p-2 text-sm text-white hover:opacity-90"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
