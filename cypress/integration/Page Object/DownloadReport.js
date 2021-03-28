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

    SelectExcel()
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
            .eq('0')
            .find('md-table')
            .shadow()
            .find('.justify-between')
            .find('.export-dropdown')
            .find('export-dropdown')
            .shadow()
            .find('#export-menu-dropdown')
            .find('mwc-list')
            .find('mwc-list-item')
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

    SelectPayerExcel()
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
            .find('.justify-between')
            .find('.export-dropdown')
            .find('export-dropdown')
            .shadow()
            .find('#export-menu-dropdown')
            .find('mwc-list')
            .find('mwc-list-item')
            .click()


    }
}
export default Download