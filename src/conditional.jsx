import React from 'react';
import PropTypes from 'prop-types';

class Conditional extends React.Component {
    render() {
        return (
            !!this.props.if && this.props.children
        )
    }
}

Conditional.propTypes = {
    if: PropTypes.bool.isRequired
};

export default Conditional;
