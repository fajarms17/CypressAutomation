import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor"; 

Given('I open star website', ()=>{
    cy.visit('https://www-pre.star.astra.co.id')
})

When('I login with valid email and password',function(dataTable){
    //|tstcsr01a000@ai.astra.co.id|BatuKali@1102|
    cy.get('.ant-input').type(dataTable.rawTable[1][0]) 
    cy.get('#qbutton-login-dealer').click() 
    cy.origin('https://login.microsoftonline.com/', {args:{dataTable}}, ({dataTable})=>  {
       cy.wait(10000)    
       cy.get('input#i0118').type(dataTable.rawTable[1][1])
       cy.get('#idSIButton9').click()
       cy.get('#idBtn_Back').click() 

    })
})

Then('Validate username', () =>{
    cy.get('.ant-row > :nth-child(2) > .ant-typography').should('have.text', 'ILHAM FACHRUDIN')
})