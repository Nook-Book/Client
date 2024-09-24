import { View, Text } from "react-native";
import WheelPicker from "./WheelPicker";
import { useRef } from "react";
import { styles } from "../../styles/challenge/CustomWheelPickerStyle";
import { TTime } from "../../types/challenge";

interface Props {
  onTimeChange: (time: TTime) => void;
  itemHeight: number;
  initValue?: TTime;
}

const TimePicker = ({ onTimeChange, itemHeight, initValue }: Props) => {
  const ampmItems = ["AM", "PM"];
  const hourItems = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const minuteItems = Array.from({ length: 12 }, (_, i) =>
    String(i * 5).padStart(2, "0")
  );
  const { ampm, hour, minute } = initValue || {};

  const selectedAMPM = useRef("");
  const selectedHour = useRef("");
  const selectedMinute = useRef("");

  const handleIndexChange = (category: string, item: string) => {
    switch (category) {
      case "ampm":
        selectedAMPM.current = item;
        break;
      case "hour":
        selectedHour.current = item;
        break;
      case "minute":
        selectedMinute.current = item;
        break;
      default:
        throw new Error("Invalid time category");
    }

    onTimeChange({
      ampm: selectedAMPM.current,
      hour: selectedHour.current,
      minute: selectedMinute.current,
    });
  };

  return (
    <View
      style={[
        styles.timePickerContainer,
        {
          height: itemHeight * 3,
        },
      ]}
    >
      <WheelPicker
        items={hourItems}
        onItemChange={(item) => handleIndexChange("hour", item)}
        itemHeight={itemHeight}
        initValue={hour}
      />
      <View
        style={[
          styles.readTimeWrap,
          {
            height: itemHeight * 3,
          },
        ]}
      >
        <Text style={styles.itemText}>:</Text>
      </View>
      <WheelPicker
        items={minuteItems}
        onItemChange={(item) => handleIndexChange("minute", item)}
        itemHeight={itemHeight}
        initValue={minute}
      />
      <WheelPicker
        items={ampmItems}
        onItemChange={(item) => handleIndexChange("ampm", item)}
        itemHeight={itemHeight}
        initValue={ampm}
      />
      <View
        style={[
          styles.selectedWrap,
          {
            height: itemHeight - 2,
            top: itemHeight,
          },
        ]}
      ></View>
    </View>
  );
};

export default TimePicker;
