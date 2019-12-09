# react-native-inset-shadow
Inset shadows for react native components

## Setup

This library is available on npm, install it with: `npm i react-native-inset-shadow` or `yarn add react-native-inset-shadow`

## Usage

```js
import InsetShadow from 'react-native-inset-shadow'
import { Text, View } from 'react-native' 

const ViewWithInsetShadow = () => {
  return (
    <View style={{ height: 150 }}>
      <InsetShadow>
        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <Text>This view has an inset shadow!</Text>
        </View>
      </InsetShadow>
    </View>
  )
}
```

## Props

| Name          | Type   | Default | Description                                                              |
| ------------- | ------ | ------- | ------------------------------------------------------------------------ |
| children      | node   | null    | **(Required)** child components to sit inside the view                   |
| left          | bool   | true    | (Optional) show left inset shadow?                                       |
| top           | bool   | true    | (Optional) show top inset shadow?                                        |
| right         | bool   | true    | (Optional) show right inset shadow?                                      |
| bottom        | bool   | true    | (Optional) show bottom inset shadow?                                     |
| shadowColor   | string | black   | (Optional) shadow color                                                  |
| shadowOffset  | string | 1       | (Optional) how much to offset the shadow on the horizontal/vertical axis |
| shadowOpacity | string | 0.5     | (Optional) shadow opacity                                                |
| shadowRadius  | number | 3       | (Optional) shadow radius                                                 |
| elevation     | number | 5       | (Optional) shadow elevation for android                                  |


## Roadmap
- [ ] Add linter