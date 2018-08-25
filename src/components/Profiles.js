import React from 'react';
import shortid from 'shortid';
import { Container, Icon } from 'semantic-ui-react';

import ExternalLink from './generic/ExternalLink';
import { colors, topBottomMargin } from '../styles';
import { profileType } from '../person';

const Profiles = ({ profiles }) => {
  return (
    <Container style={topBottomMargin} textAlign="center">
      {profiles.map(p => (
        <ExternalLink
          key={shortid.generate()}
          href={p.url}
          text={<Icon size="huge" name={p.network.toLowerCase()} link />}
          color={colors.darkGrey}
        />
      ))}
    </Container>
  );
};

Profiles.defaultProps = {
  profiles: [],
};

Profiles.propTypes = profileType;

export default Profiles;
