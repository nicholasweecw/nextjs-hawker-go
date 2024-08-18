import React from "react";
import { fetchHawkerCentres } from "../../../utils";
import { HawkerCard, Searchbar } from "../components";
import { hawkerCentres } from "../constants";
import { SearchProps } from "../../../types";
import allHawkerCentres from "../constants/csvjson.json";

const SearchPage = async ({ searchParams }: SearchProps) => {
  // const response = await fetchHawkerCentres({
  //   hawkerCentre: searchParams.hawkerCentre || "",
  // });

  // const allHawkerCentres = response.result.records;

  const isDataEmpty =
    !Array.isArray(allHawkerCentres) ||
    allHawkerCentres.length < 1 ||
    !allHawkerCentres;

  return (
    <>
      <div className="search-page__searchbar">
        <Searchbar />
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allHawkerCentres?.map((hawker) => (
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
