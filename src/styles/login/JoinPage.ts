import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    position: 'relative',
    width: '100%',
  },

  checkButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{
      translateY: -12
    }],
  },

  buttonText: {
    color: '#1E90FF',
    fontSize: 14,
    fontWeight: '500'
  },
});