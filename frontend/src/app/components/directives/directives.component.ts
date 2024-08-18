import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataPipe } from '../../pipe/data.pipe';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,DataPipe],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  bgGreen:string='bg-primary'
  bgRed:string='bg-danger'

  users = [
    { id: 1, name: 'John Doe', address:"abc address",age: 30, isActive: true },
    { id: 2, name: 'Jane Doe', address:"abc address",age: 25, isActive: false },
    { id: 3, name: 'Jane test', address:"abc address",age: 25, isActive: true },
    { id: 4, name: 'janice Doe', address:"",age: 25, isActive: false },
  ]



  constructor() {

  }

}
