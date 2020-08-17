import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateLocationComponent } from './components/create-location/create-location.component';
import { ListLocationsComponent } from './components/list-locations/list-locations.component';
import { LocationNamePipe } from './shared/pipes/location-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateLocationComponent,
    ListLocationsComponent,
    LocationNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
