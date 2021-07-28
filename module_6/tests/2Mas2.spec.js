// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const capabilities = {
  'browserName': 'chrome',
  'goog:chromeOptions': {
     'args': [ '--headless']
   }
}
describe('2Mas2', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
   beforeEach(async function() {
    driver = await new Builder()
      .forBrowser('chrome')
      .withCapabilities(capabilities)
      .setChromeOptions()
      .build()
   })   
  afterEach(async function() {
    await driver.quit();
  })
  it('2Mas2', async function() {
    await driver.get("https://www.meta-calculator.com/scientific-calculator.php?panel-201-calculator")
    await driver.findElement(By.css(".col-md-6 > .calc > .mcbtn > .btn2")).click()
    await driver.findElement(By.css(".calc > .mtext > .btnPlus")).click()
    await driver.findElement(By.css(".col-md-6 > .calc > .mcbtn > .btn2")).click()
    await driver.findElement(By.css(".col-md-6 > .calc > .mcbtn > .btnEquals")).click()
    await driver.sleep(1000)
    let result = await driver.findElement(By.css("input.txtExpression.maxi")).getAttribute('value')
    assert.equal(result, "4", "2+2 equals 4")
  })
})
