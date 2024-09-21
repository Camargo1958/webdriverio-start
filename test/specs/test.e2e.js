import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert.containsText(
            'You logged into a secure area!'))
    })
    // Intended to fail - for reporting demo purposes
    it('should login with invalid username', async () => {
        await LoginPage.open()

        await LoginPage.login('123', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert.containsText(
            'Wrong message'))
    })
    it('should login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', '123!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert.containsText(
            'Your password is invalid!'))
    })
})

