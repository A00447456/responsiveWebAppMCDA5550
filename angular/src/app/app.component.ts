import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mcda5550angular';

  constructor(private r:Router){

  }
  
  goTo(path:string){
    this.r.navigateByUrl(path);
  }
}
