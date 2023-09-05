module.exports = {
  logger: {
    level: process.env.CI ? 'debug' : undefined,
  },
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e.jest.config.ts',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  artifacts: {
    plugins: {
      log: process.env.CI ? 'failing' : undefined,
      screenshot: 'failing',
    },
  },
  apps: {
    ios: {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/Templateqa.app',
      build:
        'xcodebuild -workspace ios/Templateqa.xcworkspace -scheme Templateqa -configuration Release -sdk iphonesimulator -arch x86_64 -derivedDataPath ios/build',
    },
    android: {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      testBinaryPath:
        'android/app/build/outputs/apk/androidTest/release/app-release-androidTest.apk',
      build:
        'cd android && ./gradlew app:assembleRelease app:assembleAndroidTest -DtestBuildType=release && cd ..',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14',
      },
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'pixel_4',
      },
    },
  },
  configurations: {
    ios: {
      device: 'simulator',
      app: 'ios',
    },
    'android.att': {
      device: 'attached',
      app: 'android',
    },
    'android.emu': {
      device: 'emulator',
      app: 'android',
    },
  },
}
