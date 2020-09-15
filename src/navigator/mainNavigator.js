import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile101921Navigator from '../features/UserProfile101921/navigator';
import Settings101920Navigator from '../features/Settings101920/navigator';
import Settings101918Navigator from '../features/Settings101918/navigator';
import SignIn2101916Navigator from '../features/SignIn2101916/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile101921: { screen: UserProfile101921Navigator },
Settings101920: { screen: Settings101920Navigator },
Settings101918: { screen: Settings101918Navigator },
SignIn2101916: { screen: SignIn2101916Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
