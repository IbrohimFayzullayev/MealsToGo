import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
// import { AuthenTicationContextProvider } from "./src/services/authentication/authentication.context";

// const firebaseConfig = {
//   apiKey: "AIzaSyCNwfWW108GnG19xWjNzc8BliU2RQki610",
//   authDomain: "mealstogo-a4028.firebaseapp.com",
//   projectId: "mealstogo-a4028",
//   storageBucket: "mealstogo-a4028.appspot.com",
//   messagingSenderId: "314069792316",
//   appId: "1:314069792316:web:d6d67b2dba1cb93093b539",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <AuthenTicationContextProvider> */}
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
        {/* </AuthenTicationContextProvider> */}
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
