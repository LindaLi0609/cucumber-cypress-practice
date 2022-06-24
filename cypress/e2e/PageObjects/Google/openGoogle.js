const { Given, Then } = require("cypress-cucumber-preprocessor/steps");
const url = "https://www.google.com/";

Given('I open Google page', () => {
   cy.visit(url);
})

Then('I can see the Google',() =>{
  cy.url().should('eq', url)
  cy.title().should("include", "Google")
})