import { FilterProps } from "../types";
import Papa from "papaparse";

export async function fetchHawkerCentres() {
  // const { hawkerCentre } = filters;

  const response = await fetch(
    `https://data.gov.sg/api/action/datastore_search?resource_id=d_bda4baa634dd1cc7a6c7cad5f19e2d68`,
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
