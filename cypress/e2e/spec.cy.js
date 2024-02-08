const dataLogin = require ('../e2e/data.json'); //datos del json para login


describe('template spec', () => {
  before('Open application', () => {
    cy.clearCookies()
    /* cy.clearLocalStorage(); */
      // Disable service workers before each test
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      });
  }
        }) 
  it('passes', () => {
    cy.visit("https://www.coppel.com", { headers: { "Accept-Encoding": "gzip, deflate" } }).wait(30000)
    cy.get('.principal-contenido > #divBtn > #btnGuardaCambio').click({force: true})
    cy.get('#SimpleSearchForm_SearchTerm').should('be.visible').wait(5000).type("carro")
    cy.get('.submitButton').click({force: true}).wait(20000)
    cy.get('.priceTable a.btn').first().wait(20000).click().wait(20000)
    cy.get('#WC_QuickInfo_Link_addtocart_div').wait(20000).click().wait(20000)
    cy.get('#GotoCartButton2').wait(20000).click()
    cy.request('https://www.coppel.com/AjaxLoadLocationUserView?storeId=10151&catalogId=10051&langId=-5&requesttype=ajax')
      .then((response) => {
      expect(response.status).to.eq(200); // Verificar que el estado de la respuesta sea 200 OK
      });
   
  })
})

