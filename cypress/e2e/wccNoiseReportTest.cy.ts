import MainReportPage from "../page-objects/main-page.po";

describe('Online complaints process', () => {
    it('should allow user to add details for noise complaint with cookies', () => {
        cy.visit('https://mywestminster.westminster.gov.uk/report-it/noise');
        cy.get(MainReportPage.locators.cookiesYes).click();
        cy.get(MainReportPage.locators.startButton).click();
    });
    // it('should allow user to add details for noise complaint without cookies', () => {
    //     cy.get(MainReportPage.locators.cookiesNo).click();
    //     cy.get(MainReportPage.locators.startButton).click();
    // });
});