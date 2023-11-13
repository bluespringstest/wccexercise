class beforeReportPo {

    locators = {
        loginButton : 'button.primary-button > :nth-child(3) ',
        reportButton: '.md > .inline-flex > .primary-button',
        nextButton: '.rounded-md > .primary-button',
        previousButton: '.my-5 > :nth-child(1) > .secondary-button'
    }
}

const BeforeReportPage = new beforeReportPo();
export default BeforeReportPage;