import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {NotificationBingIcon, NotificationIcon} from '../../assets';
import {colors, ms} from '../../utils';
import { styles } from './styles';

interface NotificationCardProps {
  notificationTitle: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  notificationTitle,
}) => {
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);
  const limitedText = notificationTitle.split(' ').slice(0, 10).join(' ');
  const handleClicked = () => {
    setShow(!show);
    setClicked(true);
  };

  return (
    <TouchableOpacity style={[styles.container, show && styles.showStyle]}>
      <Image
        source={clicked ? NotificationIcon : NotificationBingIcon}
        style={styles.image}
      />
      <Text
        onPress={() => {
          handleClicked();
        }}
        style={styles.nameText}>
        {show ? notificationTitle : limitedText + '...'}
      </Text>
    </TouchableOpacity>
  );
};

export default NotificationCard;

