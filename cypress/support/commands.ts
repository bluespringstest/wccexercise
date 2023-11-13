/// <reference types="cypress" />
import BeforeReportPage from "../page-objects/beforeReport-page.po";
import DetailsPage from "../page-objects/details-page.po";
import MainReportPage from "../page-objects/main-page.po"
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('startProcess', (cookieVariable) => {
             // Accept / Reject cookies
             if (cookieVariable === true) {
                cy.get(MainReportPage.locators.cookiesYes)
                .click();
             }
             else{
                cy.get(MainReportPage.locators.cookiesNo)
                .click();
             }

             //start the complaint process
             cy.get(MainReportPage.locators.startButton)
             .click();
     
             //Start the noise complaint process
             cy.get(BeforeReportPage.locators.reportButton)
             .should('contain.text', 'Report a noise problem')
             .click();
     
             //Confirm contact
             cy.get(DetailsPage.locators.contactRadioYes)
             .scrollIntoView()
             .click();
});

Cypress.Commands.add('enterDetail', (element: string, elementValue: string) => {
    cy.get(element)
    .click()
    .type(elementValue)
    .should('have.value', elementValue)
});
Cypress.Commands.add('clickNext', () => {
    cy.get(DetailsPage.locators.nextButton)
    .should('have.text', 'Next')
    .should('be.visible')
    .should('be.enabled')
    .click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      startProcess(cookieVariable: boolean): Chainable<void>
      enterDetail(element: string, elementValue: string): Chainable<void>
      clickNext(): Chainable<void>

//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

