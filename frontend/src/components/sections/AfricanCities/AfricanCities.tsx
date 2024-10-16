import { getAfricanCountries } from '@services/apiService';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const AfricanCities: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<any | null>(null);
  const [selectedCity, setSelectedCity] = useState<any | null>(null);

  // Fetch African countries when the component loads
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAfricanCountries();
      setCountries(response);

      // Default to the first country and its first city
      if (response.length > 0) {
        setSelectedCountry(response[0]);
        if (response[0].cities.length > 0) {
          setSelectedCity(response[0].cities[0]);
        }
      }
    };
    fetchData();
  }, []);

  // Handler for selecting a country
  const handleCountrySelect = (country: any) => {
    setSelectedCountry(country);
    if (country.cities.length > 0) {
      setSelectedCity(country.cities[0]); // Select the first city of the selected country
    } else {
      setSelectedCity(null);
    }
  };

  // Handler for selecting a city
  const handleCitySelect = (city: any) => {
    setSelectedCity(city);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 lg:p-0">
      {/* Top Section: Countries List */}
      <div className="flex space-x-4 flex-wrap pb-4">
        {countries.map((country) => (
          <button
            key={country.id}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${
              selectedCountry?.id === country.id
                ? 'border-blue-600 bg-blue-100'
                : 'border-gray-300'
            }`}
            onClick={() => handleCountrySelect(country)}
          >
            <Image
              src={country.country_flag}
              alt={country.country_name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="font-medium">{country.country_name}</span>
          </button>
        ))}
      </div>

      {/* Middle Section: Cities List for the selected country */}
      {selectedCountry && selectedCountry.cities.length > 0 && (
        <div className="mt-6 border-t border-gray-300 w-full pt-4 pb-8">
          <div className="flex space-x-4">
            {selectedCountry.cities.map((city: any) => (
              <button
                key={city.id}
                className={`px-4 py-2 rounded-full border ${
                  selectedCity?.id === city.id
                    ? 'border-blue-600 bg-blue-100'
                    : 'border-gray-300'
                }`}
                onClick={() => handleCitySelect(city)}
              >
                {city.city_name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Section: City Details */}
      {selectedCity && selectedCity.contents.length > 0 && (
        <div className="mt-8 relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: Descriptions */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {selectedCity.contents[0].title}
            </h2>
            <div className="space-y-4">
              {selectedCity.contents[0].descriptions.map((desc: any) => (
                <p key={desc.id} className="text-lg text-gray-700">
                  {desc.paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Section: Images */}
          <div
            className={`grid grid-cols-${selectedCity.contents[0].images.length === 2 ? '2' : '1'} gap-4 items-center`}
          >
            {selectedCity.contents[0].images.map((img: any) => (
              <Image
                key={img.id}
                src={img.image}
                alt={`City Image ${img.id}`}
                width={500}
                height={300}
                className="rounded-lg shadow-md h-full max-h-[350px] object-cover"
              />
            ))}
          </div>
          <div className="absolute top-12 lg:top-32 -z-40 right-0 max-w-[500px] max-h-[300px] lg:max-w-[630px] lg:max-h-[400px] flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dbibjvyhm/image/upload/v1728132435/website/photos/about_us_vector_3_p0mihk.png"
              alt="Blob Overlay"
              width={510}
              height={360}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AfricanCities;