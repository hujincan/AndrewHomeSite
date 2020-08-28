import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionBarComponent } from './home/action-bar/action-bar.component';
import { ChipSkillButtonComponent } from './home/chip-skill-button/chip-skill-button.component';
import { AndFeaturesComponent } from './home/and-features/and-features.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SkillBarComponent } from './home/skill-bar/skill-bar.component';
import { ProjectTilesComponent } from './home/project-tiles/project-tiles.component';
import {MatDividerModule} from '@angular/material/divider';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { JumpIconsComponent } from './home/jump-icons/jump-icons.component';

@NgModule({
    declarations: [
        AppComponent,
        ActionBarComponent,
        ChipSkillButtonComponent,
        AndFeaturesComponent,
        SkillBarComponent,
        AndFeaturesComponent,
        ProjectTilesComponent,
        HomeFooterComponent,
        JumpIconsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTooltipModule,
        MatDividerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
