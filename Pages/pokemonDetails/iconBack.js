import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useHistory } from "react-router-dom";

const BackIcon = () => {
  const history = useHistory();
  return (
    <TouchableWithoutFeedback onPress={() => history.goBack()}>
      <Icon name="md-arrow-round-back" size={30} color="#fff" />
    </TouchableWithoutFeedback>
  );
};

export default BackIcon;
