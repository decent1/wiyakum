import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack'
import Home from '../Tab/Home';
import { connect } from 'react-redux';

const Stack = createNativeStackNavigator();

class AppStack extends React.Component{
  render(){
    return (
      <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
        headerMode={'none'}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
            {/* {
              this.props.user.isLogin ? 
              (
                <>
                  <Stack.Screen name="Home" component={Home} />
                </>
              )
              :
                (
                  <>
                    <Stack.Screen name="AuthStack" component={AuthStack} />
                  </>
                )
            } */}
      </Stack.Navigator>
  );
  }
}
const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect( mapStateToProps,null)(AppStack);
