import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes'; // Ensure this imports the routes
import { ApplicationConfig } from '@angular/core';

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use the imported routes
  exports: [RouterModule] // Export RouterModule for use in other modules
})
export class AppRoutingModule { } // Ensure this class is exported

// Define the application configuration
export const appConfig: ApplicationConfig = {
  providers: [] // You can add global providers here, if any
};
