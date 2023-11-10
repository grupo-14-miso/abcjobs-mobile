import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../core/template/services/language.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  targetLanguage : string = "es"
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }


  onChange(event: Event): void {
    const targetLanguage = (event.target as HTMLSelectElement).value;
    this.languageService.setLanguage(targetLanguage);
    this.targetLanguage = targetLanguage;
  }


}
