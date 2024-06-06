import { Component, OnInit } from '@angular/core';
import { UserInterface } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { FilterOptionInterface } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'users-filter-project';

  usersList: UserInterface[] = [];
  usersListFiltered: UserInterface[] = [];
  userSelected: UserInterface = {} as UserInterface;
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = UsersList;
    }, 1);      
  }

  onUserSelected(user: UserInterface) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: FilterOptionInterface) {
    console.log(filterOptions);
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: FilterOptionInterface, usersList: UserInterface[]): UserInterface[] {
    let filteredList: UserInterface[] = [];
    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList)
    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList)
    return filteredList;
  }
  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: UserInterface[]): UserInterface[] {
    const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if(DATE_NOT_SELECTED) {
      return usersList;
    }

    const checkDateInterval = (user: UserInterface) => isWithinInterval(new Date(user.registrationDate), {
      start: startDate,
      end: endDate
    });

    const list_filtered = usersList.filter(checkDateInterval);
    return list_filtered;
  }

  filterUsersListByStatus(status: boolean | undefined, usersList: UserInterface[]): UserInterface[] {
    const STATUS_NOT_SELECTED = status === undefined;

    if(STATUS_NOT_SELECTED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.active === status);

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: UserInterface[]): UserInterface[] {
    const NAME_NOT_TYPPED = name === undefined;
    
    if(NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
  }

}
