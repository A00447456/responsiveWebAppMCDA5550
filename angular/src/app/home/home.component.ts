import { Component, OnInit } from '@angular/core';
import { University } from '../Models/university';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class HomeComponent implements OnInit {

  hosturl = 'http://dev.cs.smu.ca:8140';
  model:University=new University();
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model)
    this.http.post(this.hosturl + "/addUni", this.model).subscribe(res =>{}, err =>{
      alert("University record added successfully");
    });
  }

}
