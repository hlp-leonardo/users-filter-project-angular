import { Pipe, PipeTransform } from '@angular/core';
import { AddressInterface } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: AddressInterface): string {
    const INVALID_ADDRESS = 
      !address || 
      !address.street || 
      !address.city || 
      !address.state 
      address.number === null || address.number === undefined;
    if(INVALID_ADDRESS) {
      return 'Invalid address.'
    }

    return `${address.street}, ${address.number}, ${address.city}, ${address.state}`;
  }

}
