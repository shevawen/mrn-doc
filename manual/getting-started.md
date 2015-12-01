Getting Started
======

## Android Setup

### Install [mrn](http://github.com/binggg/mrn)

```bash
npm install mrn --save
```

### Install [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

```bash
npm install react-native-vector-icons --save
```

### Setting Your Project For Using [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

**react-native-material-design requires [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons), so you should set your project for using it.**


* Save [materialdesignicons-webfont.ttf](https://github.com/binggg/MaterialReactNative/blob/master/android/app/src/main/assets/Fonts/materialdesignicons-webfont.ttf?raw=true)  to folder `android/app/src/main/assets/Fonts`. 

* Edit `android/settings.gradle` to look like this:

```java
rootProject.name = 'MyApp'

include ':app'

//Add the following two lines:
include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
```

* Edit `android/app/build.gradle` (note: **app** folder) to look like this: 

```java
apply plugin: 'com.android.application'

android {
    ...
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile 'com.android.support:appcompat-v7:23.0.0'
    compile 'com.facebook.react:react-native:0.12.+'
    
    // Add this line:
    compile project(':react-native-vector-icons')
}
```

* Edit your `MainActivity.java` (deep in `android/app/src/main/javaa/...`) to look like this:

```java
package com.myapp;

// Add this line:
import com.oblador.vectoricons.VectorIconsPackage;

import android.app.Activity;
....

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {

private ReactInstanceManager mReactInstanceManager;
private ReactRootView mReactRootView;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    mReactRootView = new ReactRootView(this);
    
    mReactInstanceManager = ReactInstanceManager.builder()
        .setApplication(getApplication())
        .setBundleAssetName("index.android.bundle")
        .setJSMainModuleName("index.android")
        .addPackage(new MainReactPackage())
    
        // and this line:
        .addPackage(new VectorIconsPackage())
    
        .setUseDeveloperSupport(BuildConfig.DEBUG)
        .setInitialLifecycleState(LifecycleState.RESUMED)
        .build();
    
    mReactRootView.startReactApplication(mReactInstanceManager, "MyApp", null);
    
    setContentView(mReactRootView);
}
...
}
```
 
