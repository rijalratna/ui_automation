import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routing'; // Ensure this is imported
import { provideServerRendering } from '@angular/platform-server'; // Add this if needed

const bootstrap = () => bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering(), // Include this if you still want SSR
    AppRoutingModule // Include the AppRoutingModule here
  ]
});

export default bootstrap;
