1. npx create-expo-app ./  => create an expo project
2. npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar  => all these packages are important for smooth working of expo's file based routing system
3. setup entry point to "expo-router/entry"

... https://docs.expo.dev/router/installation/

4. mention scheme in app.json, this field is used to deeplink expo and react native application
5. set app.json
6. npx expo start -c  => start app while removing previous cache

7. rnfes snippet for react native

8. slot - given by expo router is used for rendering child
```
  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </>
  );
```
9. stack - another way of implementing navigation is stack from expo-router
```
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
```
10. Link - Link component from expo router helps us to move from one screen to another
11. NativeWind - https://www.nativewind.dev/quick-starts/expo
    - npm install nativewind
    - npm install --save-dev tailwindcss@3.3.2
    - setup tailwind css 
    - add babel plugin

12. useFonts hook for using font

13. In react native we get to use the native capabilities of the platform as well

14. we use safeareaview - to take care of different devices for which app is being made
14. scrollview is used - if for some devices the content is bigger than the size, then the content needs to be scrollable

https://github.com/appwrite/sdk-for-react-native
15. setting up appwrite 
  - make appwrite.ts file and set the config
  - npx expo install react-native-appwrite react-native-url-polyfill => installing appwrite sdk for react native
  - make appwrite client in appwrite.ts file 
  - make your first request

16. show alerts using Alert.alert('Error', message) imort Alert from react native

17. context api used to maintain global state 

18. react-native-animatable => it allows you to add animation to your react native applications   `npm install react-native-animatable`

19. npx expo install expo-av => this allows playing audio and video in your application

20. getting params from url => useLocalSearchParams()
21. getting current path => usePathname()   from expo-router


22.  use router.replace() => when you don't want user to go back to previous page
23. use router.push() => when you want user to go back to the previous page

24. File picker => npm install expo-document-picker 

25. npx expo install expo-image-picker => another picker

26. Publish on expo app store - only android people can access from this
  - npm install -g expo-cli
  - expo publish

27. Building apk 
  - npm install -g eas-cli
  - eas build -p android  
  - you will get some links, open that expo eas link and there download android play store build from the link => from here you will get .aab file
  - then download the bundletool jar file from https://github.com/google/bundletool/releases
  - create a new folder named output and put both .aab file and the bundletool in that output folder
  - open terminal and cd to the output folder
  - run command => java -jar <bundletool.jar> build-apks --bundle=<filename.aab> --output=output.apks --mode=universal
  - it will create output.apks file inside the output folder itself.

### resources

- images in react native = https://medium.com/swlh/how-to-obtain-a-uri-for-an-image-asset-in-react-native-with-expo-88dfbe1023b8