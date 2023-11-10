import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/template/services/language.service';


@Component({
  selector: 'app-encabezados',
  templateUrl: './encabezados.component.html',
  styleUrls: ['./encabezados.component.css']
})
export class EncabezadosComponent implements OnInit {
  targetLanguage : string = "es"
  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
  }


  onChange(event: Event): void {
    const targetLanguage = (event.target as HTMLSelectElement).value;
    this.languageService.setLanguage(targetLanguage);
    this.targetLanguage = targetLanguage;
  }

}
