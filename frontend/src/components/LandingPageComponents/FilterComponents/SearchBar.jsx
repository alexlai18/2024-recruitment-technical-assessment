import { useState } from "react";
import SearchBarModal from "./SearchBarModal";

const SearchBar = () => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  return (
    <>
      <div className="flex w-5/6 items-center bg-white rounded border-2 border-[#9CADE9]" onClick={() => setOpenModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-unilectives-search mx-2">
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
        </svg>
        <input type="text" className="w-full py-2 px-3 text-sm text-unilectives-search focus:outline-none placeholder-unilectives-search font-medium" placeholder="Search for a course e.g. COMP1511" />
      </div>
      <SearchBarModal isOpen={openModal} setIsOpen={setOpenModal}/>
    </>
  )
}

export default SearchBar;