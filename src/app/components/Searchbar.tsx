"use client";

import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { hawkerCentres } from "../constants";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const filteredHawkerCentres =
    query === ""
      ? hawkerCentres
      : hawkerCentres.filter((hawkerCentre) =>
          hawkerCentre
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="searchbar">
      <Combobox>
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
              {filteredHawkerCentres.length === 0 && query !== "" ? (
                <Combobox.Option value={query} className="search-option">
                  No results found
                </Combobox.Option>
              ) : (
                filteredHawkerCentres.map((hawkerCentre) => (
                  <Combobox.Option
                    key={hawkerCentre}
                    className={({ active }) =>
                      `relative search-option
                  ${active ? "bg-blue-600 text-white" : "text-gray-900"}`
                    }
                    value={hawkerCentre}
                  >
                    {hawkerCentre}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default Searchbar;
