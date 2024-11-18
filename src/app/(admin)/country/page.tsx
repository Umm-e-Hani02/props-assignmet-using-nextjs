import Link from "next/link";

const Countries = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl p-8">List of Countries</h2>
      <ul className="space-y-4">
        <li className="text-lg py-2 bg-rose-700 rounded-lg w-[330px] duration-100 hover:scale-110 flex justify-center items-center">
          <Link href="/country/Pakistan">Pakistan</Link>
        </li>
        <li className="text-lg py-2 bg-rose-700 rounded-lg w-[330px] duration-100 hover:scale-110 flex justify-center items-center">
          <Link href="/country/Turkey">Turkey</Link>
        </li>
        <li className="text-lg py-2 bg-rose-700 rounded-lg w-[330px] duration-100 hover:scale-110 flex justify-center items-center">
          <Link href="/country/Korea">Korea</Link>
        </li>
        <li className="text-lg py-2 bg-rose-700 rounded-lg w-[330px] duration-100 hover:scale-110 flex justify-center items-center">
          <Link href="/country/Japan">Japan</Link>
        </li>
        <li className="text-lg py-2 bg-rose-700 rounded-lg w-[330px] duration-100 hover:scale-110 flex justify-center items-center">
          <Link href="/country/Switzerland">Switzerland</Link>
        </li>
      </ul>
    </div>
  );
};

export default Countries;
