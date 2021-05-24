class Download
{
    ExportDrug()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-view')
            .shadow()
            .find('.main-content')
            .find('drug-table')
            .shadow()
            .find('.table-wrapper')
            .find('md-table')
            .shadow()
            .find('flex-box')
            .find('.export-dropdown')
            .find('export-dropdown')
            .shadow()
            .find('md-button')
            .shadow()
            .find('.md-button[role="button"]')
            .click()

    }

    

    ExportPayers()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('payer-info')
            .shadow()
            .find('.main-content')
            .find('payer-info-table')
            .shadow()
            .find('.table-wrapper')
            .eq('0')
            .find('md-table')
            .shadow()
            .find('flex-box')
            .find('.export-dropdown')
            .find('export-dropdown')
            .shadow()
            .find('md-button')
            .shadow()
            .find('.md-button[role="button"]')
            .click()

        
    }

    
    ExportManufacture()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('manufacturing-view')
            .shadow()
            .find('.main-content')
            .find('manufacture-table')
            .shadow()
            .find('div')
            .find('table-with-action-bar')
            .shadow()
            .find('.table-wrapper')
            .find('.table-top-wrapper')
            .find('.table__right')
            .find('export-dropdown')
            .shadow()
            .find('div')
            .find('md-button')
            .shadow()
            .find('.md-button[role="button"]')
            .click()

        

    }

    ExportInformatics()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('informatics-view')
            .shadow()
            .find('.main-content')
            .find('md-tabs')
            .shadow()
            .find('iron-pages')
            .find('.iron-selected')
            .find('clinical-trial')
            .shadow()
            .find('edc-information-table')
            .shadow()
            .find('div')
            .find('table-with-action-bar')
            .shadow()
            .find('.table-wrapper')
            .find('.table-top-wrapper')
            .find('.table__right')
            .find('export-dropdown')
            .shadow()
            .find('div')
            .find('md-button')
            .shadow()
            .find('paper-button')
            .click()     
            
    }    

    ExportClassifier()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('dashboard-view')
            .shadow()
            .find('.main-content')
            .find('div')
            .find('.row')
            .find('.graph-container')
            .find('classifier-performance')
            .shadow()
            .find('classifier-performance-table')
            .shadow()
            .find('table-with-action-bar')
            .shadow()
            .find('.table-wrapper')
            .find('.table-top-wrapper')
            .find('.table__right')
            .find('export-dropdown')
            .shadow()
            .find('.exportButtonWrapper')
            .find('md-button')
            .shadow()
            .find('.md-button')
            .click()
    }

     
 


}
export default Download