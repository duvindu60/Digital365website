'use client';

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className }: GoogleMapProps) {
  return (
    <div className={className}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0522630247397!2d79.85981477448262!3d6.884343318865964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bc5917725a5%3A0x2d58ac78eeae17be!2s31%20Layards%20Rd%2C%20Colombo%2000500!5e0!3m2!1sen!2slk!4v1746010470309!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{
          border: 0,
          borderRadius: '8px',
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
