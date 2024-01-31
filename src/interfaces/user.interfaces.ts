export interface IUserObj {
  contacts: IContactObj[];
  created_at: string;
  email: string;
  fullname: string;
  id: number;
  phone_number: string;
  updated_at: string;
}

export interface IContactObj {
  fullname: string;
  email: string;
  phone_number: string;
  id: number;
  created_at: string;
  updated_at: string;
}
