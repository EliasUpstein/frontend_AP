import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { AboutEditComponent } from './components/inicio/about/about-edit/about-edit.component';
import { ExperienciaNewComponent } from './components/inicio/experiencia/experiencia-new/experiencia-new.component';
import { ExperienciaEditComponent } from './components/inicio/experiencia/experiencia-edit/experiencia-edit.component';
import { EducacionNewComponent } from './components/inicio/educacion/educacion-new/educacion-new.component';
import { EducacionEditComponent } from './components/inicio/educacion/educacion-edit/educacion-edit.component';
import { SkillsNewComponent } from './components/inicio/skills/skills-new/skills-new.component';
import { SkillsEditComponent } from './components/inicio/skills/skills-edit/skills-edit.component';
import { ProyectosNewComponent } from './components/inicio/proyectos/proyectos-new/proyectos-new.component';
import { ProyectosEditComponent } from './components/inicio/proyectos/proyectos-edit/proyectos-edit.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-edit/:id', component: AboutEditComponent },
  { path: 'experiencia-new', component: ExperienciaNewComponent },
  { path: 'experiencia-edit/:id', component: ExperienciaEditComponent },
  { path: 'educacion-new', component: EducacionNewComponent },
  { path: 'educacion-edit/:id', component: EducacionEditComponent},
  { path: 'skills-new', component: SkillsNewComponent},
  { path: 'skills-edit/:id', component: SkillsEditComponent},
  { path: 'proyectos-new', component: ProyectosNewComponent},
  { path: 'proyectos-edit/:id', component: ProyectosEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
