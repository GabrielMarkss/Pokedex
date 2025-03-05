import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AbilityListComponent } from './app/app.component';

bootstrapApplication(AbilityListComponent, appConfig)
  .catch((err) => console.error(err));