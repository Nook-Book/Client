import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../../styles/challenge/CustomWheelPickerStyle";
import { Color } from "../../styles/Theme";

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
  const [date, setDate] = useState(new Date());

  const handleHourChange = (itemValue: string) => {
    setPeriod((prevPeriod) => ({
      ...prevPeriod,
      hour: itemValue,
    }));
  };

  const handleMinuteChange = (itemValue: string) => {
    setPeriod((prevPeriod) => ({
      ...prevPeriod,
      minute: itemValue,
    }));
  };

  const handleAmPmChange = (itemValue: string) => {
    setPeriod((prevPeriod) => ({
      ...prevPeriod,
      amPm: itemValue,
    }));
  };

  return (
    <View>
      <Text style={styles.readTimeText}>{title}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={period.hour}
          onValueChange={(itemValue) => handleHourChange(itemValue)}
          style={styles.picker}
          itemStyle={styles.itemText}
        >
          {Array.from({ length: 12 }, (_, i) => {
            const hour = String(i + 1).padStart(2, "0");
            return (
              <Picker.Item
                key={hour}
                label={hour}
                value={hour}
                color={Color.Typo.Primary}
                style={styles.itemText}
              />
            );
          })}
        </Picker>
        <Text style={styles.itemText}>:</Text>
        <Picker
          selectedValue={period.minute}
          onValueChange={(itemValue) => handleMinuteChange(itemValue)}
          style={styles.picker}
          itemStyle={styles.itemText}
        >
          {Array.from({ length: 12 }, (_, i) => {
            const minute = String(i * 5).padStart(2, "0");
            return (
              <Picker.Item
                key={minute}
                label={minute}
                value={minute}
                color={Color.Typo.Primary}
                style={styles.itemText}
              />
            );
          })}
        </Picker>
        <Picker
          selectedValue={period.amPm}
          onValueChange={(itemValue) => handleAmPmChange(itemValue)}
          style={styles.picker}
          itemStyle={styles.itemText}
        >
          <Picker.Item
            label="AM"
            value="AM"
            color={Color.Typo.Primary}
            style={styles.itemText}
          />
          <Picker.Item
            label="PM"
            value="PM"
            color={Color.Typo.Primary}
            style={styles.itemText}
          />
        </Picker>
      </View>
    </View>
  );
};

export default CustomTimePicker;
