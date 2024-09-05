import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../../styles/modal/ModalStyle";
import TimePicker from "../challenge/TimePicker";
import { useState } from "react";
import { TTime } from "../../types/challenge";
import GoalTimePicker from "../challenge/GoalTimePicker";

const TimePickerModal = ({
  visible,
  text,
  type,
  initValue,
  onClose,
  onComplate,
}: {
  visible: boolean;
  text: string;
  type: "START" | "END" | "GOAL";
  initValue: TTime;
  onClose: () => void;
  onComplate: (type: "START" | "END" | "GOAL", time: TTime) => void;
}) => {
  const [time, setTime] = useState<TTime>({
    hour: initValue.hour,
    minute: initValue.minute,
    ampm: initValue.ampm,
  });

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.headTimeText}>{text}</Text>
          <View style={styles.timePickerWrap}>
            {type === "GOAL" ? (
              <GoalTimePicker
                itemHeight={30}
                initValue={initValue}
                onTimeChange={(time) => {
                  setTime(time);
                }}
              />
            ) : (
              <TimePicker
                itemHeight={30}
                initValue={initValue}
                onTimeChange={(time) => {
                  setTime(time);
                }}
              />
            )}
          </View>
          <View style={styles.buttonWrap}>
            <TouchableOpacity onPress={() => onComplate(type, time)}>
              <Text style={styles.blueText}>완료</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.grayText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TimePickerModal;
