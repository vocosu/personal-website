import React from 'react';
import shortid from 'shortid';
import { Button, Icon } from 'semantic-ui-react';

import CardHighlights from './generic/CardHighlights';
import ButtonHighlights from './generic/ButtonHighlights';
import ExternalLink from './generic/ExternalLink';
import { bold, c, color, colors, emOneHalf } from '../styles';
import { referencesType } from '../person';

const References = ({ references }) => {
  return (
    <div>
      {references.map(j => (
        <CardHighlights
          color={colors.blue}
          key={shortid.generate()}
          subtitle={
            <span style={c(emOneHalf, bold, color(colors.blue))}>
              <Icon size="large" />{` ${j.name}`}
            </span>
          }
          text={
            <div>
              <ExternalLink
                style={{ margin: '10px' }}
                href={j.reference}
                text={<Button size="tiny" icon="linkedin" content={j.reference} />}
                color={colors.grey}
              />
              <ButtonHighlights
                icon="phone"
                highlights={["Email/phone available on request."]}
                color="orange"
              />
            </div>
          }
        />
      ))}
    </div>
  );
};

References.defaultProps = {
  references: [],
};

References.propTypes = referencesType;

export default References;
