import { View, Text } from "react-native";
import WheelPicker from "./WheelPicker";
import { useRef } from "react";
import { styles } from "../../styles/challenge/CustomWheelPickerStyle";
import { TTime } from "../../types/challenge";

type Props = {
  onTimeChange: (time: TTime) => void;
  itemHeight: number;
  initValue?: TTime;
};

const GoalTimePicker = ({ onTimeChange, itemHeight, initValue }: Props) => {
  const hourItems = Array.from({ length: 24 }, (_, i) =>
    String(i).padStart(2, "0")
  );
  const minuteItems = Array.from({ length: 12 }, (_, i) =>
    String(i * 5).padStart(2, "0")
  );
  const { hour, minute } = initValue || {};

  const selectedHour = useRef("");
  const selectedMinute = useRef("");

  const handleIndexChange = (category: string, item: string) => {
    switch (category) {
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
      hour: selectedHour.current,
      minute: selectedMinute.current,
    });
  };

  return (
    <View
      style={[
        styles.timeGoalPickerContainer,
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
        <Text style={[styles.itemText, { marginLeft: 28 }]}>H</Text>
      </View>
      <View
        style={[
          styles.readTimeWrap,
          {
            height: itemHeight * 3,
          },
        ]}
      >
        <Text style={[styles.itemText, { marginHorizontal: 44 }]}>:</Text>
      </View>
      <WheelPicker
        items={minuteItems}
        onItemChange={(item) => handleIndexChange("minute", item)}
        itemHeight={itemHeight}
        initValue={minute}
      />
      <View
        style={[
          styles.readTimeWrap,
          {
            height: itemHeight * 3,
          },
        ]}
      >
        <Text style={[styles.itemText, { marginLeft: 28 }]}>M</Text>
      </View>
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

export default GoalTimePicker;
