import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Texto from '../components/Texto';

function HorizontalProgressBar({ total, current }) {
  const screenWidth = Dimensions.get('window').width;
  const progress = (current / total) * 100;

  return (<>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${progress}%` }]}>
            </View>
          </View>
          <Texto style={styles.progressText}>{progress.toFixed(0)}%</Texto>
        </>
  
  );
}

const styles = StyleSheet.create({
  progressBar: {
    width: '80%',
    height: 35,
    backgroundColor: '#636363', 
    borderColor: '#636363',
    borderWidth: 5,
    borderRadius: 20
  },
  progress: {
    height: '50%',
    backgroundColor: '#45E12C',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
    borderTopRightRadius: 20,
    borderBottomRightRadius:20
  },
  progressText: {
    color: '#45E12C',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize:20
  },
});

export default HorizontalProgressBar;
