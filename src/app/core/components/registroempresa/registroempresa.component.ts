import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { LanguageService } from '../../template/services/language.service'
import { Router } from '@angular/router';
import { AutenticacionService , registroempresa,credenciales} from '../../template/services/autenticacion.service'


@Component({
  selector: 'app-registroempresa',
  templateUrl: './registroempresa.component.html',
  styleUrls: ['./registroempresa.component.css']
})
export class RegistroempresaComponent implements OnInit {

  targetLanguage : string = "es"
  miuser : registroempresa = { email: "", password: "", role: "" ,name: "",document_type: "",document_number: "",phone_number: "",country: ""}

  public miformulario: FormGroup = this.fb.group({
    email: new FormControl<string>('',[Validators.required]),
    password: new FormControl<string>('',[Validators.required]),
    name: new FormControl<string>(''),
    document_type: new FormControl<string>(''),
    document_number: new FormControl<string>(''),
    phone_number: new FormControl<string>(''),
    country: new FormControl<string>(''),

  });





  constructor(private fb: FormBuilder, private router : Router,private languageService: LanguageService,private authService: AutenticacionService) {
    this.miuser.role = "Company";
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
      "password": this.miformulario.controls['password'].value,
      "role": 'Company',
      "name": this.miformulario.controls['name'].value,
      "document_type": this.miformulario.controls['document_type'].value,
      "document_number": this.miformulario.controls['document_number'].value,
      "phone_number": this.miformulario.controls['phone_number'].value,
      "country": this.miformulario.controls['country'].value,
    }

    this.crearEmpresa(this.miuser)

  }

  ponerIdioma(idioma: string): void {
    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }


  crearEmpresa(usr: registroempresa) {
    let retorno = this.authService.registerEmpresa(usr).subscribe(datos => {
      console.log("correcto",datos)
      let ingrese: credenciales = { email: usr.email, password: usr.password, role: usr.role } ;
      this.autenticar(ingrese);
      }, err => {
        console.log("mal", err)
      }
    );
    console.log("retorno crearEmpresa",retorno)
  }


  autenticar(usr: credenciales) {
    let retorno = this.authService.logonCandidato(usr).subscribe(datos => {
      console.log("correcta autenticacion",datos)
      localStorage.setItem('token', datos.token);
      window.sessionStorage["llave"] = datos.key;
      window.sessionStorage["token"] = datos.token;
      this.router.navigate(['/empresa']);
    }, err => {
      console.log("mal", err)
    }
    );
    console.log("retorno",retorno)
  }



}


