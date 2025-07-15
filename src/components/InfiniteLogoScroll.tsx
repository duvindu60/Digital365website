'use client';

import Image from 'next/image';

const logos = [
  { src: '/images/tech/odoo-logo.png', alt: 'Odoo', width: 120 },
  { src: '/images/tech/microsoft-logo.png', alt: 'Microsoft', width: 130 },
  { src: '/images/tech/Moodle-logo.png', alt: 'Moodle', width: 130 },
  { src: '/images/tech/uipath-logo.png', alt: 'UiPath', width: 130 },
  { src: '/images/tech/powerbi.png', alt: 'Power BI', width: 120 },
  { src: '/images/tech/azure.png', alt: 'Azure', width: 130 },
  { src: '/images/tech/aws-logo.png', alt: 'AWS', width: 120 },
  { src: '/images/tech/WordPress_blue_logo.png', alt: 'WordPress', width: 130 },
  { src: '/images/tech/tensorflow.svg', alt: 'TensorFlow', width: 130 },
  { src: '/images/tech/docker-logo.png', alt: 'Docker', width: 140 },
  { src: '/images/tech/github-logo.png', alt: 'GitHub', width: 120 },
  {
    src: '/images/tech/cisco-meraki-logo.png',
    alt: 'Cisco Meraki',
    width: 130,
  },
  { src: '/images/tech/Fortinet_logo.png', alt: 'Fortinet', width: 130 },
  {
    src: '/images/tech/Microsoft_Power_Automate.png',
    alt: 'Power Automate',
    width: 130,
  },
  { src: '/images/tech/N8n-logo.png', alt: 'n8n', width: 120 },
];

export function InfiniteLogoScroll() {
  return (
    <div className="relative flex overflow-hidden scrollbar-hide before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-black after:to-transparent">
      <div className="flex animate-scroll space-x-16 py-12">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex items-center justify-center w-40 h-32 p-4 transition-transform hover:scale-110"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={80}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
