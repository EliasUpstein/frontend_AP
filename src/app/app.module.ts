import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/inicio/header/header.component';
import { BannerComponent } from './components/inicio/header/banner/banner.component';
import { RedesComponent } from './components/inicio/header/redes/redes.component';
import { AboutComponent } from './components/inicio/about/about.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AboutEditComponent } from './components/inicio/about/about-edit/about-edit.component';
import { ExperienciaComponent } from './components/inicio/experiencia/experiencia.component';
import { ExperienciaEditComponent } from './components/inicio/experiencia/experiencia-edit/experiencia-edit.component';
import { ExperienciaNewComponent } from './components/inicio/experiencia/experiencia-new/experiencia-new.component';
import { EducacionComponent } from './components/inicio/educacion/educacion.component';
import { EducacionEditComponent } from './components/inicio/educacion/educacion-edit/educacion-edit.component';
import { EducacionNewComponent } from './components/inicio/educacion/educacion-new/educacion-new.component';
import { SkillsComponent } from './components/inicio/skills/skills.component';
import { SkillsEditComponent } from './components/inicio/skills/skills-edit/skills-edit.component';
import { SkillsNewComponent } from './components/inicio/skills/skills-new/skills-new.component';
import { ProyectosComponent } from './components/inicio/proyectos/proyectos.component';
import { ProyectosEditComponent } from './components/inicio/proyectos/proyectos-edit/proyectos-edit.component';
import { ProyectosNewComponent } from './components/inicio/proyectos/proyectos-new/proyectos-new.component';
import { FooterComponent } from './components/inicio/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    HeaderComponent,
    BannerComponent,
    RedesComponent,
    AboutComponent,
    AboutEditComponent,
    ExperienciaComponent,
    ExperienciaEditComponent,
    ExperienciaNewComponent,
    EducacionComponent,
    EducacionEditComponent,
    EducacionNewComponent,
    SkillsComponent,
    SkillsEditComponent,
    SkillsNewComponent,
    ProyectosComponent,
    ProyectosEditComponent,
    ProyectosNewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
