import React from 'react';

import { Text, TouchableOpacity, Image, StatusBar, View, SafeAreaView } from 'react-native';
import styles from './styles';
import { TopBarProps } from './interfaces';


import BackIcon from '../../src/assets/back.svg';
import CheckIcon from '../../src/assets/check.svg';

const TopBar: React.FC<TopBarProps> = ({ title, onBackPress, onCheckPress }) => { 
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safearea}>  
            <View style={styles.container}>
            <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
                <BackIcon style={styles.icon} />
            </TouchableOpacity> 
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onCheckPress} style={styles.iconButton}>
                <CheckIcon  style={styles.icon} color='#000000'/>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
      </>
    );
  };
  
  export default TopBar;