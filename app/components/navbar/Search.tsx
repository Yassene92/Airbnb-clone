
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="w-full py-2 transition border rounded-full shadow-sm cursor-pointer md:w-auto hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="px-6 text-sm font-semibold">anywhere</div>
        <div className="flex-1 hidden px-6 text-sm font-semibold text-center border-x sm:block">
          any week
        </div>
        <div className="flex items-center gap-3 px-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 text-white rounded-full bg-rose-500">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
