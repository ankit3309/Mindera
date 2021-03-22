class addForm
{
    drugBankID(ID)
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-details')
            .shadow()
            .find('.main-content')
            .find('drug-details-view')
            .shadow()
            .find('.form-wrapper')
            .find('.col-6')
            .eq('0')
            .find('min-input')
            .shadow()
            .find('.form-group__control-wrap')
            .eq('0')
            .find('.form-group__input-control[type="text"]')
            .eq('0')
            .type(ID)
            

    }
    
    commercialName(cName)
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-details')
            .shadow()
            .find('.main-content')
            .find('drug-details-view')
            .shadow()
            .find('.form-wrapper')
            .find('.col-6')
            .eq('1')
            .find('min-input')
            .shadow()
            .find('.form-group__input-control[type="text"]')
            .type(cName)

    }

    Targets()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-details')
            .shadow()
            .find('.main-content')
            .find('drug-details-view')
            .shadow()
            .find('.form-wrapper')
            .find('.col-6')
            .eq('2')
            .find('min-auto-complete')
            .shadow()
            .find('#input')
            .click()
    }

    selectTarget()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-details')
            .shadow()
            .find('.main-content')
            .find('drug-details-view')
            .shadow()
            .find('.form-wrapper')
            .find('.col-6')
            .eq('2')
            .find('min-auto-complete')
            .shadow()
            .find('iron-dropdown')
            .find('mwc-list')
            .find('mwc-list-item')
            .eq('0')
            .click()
    }

    InnName(innName)
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-details')
            .shadow()
            .find('.main-content')
            .find('drug-details-view')
            .shadow()
            .find('.form-wrapper')
            .find('.col-6')
            .eq('3')
            .find('min-input')
            .shadow()
            .find('.form-group__input-control[type="text"]')
            .type(innName)

    }

    Weight(weight)
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-details')
            .shadow()
            .find('.main-content')
            .find('drug-details-view')
            .shadow()
            .find('.form-wrapper')
            .find('.col-6')
            .eq('4')
            .find('min-input')
            .shadow()
            .find('.form-group__input-control[type="number"]')
            .type(weight)
    }

    Synonyms()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-details')
            .shadow()
            .find('.main-content')
            .find('drug-details-view')
            .shadow()
            .find('.form-wrapper')
            .find('.col-6')
            .eq('5')
            .find('min-auto-complete')
            .shadow()
            .find('#input')
            .click()

    }

    selectSynonym()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-details')
            .shadow()
            .find('.main-content')
            .find('drug-details-view')
            .shadow()
            .find('.form-wrapper')
            .find('.col-6')
            .eq('5')
            .find('min-auto-complete')
            .shadow()
            .find('iron-dropdown')
            .find('mwc-list')
            .find('mwc-list-item')
            .eq('0')
            .click()
    }

    drugType()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-details')
            .shadow()
            .find('.main-content')
            .find('drug-details-view')
            .shadow()
            .find('.form-wrapper')
            .find('.col-6')
            .eq('6')
            .find('min-auto-complete')
            .shadow()
            .find('#input')
            .click()
            

    }

    dType()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-details')
            .shadow()
            .find('.main-content')
            .find('drug-details-view')
            .shadow()
            .find('.form-wrapper')
            .find('.col-6')
            .eq('6')
            .find('min-auto-complete')
            .shadow()
            .find('iron-dropdown')
            .find('mwc-list')
            .find('mwc-list-item')
            .eq('0')
            .click()
    }

    createButton()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('drug-details')
            .shadow()
            .find('.main-content')
            .find('drug-details-view')
            .shadow()
            .find('.form-wrapper')
            .find('.action-buttons')
            .find('.ml-2x')
            .shadow()
            .find('.md-button[role="button"]')
            .click()
    }

}
export default addForm