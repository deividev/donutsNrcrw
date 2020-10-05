import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverComponent } from './components/cover/cover.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


//Material Module
import { MaterialModule } from './material/material.module';
//Icon FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CoverComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    CardProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  entryComponents: [
    CardProjectComponent
  ],
  exports: [
    FontAwesomeModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
