import { Respuesta , Answer, Question  ,Examen } from "./prueba";

describe("Respuesta", () => {
  it("should create a new instance with the provided values", () => {
    const answers: Answer[] = [{a:"a",b:"b",c:"c",d:"d"}];
    const respuesta = new Respuesta(["a"], ["a"], "description", answers);
    expect(respuesta.correct_answer).toEqual(["a"]);
    expect(respuesta.description).toEqual("description");
    expect(respuesta.selected_answer).toEqual(["a"]);
  });

  it("Question ", () => {
    const answers: Answer[] = [{a:"a",b:"b",c:"c",d:"d"}];
    const question = new Question(answers, ["a"], "description");

    expect(question.description).toEqual("description");
    expect(question.correct_answer).toEqual(["a"]);
  });

  it("Examen ", () => {

    const answers: Answer[] = [{a:"a",b:"b",c:"c",d:"d"}];
    const respuesta = new Respuesta(["a"], ["a"], "description", answers);

    const question = new Question(answers, ["a"], "description");
    const questions = [question];
    const examen = new Examen(1, "1", questions, "rol", "type", "result", "status");

    expect(examen.assignment_id).toEqual(1);
    expect(examen.focus).toEqual("1");
  });


});
