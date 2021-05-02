/// <reference types="cypress-xpath" />

context('Window', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/')
    })
  
    it('Submit a Form', () => {
      cy
      .xpath('//h5[contains(text(),"Forms")]').click()
      
      cy.xpath('//div[contains(text(),"Elements")]').click()
      
      cy.xpath('//span[contains(text(),"Text Box")]').click()
      
      cy.xpath('//input[@id="userName"]').type("Lorem Ipsum")
      
      cy.xpath('//input[@id="userEmail"]').type("lorem@ipsum.com")
      
      cy.xpath('//textarea[@id="currentAddress"]').type("Lorem ipsum dolor sit amet")
      
      cy.xpath('//button[@id="submit"]').click()

      cy.xpath('//p[@id="name" and contains(.,"Lorem Ipsum")]').should('be.visible')

      cy.xpath('//p[@id="email" and contains(.,"lorem@ipsum.com")]').should('be.visible')

      cy.xpath('//p[@id="currentAddress" and contains(.,"Lorem ipsum dolor sit amet")]').should('be.visible')
    })
  })
  