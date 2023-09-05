import { by, device, element, expect } from 'detox'

const validEmail = 'test@example.com'
const validPassword = '123456'

describe('Auth', () => {
  beforeAll(async () => {
    const isAndroid = (await device.getPlatform()) === 'android'
    if (!isAndroid) {
      await device.clearKeychain()
    }
    await device.launchApp({ delete: isAndroid, newInstance: true })
  })

  it('should sign in successfully', async () => {
    const isAndroid = (await device.getPlatform()) === 'android'

    const emailInput = element(by.id('emailInput'))
    const passwordInput = element(by.id('passwordInput'))
    const signInButton = element(by.id('signInButton'))

    if (isAndroid) {
      await waitFor(emailInput).toBeVisible().withTimeout(5000)
      await waitFor(passwordInput).toBeVisible().withTimeout(5000)
    }

    await emailInput.replaceText(validEmail)

    await passwordInput.replaceText(validPassword)

    if (isAndroid) {
      await waitFor(signInButton).toBeVisible().withTimeout(5000)
    }
    await signInButton.tap()

    const homeScreen = element(by.id('homeScreen'))
    if (isAndroid) {
      await waitFor(homeScreen).toBeVisible().withTimeout(5000)
    }

    await expect(homeScreen).toBeVisible()
  })
})
