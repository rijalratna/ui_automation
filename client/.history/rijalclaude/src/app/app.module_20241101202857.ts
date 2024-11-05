import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.config';  // This should import the AppRoutingModule
import { AppComponent } from './app.component';
// Import other components as necessary

@NgModule({
  declarations: [
    AppComponent,
    // Declare other components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Import your routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
