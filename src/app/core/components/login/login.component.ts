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
  this.autenticar(this.miuser)

    if (this.miformulario.invalid) {
      console.log(this.miformulario.value);
      this.miformulario.markAllAsTouched();
      return;
    }
    if (this.miformulario.controls['role'].value === 'Candidate') {
      console.log("persona");
      this.router.navigate(['/persona']);
      return;
    }
    if (this.miformulario.controls['role'].value === 'Company') {
      console.log("empresa");
      this.router.navigate(['/empresa']);
      return;
    }
    if (this.miformulario.controls['role'].value === 'Admin') {
      console.log("empleado");
      this.router.navigate(['/internoabc']);
      return;
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
      console.log(datos)
    });
    console.log(retorno)
  }


}
