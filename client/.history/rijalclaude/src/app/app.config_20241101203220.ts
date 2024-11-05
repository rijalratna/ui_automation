import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // Import Routes to define your routing
import { routes } from './app.routes';  // Import the defined routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Use the imported routes to configure the router
  exports: [RouterModule]  // Export RouterModule for use in other modules
})
export class AppRoutingModule { }  // Ensure this class is exported

// Example configuration object for your application
export const appConfig = {
  apiUrl: 'http://localhost:8080/api',  // Example API URL
  appTitle: 'Rijal Claude Application'   // Example application title
};
