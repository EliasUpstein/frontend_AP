import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
@Component({
  selector: 'app-proyectos-new',
  templateUrl: './proyectos-new.component.html',
  styleUrls: ['./proyectos-new.component.css']
})
export class ProyectosNewComponent implements OnInit {

  nombreP: string;
  descripcionP: string;
  linkP: string;

  constructor(private sProyectos: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const expe = new Proyectos(this.nombreP, this.descripcionP, this.linkP);
    this.sProyectos.save(expe).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
