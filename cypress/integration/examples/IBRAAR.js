/// <reference types="Cypress"/>
let getText
describe('Star', () => {
    it('Outgoing IBRA AR', () => { 
      
      cy.visit('https://www-pre.star.astra.co.id')   
      cy.get('.ant-input').type('tstcsr01a000@ai.astra.co.id') 
      cy.get('#qbutton-login-dealer').click() 
      cy.origin('https://login.microsoftonline.com/', () => {
        cy.wait(10000)    
        cy.get('input#i0118').type('BatuKali@1102')
        cy.get('#idSIButton9').click()
        cy.get('#idBtn_Back').click() 

      })
      cy.get('.ant-row > :nth-child(2) > .ant-typography').should('have.text', 'ILHAM FACHRUDIN')
      cy.get('.ant-btn').click()
      cy.contains('Pengeluaran Pembayaran').click()
      cy.contains('Pengeluaran Baru').click()
      cy.get('.Sidebar_sidebar__0yU2P > .ant-btn').click()
      cy.get('[value="OPERATION"]').should('be.checked') //check the selected radio button by default
      cy.get('.ant-select-selector').click()
      cy.contains('Show Result').should('be.disabled') //check the button before selected data type
      cy.contains('IBRA').click()
      cy.contains('Show Result').click()
      //check the table is visible after clicking the button "Show Result"
      cy.get('[class^=Result_]').should('be.visible')

      //check the table title
      cy.get('.ant-row-space-between > :nth-child(1) > .ant-typography > strong').should('have.text', 'Data IBRA')

      cy.wait(10000)
      cy.get('td:nth-child(4)').each(($el, index, $list) => {
        const namaPelanggan = $el.text()
        if(namaPelanggan.includes('IBRA AR')){
          
          cy.get('tbody').find(".ant-radio-input").eq(index).click() //click the checkbox
                    
        }
      })
      cy.contains('Lanjut Proses').click()
      cy.contains('Add Reference Document').click()
      cy.get('[type="checkbox"]').should('not.be.checked')
      cy.wait(10000)
      cy.get('[type="checkbox"]').eq(2).check()
      cy.get('[type="checkbox"]').eq(3).check()
      cy.get('.ant-btn-primary').click()
      cy.contains('Lanjut Proses').click()
      cy.get('.ant-input-number-input').should('be.disabled')
      var sum = 0
      cy.get('td:nth-child(8) .ant-input-number-input').each(($el,index,$list)=>{
        const nilai = $el.val().split(".").join("")
        sum = sum + Number(nilai)
        
      }).then(function(){
        cy.log(sum)

      })
      cy.get('.ant-table-summary > tr > :nth-child(3)').then(function($el){
        const subtotal = $el.text().substring(4).split(".").join("")
        expect(Number(subtotal)).to.equal(sum)
        cy.log(subtotal)

      })
      cy.pause()
      cy.get('[placeholder="Input Keterangan"]').eq(0).type('cyborg') // input keterangan
      cy.contains('Send BKU').should('be.disabled') // check button Send BKU
      cy.get('[maxlength="18"]').type('REF')
      cy.contains('Simpan').click()
      cy.get('.Styles_btn-confirm-wrapper__ovKtG > .ant-btn').click()
      cy.get('h1').then(($value)=>{
        assert.include($value.text(),'Disimpan')
        getText = $value.text().substring(15,30) //get BKU number
        cy.log(getText)        
      })      
      
      cy.get('.ant-btn').click() //back to outgoing page
      cy.get('.Sidebar_sidebar__0yU2P > .ant-btn').click()
      cy.contains('Pengeluaran Pembayaran').click()
      cy.contains('Monitoring').click()
      cy.get('.Sidebar_sidebar__0yU2P > .ant-btn').click()
      cy.wait(8000)
      cy.get('td:nth-child(4)').each(($el, index, $list) => {
        const nomorBKU = $el.text()        
        if(getText.includes(nomorBKU)){
          cy.get('td:nth-child(8)').eq(index).should('have.text','EMPTY') //check status BKU
                    
        }
      }) 
     
      
      
      
      
      
    })
  })