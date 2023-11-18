
describe('Loguearse en movil', () => {

  context('Probar en samsung-s10', () => {
    beforeEach(() => {
      cy.viewport('samsung-s10')
      cy.visit('http://localhost:8100/login')

    })

    it('Login Empresa', () => {
      cy.get('ion-select')
      .find('label',{ includeShadowDom: true }).wait(500)
      .find('div')
      .find('button')
      .click({force: true });
      cy.contains('.alert-radio-label', 'Empresa').click();
      cy.contains('OK').click().wait(500);
      cy.get('ion-input').first().type("comercial@gansoscorp.com");
      cy.get('ion-input').last().type("gansosCorp");
      cy.get('ion-button').click();

    })

    it('Login Candidato', () => {
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

    it('Login Funcionario ABC', () => {
      cy.get('ion-select')
      .find('label',{ includeShadowDom: true }).wait(500)
      .find('div')
      .find('button')
      .click({force: true });
      cy.contains('.alert-radio-label', 'Funcionario ABC').click();
      cy.contains('OK').click().wait(500);
      cy.get('ion-input').first().type("jose@bowser.com");
      cy.get('ion-input').last().type("chocoB0wser");
      cy.get('ion-button').click();

    })

  })


})
