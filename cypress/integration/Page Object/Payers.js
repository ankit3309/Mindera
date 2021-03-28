class Payers
{
    payersPage()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .shadow()
            .find('side-bar')
            .shadow()
            .find('.sidebar-main-wrapper')
            .find('.sidebar-inner-wrapper')      
            .find('.menu-item')
            .eq('2')
            .click()            

    }

    PayersPageAssertion()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('payer-info')
            .shadow()
            .find('nav-bar')
            .shadow()
            .find('.navbar-wrapper')
            .find('.nav-bar-title')
            .contains('Payer Prescription Info')
            
    }


    addPayersPrescription()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('payer-info')
            .shadow()
            .find('mwc-fab')
            .shadow()
            .find('.mdc-ripple-upgraded--unbounded')
            .find('[name=icon]')
            .find('.material-icons').click()
    }

}
export default Payers