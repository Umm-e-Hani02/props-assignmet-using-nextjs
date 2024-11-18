import Link from 'next/link';

type CountryDetailProps = {
    name: string;
    population: number;
    capital: string;
};

const CountryDetail: React.FC<CountryDetailProps> = ({ name, population, capital }) => {
    return (
        <div className="w-max py-8 m-auto font-bold text-white">
            <div className="text-4xl text-center text-white py-3">{name}</div>
            
            <div className="text-3xl py-4 m-5">Capital: {capital}</div>
            
            <div className="text-3xl py-4">Population: {population}</div>
            
            <button className="bg-rose-700 mt-10 ml-32 text-lg py-2 px-6 rounded-md duration-100 text-white hover:scale-110">
                <Link href="/country">Back</Link>
            </button>
        </div>
    );
};

export default CountryDetail;
