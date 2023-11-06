
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
