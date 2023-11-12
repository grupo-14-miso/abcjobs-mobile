import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { LanguageService } from '../../template/services/language.service'
import { Router } from '@angular/router';
import { AutenticacionService , usuario,credenciales} from '../../template/services/autenticacion.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  targetLanguage : string = "es"
  miuser : credenciales = { email: "", password: "", role: "" }
  autenticado : boolean = false;

  public miformulario: FormGroup = this.fb.group({

    nombre: new FormControl<string>('',[Validators.required]),
    clave: new FormControl<string>('',[Validators.required]),

    role: new FormControl<string>('',[Validators.required]),



  });







  constructor(private fb: FormBuilder, private router : Router,private languageService: LanguageService,private authService: AutenticacionService) {

  }

  ngOnInit() {

  }

  guardar() {
    console.log(this.miformulario.controls['nombre'].value);
    console.log(this.miformulario.controls['clave'].value);
    console.log(this.miformulario.controls['role'].value);

    this.miuser = {
      "email": "josegaray@gmail.com",
      "password": "joselusigaray",
      "role": "Candidate"
    }
    //this.autenticar(this.miuser)




    if (this.miformulario.invalid) {

      this.miformulario.markAllAsTouched();
      return;
    }

    this.miuser = {
      "email": this.miformulario.controls['nombre'].value,
      "password": this.miformulario.controls['clave'].value,
      "role": this.miformulario.controls['role'].value,
    }
    this.autenticar(this.miuser)

    if (this.autenticado){
      if (this.miformulario.controls['role'].value === 'Candidate') {

        this.router.navigate(['/persona']);
        return;
      }
      if (this.miformulario.controls['role'].value === 'Company') {

        this.router.navigate(['/empresa']);
        return;
      }
      if (this.miformulario.controls['role'].value === 'Admin') {

        this.router.navigate(['/internoabc']);
        return;
      }
    }

  }

  ponerIdioma(idioma: string): void {

    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }


  autenticar(usr: credenciales) {

    console.log("autenticando--  "+ usr)
    console.log(usr)
    let retorno = this.authService.logonCandidato(usr).subscribe(datos => {
      console.log("correcto",datos)
      this.autenticado = true;
      if (this.miformulario.controls['role'].value === 'Candidate') {

        this.router.navigate(['/persona']);
        return;
      }
      if (this.miformulario.controls['role'].value === 'Company') {

        this.router.navigate(['/empresa']);
        return;
      }
      if (this.miformulario.controls['role'].value === 'Admin') {

        this.router.navigate(['/internoabc']);
        return;
      }

    }, err => {
      console.log("mal", err)
      this.autenticado = false;
    }
    );

    console.log("retorno",retorno)
  }


}
