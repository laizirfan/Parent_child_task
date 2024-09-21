import { Component, Input, Output, EventEmitter } from '@angular/core';

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-child',
  standalone: true, // Make the component standalone
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() user: User | null = null; // User data passed from the parent
  @Output() taskCompleted = new EventEmitter<string>(); // Event to send the completed task name to the parent

  completeTask() {
    if (this.user) {
      this.taskCompleted.emit(this.user.name);
    }
  }
}
