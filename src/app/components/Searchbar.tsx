"use client";

import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
// import { hawkerCentres } from "../constants";
import allHawkerCentres from "../constants/csvjson.json";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const [hawkerCentre, setHawkerCentre] = useState("");

  const [query, setQuery] = useState("");

  const router = useRouter();

  // const filteredHawkerCentres =
  //   query === ""
  //     ? allHawkerCentres
  //     : allHawkerCentres.filter((hawker) =>
  //         hawker.Name.toLowerCase()
  //           .replace(/\s+/g, "")
  //           .includes(query.toLowerCase().replace(/\s+/g, ""))
  //       );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (hawkerCentre.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(hawkerCentre.toLowerCase());
  };

  const updateSearchParams = (hawkerCentre: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'hawkerCentre' search parameter based on the 'hawkerCentre' value
    if (hawkerCentre) {
      searchParams.set("hawkerCentre", hawkerCentre);
    } else {
      searchParams.delete("hawkerCentre");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `search?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <Combobox value={hawkerCentre} onChange={setHawkerCentre}>
        <div className="relative w-full">
          {/* Input field for searching */}
          <Combobox.Input
            className="search-input"
            placeholder="Search for hawker centres..."
            displayValue={(hawkerCentre: string) => hawkerCentre}
            onChange={(e) => setQuery(e.target.value)} // Update the search query
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >
            <Combobox.Options>
              {query !== "" ? (
                <Combobox.Option
                  value={query}
                  className={({ active }) =>
                    `relative search-option
              ${active ? "bg-blue-600 text-white" : "text-gray-900"}`
                  }
                >
                  {query}
                </Combobox.Option>
              ) : (
                <Combobox.Option value={query} className="search-option">
                  No results found
                </Combobox.Option>
              )}
              {/* {filteredHawkerCentres.length === 0 && query !== "" ? (
                <Combobox.Option value={query} className="search-option">
                  No results found
                </Combobox.Option>
              ) : (
                filteredHawkerCentres.map((hawker) => (
                  <Combobox.Option
                    key={hawker.Name}
                    className={({ active }) =>
                      `relative search-option
                  ${active ? "bg-blue-600 text-white" : "text-gray-900"}`
                    }
                    value={hawker.Name}
                  >
                    {hawker.Name}
                  </Combobox.Option>
                ))
              )} */}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </form>
  );
};

export default Searchbar;
