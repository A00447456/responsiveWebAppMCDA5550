import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-university',
  templateUrl: './search-university.component.html',
  styleUrls: ['./search-university.component.scss']
})

export class SearchUniversityComponent implements OnInit {

  searchQuery:string='';
  hosturl = 'http://dev.cs.smu.ca:8140';
  displayedColumns: string[] = ['Name','Address','Phone','Delete'];
  rows:Array<any> | undefined;
  noRecord:boolean=false;
  resData:any[] | undefined;

  constructor(private http:HttpClient) {
    this.showAll();
  }

  showAll(){
    this.http.post(this.hosturl+'/getAllUniversities', this.searchQuery).subscribe(res =>{
      let resdata = JSON.stringify(res);
      let convData = JSON.parse(resdata);
      var resArr=[];
      for(var i in res){
        resArr.push(convData[i]);
      }
      console.log(resArr);
      this.rows=resArr;
      if(this.rows.length==0) this.noRecord=true;
      else this.noRecord=false;
    })
  }

  goDelete(name:string){
    console.log(name);
    let searchObject = new SearchObject(name);
    let conf = confirm("Are you sure you want to delete this record?");
    if(conf) this.http.post(this.hosturl+'/deleteUniversity', searchObject).subscribe(res =>{
      alert("Record has been deleted");
      this.showAll();
    })
    else return;
  }
  goSearch(){
      let searchObject = new SearchObject(this.searchQuery);
      this.http.post(this.hosturl+'/filterUniversities', searchObject).subscribe(res =>{
      let resdata = JSON.stringify(res);
      let convData = JSON.parse(resdata);
      var resArr=[];
      for(var i in res){
        resArr.push(convData[i]);
      }
      console.log(resArr);
      this.rows=resArr;
      if(this.rows.length==0) this.noRecord=true;
      else this.noRecord=false;
    }, err=>{
      alert(err);
    })
  }

  ngOnInit(): void {
  }

}

class SearchObject{
    Name:string | undefined;
    constructor(name:string){
      this.Name = name;
    }
}