import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import Badge from './Badge.component';

const options = {
  active: true,
  inactive: false,
};

storiesOf('Badges', module).add('Crop Status Badge active', () => {
  return <Badge active />;
});
storiesOf('Badges', module).add('Crop Status Badge inactive', () => {
  return <Badge active={radios('Badge state', false)} />;
});
