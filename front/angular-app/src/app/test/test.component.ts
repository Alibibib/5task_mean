import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>Твоя роль: {{ role }}</h1>`
})
export class TestComponent implements OnInit {
  role: string = 'admin';

  ngOnInit(){
    console.log('Starting with role: ', this.role);
    debugger;
    console.log('Role adter debugging: ', this.role);
  }
}
