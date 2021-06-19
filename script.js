
require("chromedriver")

const wd = require("selenium-webdriver")

let statemt = ""
let mission = []
let navBar = ""
let logo = ""
let pageContent = []
let mailIcon = ""
let join = ""
const browser = new wd.Builder().forBrowser('chrome').build();

async function main(){
    await browser.get("https://www.thesparksfoundationsingapore.org/")
    browser.manage().window().maximize();

    await browser.wait(wd.until.elementLocated(wd.By.css(".dropdown-toggle.menu__link")))
    let pages = await browser.findElements(wd.By.css(".dropdown-toggle.menu__link"))
    await pages[0].click();

    await browser.wait(wd.until.elementLocated(wd.By.css(".dropdown-menu li")))
    let pagesCount =await browser.findElements(wd.By.css(".dropdown-menu li"))
    await pagesCount[0].click()

    page1()

    await browser.wait(wd.until.elementsLocated(wd.By.css(".dropdown-toggle.menu__link")))
    let pagess = await browser.findElements(wd.By.css(".dropdown-toggle.menu__link"))
    await pagess[1].click();

    await browser.wait(wd.until.elementsLocated(wd.By.css(".dropdown-menu li")))
    let pagesCount2 = await browser.findElements(wd.By.css(".dropdown-menu li"))
    await pagesCount2[8].click()

    page2()

    await browser.wait(wd.until.elementsLocated(wd.By.css(".dropdown-toggle.menu__link")))
    let page = await browser.findElements(wd.By.css(".dropdown-toggle.menu__link"))
    await page[2].click();
    
    await browser.wait(wd.until.elementsLocated(wd.By.css(".dropdown-menu li")))
    let pagesCount3 = await browser.findElements(wd.By.css(".dropdown-menu li"))
    await pagesCount3[12].click()
    page3()

    await browser.wait(wd.until.elementsLocated(wd.By.css(".dropdown-toggle.menu__link")))
    let pagesss = await browser.findElements(wd.By.css(".dropdown-toggle.menu__link"))
    await pagesss[3].click();
    
    await browser.wait(wd.until.elementsLocated(wd.By.css(".dropdown-menu li")))
    let pagesCount4 = await browser.findElements(wd.By.css(".dropdown-menu li"))
    await pagesCount4[19].click()
    page4()


    await browser.wait(wd.until.elementsLocated(wd.By.css(".dropdown-toggle.menu__link")))
    let pageL = await browser.findElements(wd.By.css(".dropdown-toggle.menu__link"))
    await pageL[4].click();
    
    await browser.wait(wd.until.elementsLocated(wd.By.css(".dropdown-menu li")))
    let pagesCount5 = await browser.findElements(wd.By.css(".dropdown-menu li"))
    await pagesCount5[20].click()
    page5()

    await browser.wait(wd.until.elementLocated(wd.By.css(".dropdown-toggle.menu__link")))
    let pagesL = await browser.findElements(wd.By.css(".dropdown-toggle.menu__link"))
    await pagesL[0].click();

    await browser.wait(wd.until.elementLocated(wd.By.css(".col-md-6.navbar-brand")))
    let pagesCountN =await browser.findElements(wd.By.css(".dropdown-menu li"))
    await pagesCountN[6].click()

    console.log(pageContent)

}

async function page1(){
    let check = await browser.wait(wd.until.elementLocated(wd.By.css(".nav.navbar-nav")))
    if(check) navBar = "nav bar exsists"

    await browser.wait(wd.until.elementsLocated(wd.By.css(".tittle-agileits-w3layouts span")))

    let topicName =await browser.findElements(wd.By.css(".tittle-agileits-w3layouts span"))

    for(let i=0; i < topicName.length;i++){
        statemt = await topicName[i].getAttribute("innerText")
        mission.push(statemt)
    }

    pageContent.push({"Page No ": "page1-Vision, Mission And Values", "NavBar exsists on this page ?" : navBar, "statements" :mission})

}

async function page2(){

    let logoCheck = await browser.wait(wd.until.elementLocated(wd.By.css(".col-md-6.navbar-brand img")))

    if(logoCheck){
        logo = "logo exsists on this page"
    } 

    let undertitle = await browser.findElement(wd.By.css(".col-md-6.navbar-brand span"))
    let text = await undertitle.getAttribute("innerText")

    pageContent.push({"Page No ": "page2-Code Of Ethics And Conduct", "logo exsists on this page ?" : logo, "quoto below the title" :text})

}

async function page3(){

    await browser.wait(wd.until.elementLocated(wd.By.css(".scroll")))
    let scroll = await browser.findElement(wd.By.css(".scroll"))
    await scroll.click()

    await browser.wait(wd.until.elementsLocated(wd.By.css(".button-w3layouts.hvr-rectangle-out.tsf-button")))
    let noCol = await browser.findElements(wd.By.css(".button-w3layouts.hvr-rectangle-out.tsf-button"))

    pageContent.push({"Page No ": "page3-Student Scholarship Program", "is scroller working ?" : "yes", "Total No. Of Programs" :noCol.length})
 
}

async function page4(){

    await browser.wait(wd.until.elementLocated(wd.By.css(".fa.fa-medium")))
    let copyRights = await browser.findElement(wd.By.css(".fa.fa-medium"))
    if(copyRights){
        mailIcon = "it has mail icon"
    } 

    let footerName = await browser.findElements(wd.By.css(".col-md-3.footer-grids.w3l-agileits a"))
    let footerText = await footerName[0].getAttribute("innerText")

    pageContent.push({"Page No ": "page4-AI In Education", "is mail Icon present ?" : mailIcon, "THE SPARKS FOUNDATION = " :footerText})
}

async function page5(){
    
    await browser.wait(wd.until.elementLocated(wd.By.css(".form-bg-w3ls")))
    let submitBox = await browser.findElement(wd.By.css(".form-bg-w3ls"))
    if(submitBox)  join ="Joining Box is there"

    let rolOption = await browser.findElements(wd.By.css(".form-control option"))

    pageContent.push({"Page No ": "page5-Join Us", "is Joining Box there ?" : join, "total no. of role options available are" :rolOption.length})
}

main();