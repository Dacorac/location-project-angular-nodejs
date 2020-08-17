import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ListLocationsComponent } from './components/list-locations/list-locations.component';
import { CreateLocationComponent } from './components/create-location/create-location.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-locations',
    pathMatch: 'full'
  },
  {
    path: 'list-locations',
    component: ListLocationsComponent
  },
  {
    path: 'create-location',
    component: CreateLocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
