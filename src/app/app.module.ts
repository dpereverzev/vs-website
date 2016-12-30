import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { Ng2PageScrollModule } from 'ng2-page-scroll/src/ng2-page-scroll.module';

import { AppComponent } from './app.component';
import { MainComponent } from '../components/main/main.component';

import { TopMenuComponent } from '../shared/top-menu/top-menu.component';
import { HamburgerMenuComponent } from '../shared/hamburger-menu/hamburger-menu.component';
import { FooterComponent } from '../shared/footer/footer.component';

import { LandingComponent } from '../components/landing/landing.component';
import { ApproachComponent } from '../components/approach/approach.component';
import { ServicesComponent } from '../components/services/services.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ProjectComponent } from '../components/project/project.component';
import { AboutComponent } from '../components/about/about.component';
import { TeamComponent } from '../components/team/team.component';
import { MemberComponent } from '../components/team/team-member.component';
import { CareersComponent } from '../components/careers/careers.component';
import { ContactComponent } from '../components/contact/contact.component';
import { VacancyComponent } from '../components/vacancy/vacancy.component';

import { partials } from '../partials';

import { MainService } from '../services/main.service';
import { ProjectsService } from '../services/projects.service';
import { VacanciesService } from '../services/vacancies.service';
import { ContentService } from '../services/content.service';
import { ConfigProvider } from '../services/config.service';
import { MailService } from '../services/mail.service';

import { RouterModule } from '@angular/router';
import { routes } from '../router.config';

const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HamburgerMenuComponent,
    FooterComponent,
    MainComponent,

    LandingComponent,
    ApproachComponent,
    ServicesComponent,
    ProjectsComponent,
    ProjectComponent,
    AboutComponent,
    TeamComponent,
    MemberComponent,
    CareersComponent,
    ContactComponent,
    VacancyComponent,

    ...partials
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PageScrollModule.forRoot(),
    CarouselModule.forRoot()
  ],

  providers: [
    MainService,
    ConfigProvider,
    ProjectsService,
    ContentService,
    VacanciesService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    MailService
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
