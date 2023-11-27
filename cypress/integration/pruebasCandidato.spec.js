// pruebasMobile.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Consultar Resultados', () => {

  context('Probar en samsung-s10', () => {
    beforeEach(() => {
      // run these tests as if in a mobile browser
      // and ensure our responsive UI is correct
      cy.viewport('samsung-s10')
      cy.visit('http://localhost:8100/login')

      cy.get('ion-select')
      .find('label',{ includeShadowDom: true }).wait(500)
      .find('div')
      .find('button')
      .click({force: true });
      cy.contains('.alert-radio-label', 'Candidato').click();
      cy.contains('OK').click().wait(500);
      cy.get('ion-input').first().type("josegaray@gmail.com");
      cy.get('ion-input').last().type("joselusigaray");
      cy.get('ion-button').click();


    })

    it('Datos personales', () => {
      // Click sobre el botón **resultados**
      cy.get("#datos").click();
      cy.contains('datos')

    })

    it('Experiencia laboral', () => {

      cy.get("#laboral").click();
      cy.contains('laboral')

    })

    it('Informacion Academica', () => {

      cy.get("#academica").click();
      cy.contains('laboral')

    })

    it('Informacion Tecnica', () => {

      cy.get("#tecnica").click();
      cy.contains('laboral')

    })

    it('Procesos', () => {
      // Click sobre el botón **resultados**
      cy.get("#proceso").click();
      cy.contains('laboral')

    })

    it('Resultados Procesos', () => {
      // Click sobre el botón **resultados**
      cy.get("#resultados").click();
      cy.get('.h1').contains('Resultados');


    })

  })


})

