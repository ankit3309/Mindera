class LoginPage
{
    visit()
    {
        cy.visit('https://dev.skin-atlas.com')

    }

    Email(email)
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('login-page')            
            .shadow()
            .find('login-page-view')
            .shadow()            
            .find('min-input')
            .shadow()            
            .find('.form-group__input-control[type="text"]')
            .should('be.visible')
            .and('be.enabled')
            .type(email)
    }

    Password(password)
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('login-page')
            .shadow()
            .find('login-page-view')
            .shadow()
            .find('[type="password"]')
            .shadow()
            .find('.form-group__input-control[type="password"]')
            .should('be.visible')
            .and('be.enabled')
            .type(password)
        

    }

    loginButton()
    {
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('login-page')
            .shadow()
            .find('login-page-view')
            .shadow()
            .find('[type="primary"]')
            .shadow()
            .find('.md-button[role="button"]')
            .click()

    }

    LoginAssertion()
    {
        
        cy.get('skin-atlas')
            .shadow()
            .find('.wrapper')
            .find('#main')
            .find('private-component')
            .find('dashboard-view')
            .shadow()
            .find('nav-bar')
            .shadow()
            .find('.navbar-wrapper')
            .find('.nav-bar-title')
            .should('be.visible')
            .contains('Dashboard')
    }

}
export default LoginPage