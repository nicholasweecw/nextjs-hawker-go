import React from "react";
import { fetchHawkerCentres } from "../../../utils";
import { HawkerCard } from "../components";

const SearchPage = async () => {
  const response = await fetchHawkerCentres();

  const allHawkerCentres = response.result.records;

  const isDataEmpty =
    !Array.isArray(allHawkerCentres) ||
    allHawkerCentres.length < 1 ||
    !allHawkerCentres;

  return (
    <>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allHawkerCentres?.map((hawker) => (
              <HawkerCard key={hawker.name_of_centre} hawkerCentre={hawker} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allHawkerCentres?.message}</p>
        </div>
      )}
    </>
  );
};

export default SearchPage;
