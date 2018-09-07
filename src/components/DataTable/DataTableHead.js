/* @flow */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Divider from '../Divider';
import DataTableHeaderCell from './DataTableHeaderCell';

type Props = {
  /**
   * Content of the `DataTableHead`.
   */
  children: React.ChildrenArray<React.Element<typeof DataTableHeaderCell>>,
  style?: any,
};

class DataTableHead extends React.Component<Props> {
  static displayName = 'DataTable.Head';

  render() {
    return (
      <View style={[this.props.style]}>
        <View style={[styles.cells]}>{this.props.children}</View>

        <Divider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cells: {
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
  },
});

export default DataTableHead;
