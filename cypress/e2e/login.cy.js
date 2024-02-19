const DatosBuilder = require("../Builder/datosBuilder")
const IndexPage = require("../Page/indexPage")
const Validaciones = require("../validator/validaciones")

const indexPage = new IndexPage()
const validaciones = new Validaciones()

describe('Log In', () => {
  it('Loguearse en la pagina', () => {
    cy.viewport('macbook-11')
    const datosBuilder = new DatosBuilder().usuario()
    cy.visit('https://www.demoblaze.com/')
    cy.url().should('eq', 'https://www.demoblaze.com/')

    indexPage.getLogIn().click()
    validaciones.getTextLogIn().contains("Log in")
    cy.wait(500)
    indexPage.getUserName().type(datosBuilder.userName)
    indexPage.getPassword().type(datosBuilder.passWord)
    indexPage.getLog().should('be.visible').click()
    cy.wait(500)
    validaciones.getNameUser().contains("Welcome Dubox")
  })
})