import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { NavigationBarProps, NavigationItem } from './interfaces';

import HomeIcon from '../../src/assets/home.svg'
import RunningIcon from '../../src/assets/running.svg'
import MenuIcon from '../../src/assets/menu.svg'
import OrangeIcon from '../../src/assets/orange-slice.svg'
import LockIcon from '../../src/assets/book-lock.svg'

const NavigationBar: React.FC<NavigationBarProps> = ({ activeIndex, onNavigate }) => {
  const items = [
    { icon: HomeIcon, label: 'Home', index: 0 },
    { icon: RunningIcon, label: 'Treino', index: 1 },
    { icon: OrangeIcon, label: 'Dieta', index: 2 },
    { icon: LockIcon, label: 'Segurança', index: 3 },
    { icon: MenuIcon, label: 'Menu', index: 4 },
  ];

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.index}
          onPress={() => onNavigate(item.index)}
          style={styles.itemContainer}
        >
          <item.icon style={[styles.icon, activeIndex === item.index && styles.activeIcon]} />
          <Text style={[styles.label, activeIndex === item.index && styles.activeLabel]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavigationBar;