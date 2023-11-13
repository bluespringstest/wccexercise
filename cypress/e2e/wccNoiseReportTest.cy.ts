import BeforeReportPage from "../page-objects/beforeReport-page.po";
import DetailsPage from "../page-objects/details-page.po";
import MainReportPage from "../page-objects/main-page.po";

describe('Online complaints process', () => {
    it('should allow user to add details for noise complaint with cookies', () => {

        // Visit report page
        cy.visit('https://mywestminster.westminster.gov.uk/report-it/noise');

        // Accept cookies
        cy.get(MainReportPage.locators.cookiesYes).click();

        //start the complaint process
        cy.get(MainReportPage.locators.startButton).click();

        //Start the noise complaint process
        cy.get(BeforeReportPage.locators.reportButton)
        .should('contain.text', 'Report a noise problem')
        .click();

        //Confirm contact
        cy.get(DetailsPage.locators.contactRadioYes)
        .scrollIntoView()
        .click();

        //Enter first name
        cy.get(DetailsPage.locators.firstNameField)
        .click()
        .type('Testfirstname');

        //Enter surename
        cy.get(DetailsPage.locators.lastNameField)
        .click()
        .type('Testlastname');

        //Enter Email address
        cy.get(DetailsPage.locators.emailField)
        .click()
        .type('test@testwebsite.com');

        //Enter phone number
        cy.get(DetailsPage.locators.contactNumberField)
        .click()
        .type('07312876543')

        //Confirm terms and conditions
        cy.get(DetailsPage.locators.noticeConfirm)
        .click()
    });
    // it('should allow user to add details for noise complaint without cookies', () => {
    //     cy.get(MainReportPage.locators.cookiesNo).click();
    //     cy.get(MainReportPage.locators.startButton).click();
    // });
});