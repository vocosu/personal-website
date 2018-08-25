import React from 'react';
import shortid from 'shortid';
import ReactMarkdown from 'react-markdown';
import { Icon } from 'semantic-ui-react';

import ButtonHighlights from './generic/ButtonHighlights';
import CardHighlights from './generic/CardHighlights';
import ExternalLink from './generic/ExternalLink';

import {
  bold,
  c,
  color,
  colors,
  emOneHalf,
  emOneTwo,
  emTwo,
  faded,
} from '../styles';
import { workType } from '../person';

const Work = ({ work }) => {
  return (
    <div>
      {work.map(job => (
        <CardHighlights
          color={colors.green}
          key={shortid.generate()}
          title={
            <span style={c(emTwo, bold, faded(colors.green))}>
              <Icon name="building outline" margin="10" />
              {job.website
                ? <ExternalLink
                  href={job.website}
                  text={job.company}
                  color={colors.green}
                />
                : job.company}
            </span>
          }
          subtitle={
            <span style={c(emOneHalf, color(colors.grey))}>
              <Icon name="user outline" />{job.position}
              <Icon name="marker" style={{ marginLeft: '10px' }}/>{job.location}
              <Icon name="calendar" style={{ marginLeft: '50px' }} />
              {`( ${job.startDate} - ${job.endDate} )`}
            </span>
          }
          text={
            <span style={c(emOneTwo, faded(colors.black))}>
              <ReactMarkdown source={job.summary} />
            </span>
          }
          highlights={
            <ButtonHighlights
              highlights={job.highlights}
              color="green"
            />
          }
        />
      ))}
    </div>
  );
};

Work.defaultProps = {
  work: [],
};

Work.propTypes = {
  work: workType,
};

export default Work;
