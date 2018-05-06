## Prerequisites

- download [commandline-tools] and [platform-tools]
- Add `tools/bin` and `platform-tools` to $PATH and current dir (containing `tools` and `platform-tools` dirs) to $ANDROID_HOME
- run
    ```
    sdkmanager --update
    sdkmanager "platforms;android-25" "build-tools;25.0.2" "extras;google;m2repository" "extras;google;google_play_services"
    sdkmanager --licenses
    ```
- Configured either real device or emulator

## Install
```
npm i
```

## Run

```
npm run android
npm run start
```

[commandline-tools]: https://developer.android.com/studio/#command-tools
[platform-tools]: https://developer.android.com/studio/releases/platform-tools
