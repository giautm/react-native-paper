/* @flow */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import DataTableBody from './DataTableBody';
import DataTableCell from './DataTableCell';
import DataTableHead from './DataTableHead';
import DataTableHeaderCell from './DataTableHeaderCell';
import DataTablePagination from './DataTablePagination';
import DataTableRow from './DataTableRow';

type Props = {
  /**
   * Content of the `DataTable`.
   */
  children: React.Node,
  style?: any,
};

/**
 * Data tables allow displaying sets of data.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/data-table.png" />
 *     <figcaption>Data table</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <DataTable>
 *         <DataTable.Head>
 *           <DataTable.HeaderCell>Dessert</DataTable.HeaderCell>
 *           <DataTable.HeaderCell>Calories</DataTable.HeaderCell>
 *           <DataTable.HeaderCell>Fat</DataTable.HeaderCell>
 *         </DataTable.Head>
 *
 *         <DataTable.Body>
 *           <DataTable.Row>
 *             <DataTable.Cell>Frozen yogurt</DataTable.Cell>
 *             <DataTable.Cell numeric>159</DataTable.Cell>
 *             <DataTable.Cell numeric>6.0</DataTable.Cell>
 *           </DataTable.Row>
 *
 *           <DataTable.Row>
 *             <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
 *             <DataTable.Cell numeric>237</DataTable.Cell>
 *             <DataTable.Cell numeric>8.0</DataTable.Cell>
 *           </DataTable.Row>
 *         </DataTable.Body>
 *
 *         <DataTable.Pagination
 *           count={5}
 *           page={1}
 *           rowsPerPage={2}
 *           onChangePage={(page) => { console.log(page); }}
 *         />
 *       </DataTable>
 *     );
 *   }
 * }
 * ```
 */
class DataTable extends React.Component<Props> {
  // @component ./DataTableHead.js
  static Head = DataTableHead;

  // @component ./DataTableHeaderCell.js
  static HeaderCell = DataTableHeaderCell;

  // @component ./DataTableBody.js
  static Body = DataTableBody;

  // @component ./DataTableRow.js
  static Row = DataTableRow;

  // @component ./DataTableCell.js
  static Cell = DataTableCell;

  // @component ./DataTablePagination.js
  static Pagination = DataTablePagination;

  render() {
    return (
      <View style={[this.props.style, styles.container]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default DataTable;
