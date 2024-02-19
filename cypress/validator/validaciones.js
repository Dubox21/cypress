export default class validacion{

    textLogIn = "#logInModalLabel"
    nameUser = "#nameofuser"

    getTextLogIn(){
        return cy.get(this.textLogIn)
    }

    getNameUser(){
        return cy.get(this.nameUser)
    }

}