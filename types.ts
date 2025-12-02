import React from 'react';

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  icon: React.ElementType;
  text: string;
}