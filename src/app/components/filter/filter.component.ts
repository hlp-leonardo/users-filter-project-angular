import { Component, EventEmitter, Output } from '@angular/core';
import { FilterOptionInterface } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  filterOptions: FilterOptionInterface = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  };

  statusList = [
    { description: 'Active', value: true },
    { description: 'Inactive', value: false }
  ];

  @Output('onFilter') onFilterEmitt = new EventEmitter<FilterComponent>();

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }

}
