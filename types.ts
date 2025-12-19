
// Import React to provide the React namespace for ReactNode type reference.
import React from 'react';

export type Section = 'home' | 'product' | 'vision' | 'contact';

export interface NavItem {
  id: Section;
  label: string;
}

export interface EcosystemCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}
