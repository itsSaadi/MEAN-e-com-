import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  bgGreen:string='bg-primary'
  bgRed:string='bg-danger'

  users = [
    { id: 1, name: 'John Doe', age: 30, isActive: true },
    { id: 2, name: 'Jane Doe', age: 25, isActive: false },
    { id: 3, name: 'Jane test', age: 25, isActive: true },
    { id: 4, name: 'janice Doe', age: 25, isActive: false },
    { id: 5, name: 'Jane Doe', age: 25, isActive: false },
    { id: 6, name: 'Bob Smith', age: 40, isActive: true },
    { id: 7, name: 'Alice Johnson', age: 35, isActive: false },
  ]



  constructor() {

  }

}
