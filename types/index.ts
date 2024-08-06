export interface HawkerCentreProps {
  _id: number;
  name_of_centre: string;
  location_of_centre: string;
  type_of_centre: string;
  owner: string;
  no_of_stalls: string;
  no_of_cooked_food_stalls: string;
  no_of_mkt_produce_stalls: string;
}

export interface FilterProps {
  hawkerCentre: string;
}

export interface SearchProps {
  searchParams: FilterProps;
}
