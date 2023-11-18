import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { LanguageService } from '../../template/services/language.service'
import { Router } from '@angular/router';
import { AutenticacionService , registro} from '../../template/services/autenticacion.service'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  targetLanguage : string = "es"
  miuser : registro = { email: "", password: "", role: "" ,username: ""}
  autenticado : boolean = false;

  public miformulario: FormGroup = this.fb.group({
    email: new FormControl<string>('',[Validators.required]),
    clave: new FormControl<string>('',[Validators.required]),
    role: new FormControl<string>('',[Validators.required]),
  });

  constructor(private fb: FormBuilder, private router : Router,private languageService: LanguageService,private authService: AutenticacionService) {

  }

  ngOnInit() {

  }

  guardar() {


    //this.autenticar(this.miuser)




    if (this.miformulario.invalid) {

      this.miformulario.markAllAsTouched();
      return;
    }

    this.miuser = {
      "email": this.miformulario.controls['email'].value,
      "password": this.miformulario.controls['clave'].value,
      "role": this.miformulario.controls['role'].value,
      "username": this.miformulario.controls['email'].value
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


  autenticar(usr: registro) {


    let retorno = this.authService.registerCandidato(usr).subscribe(datos => {
      console.log("correcto",datos)
      this.autenticado = true;
      if (this.miformulario.controls['role'].value === 'Candidate') {

        window.sessionStorage["key"] = datos.key;
        window.sessionStorage["token"] = datos.token;
        console.log("llave", window.sessionStorage["key"] )
        console.log("token",window.sessionStorage["token"] )
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


