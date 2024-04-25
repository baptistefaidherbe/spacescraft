import type { ReactNode } from 'react';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Offline } from '../components/Offline';
import Header from '~/components/Header';

interface ScreenContainerProps {
  title?: string;
  children?: ReactNode;
  withScrollView?: boolean;
  Isheader?: boolean;
}

export const ScreenContainer = ({ Isheader, children }: ScreenContainerProps) => {
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <Offline />
      {Isheader && <Header />}
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});
