import{expect,Page,Locator, selectors} from '@playwright/test';

export class webcommans{
    page:Page;

    constructor(page:Page){
    this.page=page
}

//common method return web element from locator
element(selector:string):Locator{
    return this.page.locator(selector)
}
//Common method to launch the application and verify the title
async launchApplication(url:string,title:string){
    this.page.goto(url)
    if(title)
    {
        await expect(this.page).toHaveTitle(title)
    }
}

//Common method to scroll to the web element
async scrollToView (selector:string)
{
    await this.element(selector).scrollIntoViewIfNeeded()
}

 //Common method to click on the web element

 async clickElement(selector:string)
 {
    await this.scrollToView(selector);
    await this.element(selector).click
 }

 //Common method to double click on the web element 
 async doubleClickElement(selector:string)
 {
    await this.scrollToView(selector);
    await this.element(selector).dblclick();
 }

 //Common method to right click on the web element 
 async rightClickElement(selector:string)
 {
    await this.scrollToView(selector)
    await this.element(selector).click({button:"right"});
 }
  //Common method to hover on the web element 
  async hoverElement(selector:string)
  {
    await this.scrollToView(selector);
    await this.element(selector).hover();
  }
   //Common method to force click on the element 
   async forceClickElement(selector:string)
   {
    await this.clickElement(selector)
    await  this.element(selector).click({force:true})
   }
   
    //Common method to click and hold on the web element

async holdAndClickElement(selector:string)
{
    await this.scrollToView(selector)
     const elementHandle = await this.element(selector).elementHandle();
        if (elementHandle) {
            await elementHandle.hover();
            await this.page.mouse.down();
        }
    }

//Common method to release the click on the web element
async releaseClickOnElement ()
{
    await this.page.mouse.up()
}


  //Common method to extract the text value from the element 

  async extractTestFromElememt(selector:string)
  {
    await this.scrollToView(selector)
    await this.element(selector).textContent()
  }

  //Common method to check the radio button 
  async checkRadioButton(selector:string)
  {
    await this.scrollToView(selector)
    await this.element(selector).check()
  }

  //Common method to uncheck the checkbox only if it is already checked

  async uncheckCheckBox(selector:string)
  {
    await this.scrollToView(selector)
   if(await this.element(selector).isChecked())
   {
    await this.element(selector).uncheck()
   }
  }

  //Common method to check the checkbox only if it is not already checked
  async checkCheckBox(selector:string)
  {
    await this.scrollToView(selector)
    const isChecked=await this.element(selector).isChecked()
    if(!isChecked)
    {
       await this.element(selector).check() 
    }

  }

   //Common method to select the option from the drop-down 

   async selectDropDownOption(selector:string,option:string)
   {
    await this.scrollToView(selector)
    await this.element(selector).selectOption(option)
   }

    //Common method to enter the text into the text box
    async enterTestIntoTextBox(selector:string,text:string)
    {
        await this.scrollToView(selector)
        await this.element(selector).clear()
        await this.element(selector).fill(text)
    }

    //Common method to clear the text entered into the text box 

    async cleartext(selector:string)
    {
        await this.scrollToView(selector)
        await this.element(selector).clear()
    }
//Common method to extract the attribute value from the element 

async extractAttributValue(selector:string,attributeValue:string,expectedValue:string)
{
    
    await expect(this.element(selector)).toHaveAttribute(attributeValue, expectedValue);
    }


//Common Method to Upload the File 

async uploadFile(selectors:string,filepath:string)
{
    await this.scrollToView(selectors)
    await this.element(selectors).setInputFiles(filepath)

}

//Common method to verify the visibility of an element 

async VisibilityOfElement(selector:string)
{
    await this.scrollToView(selector)
    await this.element(selector).isVisible()
   // await expect (this.element(selector)).toBeVisible()
}

 //Common method to verify the element is enabled or not 
async elementenable(selector:string)
{
    await this.scrollToView(selector)
    await expect(this.element(selector)).toBeEditable
}
     //Common method to verify the text value of the element
     
     async verifyTextValue(selector:string,value:string)
     {
        await this.scrollToView(selector)
       await expect(this.element(selector)).toHaveText(value)
       
     }

     //Common method to verify the attribute value of the element
    async isAttributeValueCorrect(selectors: string, attribute: string, expectedValue: string) {
        await expect(this.element(selectors)).toHaveAttribute(attribute, expectedValue);
    }

        //Common method to verify the element is not visible 
    async isElementNotVisible(selectors: string) {
        await expect(this.element(selectors)).toBeHidden();
    }

    //Common method to deal with alerts. 
    async handleAlert(action: string) {
        this.page.on("dialog", async (dialog) => {
            if (action === "accept") {
                await dialog.accept();
            } else if (action === "dismiss") {
                await dialog.dismiss();
            }
        });
    }


}