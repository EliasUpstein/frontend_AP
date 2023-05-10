import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-new',
  templateUrl: './experiencia-new.component.html',
  styleUrls: ['./experiencia-new.component.css']
})
export class ExperienciaNewComponent implements OnInit {
  nombreE: string = '';
  empresaE: string = '';
  descripcionE: string = '';

  constructor(private Experiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.empresaE, this.descripcionE);
    this.Experiencia.save(expe).subscribe({
      next: () => alert("Experiencia añadida"),
      error: () => alert("Falló")
    })
    this.router.navigate(['']);
  }
}