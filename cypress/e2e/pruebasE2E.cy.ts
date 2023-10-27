describe.only('Consultar Resultados', () => {

  context('Probar en samsung-s10', () => {
    beforeEach(() => {
      // run these tests as if in a mobile browser
      // and ensure our responsive UI is correct
      cy.viewport('samsung-s10')

    })

    it('Seleccionar la primera', () => {
      cy.visit('http://localhost:8100/')
      // Click sobre el botón **resultados**
      cy.get("#resultados").click();
      cy.url().should("include", "/resultados");

    })

    it('Seleccionar un examen', () => {
      cy.visit('http://localhost:8100/')
      // Click sobre el botón **procesos**
      cy.get("#proceso").click();
      cy.url().should("include", "/prueba");

    })

    it('Llenar un examen', () => {
      cy.visit('http://localhost:8100/')
      // Click sobre el botón **procesos**
      cy.get("#proceso").click();
      cy.contains("Examen", { timeout: 10000 }).first().click();
      cy.url().should("include", "/prueba");

    })


  })


})
