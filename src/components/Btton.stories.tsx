import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default {
  title: 'Button',
};

export const Contained = ({ ...args }) => {
  return (
    <View style={{ padding: 16, justifyContent: 'space-between', flex: 1 }}>
      <Button {...args} children={'press me'} />
    </View>
  );
};

export const outlined = ({ ...args }) => {
  return (
    <View style={{ padding: 16, justifyContent: 'space-between', flex: 1 }}>
      <Button {...args} children={'press me'} />
    </View>
  );
};

Contained.story = {
  name: 'Contained',
  args: {
    mode: 'contained',
  },
};

outlined.story = {
  name: 'outlined',
  args: {
    mode: 'outlined',
  },
};
