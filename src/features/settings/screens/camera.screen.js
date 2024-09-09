import React, { useState, useRef, useEffect, useContext } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import styled from "styled-components/native";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { CameraType } from "expo-camera/build/legacy/Camera.types";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

// const ProfileCamera = styled(Camera)`
//   width: 100%;
//   height: 100%;
// `;

export const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef();
  //   const { user } = useContext(AuthenticationContext);

  const [facing, setFacing] = useState("back");

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem("userPhoto", photo.uri);
      navigation.goBack();
      //   console.log(photo);
    }
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={(camera) => (cameraRef.current = camera)}
        style={styles.camera}
        facing={facing}
        mute={true}
        flash="off"
        flashMode="off"
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={snap}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
