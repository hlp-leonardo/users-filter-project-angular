import { AddressInterface } from "./address.interface";
import { StatusInterface } from "./status.interface";

export interface UserInterface {
    name: string;
    email: string;
    password: string;
    age: number;
    address: AddressInterface;
    phone: string;
    active: boolean;
    role: string;
    registrationDate: string;
    status: StatusInterface;
}
