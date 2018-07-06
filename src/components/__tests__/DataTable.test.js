/* @flow */

import * as React from 'react';
import renderer from 'react-test-renderer';
import DataTable from '../DataTable/DataTable';

it('renders data table head', () => {
  const tree = renderer
    .create(
      <DataTable.Head>
        <DataTable.HeaderCell>Dessert</DataTable.HeaderCell>
        <DataTable.HeaderCell>Calories</DataTable.HeaderCell>
      </DataTable.Head>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders data table header cell', () => {
  const tree = renderer
    .create(
      <DataTable.HeaderCell size={4} sortDirection="descending">
        Dessert
      </DataTable.HeaderCell>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders numeric data table header cell', () => {
  const tree = renderer
    .create(<DataTable.HeaderCell numeric>Calories</DataTable.HeaderCell>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders data table header cell with press handler', () => {
  const tree = renderer
    .create(
      <DataTable.HeaderCell
        size={4}
        sortDirection="descending"
        press={() => {}}
      >
        Dessert
      </DataTable.HeaderCell>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders data table body', () => {
  const tree = renderer
    .create(
      <DataTable.Body>
        <DataTable.Row>
          <DataTable.Cell>Cupcake</DataTable.Cell>
          <DataTable.Cell>356</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Eclair</DataTable.Cell>
          <DataTable.Cell>262</DataTable.Cell>
        </DataTable.Row>
      </DataTable.Body>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders data table cell', () => {
  const tree = renderer
    .create(<DataTable.Cell size={4}>Cupcake</DataTable.Cell>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders numeric data table cell', () => {
  const tree = renderer
    .create(<DataTable.Cell numeric>356</DataTable.Cell>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders data table pagination', () => {
  const tree = renderer
    .create(
      <DataTable.Pagination
        count={15}
        page={3}
        rowsPerPage={4}
        onChangePage={() => {}}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders data table pagination with custom text', () => {
  const tree = renderer
    .create(
      <DataTable.Pagination
        count={15}
        page={3}
        rowsPerPage={4}
        onChangePage={() => {}}
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} von ${count}`
        }
        labelRowsPerPage="Zeilen pro Seite:"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
