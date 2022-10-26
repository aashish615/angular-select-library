import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'voomnow';
  data  =[
    'Ashish', 'Hritik','Atul','Rahul'
  ]
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSelect(e:any)
  {
    console.log("e",e)
  }

}
