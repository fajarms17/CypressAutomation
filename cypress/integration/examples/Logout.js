/// <reference types="Cypress"/>
describe('Star', function()  {
  
  before(function(){
    cy.fixture('example').then((data) =>{
      this.data = data
    })
  })
    it('Logout', function()  { 
            
      cy.visit(Cypress.env('url')) 
      cy.get('.ant-input').type(this.data.username) 
      cy.get('#qbutton-login-dealer').click()
      var pwd = this.data.password
      cy.origin('https://login.microsoftonline.com/', {args:{pwd}}, ({pwd}) =>  {
        cy.wait(10000)    
        cy.get('input#i0118').type(pwd) 
        cy.get('#idSIButton9').click()
        cy.get('#idBtn_Back').click() 

      })
      cy.get('.ant-row > :nth-child(2) > .ant-typography').should('have.text', 'ILHAM FACHRUDIN')
      cy.get('[class^=User_profile]').trigger('mouseover') //hover to profile
      cy.contains('Logout').click()
      cy.url().should('include','signout')
    })
})