import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import './polyfills';
//
// import {HttpClientModule} from '@angular/common/http';
// import {NgModule} from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatNativeDateModule} from '@angular/material/core';
// import {BrowserModule} from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
// import {ActionBarComponent, ActionBarDialogComponent} from './app/home/action-bar/action-bar.component';

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
// @NgModule({
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     FormsModule,
//     HttpClientModule,
//     AppModule,
//     MatNativeDateModule,
//     ReactiveFormsModule,
//   ],
//   entryComponents: [ActionBarComponent, ActionBarDialogComponent],
//   declarations: [ActionBarComponent, ActionBarDialogComponent],
//   bootstrap: [ActionBarComponent],
//   exports: [
//     ActionBarComponent
//   ],
//   providers: [
//     {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
//   ]
// })
// export class Main {}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
