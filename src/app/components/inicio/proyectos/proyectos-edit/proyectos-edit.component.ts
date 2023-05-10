import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
@Component({
  selector: 'app-proyectos-edit',
  templateUrl: './proyectos-edit.component.html',
  styleUrls: ['./proyectos-edit.component.css']
})
export class ProyectosEditComponent implements OnInit {

  proyectos: Proyectos = null;

  constructor(
    private proyectosS: ProyectosService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.detail(id).subscribe({
      next: (data) => this.proyectos = data,
      error: (err) => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.update(id, this.proyectos).subscribe({
      error: () => alert("Error al modificar")
    });
    this.router.navigate(['']);
  }
}