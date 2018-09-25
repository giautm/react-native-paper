/* @flow */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from '../IconButton';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import type { Theme } from '../../types';

type Props = {
  /**
   * The total number of rows.
   */
  count: number,
  /**
   * The number of rows per page.
   */
  rowsPerPage: number,
  /**
   * The currently visible page (starting with 0).
   */
  page: number,
  /**
   * Function to execute on page change.
   */
  onChangePage: number => void,
  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   */
  labelDisplayedRows: ({ from: number, to: number, count: number }) => string,
  /**
   * Customize the rows per page label.
   */
  labelRowsPerPage: string,
  style?: any,
  /**
   * @optional
   */
  theme: Theme,
};

class DataTablePagination extends React.Component<Props> {
  static displayName = 'DataTable.Pagination';

  static defaultProps = {
    labelDisplayedRows: ({ from, to, count }) => `${from}-${to} of ${count}`,
    labelRowsPerPage: 'Rows per page:',
  };

  componentDidUpdate() {
    const { count, onChangePage, page, rowsPerPage } = this.props;
    const newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

    if (page > newLastPage) {
      onChangePage(newLastPage);
    }
  }

  render() {
    const {
      count,
      rowsPerPage,
      page,
      labelDisplayedRows,
      labelRowsPerPage,
      theme,
    } = this.props;
    const from: number = count === 0 ? 0 : page * rowsPerPage + 1;
    const to: number = Math.min(count, (page + 1) * rowsPerPage);

    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={[styles.text, styles.rowsPerPage]} numberOfLines={1}>
          {labelRowsPerPage} {rowsPerPage}
        </Text>

        <Text style={[styles.text, styles.displayedRows]} numberOfLines={1}>
          {count &&
            count >= 0 &&
            labelDisplayedRows({
              from,
              to,
              count,
              page,
            })}
        </Text>

        <View style={styles.chevrons}>
          <IconButton
            icon="chevron-left"
            color={theme.colors.text}
            disabled={from === 1}
            onPress={() => this.props.onChangePage(page - 1)}
          />
          <IconButton
            icon="chevron-right"
            color={theme.colors.text}
            disabled={to === count}
            onPress={() => this.props.onChangePage(page + 1)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },

  text: {
    fontSize: 12,
    color: '#00000099',
  },

  rowsPerPage: {
  },

  displayedRows: {
  },
  chevrons: {
    flexDirection: 'row',
  },
});

export default withTheme(DataTablePagination);
