import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { routes } from './app.routes';
import { CorrelationIdInterceptor } from './correlation-id.interceptor'; // Import the interceptor

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule // Import HttpClientModule
    ),
    provideZoneChangeDetection({ eventCoalescing: true }), // Existing configuration
    provideRouter(routes), // Existing routes
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorrelationIdInterceptor,
      multi: true, // Register the interceptor in the provider chain
    },
  ],
};
