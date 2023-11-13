class detailsPo {

    locators = {
        contactRadioYes : 'input#yes',
        contactRadioNo : 'input#no',
        nextButton: '.rounded-md > .primary-button',
        previousButton: '.my-5 > :nth-child(1) > .secondary-button',
        firstNameField: 'input[itemid="firstName"]',
        lastNameField: 'input[itemid="last-name"]',
        emailField: 'input[itemid="email"]',
        contactNumberField: 'input[itemid="phoneNumber"]',
        noticeConfirm: 'input[id=":r6:"]'
    }
}

const DetailsPage = new detailsPo();
export default DetailsPage;