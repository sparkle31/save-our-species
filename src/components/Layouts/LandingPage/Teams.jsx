import React, { useEffect } from 'react';
import { Text } from '../../Elements/Text/Texts';
import { List } from '../../Elements/List/List';
import { Img } from '../../Elements/Jumroton/Images';
import { initializeAOS } from '../../Fragments/AosInit/AosInits';

const Teams = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <>
      <Text
        className="mt-20 text-4xl sm:text-[32px] md:text-[34px] text-center text-deep_orange-300 xs:text-2xl sm:text-2xl"
        size="txtUbuntuRegular36"
        data-aos="zoom-in"
      >
        Team Capstone
      </Text>
      <Text
        className="mt-[13px] text-lg text-orange-50 text-center xs:text-base sm:text-base px-2"
        size="txtUbuntuRegular18"
        data-aos="zoom-in"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
      <List
        className="sm:flex-col px-5 flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-7xl mt-[79px] mx-auto md:px-5 w-full pb-[150px]"
        orientation="horizontal"
      >
        <div className="h-80 relative w-full" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
          <Img
            className="h-80 m-auto object-cover rounded-[20px] w-full"
            src="images/photos.png"
            alt="rectangle527"
          />
          <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
            <Text
              className="md:ml-[0] ml-[9px] text-base text-orange-50"
              size="txtUbuntuRegular16"
            >
              Khoirul Husein
              {' '}
            </Text>
            <Text
              className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 w-[92%] sm:w-full text-xs"
              size="txtUbuntuRegular12"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </div>
        </div>
        <div className="h-80 relative w-full" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
          <Img
            className="h-80 m-auto object-cover rounded-[20px] w-full"
            src="images/photos.png"
            alt="rectangle528"
          />
          <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
            <Text
              className="md:ml-[0] ml-[9px] text-base text-orange-50"
              size="txtUbuntuRegular16"
            >
              Salsa Maulidina Puteri
              {' '}
            </Text>
            <Text
              className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
              size="txtUbuntuRegular12"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </div>
        </div>
        <div className="h-80 relative w-full" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
          <Img
            className="h-80 m-auto object-cover rounded-[20px] w-full"
            src="images/photos.png"
            alt="rectangle529"
          />
          <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
            <Text
              className="md:ml-[0] ml-[9px] text-base text-orange-50"
              size="txtUbuntuRegular16"
            >
              Siti Rahmah
              {' '}
            </Text>
            <Text
              className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
              size="txtUbuntuRegular12"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </div>
        </div>
        <div className="h-80 relative w-full" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
          <Img
            className="h-80 m-auto object-cover rounded-[20px] w-full"
            src="images/photos.png"
            alt="rectangle530"
          />
          <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
            <Text
              className="md:ml-[0] ml-[9px] text-base text-orange-50"
              size="txtUbuntuRegular16"
            >
              Kevin Raihan Hidayat
              {' '}
            </Text>
            <Text
              className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
              size="txtUbuntuRegular12"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </div>
        </div>
        <div className="h-80 relative w-full" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
          <Img
            className="h-80 m-auto object-cover rounded-[20px] w-full"
            src="images/photos.png"
            alt="rectangle531"
          />
          <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
            <Text
              className="md:ml-[0] ml-[9px] text-base text-orange-50"
              size="txtUbuntuRegular16"
            >
              Agung Romadhon
              {' '}
            </Text>
            <Text
              className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
              size="txtUbuntuRegular12"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

export default Teams;
