import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <Entypo name="chevron-thin-left" color="#ffff" size={20} />
    </TouchableWithoutFeedback>
  );
};

export default BackIcon;
