
import React from 'react';
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import QuickActions from '@/components/QuickActions';
import NewsSection from '@/components/NewsSection';
import ProductsSection from '@/components/ProductsSection';
import ProjectsSection from '@/components/ProjectsSection';
import BirthdaysEvents from '@/components/BirthdaysEvents';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WelcomeSection />
      <QuickActions />
      <NewsSection />
      <ProductsSection />
      <ProjectsSection />
      <BirthdaysEvents />
      <Footer />
    </div>
  );
};

export default Index;
