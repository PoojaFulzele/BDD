class HomePage {
  selector = {


    // Rahul Shetty
    EcommUrl: "https://rahulshettyacademy.com/seleniumPractise/#/",
    searchProductBox: ".search-button",
    searchbtnBox: '[class="search-button"]',
    productLst: 'h4[class="product-name"]',
    addtoCart: '[class="product-action"] button',
    cart: 'img[alt="Cart"]',
    proceedToChk: '[class="action-block"] > button',
    countryLst: 'select',
    checkbox: '.chkAgree',
    proceedBtn: 'button',


    //Practice Automation
    prcauto: "https://automationexercise.com/",
    signUp: 'a[href="/login"]',
    signUpText:'.signup-form>h2',
    signupName: 'input[name="name"]',
    signupEmail:'input[data-qa="signup-email"]',
    signUpbtn: 'button[data-qa="signup-button"]',
    mrsBtn: '#id_gender2',
    password:'#password',
    day: '#days',
    month: '#months',
    year: '#years',
    newsletter: '#newsletter',
    optin: '#optin',
    FirstName: '#first_name',
    LastName: '#last_name',
    company: '#company',
    address: '#address1',
    country: '#country',
    state: '#state',
    city: '#city',
    zipcode: '#zipcode',
    mobNo: '#mobile_number',
    createAccBtn: 'button[data-qa="create-account"]',
    createAcMsg: '.title b',
    title: '.title'
  }

  VisitUrl(url) {
    cy.visit(url)
  }

  SearchProduct(value) {
    cy.get(this.selector.searchProductBox).type(value)
    cy.get(this.selector.searchbtnBox).click()

  }

  SelectProduct(product) {
    cy.get(this.selector.productLst).each((el, i) => {
      cy.log(el.text())
      let veg = el.text().replace('- 1 kg', ' ').trim()
      if (veg == product) {
        cy.get(this.selector.addtoCart).eq(i).click({ force: true })
      }
    })

  }

  PlaceOrder(){
    cy.get(this.selector.cart).click()
    cy.get(this.selector.proceedToChk).first().click()
    cy.contains('Place Order').click()
    cy.get(this.selector.countryLst).select('India')
    cy.get(this.selector.checkbox).click()
    cy.get(this.selector.proceedBtn).click()
  }


   ClickOnBtn(btn){
        cy.wait(5000)
        cy.get(btn).click()
    }

    ValidateText(element, value){
        cy.get(element).should('have.text', value)
    }

    SignUpUser(name,email){
      cy.get(this.selector.signupName).type(name)
      cy.get(this.selector.signupEmail).type(email)
      cy.get(this.selector.signUpbtn).click()
      cy.contains('Enter Account Information').should('be.visible')

    }


    CreateUser(testdata){
      cy.get(this.selector.mrsBtn).click()
      cy.get(this.selector.password).type(testdata.password)
      cy.get(this.selector.day).type(testdata.date)
      cy.get(this.selector.month).type(testdata.month)
      cy.get(this.selector.year).type(testdata.birthYear)
      cy.get(this.selector.newsletter).click()
      cy.get(this.selector.optin).check()
      cy.get(this.selector.FirstName).type(testdata.firstName)
      cy.get(this.selector.LastName).type(testdata.lastName)
      cy.get(this.selector.company).type(testdata.company)
      cy.get(this.selector.address).type(testdata.address)
      cy.get(this.selector.country).type(testdata.country)
      cy.get(this.selector.state).type(testdata.state)
      cy.get(this.selector.city).type(testdata.city)
      cy.get(this.selector.zipcode).type(testdata.pincode)
      cy.get(this.selector.mobNo).type(testdata.phoneNumber)
      cy.get(this.selector.createAccBtn).click()
      cy.get(this.selector.createAcMsg).should('have.text', 'Account Created!')
      cy.get(this.selector.title).next('p').should('have.text', 'Congratulations! Your new account has been successfully created!')


    }

    login(email,userData){
      cy.get('input[data-qa="login-email"]').type(email)
      cy.get('input[data-qa="login-password"]').type(userData.password)
      cy.get('button[data-qa="login-button"]').click()
      cy.get('h1>span').first().should('have.text', 'Automation')
    }

}
export default HomePage