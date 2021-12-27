import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, StyleProp } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RNModal from 'react-native-modal';
import { View } from 'native-base';

interface Props {
  type: 'bottom' | 'middle';
  useNativeDriver?: boolean;
  style?: StyleProp<any>;
  containerStyle?: StyleProp<any>;
  children: React.ReactNode;
  removeKnob?: boolean;
}
export interface ModalRef {
  pushModal: (v?: any) => void;
}
const Modal = forwardRef<ModalRef, Props>((props, ref) => {
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    pushModal: (status: any) => {
      setVisible(status !== undefined ? status : !visible);
    },
  }));

  return (
    <View>
      <RNModal
        isVisible={visible}
        style={[
          styles.modal,
          props.type === 'middle' && styles.modalMiddle,
          props.style && props.style,
        ]}
        onBackButtonPress={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
        onSwipeComplete={() => setVisible(false)}
        backdropOpacity={0.5}
        swipeDirection={props.type === 'middle' ? undefined : 'down'}
        useNativeDriver={props.useNativeDriver}
        useNativeDriverForBackdrop={props.useNativeDriver}
        avoidKeyboard>
        <View
          style={[
            styles.container,
            props.type === 'middle' && styles.containerMiddle,
            props.containerStyle && props.containerStyle,
          ]}>
          {props.type === 'bottom' && !props.children && (
            <View alignSelf="center" my={8}>
              <View style={styles.knob} />
            </View>
          )}
          {props.children}
          {props.type === 'bottom' && (
            <View style={{ marginBottom: insets.bottom || 30 }} />
          )}
        </View>
      </RNModal>
    </View>
  );
});

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    bottom: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  knob: {
    backgroundColor: '#E0E0E0',
    width: 48,
    height: 6,
    borderRadius: 10,
  },
  modalMiddle: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  containerMiddle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
  },
});

Modal.defaultProps = {
  type: 'bottom',
  useNativeDriver: true,
  removeKnob: false,
};

export { Modal };
export default Modal;
