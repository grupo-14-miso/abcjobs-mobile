
export type Examenes = Examen[];

export type Answer = {
  [key: string]: string;
}

export class Examen {

  assignment_id: number
  focus: string
  questions: Question[]
  rol: string
  type: string
  result: string
  status: string
  public constructor(assignment_id: number,
    focus: string,
    questions: Question[],
    rol: string,
    type: string,
    result: string,
    status: string) {
    this.assignment_id = assignment_id;
    this.focus = focus;
    this.rol = rol;
    this.type = type;
    this.questions = questions;
    this.result = result;
    this.status = status;
  }

}

export class Question {

  answers: Answer[]
  correct_answer: string[]
  description: string

  public constructor(answers: Answer[],  correct_answer: string[],  description: string){
    this.answers = answers
    this.correct_answer = correct_answer
    this.description = description
  }
}

export class Answer2 {
  a?: string
  b?: string
  c?: string
  d?: string
}


export class Respuesta {
  correct_answer:string[]
  selected_answer:string[]
  description:string
  answers: Answer[]
  public constructor(
    correct_answer:string[],
    selected_answer:string[],
    description:string,
    answers: Answer[]){

      this.correct_answer = correct_answer
      this.selected_answer = selected_answer
      this.description = description
      this.answers = answers
  }
}



export interface Entrevista {
  candidates: string[]
  candidates_details: CandidatesDetail[]
  date: string
  description: string
  id: number
  id_company: string
  id_offer: string
  link: string
  result: string
}

export interface CandidatesDetail {
  candidate: Candidate
  company: Company
  offer: Offer
}

export interface Candidate {
  Nombre: string
  apellido: string
  ciudad_nacimiento: string
  ciudad_residencia: string
  documento: string
  educacion: any[]
  email: string
  estado_civil: string
  experiencia: any[]
  fecha_nacimiento: string
  genero: string
  id_candidato: string
  idiomas: any[]
  lenguajes_programacion: any[]
  nacionalidad: string
  pais_nacimiento: string
  pais_residencia: string
  rol: string[]
  segundo_apellido: string
  segundo_nombre: string
  soft_skill: any[]
  soft_skills: string[]
  tecnologias_herramientas: string[]
  telefono: string
  tipo_documento: string
}

export interface Company {
  company_id: string
  country: string
  created_date: string
  document_number: string
  document_type: string
  email: string
  last_modified: string
  name: string
  phone_number: string
}

export interface Offer {
  company_id: string
  created_date: string
  description: string
  end_date: string
  last_modified: string
  name: string
  offer_id: string
  start_date: string
}

