/* @flow */

import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DataTable, Surface, Text, withTheme } from 'react-native-paper';
import type { Theme } from 'react-native-paper/types';

type Props = {
  theme: Theme,
};

type State = {
  page: number,
  sortAscending: boolean,
  items: Array<Object>,
  selectedRow: ?number,
};

class DataTableExample extends React.Component<Props, State> {
  static title = 'DataTable';

  state = {
    page: 0,
    sortAscending: true,
    items: [
      {
        key: 1,
        name: 'Cupcake',
        calories: 356,
        fat: 16,
      },
      {
        key: 2,
        name: 'Eclair',
        calories: 262,
        fat: 16,
      },
      {
        key: 3,
        name: 'Frozen yogurt',
        calories: 159,
        fat: 6,
      },
      {
        key: 4,
        name: 'Gingerbread',
        calories: 305,
        fat: 3.7,
      },
      {
        key: 5,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9,
      },
      {
        key: 6,
        name: 'Jelly Bean',
        calories: 375,
        fat: 0,
      },
    ],
    selectedRow: null,
  };

  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;
    const { items, sortAscending } = this.state;
    const sortedItems = items.sort(
      (item1, item2) =>
        (sortAscending
        ? item1.name < item2.name
        : item2.name < item1.name)
          ? 1
          : -1
    );
    const rowsPerPage = 2;
    const from = this.state.page * rowsPerPage;
    const to = (this.state.page + 1) * rowsPerPage;

    return (
      <ScrollView
        style={[styles.container, { backgroundColor: background }]}
        contentContainerStyle={styles.content}
      >
        <View style={styles.displaySelectedRow}>
          <Text>Selected Row:</Text>
          <Text>{this.state.selectedRow}</Text>
        </View>

        <Surface style={[styles.surface]}>
          <DataTable>
            <DataTable.Head>
              <DataTable.HeaderCell
                size={4}
                sortDirection={
                  this.state.sortAscending ? 'ascending' : 'descending'
                }
                onPress={() => {
                  this.setState({
                    sortAscending: !this.state.sortAscending,
                  });
                }}
              >
                Dessert
              </DataTable.HeaderCell>
              <DataTable.HeaderCell numeric>Calories</DataTable.HeaderCell>
              <DataTable.HeaderCell numeric>Fat (g)</DataTable.HeaderCell>
            </DataTable.Head>

            <DataTable.Body>
              {sortedItems.slice(from, to).map((item, index) => (
                <DataTable.Row
                  key={item.key}
                  onPress={() => {
                    this.setState({ selectedRow: index });
                  }}
                >
                  <DataTable.Cell size={4}>{item.name}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable.Body>

            <DataTable.Pagination
              count={items.length}
              page={this.state.page}
              rowsPerPage={rowsPerPage}
              onChangePage={page => {
                this.setState({ page });
              }}
            />
          </DataTable>
        </Surface>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 8,
    alignItems: 'center',
  },

  surface: {
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  displaySelectedRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
});

export default withTheme(DataTableExample);
