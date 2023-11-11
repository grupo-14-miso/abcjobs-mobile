import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { LanguageService } from '../../template/services/language.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  targetLanguage : string = "es"

  public miformulario: FormGroup = this.fb.group({

    nombre: new FormControl<string>('',[Validators.required]),
    descripcion: new FormControl<string>('',[Validators.required]),
    correo: new FormControl<string>(''),


  });







  constructor(private fb: FormBuilder, private router : Router,private languageService: LanguageService) {

  }

  ngOnInit() {

  }

  guardar() {

    if (this.miformulario.invalid) {
      console.log(this.miformulario.value);
      this.miformulario.markAllAsTouched();
      return;
    }
    if (this.miformulario.controls['nombre'].value === 'persona') {
      console.log("persona");
      this.router.navigate(['/persona']);
      return;
    }
    if (this.miformulario.controls['nombre'].value === 'empresa') {
      console.log("empresa");
      this.router.navigate(['/empresa']);
      return;
    }
    if (this.miformulario.controls['nombre'].value === 'empleado') {
      console.log("empleado");
      this.router.navigate(['/internoabc']);
      return;
    }

  }

  ponerIdioma(idioma: string): void {

    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }


}
