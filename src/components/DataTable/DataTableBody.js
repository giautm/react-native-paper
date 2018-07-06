/* @flow */

import * as React from 'react';
import { View } from 'react-native';
import DataTableRow from './DataTableRow';

type Props = {
  /**
   * Content of the `DataTableBody`.
   */
  children: React.ChildrenArray<React.Element<typeof DataTableRow>>,
  style?: any,
};

class DataTableBody extends React.Component<Props> {
  static displayName = 'DataTable.Body';

  render() {
    return <View style={this.props.style}>{this.props.children}</View>;
  }
}

export default DataTableBody;
