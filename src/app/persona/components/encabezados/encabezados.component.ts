import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezados',
  templateUrl: './encabezados.component.html',
  styleUrls: ['./encabezados.component.css']
})
export class EncabezadosComponent implements OnInit {
  targetLanguage : string = "es"
  @Output() ponerOpcion = new EventEmitter<string>();
  constructor(private router : Router,private languageService: LanguageService) { }

  ngOnInit(): void {
  }


  onChange(event: Event): void {
    const targetLanguage = (event.target as HTMLSelectElement).value;
    this.languageService.setLanguage(targetLanguage);
    this.targetLanguage = targetLanguage;
  }

  mandarOpcion(opcion: string): void {

    this.ponerOpcion.emit(opcion);
  }


}
