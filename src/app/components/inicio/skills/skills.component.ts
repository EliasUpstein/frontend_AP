import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skills';
import { SkillService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe({
        next: () => this.cargarSkills(),
        error: () => alert("No se pudo borrar la skill")
      });
    }
  }
}