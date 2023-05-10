import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skills';
import { SkillService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {
  skill: Skill = null;

  constructor(
    private skillS: SkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe({
      next: (data) => this.skill = data,
      error: (err) => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe({
      error: () => alert("Error al modificar la skill")
    });
    this.router.navigate(['']);
  }
}