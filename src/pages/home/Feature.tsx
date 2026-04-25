import React from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  iconBgColor: string;
  iconTextColor: string;
  icon: React.ReactNode;
}

const featuresData: Feature[] = [
  {
    id: 'best-price',
    title: 'Best Price Guarantee',
    description: "Find a lower price? We'll match it and give you a voucher for your next trip.",
    iconBgColor: 'bg-[#d8e2f4]',
    iconTextColor: 'text-[#1a56db]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <circle cx="7" cy="7" r="1"></circle>
      </svg>
    ),
  },
  {
    id: 'global-support',
    title: '24/7 Global Support',
    description: 'Our world-class support team is here to help you anywhere, anytime in 40+ languages.',
    iconBgColor: 'bg-[#ebd5da]',
    iconTextColor: 'text-[#9f1239]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2a8 8 0 0 0-8 8v2a2 2 0 0 0 2 2h2v-5a4 4 0 0 1 8 0v5h2a2 2 0 0 0 2-2v-2a8 8 0 0 0-8-8z"></path>
        <path d="M9 12v3"></path>
        <path d="M15 12v3"></path>
        <path d="M12 17v4"></path>
        <path d="M9 21h6"></path>
      </svg>
    ),
  },
  {
    id: 'flexible-booking',
    title: 'Flexible Booking',
    description: 'Life happens. Most of our properties offer free cancellation for peace of mind.',
    iconBgColor: 'bg-[#e5dac9]',
    iconTextColor: 'text-[#78350f]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <line x1="10" y1="16" x2="14" y2="16"></line>
        <line x1="12" y1="14" x2="12" y2="18"></line>
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8">
        {featuresData.map((feature) => (
          <div 
            key={feature.id} 
            // CHANGED: Adjusted padding (py-6 px-8) and width constraints (min-w-[300px] max-w-[400px])
            className="bg-[#E9E9E9] rounded-2xl py-6 px-8 text-center flex-1 min-w-[300px] max-w-[400px] flex flex-col items-center justify-center"
          >
            {/* Icon Wrapper */}
            <div 
              // CHANGED: Tightened bottom margin from mb-6 to mb-4
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${feature.iconBgColor} ${feature.iconTextColor}`}
            >
              {feature.icon}
            </div>
            
            {/* Header */}
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] leading-[28px] text-[#191C22] mb-2 text-center">
              {feature.title}
            </h3>
            
            {/* Subheader */}
            <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] leading-[20px] text-[#424753] text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
