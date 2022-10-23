import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'demo2';
  flag:boolean=true;

  constructor(private router:Router){

  }
  navigatetoStudent(){
    if(this.flag== true){
      // this.router.navigate(['Student']);
      this.router.navigateByUrl('Staff');
    }
    else{
      this.router.navigate(['error']);
    }
  }
    
  }

