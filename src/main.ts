import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export const environment = {
  URL: 'http://localhost:8080/'
};

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
