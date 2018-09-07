/* @flow */

import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { grey100 } from '../../styles/colors';
import DataTableCell from './DataTableCell';

type Props = {
  /**
   * Content of the `DataTableRow`.
   */
  children: React.ChildrenArray<React.Element<typeof DataTableCell>>,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  style?: any,
};

class DataTableRow extends React.Component<Props> {
  static displayName = 'DataTable.Row';

  render() {
    const { onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.2 : 1}>
        <View style={[styles.row, this.props.style]}>
          {this.props.children}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: grey100,
  },
});

export default DataTableRow;
