import { Colors } from "./Colors";

export const commonStyles = {
  statusBarStyleDark: 'dark-content',
  statusBarStyleLight: 'light-content',
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  bottomButton: {
    position: 'absolute',
    bottom: 44,
    right: 30,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
};
