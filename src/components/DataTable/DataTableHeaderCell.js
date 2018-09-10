/* @flow */

import * as React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { grey100 } from '../../styles/colors';
import Icon from '../Icon';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import type { Theme } from '../../types';

type Props = {
  /**
   * Text content of the `DataTableHeaderCell`.
   */
  children: string,
  /**
   * Relative width of column.
   */
  size?: number,
  /**
   * Direction of sorting.
   */
  sortDirection?: 'ascending' | 'descending',
  /**
   * Whether content will align to the right.
   */
  numeric?: boolean,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  style?: any,
  /**
   * @optional
   */
  theme: Theme,
};

type State = {
  spinAnim: Animated.Value,
};

class DataTableHeaderCell extends React.Component<Props, State> {
  static displayName = 'DataTable.HeaderCell';

  static defaultProps = {
    size: 1,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      spinAnim: new Animated.Value(props.sortDirection === 'ascending' ? 0 : 1),
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sortDirection === this.props.sortDirection) {
      return;
    }

    Animated.timing(this.state.spinAnim, {
      toValue: this.props.sortDirection === 'ascending' ? 0 : 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const {
      children,
      numeric,
      onPress,
      size,
      sortDirection,
      theme,
    } = this.props;

    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });
    const icon = sortDirection ? (
      <Animated.View style={[styles.icon, { transform: [{ rotate: spin }] }]}>
        <Icon source="arrow-downward" size={16} color={theme.colors.text} />
      </Animated.View>
    ) : null;

    return (
      <TouchableOpacity
        style={{ flex: size }}
        onPress={onPress}
        activeOpacity={onPress ? 0.2 : 1}
      >
        <View style={[styles.container]}>
          {icon}

          <Text
            style={[
              styles.cell,
              numeric ? styles.numeric : styles.text,
              sortDirection ? styles.sorted : null,
              this.props.style,
            ]}
            numberOfLines={1}
          >
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 12,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: grey100,
  },

  cell: {
    height: 24,
    lineHeight: 24,
    fontSize: 12,
    color: '#00000099',
    fontWeight: '500',
    alignItems: 'center',
    flex: 1,
  },

  text: {
    textAlign: 'left',
  },

  numeric: {
    textAlign: 'right',
  },

  sorted: {
    color: '#000000',
  },

  icon: {
    height: 24,
    justifyContent: 'center',
  },
});

export default withTheme(DataTableHeaderCell);
