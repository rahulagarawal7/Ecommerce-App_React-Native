import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {NotificationBingIcon, NotificationIcon} from '../../assets';
import {colors, ms} from '../../utils';

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

const styles = StyleSheet.create({
  showStyle: {
    height: ms(150),
    width: ms(342),
  },

  container: {
    height: ms(64),
    width: ms(342),
    borderRadius: 10,
    backgroundColor: colors?.secondaryBgColor,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    height: ms(24),
    width: ms(24),

    marginHorizontal: 10,
  },
  nameText: {
    width: ms(250),
    color: colors?.textColor,
    fontWeight: '400',
    fontSize: ms(12),
  },
});
