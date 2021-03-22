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
            .find('.form-group__input-control[type="text"]').type(email)
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
            .find('.form-group__input-control[type="password"]').type(password)
        

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

}
export default LoginPage