describe('calculateTaxes test', function(){
    it('should calculate the low tax bracket ',function (){
      expect(calculateTaxes(10000)).toEqual(1500)  
      expect(calculateTaxes(1000)).toEqual(150)  
    })
  })
  
  it('should reject invalid incomes',function(){
    expect(()=>calculateTaxes('adfasfda')).toThrowError()
    expect(()=>calculateTaxes([])).toThrowError()
    
  })
  it('should calculate the high tax bracket ',function (){
  expect(calculateTaxes(50000)).toEqual(12500)
  expect(calculateTaxes(100000)).toEqual(25000)
  })
  
  describe ('remove function',function(){
    it('should removes duplicates',function(){
      expect(removesDuplicates([1,1,2,2,3,4])).toEqual([1,2,3,4])
  })
  
  it('should remove duplicates from a string',function(){
    expect(removeDupes('hello')).toEqual('helo')
  })
  
  it('should remove value from array',function(){
    expect(remove([1,2,3,4,5,6],6)).not.toContain(6)
  } )
  
  })
  
  
  afterEach(function (){
    // input.value='';
    //whatever function in here runs afteer each it test like reseting everything to 0 values etc
    
  })
  
  beforeEach(()=>{
    //this function runs before each the its 
  })
  
  beforeAll(()=>{
    // runs before all of my test
  })
  
  afterAll(()=>{
    // to clean after every test is done 
  })
  // it('should submitForm',function(){
  //   submitForm();
  //   expect(names.lenght).toEqual(1)
  // })
  Footer
  © 2022 GitHub, Inc.
  Footer navigation
  Terms
  Privacy
  Security
  Status
  Docs
  Contact GitHub
  Pricing
  API
  Training
  Blog
  About
  