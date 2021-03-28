import LoginPage from '../Page Object/login'
import Drugs from '../Page Object/Drugs'
import addDrugForm from '../Page Object/AddDrugForm'
import Payers from '../Page Object/Payers'
import AddPayerForm from '../Page Object/AddPayerForm'
import Download from '../Page Object/DownloadReport'


describe('Test Suite',function()
{
    beforeEach(() => {
        cy.restoreLocalStorageCache();
      });
      
      afterEach(() => {
        cy.saveLocalStorageCache();
      });
    
    
    it('Verify Successful Login',function()
    {
        const login = new LoginPage()
        login.visit()
        login.Email('minderaUser')
        login.Password('minderaPassword')
        login.loginButton()        
        cy.wait(3000)
        cy.log('Login Successful')
        
    })

    
    it('Drug View Page',function()
    {
        const drug = new Drugs()
        
        drug.drugPage()        
        cy.wait(4000)
        drug.addDrug()
        
    })
    
    
    it('Drug Details Page',function()
    {
        const form = new addDrugForm()        
                
        form.drugBankID('DB01050')
        form.commercialName('Advil')
        form.Targets()
        form.selectTarget()
        form.InnName('Ibuprofen')
        form.Weight('206.2808')
        form.Synonyms()
        form.selectSynonym()
        form.drugType()
        form.dType()      
        form.createButton()   
        cy.wait(3000)
        cy.log('Drug Added')     
        form.DrugAddedAssertion()
        
    })

    
    it('Export Drugs in Excel',function()
    {
        const download = new Download
        download.ExportDrug()
        download.SelectExcel()
        cy.log('Drug Table Downloaded')
    })
    
    
    it('Payer Prescription Page',function()
    {
        const payer = new Payers()
                
        payer.payersPage()
        cy.wait(4000)
        payer.PayersPageAssertion()
        payer.addPayersPrescription()
        
    })

    it('Payer Prescription Details Page', function()
    {
        const addPayer = new AddPayerForm()
        
        addPayer.Payer()
        addPayer.PayerName('United Healthcare')
        addPayer.PayerURL('https://www.google.com/')
        addPayer.PayerTier()
        addPayer.SelectPayerTier()
        addPayer.AddPayer()
        addPayer.Drug('Advil')
        addPayer.SelectDrug()
        addPayer.Plan()
        addPayer.PlanName('Johns Hopkins Healthcare')
        addPayer.PlanType()
        addPayer.SelectPlanType()
        addPayer.PlanTier()
        addPayer.SelectPlanTier()
        addPayer.PlanState()
        addPayer.SelectPlanState()
        addPayer.PlanState()
        addPayer.SelectPlanState()
        addPayer.AddPlan()
        cy.wait(2000)
        addPayer.State()
        addPayer.SelectState()
        addPayer.DrugPrice('10')
        addPayer.CoveredLives('10')
        addPayer.PsoriasisPercentage('10')
        addPayer.CreatePayer()
        cy.log('Payer Prescription Added')       


    })
    
    it('Export Payers in Excel',function()
    {
        const download = new Download
        download.ExportPayers()
        download.SelectPayerExcel()
        cy.log('Payers Prescription Table Downloaded')
    })


})