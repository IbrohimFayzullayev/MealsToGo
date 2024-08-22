import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerMode: "screen" }}>
      <SettingsStack.Screen
        name="Main"
        component={SettingsScreen}
        options={{
          header: () => null,
        }}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};