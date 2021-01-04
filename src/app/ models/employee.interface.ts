export interface IEmployee {
  _id: string;
  name: string;
  birthDate: Date;
  email: string;
  phoneNumber: number;
  optionalPhoneNumber: number;
  // address
  curp: string;
  rfc: string;
  nss: string;
  // turn: Turn[];
  status: string;
}
