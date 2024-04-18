"use client";

import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="searchbar">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Input
            className="search-input"
            placeholder="Search for hawker centres..."
            displayValue={(hawkerCentre: string) => hawkerCentre}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="search-options">
              <Combobox.Option value="Nasi Lemak" />
              <Combobox.Option value="Char Kway Teow" />
              <Combobox.Option value="Hainanese Chicken Rice" />
              <Combobox.Option value="Laksa" />
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default Searchbar;
