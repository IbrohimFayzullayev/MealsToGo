<<<<<<< HEAD
import React, { useContext } from "react";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
=======
import React, { useContext, useEffect, useState } from "react";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
>>>>>>> 1ca4e974d6bd9585ed84534fd5e10ceea98d0cf1

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePhoto = async () => {
    const photoUri = await AsyncStorage.getItem("userPhoto");
    setPhoto(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfilePhoto();
    }, [])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
<<<<<<< HEAD
          <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
=======
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && <Avatar.Image size={180} source={{ uri: photo }} />}
>>>>>>> 1ca4e974d6bd9585ed84534fd5e10ceea98d0cf1
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user?.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
