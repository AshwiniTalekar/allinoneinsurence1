import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
StaffId:any;
StaffName:any;

constructor(private actRoute: ActivatedRoute) {

  // 1. Route Param (Direct Values)
  console.log(this.actRoute.snapshot.params);
   this.StaffId= this.actRoute.snapshot.params['id'];
  this.StaffName = this.actRoute.snapshot.params['name'];


  // // 2. Param Map (Obserrvable values)
  // console.log(this.actRoute.paramMap);
  // this.actRoute.paramMap.subscribe((res:any)=>{
  //   console.log(res);
  //   this.StaffId = res.params.id;
  //   this.StaffName= res.params.name;
  // });
}

  ngOnInit(): void {
  }
}
