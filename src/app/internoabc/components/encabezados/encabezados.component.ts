import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LanguageService } from 'src/app/core/template/services/language.service';

@Component({
  selector: 'app-encabezados',
  templateUrl: './encabezados.component.html',
  styleUrls: ['./encabezados.component.css']
})
export class EncabezadosComponent implements OnInit {
  targetLanguage : string = "es"
  @Output() ponerOpcion = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }


  mandarOpcion(opcion: string): void {

    this.ponerOpcion.emit(opcion);
  }


}
