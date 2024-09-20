import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Ensure this is imported

// Bootstrap the application with the appConfig
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);