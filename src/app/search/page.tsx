import React from "react";
import { fetchHawkerCentres } from "../../../utils";
import { HawkerCard, Searchbar } from "../components";
import { hawkerCentres } from "../constants";
import { SearchProps } from "../../../types";
import allHawkerCentres from "../constants/csvjson.json";

const SearchPage = async ({ searchParams }: SearchProps) => {
  const query = searchParams.hawkerCentre || "";

  const filteredHawkerCentres =
    query === ""
      ? allHawkerCentres
      : allHawkerCentres.filter((hawker) =>
          hawker.Name.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const isDataEmpty =
    !Array.isArray(filteredHawkerCentres) ||
    filteredHawkerCentres.length < 1 ||
    !filteredHawkerCentres;

  return (
    <>
      <div className="search-page__searchbar">
        <Searchbar />
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {filteredHawkerCentres?.map((hawker) => (
              <HawkerCard key={hawker.Name} hawkerCentre={hawker} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold ml-5 mt-5">
            Oops, no results
          </h2>
        </div>
      )}
    </>
  );
};

export default SearchPage;
