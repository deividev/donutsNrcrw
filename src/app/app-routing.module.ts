import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { CardProjectComponent } from './components/card-project/card-project.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component'


const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'projects/p',
    component: CardProjectComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
