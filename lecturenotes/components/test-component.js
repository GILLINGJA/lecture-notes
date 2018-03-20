import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Icon from 'react-native-fa-icons';

const styles = StyleSheet.create({
  fullContainer: {
    height: '100%',
    flex: 1,
    alignSelf: 'stretch'
  },

  utilityBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#0f0',
      backgroundColor: '#ddd'
  },

  utilityButtons: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#0a0'
  },

  utilButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  utilIcon: {

  },

  editorContainer: {
    borderWidth: 1,
    borderColor: '#f00'
  },

  header: {
    borderWidth: 1,
    borderColor: '#00f'
  },

  titleContainer: {
      borderWidth: 1,
      borderColor: '#f0f'
  },

  title: {

  },

  metaContainer: {

  },

  folderContainer: {

  },

  tagButtonContainer: {

  },

  infoButtonContainer: {

  },

  editorContent: {
    borderWidth: 1,
    borderColor: '#f60',
    margin: 2
  },

  contentText: {

  }
});

export default class TestComponent extends Component {
  render() {return (
      <View contentContainerStyle={styles.fullContainer}>
        <View style={styles.utilityBar}>
          <View style={styles.utilButton}>
            <Text style={styles.utilIcon}>
              <Icon name='bars' />
            </Text>
          </View>
          <View style={styles.utilityButtons}>
            <View style={styles.utilButton}>
              <Text style={styles.utilIcon}>
                <Icon name='rotate-left' />
              </Text>
            </View>
            <View style={styles.utilButton}>
              <Text style={styles.utilIcon}>
                <Icon name='rotate-right' />
              </Text>
            </View>
            <View style={styles.utilButton}>
              <Text style={styles.utilIcon}>
                <Icon name='ellipsis-v' />
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.editorContainer}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <TextInput style={styles.title}
                placeholder="Title" />
            </View>
            <View style={styles.metaContainer}>
              <View style={styles.folderContainer}>
                <Text>Folder</Text>
              </View>
              <View style={styles.tagButtonContainer}>
                <Text>Tags</Text>
              </View>
              <View style={styles.infoButtonContainer}>
                <Text>Info</Text>
              </View>
            </View>
          </View>

          <View style={styles.editorContent}>
            <TextInput style={styles.contentText}
            placeholder="Enter Text"
            multiline={true}
            underlineColorAndroid='rgba(0,0,0,0)' />
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('TestComponent', () => TestComponent);
