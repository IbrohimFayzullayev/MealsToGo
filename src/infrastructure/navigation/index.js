import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./accaunt.navigator";
// import { AccauntNavigator } from "./accaunt.navigator";

// import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  // const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {true ? <AccountNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};
