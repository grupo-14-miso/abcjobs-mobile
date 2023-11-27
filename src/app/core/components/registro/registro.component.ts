import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { LanguageService } from '../../template/services/language.service'
import { Router } from '@angular/router';
import { AutenticacionService , registro,credenciales} from '../../template/services/autenticacion.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  targetLanguage : string = "es"
  miuser : registro = { email: "", password: "", role: "" ,Nombre: "",apellido: ""}

  public miformulario: FormGroup = this.fb.group({
    email: new FormControl<string>('',[Validators.required]),
    clave: new FormControl<string>('',[Validators.required]),
    nombre: new FormControl<string>(''),
    apellido: new FormControl<string>(''),
  });

  constructor(private fb: FormBuilder, private router : Router,private languageService: LanguageService,private authService: AutenticacionService) {
    this.miuser.role = "Candidate";
  }

  ngOnInit() {

  }

  guardar() {
    if (this.miformulario.invalid) {
      this.miformulario.markAllAsTouched();
      console.log("formulario invalido")
      return;
    }

    this.miuser = {
      "email": this.miformulario.controls['email'].value,
      "password": this.miformulario.controls['clave'].value,
      "role": 'Candidate',
      "Nombre": this.miformulario.controls['nombre'].value,
      "apellido": this.miformulario.controls['apellido'].value,
    }

    this.crearCandidato(this.miuser)
    this.router.navigate(['/persona']);
  }

  ponerIdioma(idioma: string): void {
    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }


  crearCandidato(usr: registro) {
    let retorno = this.authService.registerCandidato(usr).subscribe(datos => {
      console.log("correcto",datos)
      let ingrese: credenciales = { email: usr.email, password: usr.password, role: usr.role } ;
      this.autenticar(ingrese);
      }, err => {
        console.log("mal", err)
      }
    );
    console.log("retorno crearCandidato",retorno)
  }


  autenticar(usr: credenciales) {
    let retorno = this.authService.logonCandidato(usr).subscribe(datos => {
      console.log("correcta autenticacion",datos)
      localStorage.setItem('token', datos.token);
      window.sessionStorage["llave"] = datos.key;
      window.sessionStorage["token"] = datos.token;
      this.router.navigate(['/persona']);
    }, err => {
      console.log("mal", err)
    }
    );
    console.log("retorno",retorno)
  }



}


