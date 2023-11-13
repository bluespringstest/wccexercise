class mainPagePo {

    locators = {
        cookiesYes : 'div.text-centre > button.primary-button',
        cookiesNo: 'a[href="/report-it"]',
        startButton: 'span.btn-text.col-auto font-weight-normal.font-normal'
    }
}

const MainReportPage = new mainPagePo();
export default MainReportPage;