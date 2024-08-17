import { FilterProps } from "../types";
import Papa from "papaparse";

export async function fetchHawkerCentres(filters: FilterProps) {
  const { hawkerCentre } = filters;

  const response = await fetch(
    `https://data.gov.sg/api/action/datastore_search?resource_id=d_68a42f09f350881996d83f9cd73ab02f&q=${hawkerCentre}`,
    {
      method: "GET",
      headers: {},
    }
  );
  const data = await response.json();

  // const response = await fetch(
  //   "https://gist.githubusercontent.com/raphodn/eecc3d8f6a5a04793385f44aa8304e30/raw/61fe15113a75dbbd04539858732fad0d5df3ae1c/hawker-centres-kml.csv",
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/vnd.github.raw+json",
  //     },
  //   }
  // );

  // const data = Papa.parse(response);
  // console.log(response);

  // const data = await response.json();

  return data;
}
