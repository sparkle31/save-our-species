import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../Card/Card';
import { Input } from '../../Input/Input';
import { Button } from '../../Button/Buttons';
import { SelectBox } from '../../Select/Select';

const statusOptionsList = [
  { label: 'Resiko', value: 'Resiko' },
  { label: 'Terancam', value: 'Terancam' },
  { label: 'Terancam Kritis', value: 'Terancam Kritis' },
  { label: 'Punah', value: 'Punah' },
  { label: 'Hampir Terancam', value: 'Hampir Terancam' },
  { label: 'Hampir Punah', value: 'Hampir Punah' },
];

const ListCards = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [visibleData, setVisibleData] = useState(9);
  const [selectedButton, setSelectedButton] = useState();
  const [selectedValue, setSelectedValue] = useState('');
  const apiUrl = 'http://45.76.149.156/animals';

  const getAllData = () => {
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Fetch API
  useEffect(() => {
    if (searchTerm) {
      axios.get(`http://45.76.149.156/search?searchTerm=${searchTerm}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (filterTerm) {
      axios.get(`http://45.76.149.156/search?statusTerm=${filterTerm}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (filterTerm && searchTerm) {
      axios.get(`http://45.76.149.156/search?searchTerm=${searchTerm}&statusTerm=${filterTerm}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (!filterTerm && !searchTerm) {
      getAllData();
    }
  }, [searchTerm, filterTerm]);

  const handleButtonClick = () => {
    setSelectedButton();
    getAllData();
    setFilterTerm('');
    setSearchTerm('');
  };

  // eslint-disable-next-line no-shadow
  const handleStatusChange = (selectedValue) => {
    setSelectedValue(selectedValue); // Update the selected value
    setFilterTerm(selectedValue);
    setSelectedButton(null);
  };

  // Get Search Value
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSelectedButton(null);
  };

  // Limit 9 content at a time
  const handleShowMore = () => {
    setVisibleData((prevVisibleData) => prevVisibleData + 9);
  };

  return (
    <>
      <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('./images/animals-banner.png')" }}>
        <div className="max-w-sm sm:max-w-xs mx-auto pt-36 flex flex-col gap-8 p-4">
          <h1 className="text-center font-bold text-3xl md:text-2xl text-white-A700">Explore Protected Animal</h1>
          <Input type="search" onChange={handleSearch} isLabel={false} value={searchTerm} className="rounded-full border-gray-700 p-3 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-light_green-800 focus:border-transparent " placeholder="Search here..." />
        </div>
      </div>
      <div className="wrapper bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex flex-col gap-8 p-4">
          <div className="wrapper">
            <div className="filter flex gap-4 sm:gap-2 justify-start mt-6">
              <Button
                className={`Button text-black-900 rounded-full px-8 py-4 sm:px-4 sm:py-2 sm:text-sm xs:text-xs ${selectedButton !== null ? 'bg-light_green-800 text-white-A700' : 'bg-white-A700'}`}
                shape=""
                variant="fill"
                color=""
                size=" "
                onClick={handleButtonClick}
              >
                Semua
              </Button>
              <SelectBox
                options={statusOptionsList}
                className="rounded-full w-auto px-8 py-4 sm:px-4 sm:py-2 sm:text-sm xs:text-xs"
                onChange={handleStatusChange}
                value={selectedValue}
                size=" "
              />
              {searchTerm && (
              <Button
                className={`bg-light_green-800 text-center rounded-full px-8 py-4 sm:px-4 sm:py-2 sm:text-sm xs:text-xs truncate ${selectedButton === null ? 'bg-light_green-800 text-white-A700' : 'bg-white-A700'}`}
                onClick={() => setSearchTerm('')}
              >
                {searchTerm}
                <Button
                  className={'Button text-black-900 m-0 p-0 ml-2 text-white-A700 py-0 px-0'}
                  shape=""
                  variant="fill"
                  color=""
                  size=" "
                  onClick={() => setSearchTerm('')}
                >
                  x
                </Button>
              </Button>
              )}
              {filterTerm && (
              <Button
                className={`bg-light_green-800 text-center rounded-full px-8 py-4 sm:px-4 sm:py-2 sm:text-sm truncate ${selectedButton === null ? 'bg-light_green-800 text-white-A700' : 'bg-white-A700'}`}
                onClick={() => setFilterTerm('')}
              >
                {filterTerm}
                <Button
                  className={'Button text-black-900 m-0 p-0 ml-2 text-white-A700 py-0 px-0'}
                  shape=""
                  variant="fill"
                  color=""
                  size=" "
                  onClick={() => setFilterTerm('')}
                >
                  x
                </Button>
              </Button>
              )}
            </div>
          </div>
          <div className="listAnimals max-w-6xl sm:max-w-sm md:max-w-lg xl:max-w-7xl mx-auto sm:gap-x-4 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-24 gap-y-8 items-stretch sm:text-xs">
            {data.slice(0, visibleData).map((animal, index) => (
              <Card
              // eslint-disable-next-line react/no-array-index-key
                key={index}
                name={animal.namaHewan}
                backgroundImage={animal.gambarPortrait}
                description={animal.deskripsi}
                status={animal.status}
              // eslint-disable-next-line no-underscore-dangle
                idData={`animals/details/${animal._id}`}
                heightImage="pt-60 md:pt-40 sm:pt-20"
              />
            ))}
          </div>
          {data.length > visibleData && (
          <div className="text-center">
            <Button
              onClick={handleShowMore}
              className="Button bg-light_green-800 text-white-A700 hover:bg-light_green-800"
              shape="round"
              variant="fill"
              color=""
              size="md"
            >
              Show More
            </Button>
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ListCards;