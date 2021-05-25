import LoginPage from '../Page Object/login'
import Drugs from '../Page Object/Drugs'

import Payers from '../Page Object/Payers'
import Dashboard from '../Page Object/Dashboard'
import Download from '../Page Object/DownloadReport'
import Manufacture from '../Page Object/Manufacturing'
import Informatics from '../Page Object/Informatics'


describe('Test Suite',function()
{
    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });
      
    afterEach(() => {
        cy.saveLocalStorageCache();
    });
    
    it('Verify User Cannot Login With Invalid Credentials',function()
    {
        const login = new LoginPage()
        login.visit()
        login.Email('InvalidUser')
        login.Password('InvalidPassword')
        login.loginButton()        
        cy.log('Login Unsuccessful')
          
    })
    
    
    it('Verify User Can Login into Skin Atlas Application',function()
    {
        const login = new LoginPage()
        login.visit()
        login.Email('skinatlasdev@minderadx.com')
        login.Password('$ec!0ginisKey')
        login.loginButton()        
        cy.wait(5000)
        login.LoginAssertion()
        cy.log('Login Successful')
        
    })

    it('Verify That User can Upload file in Classifier Performance', function()
    {
        const upload = new Dashboard
        upload.FileUpload()
        cy.wait(3000)
        upload.UploadAssertion()

    })

    it('Verify That User can Export Classifier Performance', function()
    {
        const exportClassifier = new Download
        exportClassifier.ExportClassifier()

    })

       
    it('Verify User can Click Drugs From Left Menu',function()
    {
        const drug = new Drugs
        
        drug.drugMenu()        
        cy.wait(4000)
        drug.addDrug()
        
    })
    
    
    it('Verify That User can Add Drugs',function()
    {
        const form = new Drugs        
                
        form.drugBankID('DB01050')
        form.commercialName('Advil')
        form.Targets()
        form.selectTarget()
        form.InnName('Ibuprofen')
        form.Weight('206.2808')
        form.drugType()
        form.dType()      
        form.createButton()   
        cy.wait(3000)
        cy.log('Drug Added')     
        form.DrugAddedAssertion()
        
    })

    it('Verify That User can Edit Drugs',function()
    {
        const editDrug = new Drugs
        editDrug.EditDrug()
        editDrug.DrugUpdatedAssertion()
    })

    it('Verify That User can Filter Drugs Table', function()
    {
        const filterDrug = new Drugs

        filterDrug.FilterDrugBankId()
        filterDrug.FilterName()
        filterDrug.FilterTargets()
        filterDrug.FilterDrugType()
        filterDrug.FilterAssertion()
    })

    it('Verify That User can Export Drugs in Excel',function()
    {
        const download = new Download
        download.ExportDrug()
        
        cy.log('Drug Table Downloaded')
    })

    it('Verify That User can Delete Drugs',function()
    {
        const deleteDrug = new Drugs
        deleteDrug.DeleteDrug()
    })  
   
        
    it('Verify That User can Click Payer Info from Left Menu',function()
    {
        const payer = new Payers
                
        payer.payersPage()
        cy.wait(4000)
        payer.PayersPageAssertion()
        payer.addPayersPrescription()
        
    })

    it('Verify That User can Add Payer Prescription', function()
    {
        const addPayer = new Payers
        
        addPayer.AddPayerButton()
        addPayer.PayerName('Chicago Payer')
        addPayer.PayerURL('https://www.google.com/')
        addPayer.PayerTier()
        addPayer.SelectPayerTier()
        addPayer.AddPayer()
        addPayer.Drug('Advil')
        addPayer.SelectDrug()
        addPayer.AddPlanButton()
        addPayer.PlanName('Chicago Hospital')
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
        addPayer.PayerAddedAssertion()      


    })

    it('Verify That User can Edit Payer Prescription',function()
    {
        const editPayer = new Payers

        editPayer.EditPayerPrescription()
        editPayer.PayerEditAssertion()

    })

    it('Verify That User can Filter Payer Table', function()
    {
        const filterPayer= new Payers

        filterPayer.FilterPayer()
        filterPayer.FilterDrug()
        filterPayer.FilterTarget()
        filterPayer.FilterPlan()
        filterPayer.FilterState()
        filterPayer.FilterAssertion()
    })

        
    it('Verify That User can Export Payers in Excel',function()
    {
        const download = new Download
        download.ExportPayers()
        
        cy.log('Payers Prescription Table Downloaded')
        
    })

    it('Verify That User can Delete Payer Prescription',function()
    {
        const deletePayer = new Payers
        deletePayer.DeletePayerPrescription()
    })

    it('Verify That User can Click Manufacture From Left Menu', function()
    {
        const manufacture = new Manufacture
        
        manufacture.Manufacturing()
        

    })

    it('Verify Finished Goods Table with Filter', function()
    {
        const finishedGoods = new Manufacture
        finishedGoods.FilterPartName()
        finishedGoods.FilterPartName()
        finishedGoods.FilterCustomerName()
        finishedGoods.FilterDate()
        
    })

    it('Verify That User can Export Manufacture Data Table', function()
    {
        const download = new Download
        download.ExportManufacture()

    })

    it('Verify that User can Click Informatics From Left Menu', function()
    {
        const informatics = new Informatics
        informatics.InformaticsPage()    
        cy.wait(3000)
       
       
    })

    it('Verify that User can Filter Clinical Trial Graph', function()
    {
        
        
        const filterGraph = new Informatics
        // filterGraph.FilterByAge()    
        filterGraph.FilterBySite()
               
    })

    it('Verify that User can Filter EDC Table', function()
    {
        
        
        const filterGraph = new Informatics
        
        filterGraph.FilterProject()
        filterGraph.FilterSubjectID()
        filterGraph.FilterDrug()
        filterGraph.FilterDrugClass()
        filterGraph.FilterAge()
        filterGraph.FilterAgeGroup()
        filterGraph.FilterGender()
        filterGraph.FilterBMI()
        filterGraph.FilterBMIGroup()
        filterGraph.FilterWeight()
        filterGraph.FilterRace()
        filterGraph.FilterHeight()
        filterGraph.FilterW0PASI()
        filterGraph.FilterW4PASI()
        filterGraph.FilterW12PASI()

       
    })
    
    it('Verify That User can Export EDC Data Table', function()
    {
        const download = new Download
        download.ExportInformatics()

    })

    it('Verify that User can view Single Patient View Page', function()
    {
        
        
        const singlePatientView = new Informatics
        // filterGraph.FilterByAge()    
        singlePatientView.SinglePatientView()
        singlePatientView.AssertingSinglePatientView()
               
    })

   



})