import React from 'react';
import PropTypes from 'prop-types';

export const MailTo = ({ email }) => {
    return <a href={`mailto:${email}`}>{email}</a>;
};
  
MailTo.propTypes = {
    email: PropTypes.string.isRequired,
};
