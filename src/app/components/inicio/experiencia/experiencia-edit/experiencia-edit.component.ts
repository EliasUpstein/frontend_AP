import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private Experiencia: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Experiencia.detail(id).subscribe({
      next: (data) => this.expLab = data,
      error: (err) => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Experiencia.update(id, this.expLab).subscribe({
      error: () => alert("Error al modificar experiencia")
    });
    this.router.navigate(['']);
  }
}