import BeforeReportPage from "../page-objects/beforeReport-page.po";
import DetailsPage from "../page-objects/details-page.po";
import MainReportPage from "../page-objects/main-page.po";

describe('Online complaints process', () => {
    beforeEach('navigates to website', () => {
        //visit report page
        cy.visit('https://mywestminster.westminster.gov.uk/report-it/noise')
    });
    it('should allow user to add details for noise complaint with cookies', () => {

        //Start complaint process with cookies
        cy.startProcess(true)

        //Enter first name
        cy.enterDetail(DetailsPage.locators.firstNameField, 'Testfirstname')

        //Enter surename
        cy.enterDetail(DetailsPage.locators.lastNameField, 'Testlastname')

        //Enter Email address
        cy.enterDetail(DetailsPage.locators.emailField, 'test@testwebsite.com')

        //Enter phone number
        cy.enterDetail(DetailsPage.locators.contactNumberField, '07312876543')

        //Confirm terms and conditions
        cy.get(DetailsPage.locators.noticeConfirm)
        .click()

        //Click next
        cy.clickNext();

        //Assert user is navigated to your location page
        cy.url().should('eq', 'https://mywestminster.westminster.gov.uk/report-it/noise/your-location')
    });
    it('should allow user to add details for noise complaint without cookies', () => {

        //Start complaint process without cookies
        cy.startProcess(false)

        //Enter first name
        cy.enterDetail(DetailsPage.locators.firstNameField, 'Testfirstname')

        //Enter surename
        cy.enterDetail(DetailsPage.locators.lastNameField, 'Testlastname')

        //Enter Email address
        cy.enterDetail(DetailsPage.locators.emailField, 'test@testwebsite.com')

        //Enter phone number
        cy.enterDetail(DetailsPage.locators.contactNumberField, '07312876543')

        //Confirm terms and conditions
        cy.get(DetailsPage.locators.noticeConfirm)
        .click()

        //Click next
        cy.clickNext();

        //Assert user is navigated to your location page
        cy.url().should('eq', 'https://mywestminster.westminster.gov.uk/report-it/noise/your-location')
    });
    it('should show error messages when the wrong input is added', () => {

        //Start complaint process with cookies
        cy.startProcess(true)
 
         //Enter first name
         cy.enterDetail(DetailsPage.locators.firstNameField, "('@>?:{^&*(')");

        //Enter surename
        cy.enterDetail(DetailsPage.locators.lastNameField, '876900-@@_)*&^');

        //Enter Email address
        cy.enterDetail(DetailsPage.locators.emailField, 'testtestwebsite.com');

        //Enter phone number
        cy.enterDetail(DetailsPage.locators.contactNumberField, 'cbfhebvdej');

        //Click next
        cy.clickNext();
 
        //Confirm terms and conditions
        cy.get(DetailsPage.locators.noticeConfirm)
        .click()
         
        //Click next
        cy.clickNext();

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
        cy.clickNext();

        //Assert user is navigated to your location page
        cy.url().should('eq', 'https://mywestminster.westminster.gov.uk/report-it/noise/your-location')
    });
});