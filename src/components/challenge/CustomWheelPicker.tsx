import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/challenge/CustomWheelPickerStyle";
import TimePicker from "./TimePicker";

const CustomTimePicker = ({
  title,
  period,
  setPeriod,
}: {
  title: string;
  period: {
    hour: string;
    minute: string;
    amPm: string;
  };
  setPeriod: React.Dispatch<
    React.SetStateAction<{
      hour: string;
      minute: string;
      amPm: string;
    }>
  >;
}) => {
  return (
    <View>
      <Text style={styles.readTimeText}>{title}</Text>
      <TimePicker
        itemHeight={30}
        onTimeChange={(time) => {
          console.log(time);
        }}
      />
    </View>
  );
};

export default CustomTimePicker;
