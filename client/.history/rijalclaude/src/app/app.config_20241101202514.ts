import { routes } from './app.routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Use the imported routes here
  exports: [RouterModule]
})
export class AppRoutingModule { }
