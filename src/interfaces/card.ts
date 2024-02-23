export interface ICoordinates {
  lat: string;
  lng: string;
}

export interface IAddress {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: ICoordinates;
}

export interface ICompany {
  catchPhrase: string;
  name: string;
  bs: string;
}

export interface ICard {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: IAddress;
  company: ICompany;
  email: string;
}
