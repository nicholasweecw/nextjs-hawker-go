export async function fetchHawkerCentres() {
  const response = await fetch(
    "https://data.gov.sg/api/action/datastore_search?resource_id=d_68a42f09f350881996d83f9cd73ab02f",
    {
      method: "GET",
      headers: {},
    }
  );
  const data = await response.json();

  return data;
}
