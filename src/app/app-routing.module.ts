import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalComponentComponent } from './animals/animal-component.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'about',component:AboutUsComponent},
  {path:'',component:HomeComponent},
  {path:'animals',component:AnimalComponentComponent},
  {path:'animals/:id',component:AnimalDetailsComponent},

  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
