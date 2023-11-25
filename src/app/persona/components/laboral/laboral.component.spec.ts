import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { DatosService, Candidate ,Experiencum,actualizaExperiencia} from '../datos/datos.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { AutenticacionService } from 'src/app/core/template/services/autenticacion.service';
import { LaboralComponent } from './laboral.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from 'src/app/auth-interceptor.service';

