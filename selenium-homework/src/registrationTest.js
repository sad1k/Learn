const { Builder, By, Key, until } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();
require('dotenv').config();

const path = process.env.PATH_TO_HTML

async function openWebsite() {
    try {
      await driver.get(path);
      await driver.sleep(1000)
      await driver.findElement(By.id('login')).sendKeys('misha@gmail.com')
      await driver.findElement(By.id('password')).sendKeys('qwerty123');
      await driver.findElement(By.name('checkbox')).click()
      await driver.findElement(By.id('buttonLogin')).click()
      await driver.sleep(1000)
      await driver.findElement(By.id('alert')).isDisplayed()
      console.log('test is successful')
    } catch (error) {
      console.error('Failed to open website:', error);
    }
  }
  
  openWebsite();