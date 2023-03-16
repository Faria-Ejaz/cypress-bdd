class HomePage {


    elements = {
        greenButton: () => cy.xpath('//*[@id="__next"]/div[1]/div/div/div/div[1]/button'),
        signUpButton: () => cy.get('div').contains('Sign up'),
        supportCenterButton: ()=> cy.xpath("//a[text()='Support Center'][1]"),
        exploreProductButton: ()=> cy.xpath("//a[text()='Explore our products']"),
        dataPrivacyButton: ()=> cy.xpath("//span[text()='Data & Privacy']"),
    }

    visit() {
        cy.visit('https://www.perlego.com/search');
    }

    clickOnSignUpButton() {
        this.elements.signUpButton().click({force: true});
    }

    clickOnExploreProductButton() {
        this.elements.exploreProductButton().click();
    }

    clickOnSupportCenterButton() {
        this.elements.supportCenterButton().click({force:true})
    }

    clickOnDataButton() {
        this.elements.dataPrivacyButton().click();
    }
}

export default HomePage;