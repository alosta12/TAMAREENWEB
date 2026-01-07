import React from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PricingTierProps {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  highlight?: boolean;
  ctaText: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}