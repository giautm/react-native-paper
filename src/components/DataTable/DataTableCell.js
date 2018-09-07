/* @flow */

import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '../Typography/Text';

type Props = {
  /**
   * Content of the `DataTableCell`.
   */
  children: React.Node,
  /**
   * Relative width of column.
   */
  size?: number,
  /**
   * Whether content will align to the right.
   */
  numeric?: boolean,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  style?: any,
};

class DataTableCell extends React.Component<Props> {
  static displayName = 'DataTable.Cell';

  static defaultProps = {
    size: 1,
    numeric: false,
  };

  renderCell() {
    const { children, numeric } = this.props;

    return (
      <View style={styles.container}>
        {typeof children === 'string' ? (
          <Text
            style={[
              styles.cell,
              numeric ? styles.numeric : styles.text,
              this.props.style,
            ]}
            numberOfLines={1}
          >
            {children}
          </Text>
        ) : (
          { children }
        )}
      </View>
    );
  }

  render() {
    const { onPress, size } = this.props;

    // Do not always render TouchableOpacity since it would block clicks on row
    return onPress ? (
      <TouchableOpacity style={{ flex: size }} onPress={onPress}>
        {this.renderCell()}
      </TouchableOpacity>
    ) : (
      <View style={{ flex: size }}>{this.renderCell()}</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },

  cell: {
    fontSize: 14,
    color: '#000000DE',
  },

  text: {
    textAlign: 'left',
    flexDirection: 'row',
  },

  numeric: {
    textAlign: 'right',
    flexDirection: 'row-reverse',
  },
});

export default DataTableCell;
