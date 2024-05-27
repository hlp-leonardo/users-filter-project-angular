import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  foods = [
    {
      value: 'Ex. 1',
      viewValue: 'Ex.1'
    }
  ]
}
