---
title: 'What is Expo and Should we use it in 2021?'
date: '2021-09-30'
---


When people hear about React Native, they often have
heard about it or maybe have played around with it.
However, when it comes to Expo, they may not have
heard of it, but if they have played around with react
native, it could highly likely be the case that they have
used Expo.

When a user is going through the official development
docs of React Native, they go through the introductory
docs going over the core concepts, including what
React Native is as well as a few core components and
how to go about styling them inside a few widgets that
render the code to UI side by side.

![React Native Quickstart Page](/images/expo-rn-quickstart.png "a title")

That widget is an Expo widget, and the next guide
document the user gets to is the screen underneath.
The first page for setting up a development environment
on official react native dev docs: [React Native Docs: Environment Setup](https://reactnative.dev/docs/environment-setup)

From here, when the official documents always start the
user off with using expo, as well as using it in widgets
for showcasing and tutorializing its functionality, that
gives weight to its importance on the wider React
Native.

## Scope of Expo

Anyone that has used Expo understands the title that
comes in on Expo’s home page, ["Make any app. Run it everywhere."](https://expo.dev), which covers exactly what Expo aims to
do. Directly from React Native’s home page, its header
["Learn once, write anywhere"](https://reactnative.dev) symbolises where Expo
fits in.

![Expo Home Page](/images/expo-home.png "a title")
*“Make any app. Run it everywhere.” [https://expo.io](https://expo.io)*

React Native will be able to translate a few screens of UI
code into app ready code. However, since React Native
is packaged inside a native app with a bridge to get
updates from the JS thread, in the end, it means
creating the app itself is not any different from making a
normal Android or iOS app with a few android screens
or iOS screens. This, of course, is a [selling point](https://reactnative.dev/docs/next/native-modules-intro) due to
the ability to drop into native when required and why the
transition from native to React Native apps or vice-versa
makes react-native one of the best options for hybrid development in the market.

Expo here gives users of React Native the option to
forego this benefit and let it handle that whole process
(while also allowing the option to eject in the case that
native modules needed).

This allows developers to focus on the interactive and
functional part of the app without having to worry about
app assets such as icons and splash screens, dealing
with libraries that require native management ([https://rnfirebase.io/](firebase)),
dealing with upgrading and handling native libraries,
configuring Gradle or .plist files, modifying central
Kotlin/Java or ObjectiveC/swift files.

## Expo Features

Expo covers many features, especially because they
have been in the scene for quite some time alongside
React Native. We won’t go into details into all of them
but will only go over briefly the larger features that
would impact the developers the most.

## Expo Snack (React Native + Expo Sandbox)

In production, this would not be used much but listing it
here due to the amount of effort the expo team has put
into making this unique service (could be useful as a
testing/demoing tool, as is the case with many react
native teams such as UI/navigation frameworks).

![Expo Simulator](/images/expo-simulator.png "a title")
*Example generated snack with preview and editor. [https://snack.expo.io](https://snack.expo.io)*

![Expo Embedded](/images/expo-embed.png "a title")
*This can also be used to create an embeddable editor*


## Expo Go

Because Expo apps are very much self-contained in the
expo ecosystem and it handles all the native aspects to
help with testing, showcases and experiments, [Expo Go](https://expo.io/client)
is an app for [android](https://play.google.com/store/apps/details?id=host.exp.exponent) and [iOS](https://apps.apple.com/au/app/expo-go/id982107779) which allows downloading
apps published onto Expo’s cloud servers.

This whole process speeds up iterations quicker than
going through PlayStore/TestFlight for testing if the user
has expo go installed. If an app has been published
under a ‘default’ release channel, then this app is
accessible instantly if the developer does a simple expo
publish

```
expo publish
```

![Expo App](/images/expo-app.png "a title")
*Expo go iOS [https://expo.io/client](https://expo.io/client)*

The only problem we encountered was trying to use this
for multiple release channels, for example, a
development, staging and production environment. It
will only host default channels. There are definitely work
around here where the developer can set up multiple
different apps with different app signatures but out of


the box, and if it was tied to environments tied to
AppStore/PlayStore apps, then it requires some extra
thought.

As explained in their [introductory blog](https://blog.expo.io/expo-go-a-new-name-for-the-expo-client-4684a2709904) for the release of
the Expo Go client, the app contains all the expo
standard SDK and will host any javascript modules
packaged with the expo app bundle.

## Expo SDK and CLI

As we spoke about in the scope of Expo, one of the
aims of it was to abstract away having to deal with the
native side of React Native complete. In this case of a
setup for a few of the most popular third-party services
that require native configuration such as [Firebase Analytics](https://docs.expo.io/versions/latest/sdk/firebase-analytics/)
, [Sentry](https://docs.expo.io/guides/using-sentry/) and other device-specific methods
such as device [constants](https://docs.expo.io/versions/v41.0.0/sdk/constants/).

[https://docs.expo.io/versions/latest/](https://docs.expo.io/versions/latest/) as a reference to
their API docs should be checked for capabilities. If
there are missing capabilities, then it makes sense not
to use Expo in these scenarios, especially when it
comes to native modules that wouldn’t support it.

The CLI includes ways of handling the expo cloud
services and CI/CD within the template of Expo, but it
also includes a starter template for expo apps with expo
init.

Another great benefit, along with many of its other
features, when running the bundler, expo gives a more
interactive dashboard for running apps which allow a
way of doing standard React Native bundler activities in a GUI dashboard; reading javascript logs, opening and
running on emulators, publishing to Expo so that
physical device testing can be done without android
studio or code or sharing the app.

![Expo Dashboard](/images/expo-dashboard.png "a title")
*What you see when you run the metro bundler with Expo.*

Because of the Expo SDK/CLI, which represents much
of the reason the native side of React Native is
abstracted away, dealing with expo rather than RN +
Android or RN + iOS, is a core reason we have used it
for rapid prototyping to save development/deployment
time.

## Expo Eject

There are cases when a developer needs to add some
native functionality to a project. Expo project is a Pure
JS project which does not provide a native dropdown for both Android and iOS.

To expose the native modules of both the platform we need to use ExpoKit.

To eject the native modules use the command:

```
  expo eject
```

There are some reasons when you don’t want to expose the native modules:
* Once the native modules are ejected, we won't be able to publish both android and iOS on their store using expo build.
* If you have implemented expo-push notification, once ejected your Expo wont be able to manage push-notification. You might want to create your push notification pipeline.

## Expo Application Services

Along with their SDK and CLI, which are installed for
local developer machines, Expo also contains their
online service, which contains a cloud CI/CD platform
for those Expo apps, named Expo Application Services
or [EAS](https://expo.io/pricing). As soon as users log into [https://expo.io](https://expo.io/),
depending on what projects they are a part of, the
below is what they see.

![Expo Builds](/images/expo-builds.png "a title")
*Our Expo dashboard when we log in and can see our builds on [https://expo.io](https://expo.io/)*

These services are built on top of the services that the
SDK and CLI provide as well as being tightly connected
to the Expo Go app which hosts and distributes apps in
a method quicker than TestFlight or the PlayStore.

![Expo Plans](/images/expo-plans.png "a title")
*Summary of prices and services of EAS [https://expo.io/pricing](https://expo.io/pricing) pricing*

The three collective features that benefit developers of
what is mentioned above in the EAS major features for
their cloud deployment is cloud building, app signing
and Over-the-air updates.

We used [Bitrise](https://www.bitrise.io/), and calling any of these builds for Store
or Expo deployment is one line using the Expo CLI. And
like it's mentioned in the features, it handles the app
signing on its platform automatically.

There are 3 types of deployments which are done
through Expo CLI, publishing, building and uploading all
on the Expo servers.

Uploading is not supported on iOS and needs to be
done through their new service [EAS Submit](https://docs.expo.io/submit/ios/). We haven't
had time to set this up and decided to go for manual uploading on Android and iOS for our short PoC. This
would be an investigation point if we can have all from
OTA updates, building and uploading all automated from
Bitrise. Going for manual publishing was not an issue
since, due to over the air updates, apps only need to be
published once or whenever native assets or native
linked libraries change.

Building on the EAS servers uses credentials provided
either by the CLI or on the Expo project to generate a
build on their servers, ready to download when
complete. Webhooks can be created to call when builds
are created, [https://docs.expo.io/distribution/webhooks/](https://docs.expo.io/distribution/webhooks/).
This is built alongside other builds and may be on hold.
Checking the position of your build or the number of
builds can be seen on their turtle site.

![Expo Turtle](/images/expo-turtle.png "a title")
*Status of EAS build servers [https://expo.io/turtle-status](https://expo.io/turtle-status)*

Again this must be used because expo is a packaged
system to abstract away native builds that require their
system turtle. This is open source and can be done
locally using their GitHub repo [https://github.com/expo/
turtle](https://github.com/expo/turtle), also available as a CLI NPM package.


Expo publish which deploys javascript bundles to apps
listening to their servers or to upload to Expo Go. Similar
to the most popular service there is for React Native,
[Microsoft Code Push](https://microsoft.github.io/code-push/), this allows us to create update
alerts for users and to reply upon these OTA updates.

After experimenting with Expo publishing, updates are
instant to users and can also be specific to a specific
release channel such as to develop or production. Apps
build with specific release channel such as develop will
only listen for new updates from that channel allowing a
powerful multiple environments app deployment
system. This system can be disabled, but by default, it is
configured to check for updates on app fresh opens.

## Expo in Practice

The following are a few tips in using it in production.

### Automatic Updates and our CI/CD

We wanted to make sure our app was always up to date
and placed keeping the app at the latest version at a
higher importance than breaking user experience. In this
app, the user doesn’t submit any updates but instead
only reads and consumes data. This data is also not
deep and is simply a catalogue of offers.

Because of this making the app update when the user
comes into the app at any time, we forced the user to
update. We used the short snippet below to make this
work.

```
  import { Alert } from 'react-native'
  import * as Updates from 'expo-updates'

  useAppStateChange({
    onForeground: () => {
      Updates.checkForUpdateAsync().then(({ isAvailable }) => {
        if (isAvailable) {
          Alert.alert(
            newUpdateText,
            newUpdateBody,
            [{ text: acceptText, onPress: () => Updates.reloadAsync() }],
            { cancelable: false },
          )
        }
      })
    },
  })
```

When it came to our strategy, when compared to our
[gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) structured branches, our Bitrise platform would
trigger the specific types of builds with the specific
environment on code changes.

Almost at all times these triggers trigger expo
publishing OTA builds rather than physical IPA/APK
bundle builds since older builds can get updated
through the cloud and so are only built once every few months.

When develop branch detects a change, it pushes out a
develop release channel build to Expo. When master
branch detects a change, it pushes out a staging
release channel build to Expo. When we’re comfortable
with staging, we trigger a production release channel
build off a release branch when we’re happy.

One weirdness we may update in the future is that
ExpoGo only shows builds on the default release
channel and so we send out default and develop release
builds on development changes. We may in the future
merge this into one and have the default as our
development branch.

The amazing thing is that after a PR is merged, the
update goes out to the app within 30 minutes, all
automatically.

### Expo Constants

To get information about the device so we can check accessibility status or for analytics, instead of requiring [react-native-device-info](https://github.com/react-native-device-info/react-native-device-info), we used Constants from [expo-constants](expo-constants) to get this info.

We created a small utility function to get this
information so we could get some of this useful
information.

```
  import { Alert } from 'react-native'
  import * as Updates from 'expo-updates'

  useAppStateChange({
    onForeground: () => {
      Updates.checkForUpdateAsync().then(({ isAvailable }) => {
        if (isAvailable) {
          Alert.alert(
            newUpdateText,
            newUpdateBody,
            [{ text: acceptText, onPress: () => Updates.reloadAsync() }],
            { cancelable: false },
          )
        }
      })
    },
  })
```

## Will we use it in the future?

There, of course, are times when we would need to not
go with the expo, namely the primary reason, we need
to access native modules that wouldn’t have otherwise
been accessible in Expo. But again, for prototyping and
rapid development, this may be rare, and for the sake of
rapidly getting the project into clients hands, using expo
and ejecting in the case of needing to will always be a
recommendation of ours.

We will for the future need to investigate EAS CLI for
apple publishing before we touch our next project.
Since we used it for a PoC, our decisions based on long
term project health wasn’t an important one, but going
forward we would need to consider the following things
when looking into a new project.

Few further investigation points to consider; support for
native modules in the future, Microsoft CodePush
Comparison, backwards compatibility and support, EAS
on bigger app, reduction in final app size, ease in
ejecting from expo.

_EDIT: As of 2022 and closer to 2023, Expo has slowly added support for native modules as well as further improvements to its ecosystem._


