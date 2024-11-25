import Footer from '@/app/component/organisms/Footer';
import Header from '@/app/component/organisms/Header';
import HomePage from '@/app/component/pages/Homepage';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <HomePage/>
      <Footer />
    </div>
  );
};

export default Home;
