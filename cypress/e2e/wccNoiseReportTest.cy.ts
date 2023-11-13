import BeforeReportPage from "../page-objects/beforeReport-page.po";
import DetailsPage from "../page-objects/details-page.po";
import MainReportPage from "../page-objects/main-page.po";

describe('Online complaints process', () => {
    beforeEach('navigates to website', () => {
        //visit report page
        cy.visit('https://mywestminster.westminster.gov.uk/report-it/noise')
    });
    it('should allow user to add details for noise complaint with cookies', () => {
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
        .type('Testfirstname')
        .should('have.value', 'Testfirstname')

        //Enter surename
        cy.get(DetailsPage.locators.lastNameField)
        .click()
        .type('Testlastname')
        .should('have.value', 'Testlastname')

        //Enter Email address
        cy.get(DetailsPage.locators.emailField)
        .click()
        .type('test@testwebsite.com')
        .should('have.value', 'test@testwebsite.com')

        //Enter phone number
        cy.get(DetailsPage.locators.contactNumberField)
        .click()
        .type('07312876543')
        .should('have.value', '07312876543')

        //Confirm terms and conditions
        cy.get(DetailsPage.locators.noticeConfirm)
        .click()

        //Click next
        cy.get(DetailsPage.locators.nextButton)
        .should('have.text', 'Next')
        .should('be.visible')
        .should('be.enabled')
        .click();

        //Assert user is navigated to your location page
        cy.url().should('eq', 'https://mywestminster.westminster.gov.uk/report-it/noise/your-location')
    });
    it('should allow user to add details for noise complaint without cookies', () => {
        // Reject cookies
        cy.get(MainReportPage.locators.cookiesNo).click();

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
        .type('Testfirstname')
        .should('have.value', 'Testfirstname')

        //Enter surename
        cy.get(DetailsPage.locators.lastNameField)
        .click()
        .type('Testlastname')
        .should('have.value', 'Testlastname')

        //Enter Email address
        cy.get(DetailsPage.locators.emailField)
        .click()
        .type('test@testwebsite.com')
        .should('have.value', 'test@testwebsite.com')

        //Enter phone number
        cy.get(DetailsPage.locators.contactNumberField)
        .click()
        .type('07312876543')
        .should('have.value', '07312876543')

        //Confirm terms and conditions
        cy.get(DetailsPage.locators.noticeConfirm)
        .click()

        //Click next
        cy.get(DetailsPage.locators.nextButton)
        .should('have.text', 'Next')
        .should('be.visible')
        .should('be.enabled')
        .click();

        //Assert user is navigated to your location page
        cy.url().should('eq', 'https://mywestminster.westminster.gov.uk/report-it/noise/your-location')
    });
    it('should show error messages when the wrong input is added', () => {
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
         .type('@>?:{^&*(')
         .should('have.value', '@>?:{^&*(')
 
         //Enter surename
         cy.get(DetailsPage.locators.lastNameField)
         .click()
         .type('876900-@@_)*&^')
         .should('have.value', '876900-@@_)*&^')
 
         //Enter Email address
         cy.get(DetailsPage.locators.emailField)
         .click()
         .type('testtestwebsite.com')
         .should('have.value', 'testtestwebsite.com')
 
         //Enter phone number
         cy.get(DetailsPage.locators.contactNumberField)
         .click()
         .type('cbfhebvdej')
         .should('have.value', 'cbfhebvdej')
 
         //Confirm terms and conditions
         cy.get(DetailsPage.locators.noticeConfirm)
         .click()
         
        //Click next
        cy.get(DetailsPage.locators.nextButton)
        .should('have.text', 'Next')
        .should('be.visible')
        .should('be.enabled')
        .click();

        //Verify email error message
        cy.get(DetailsPage.locators.emailField)
        .siblings('div').eq(1)
        .should('have.text', 'Enter a valid Email address')
        cy.get(DetailsPage.locators.emailField)
        .click()
        .type('test@testwebsite.com')

        //Verify contact number error
        cy.get(DetailsPage.locators.nextButton)
        .click()
        cy.get(DetailsPage.locators.contactNumberField)
        .siblings('div').eq(1)
        .should('have.text', 'Enter a valid contact number')
        cy.get(DetailsPage.locators.contactNumberField)
        .click()
        .type('07312876543')

        //Click next
        cy.get(DetailsPage.locators.nextButton)
        .click();

        //Assert user is navigated to your location page
        cy.url().should('eq', 'https://mywestminster.westminster.gov.uk/report-it/noise/your-location')
    });
});