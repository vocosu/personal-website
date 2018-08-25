import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import { colors } from '../../styles'
import ExternalLink from './ExternalLink';

const Contact = ({ phone, email, website }) => {
  return (
    <div>
      {phone &&
        <Button
          style={{ margin: '10px' }}
          size="tiny"
          icon="phone"
          content={phone}
        />}
      {email &&
        <ExternalLink
          style={{ margin: '10px' }}
          href={`mailto:${email}`}
          text={<Button size="tiny" icon="mail" content={email} />}
          color={colors.grey}
        />}
      {website &&
        <ExternalLink
          style={{ margin: '10px' }}
          href={website}
          text={<Button size="tiny" icon="computer" content={website} />}
          color={colors.grey}
        />}
    </div>
  );
};
  
Contact.defaultProps = {
  phone: undefined,
  email: undefined,
  website: undefined,
};

Contact.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
};

export default Contact;
