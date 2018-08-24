import React from 'react';
import Proptypes from 'prop-types';

const InlineError = ({text}) => <span className="error" style={{color: '#ff0000'}}>{text}</span>;

InlineError.propTypes = {
    text: Proptypes.string.isRequired
};

export default InlineError;