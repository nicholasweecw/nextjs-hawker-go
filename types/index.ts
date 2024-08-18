export interface HawkerCentreProps {
  X: number | string;
  Y: number | string;
  Name: number | string;
  description: number | string;
  ADDRESSBLOCKHOUSENUMBER: number | string;
  LATITUDE: number | string;
  STATUS: number | string;
  CLEANINGSTARTDATE: number | string;
  ADDRESSUNITNUMBER: number | string;
  ADDRESSFLOORNUMBER: number | string;
  NO_OF_FOOD_STALLS: number | string;
  HYPERLINK: number | string;
  REGION: number | string;
  LONGITUDE: number | string;
  INFO_ON_CO_LOCATORS: number | string;
  NO_OF_MARKET_STALLS: number | string;
  AWARDED_DATE: number | string;
  LANDYADDRESSPOINT: number | string;
  CLEANINGENDDATE: number | string;
  PHOTOURL: number | string;
  DESCRIPTION2: number | string;
  NAME2: number | string;
  ADDRESSTYPE: number | string;
  UPGRADING_STATUS: number | string;
  ADDRESSBUILDINGNAME: number | string;
  COMPLETION_DATE: number | string;
  LANDXADDRESSPOINT: number | string;
  ADDRESSSTREETNAME: number | string;
  ADDRESSPOSTALCODE: number | string;
  DESCRIPTION_MYENV: number | string;
  IMPLEMENTATION_DATE: number | string;
  ADDRESS_MYENV: number | string;
  INC_CRC: number | string;
  FMEL_UPD_D: number | string;
}

export interface FilterProps {
  hawkerCentre: string;
}

export interface SearchProps {
  searchParams: FilterProps;
}
