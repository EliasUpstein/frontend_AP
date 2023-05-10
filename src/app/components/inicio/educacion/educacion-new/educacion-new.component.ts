import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
@Component({
  selector: 'app-educacion-new',
  templateUrl: './educacion-new.component.html',
  styleUrls: ['./educacion-new.component.css']
})
export class EducacionNewComponent implements OnInit {
  nombreE: string;
  institucionE: string;
  descripcionE: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.institucionE, this.descripcionE);
    this.educacionS.save(educacion).subscribe({
      next: () => alert("Educacion añadida correctamente"),
      error: () => alert("Fallo al añadir educación")
    });
    this.router.navigate(['']);
  }
}