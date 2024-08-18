export interface HawkerCentreProps {
  Name: string;
  ADDRESSSTREETNAME: string;
}

export interface FilterProps {
  hawkerCentre: string;
}

export interface SearchProps {
  searchParams: FilterProps;
}
