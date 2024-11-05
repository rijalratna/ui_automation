import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideHttpClient } from '@angular/common/http';
import { provideForms } from '@angular/forms';
import { provideBrowserAnimations } from '@angular/platform-browser/animations';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(),
    provideForms(),
    provideBrowserAnimations()
  ]
};

export const config = mergeApplicationConfig(appConfig(), serverConfig);

// This function initializes your app config
function appConfig() {
  return {
    // Additional application-specific providers can be added here
  };
}
