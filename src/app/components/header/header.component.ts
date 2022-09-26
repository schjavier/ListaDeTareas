import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title:string = 'Lista De Tareas';
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("lala");
  }

}
