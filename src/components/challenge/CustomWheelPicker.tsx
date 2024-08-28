import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/challenge/CustomWheelPickerStyle";
import WheelPicker from "react-native-wheely";

const CustomWheelPicker = ({
  title,
  period,
  setPeriod,
}: {
  title: string;
  period: {
    hour: number;
    minute: number;
    amPm: number;
  };
  setPeriod: React.Dispatch<
    React.SetStateAction<{
      hour: number;
      minute: number;
      amPm: number;
    }>
  >;
}) => {
  const hours = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const minutes = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "55",
  ];
  const amPm = ["AM", "PM"];

  const handleHourChange = (index: number) => {
    setPeriod((prevPeriod) => ({
      ...prevPeriod,
      hour: index,
    }));
  };

  const handleMinuteChange = (index: number) => {
    setPeriod((prevPeriod) => ({
      ...prevPeriod,
      minute: index,
    }));
  };

  const handleAmPmChange = (index: number) => {
    setPeriod((prevPeriod) => ({
      ...prevPeriod,
      amPm: index,
    }));
  };

  return (
    <View>
      <Text style={styles.readTimeText}>{title}</Text>
      <View style={styles.readTimeWrap}>
        <View style={styles.selectedWrap} />
        <WheelPicker
          selectedIndex={period.hour}
          options={hours}
          onChange={handleHourChange}
          visibleRest={1}
          itemStyle={{ borderColor: "transparent" }}
          itemTextStyle={styles.itemText}
          selectedIndicatorStyle={{ backgroundColor: "transparent" }}
        />
        <Text style={styles.itemText}>:</Text>
        <WheelPicker
          selectedIndex={period.minute}
          options={minutes}
          onChange={handleMinuteChange}
          visibleRest={1}
          itemStyle={{ borderColor: "transparent" }}
          itemTextStyle={styles.itemText}
          selectedIndicatorStyle={{ backgroundColor: "transparent" }}
        />
        <WheelPicker
          selectedIndex={period.amPm}
          options={amPm}
          onChange={handleAmPmChange}
          visibleRest={1}
          itemStyle={{ borderColor: "transparent" }}
          itemTextStyle={styles.itemText}
          selectedIndicatorStyle={{ backgroundColor: "transparent" }}
        />
      </View>
    </View>
  );
};

export default CustomWheelPicker;
