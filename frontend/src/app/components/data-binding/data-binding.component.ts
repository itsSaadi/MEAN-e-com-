import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name: string = 'saad ishfaaq'
  inputType: string = 'text'
  isDisabled: boolean = false
  date: Date = new Date()
  age: number = 23
  ageBg: string = 'success'
  ageClasses: string = 'col-4 bg-success text-white'
  nameBg: string = 'primary'
  obj: userModal = {
    name: 'saad',
    age: 22,
    isMarried: false,
  }

  data: any = this.giveArray

  constructor(private router:Router) {

  }
  giveArray(params: any) {
    debugger
    let users
    return users = [
      {
        name: 'saad',
        age: 22,
        isMarried: false,
      }
    ]

  }

  handler(event: any) {
    this.name !== event ? this.name = event : this.name = this.data?.[0]?.name
  }


  routeHandler() {
this.router.navigateByUrl('two-way')
  }

}

export interface userModal {
  name: string,
  age: number,
  isMarried: boolean
}