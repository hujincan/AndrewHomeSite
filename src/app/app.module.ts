import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ChipSkillButtonComponent } from './chip-skill-button/chip-skill-button.component';
import { AndFeaturesComponent } from './and-features/and-features.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { ProjectTilesComponent } from './project-tiles/project-tiles.component';

@NgModule({
    declarations: [
        AppComponent,
        ActionBarComponent,
        ChipSkillButtonComponent,
        AndFeaturesComponent,
        SkillBarComponent,
        AndFeaturesComponent,
        ProjectTilesComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
