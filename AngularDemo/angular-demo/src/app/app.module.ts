import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { HostListComponent } from './host-list/host-list.component';

@NgModule({
  declarations: [
    //AppComponent,
    HostListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HostListComponent]
})
export class AppModule { }
