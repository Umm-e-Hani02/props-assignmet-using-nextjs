import Link from "next/link"; // Link import kiya gaya
import { CountryType } from "@/app/CountryType/type";

// capitalizeFirstLetter function define kiya gaya
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const CountriesName = ({ params }: { params: { country_name: string } }) => {
  const countryDetails: CountryType[] = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      population: 251269164,
    },
    {
      name: "Turkey",
      capital: "Ankara",
      population: 86172100,
    },
    {
      name: "Korea",
      capital: "Seoul",
      population: 51717590,
    },
    {
      name: "Japan",
      capital: "Tokyo",
      population: 123998000,
    },
    {
      name: "Switzerland",
      capital: "Bern",
      population: 8938611,
    }
  ];

  const country = countryDetails.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );

  if (!country) {
    return <h1 className="p-6 text-xl text-center">Country not found!!</h1>;
  }

  return (
    <div>
      {country ? (
        <>
          <h1 className="text-3xl p-5">{capitalizeFirstLetter(country.name)}</h1>
          <p className="text-2xl p-5">Capital: {country.capital}</p>
          <p className="text-2xl p-5">Population: {country.population}</p>
        </>
      ) : (
        <h1 className="flex flex-col items-center p-5 text-xl">Country not found!</h1>
      )}
      <div className="flex justify-center items-center">
        <Link href="/country">
          <button className="bg-rose-700 text-white py-2 px-4 rounded mt-24 hover:bg-rose-700 hover:scale-110 transition-all duration-300 ease-in-out">
            Back to Countries
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CountriesName;
