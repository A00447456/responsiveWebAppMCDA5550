import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchUniversityComponent } from './search-university/search-university.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchUniversityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
