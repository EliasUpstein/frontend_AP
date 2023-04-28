import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { AboutEditComponent } from './components/inicio/about/about-edit/about-edit.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-edit/:id', component: AboutEditComponent },
  // {path:'nuevaexp', component: NewExperienciaComponent},
  // {path:'editexp/:id', component: EditExperienciaComponent},
  // { path: 'nuevaedu', component: NeweducacionComponent},
  // { path: 'editedu/:id', component: EditeducacionComponent},
  // { path: 'newskills', component: NewSkillsComponent},
  // { path: 'editskill/:id', component: EditSkillComponent},
  // { path: 'newproject', component: NewprojectComponent},
  // { path: 'editproject/:id', component: EditprojectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
