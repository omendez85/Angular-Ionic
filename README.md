# Setup

Install Android Studio -> https://developer.android.com/studio
Install Gradle -> https://gradle.org/install/

Open Android Studio and configure Android SDK to be added in the PATH system
Create a new AVD device -> This device name will be used to run the test (Pixel_2_API_R)

# Run
Start Angular project -> npm run start
Start Ionic server -> ionic serve
Run Android device -> ionic cordova emulate android  --target=Pixel_2_API_R --livereload-url=http://10.0.2.2:8100

# Notes
10.0.2.2 -> it is the IP used by the emulator to find the localhost with port
For PROD The Domain or IP  for your app must be configured in "resources\android\xml\network_security_config.xml" -

<domain-config cleartextTrafficPermitted="true">
    <domain includeSubdomains="true">localhost</domain>
    <domain includeSubdomains="true">XXX.XXX.XXX.XXX:XXXX</domain>
</domain-config>
