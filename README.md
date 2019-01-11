# React Conditional
A package that allows easy and readable conditional statements in React. No more bloated ternary operators!

## Getting Started
Inside of your project run `npm install --save @ninetysix/react-conditional` to install the package.

### Prerequisites
 - node
 - npm
 - React

### Installing

Installation is as simple as cd'ing into your projects folder and running npm install. No configuration is needed.

```sh
$ cd /myproject/
$ npm install --save @ninetysix/react-conditional
```



### Initializing
At the top of the files which you want to use the conditional package in, be sure to import it.

```javascript
import Conditional from '@ninetysix/react-conditional';
```

### Usage
The conditional component will only show if it meets the criteria which is determined from inside the if prop. This prop must be a boolean.

```javascript
render() {
    return (
        <Conditional if={this.props.posts.length}>
            // Render some posts!
        </Conditional>
        
        <Conditional if={!this.props.posts.length}>
            // I will not render.
        </Conditional>
    )
}
```

### Props
| Prop | Description | Type | Default | Required |
| ---- | ----------- | ---- | ------- | -------- |
| if | Determines whether or not the component should be shown on screen or not. | boolean | undefined | true |
