import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BackgroundComponent } from './components/background/background.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NgParticlesModule } from 'ng-particles';
import { MixpanelService } from './services/mixpanel.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BackgroundComponent,
    ProjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgParticlesModule],
  providers: [MixpanelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
