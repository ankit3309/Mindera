import LoginPage from '../Page Object/login'
import Drugs from '../Page Object/Drugs'
import addForm from '../Page Object/Addform'

describe('Test Suite',function()
{
    
    it('Verify Successful Login',function()
    {

        const login = new LoginPage()
        login.visit()
        login.Email('minderaUser')
        login.Password('minderaPassword')
        login.loginButton()
    
        cy.wait(6000)
    })

    it('Drug View',function()
    {
        const drug = new Drugs()
        const login = new LoginPage()

        drug.drugPage()
        login.Email('minderaUser')
        login.Password('minderaPassword')
        login.loginButton()
        cy.wait(6000)
        drug.addDrug()
        
    })
    it('Drug Details',function()
    {
        const form = new addForm()
        const login = new LoginPage()
        form.drugBankID('DB00051')
        form.commercialName('Humira')
        form.Targets()
        form.selectTarget()
        form.InnName('Adalimumab')
        form.Weight('10')
        form.Synonyms()
        form.selectSynonym()
        form.drugType()
        form.dType()
        form.createButton()
        cy.wait(8000)
        
        login.Email('minderaUser')
        login.Password('minderaPassword')
        login.loginButton()
    })
})