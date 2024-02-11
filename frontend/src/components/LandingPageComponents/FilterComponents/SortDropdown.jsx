import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const SortDropdown = () => {
  const options = [
    "Alphabetical (A-Z)",
    "Alphabetical (Z-A)",
    "Overall Rating",
    "Enjoyability",
    "Usefulness",
    "Manageability"
  ];

  const [selectedOption, setSelectedOption] = useState("Sort By");
  
  return (
    <div className="w-5/6 mt-4">
      <div className="flex-1 min-w-[150px] max-w-[200px] xs:min-w-full z-10 relative">
        <Listbox value={selectedOption} onChange={setSelectedOption}>
          <div className="relative">
            <Listbox.Button className="relative flex items-center justify-between gap-2 w-full cursor-pointer bg-white py-2 px-4 text-left border border-[#989898] border-opacity-1 rounded-md shadow-review-card aria-expanded:border-b-transparent aria-expanded:rounded-b-none">
              <span className="block truncate">{selectedOption}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <svg
                  className="absolute pointer-events-none right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#4A5568"/>
                </svg>
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 max-h-[10.05rem] text-left w-full overflow-auto border border-[#989898] border-opacity-1 rounded-md bg-white shadow-dropdown border-t-0 rounded-t-none">
                {options.map((op) => (
                  <Listbox.Option
                    key={op}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 px-4 bg-white ${
                        active ? 'bg-[#999999]/20 text-bold' : 'text-gray-900'
                      }`
                    }
                    value={op}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected  ? 'font-bold' : 'font-normal'
                          }`}
                        >
                          {op}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default SortDropdown;
