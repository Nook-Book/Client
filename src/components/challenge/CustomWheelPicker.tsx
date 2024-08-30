import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/challenge/CustomWheelPickerStyle";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const CustomWheelPicker = ({
  title,
  setPeriod,
}: {
  title: string;
  setPeriod: (period: { hour: number; minute: number; amPm: number }) => void;
}) => {
  const [date, setDate] = useState(new Date());

  const handleChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const amPm = hour >= 12 ? 1 : 0;

    setPeriod({
      hour: hour > 12 ? hour - 12 : hour === 0 ? 12 : hour,
      minute,
      amPm,
    });
  };

  return (
    <View>
      <Text style={styles.readTimeText}>{title}</Text>
      <View style={styles.readTimeWrap}>
        <RNDateTimePicker
          value={date}
          mode="time"
          is24Hour={false}
          display="spinner"
          onChange={handleChange}
          minuteInterval={5}
          style={{
            height: 120,
          }}
        />
      </View>
    </View>
  );
};

export default CustomWheelPicker;
