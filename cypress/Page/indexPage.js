export default class indexPage {
    logIn = "#login2"
    userName = "#loginusername"
    password = "#loginpassword"
    log = "#logInModal > div > div > div.modal-footer > button.btn.btn-primary"

    getLogIn() {
        return cy.get(this.logIn)
    }
    getUserName() {
        return cy.get(this.userName)
    }
    getPassword() {
        return cy.get(this.password)
    }
    getLog() {
        return cy.get(this.log)
    }
}