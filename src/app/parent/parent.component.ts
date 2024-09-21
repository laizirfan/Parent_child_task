import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-parent',
  standalone: true, // Make the component standalone
  imports: [CommonModule, ChildComponent], // Import CommonModule and ChildComponent
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  users: User[] = [
    { id: 1, name: 'Aegon Targeryan', age: 30, email: 'aegon@gmail.com' },
    { id: 2, name: 'Walter White ', age: 50, email: 'walter@gmail.com' },
    { id: 3, name: 'Danerys', age: 24, email: 'danerys@gmail.com' }
  ];

  completedUserName: string = ''; // To store the name of the user who completed the task

  onCompleteTask(userName: string) {
    this.completedUserName = userName;
  }
}