View --> div

require adds whatever is inside to the bundle of the app, making the installation file bigger

# Touchable

when components don't have handle events, we can wrap them in "touchables"
Examples:

- TouchableWithoutFeedback
- TouchableOpacity
- TouchableHighlight

# Styles

StyleSheet.create:

- Validates the name of the properties

Checking OS:

paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0

# Orientation

In `app.json` we can sert the default orientation of the app in `"orientation": "portrait",` or `landscape` or `default` for both modes
