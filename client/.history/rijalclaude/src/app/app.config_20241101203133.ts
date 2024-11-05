import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';  // Ensure this imports the routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Use the imported routes
  exports: [RouterModule]  // Export RouterModule for use in other modules
})
export class AppRoutingModule { }  // <-- Ensure this class is exported
export const appConfig = {
