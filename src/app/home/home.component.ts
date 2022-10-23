import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 data:any=[
  {id:'1',name:'Ashwini'},
  {id:'2',name:'Amruta'},
  {id:'3',name:'Anushka'},
  {id:'4',name:'Anu'},
  {id:'5',name:'Abhijeet'},
  {id:'6',name:'Anjali'}

 ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
showdetails(x:any){
console.log(x);
    let id= x.id;
    let name = x.name;
    this.router.navigateByUrl(`Staff/${id}/${name}`);
}
}

