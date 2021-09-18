import React, {Component} from 'react';
import {PermissionsAndroid} from 'react-native';

const Data = [
  {
    id: 0,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 1,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 2,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 3,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },

  {
    id: 4,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 5,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 6,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 7,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 8,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 9,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 10,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 11,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },
];

const askPermission = async (permission, isMultiple = false) => {
  try {
    let granted;
    if (isMultiple) {
      granted = await PermissionsAndroid.requestMultiple(permission, {
        title: 'location_alert_title',
        message: 'location_alert_message',
        buttonPositive: 'Ok',
      });
    } else {
      granted = await PermissionsAndroid.request(permission, {
        title: 'location_alert_title',
        message: 'location_alert_message',
        buttonPositive: 'Ok',
      });
    }
    if (granted === true || granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
};

export {askPermission};

//export const TH_BASE_URL = 'https://truehelpers.com/Api/';
