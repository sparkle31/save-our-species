import React from 'react';

import { useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';
import { Button } from '../../Elements/Button/Buttons';

import Header from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import ThanksSections from '../../Layouts/DetailDonation/ThanksSections';

const Finish = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-950 text-white-A700 min-h-screen font-ubuntu">
      <Header />
      <div className="py-[10%] px-[10%] lg:px-[5%] lg:py-[15%] md:py-[25%] sm:py-[30%] xs:py-[40%]">
        <div className="flex px-2 py-1">
          <Button
            onClick={() => navigate('/donation')}
          >
            <IconArrowLeft color="white" size={24} />
          </Button>
        </div>
        <div className="flex justify-center items-center gap-5 w-full md:flex-col">
          <ThanksSections />
        </div>
      </div>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Finish;
