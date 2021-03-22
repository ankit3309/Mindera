class Drugs
{
    drugPage()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .wait(6000)
            .find('private-component')
            .shadow()
            .find('side-bar')
            .shadow()
            .find('.sidebar-main-wrapper')
            .find('.sidebar-inner-wrapper')        
                  
            
            .find('.menu-item')
            .eq('1')
            .click()
            .wait(6000)
            
    }
    addDrug()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            
            .find('drug-view')
            .shadow()
            .find('mwc-fab')
            .shadow()
            .find('.mdc-ripple-upgraded--unbounded')
            .find('[name=icon]')
            .find('.material-icons').click()
             

    }
    
}

export default Drugs
