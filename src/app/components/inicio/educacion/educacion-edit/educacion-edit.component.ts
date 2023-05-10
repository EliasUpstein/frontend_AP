import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion-edit.component.html',
  styleUrls: ['./educacion-edit.component.css']
})
export class EducacionEditComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
    private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe({
      next: (data) => this.educacion = data,
      error: (err) => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe({
      error: () => alert("Error al modificar la educacion")
    });
    this.router.navigate(['']);
  }
}