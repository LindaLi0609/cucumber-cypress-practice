const { Given, Then } = require("cypress-cucumber-preprocessor/steps");
const url = "https://www.facebook.com/";

Given('I open Facebook page', () => {
   cy.visit(url);
})

Then('I can see the Facebook',() =>{
  cy.url().should('eq', url)
  cy.title().should("include", "Facebook")
})