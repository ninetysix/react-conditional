# React Conditional
A package that allows easy and readable conditional statements in React. No more bloated ternary operators!

### Initializing
```javascript
import Conditional from '@ninetysix/react-conditional';
```

### Usage
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

###Props
| Prop | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| if | Determines whether or not the component should be shown on screen or not. | boolean | undefined | true |
