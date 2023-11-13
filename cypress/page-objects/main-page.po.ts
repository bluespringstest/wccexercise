class mainPagePo {

    locators = {
        cookiesYes : '.text-center > .primary-button',
        cookiesNo: 'a[href="/report-it"]',
        startButton: '.mx-auto > .primary-button'
    }
}

const MainReportPage = new mainPagePo();
export default MainReportPage;