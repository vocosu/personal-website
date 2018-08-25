import React from 'react';
import { Grid, Header, Image, Button } from 'semantic-ui-react';

import Contact from './generic/Contact';
import ExternalLink from './generic/ExternalLink';
import Profiles from './Profiles';
import { colors } from '../styles';
import { basicsType } from '../person';

const Basics = ({
  name,
  label,
  picture,
  email,
  phone,
  website,
  summary,
  profiles,
  resume,
}) => {
  return (
    <Grid centered stackable>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image
            src={picture}
            shape="circular"
            centered
            fluid
            style={{ border: '10px solid rgba(0,0,0,.05)', maxWidth: '70%' }}
          />
        </Grid.Column>
        <Grid.Column textAlign="center" width={8}>
          <Header style={{ fontSize: '50px', borderLeft: 'none' }}>
            {name}
          </Header>
          <Profiles profiles={profiles} />
          <Header color="grey" size="large">{label}</Header>
          <Header color="grey" style={{ marginTop: '0px' }}>
            {summary}
          </Header>
          <Contact phone={phone} email={email} website={website} />
          <ExternalLink
            href={resume}
            key="resume"
            text={<Button size="small" color="green" content="View Resume" />}
            color={colors.grey}
          />             
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

Basics.defaultProps = {
  name: undefined,
  label: undefined,
  picture: undefined,
  phone: undefined,
  website: undefined,
  location: {},
  profiles: {},
};

Basics.propTypes = basicsType;

export default Basics;
