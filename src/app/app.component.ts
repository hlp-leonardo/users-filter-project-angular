import { Component, OnInit } from '@angular/core';
import { UserInterface } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'users-filter-project';

  usersList: UserInterface[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList
    }, 1);      
  }

  userSelected: UserInterface = {} as UserInterface;

  showUserDetails: boolean = false;

  onUserSelected(user: UserInterface) {
    this.userSelected = user;
    this.showUserDetails = true;
  }
}
