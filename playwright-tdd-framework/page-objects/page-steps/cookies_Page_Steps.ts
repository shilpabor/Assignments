import {Page} from '@playwright/test'
import cookiespage from '../page-elements/cookies_page_element.json';
import { webcommans } from '../../commons/ui/Web-commans';

export class cookiesPagestep
{
    page:Page;
    web:webcommans

    constructor(page:Page){
    this.page=page;
    this.web=new webcommans(page)
}

//Method to verify Cookies page is displayed. 

async verifycookiespagedisplayed()
{
    await this.web.VisibilityOfElement(cookiespage.cookiesheader)
}

//Method to verify the content of the cookies page.
async verifyContentOfCookies(expectedString:string)
{
    await this.web.VisibilityOfElement(cookiespage.cookiescontent)
    const contains=await this
}

// // Method to verify the logos on the cookies pop-up
}


