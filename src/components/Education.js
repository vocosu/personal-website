import React from 'react';
import shortid from 'shortid';
import { Grid, Icon } from 'semantic-ui-react';

import ButtonHighlights from './generic/ButtonHighlights';
import CardHighlights from './generic/CardHighlights';
import { bold, c, color, colors, emOneTwo, emTwo } from '../styles';
import { educationType } from '../person';

const Education = ({ education }) => {
  return (
    <div>
      {education.map(j => (
        <CardHighlights
          key={shortid.generate()}
          color={colors.teal}
          title={
            <span style={c(emTwo, bold, color(colors.teal))}>
              <Icon name="university" />
              {`${j.institution}`}
            </span>
          }
          subtitle={
            <div style={c(emOneTwo, color(colors.grey), bold)}>
              <Grid columns="equal">
                <Grid.Column textAlign="left">
                  <Icon name="certificate" />
                  {`${j.studyType} `}
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Icon name="calendar" />
                  {`${j.startDate} - ${j.endDate} `}
                </Grid.Column>
              </Grid>
            </div>
          }
          highlights={
            <ButtonHighlights
              icon="graduation"
              highlights={j.courses}
              color="teal"
            />
          }
        />
      ))}
    </div>
  );
};

Education.defaultProps = {
  education: [],
};

Education.propTypes = educationType;

export default Education;
