import { Component, OnInit } from '@angular/core';
import { Entrevista } from '../../model/preentrevista';
import { PreentrevistaService } from '../../model/preentrevista.service';

@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent implements OnInit {
  public misEntrevistas :  Array<Entrevista> = [];
  public ofertaEmpresa : number = 5683780991844352;
  constructor(private resultado : PreentrevistaService) {
    this.getEntrevistas()
  }

  ngOnInit(): void {
  }

  getEntrevistas() {
    this.resultado.getEntrevistas().subscribe(datos => {
      this.misEntrevistas = datos;
      console.log(this.misEntrevistas)

    });
  }

}
