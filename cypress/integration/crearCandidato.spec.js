import {faker} from '@faker-js/faker'
describe('Crear Candidatos', () => {

  context('Probar en samsung-s10', () => {
    beforeEach(() => {
      cy.viewport('samsung-s10')
      cy.visit('http://localhost:8100')

    })



    it('Crear Candidato', () => {
      cy.get('.small-text').click();
      cy.get('.can-go-back > .content-ltr > form.ng-untouched > :nth-child(1) > ion-col.md > .item > .ng-untouched').wait(500).click();
      cy.contains('.alert-radio-label', 'Candidato').click();
      cy.contains('OK').click().wait(500);
      cy.get('#ion-input-2').scrollIntoView().focus().type(faker.internet.email());
      cy.get('#ion-input-3').type("1234");
      cy.get('form.ng-dirty > :nth-child(4) > ion-col.md > .ion-color').click();

    })

  })


})
