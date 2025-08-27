'use client';

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
      <p className="text-lg mb-8 text-center max-w-md">
        Your form has been successfully submitted. We will get back to you soon.
      </p>
      <Link
        href="/"
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
