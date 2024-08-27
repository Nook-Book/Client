import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../../styles/challenge/ChallengeDetailPageStyle";
import { Color } from "../../styles/Theme";

type ProfileItemProps = {
  item: {
    id: number;
    image: any;
    name: string;
  };
};

const ProfileItem = ({ item }: ProfileItemProps) => (
  <View style={styles.profileItem}>
    <Image source={item.image} style={styles.profileImage} />
    <Text style={styles.itemText}>{item.name}</Text>
  </View>
);

type ProfileListProps = {
  profiles: {
    id: number;
    image: any;
    name: string;
  }[];
  showAllProfiles: boolean;
  onShowAllProfiles: () => void;
};

const ProfileList = ({
  profiles,
  showAllProfiles,
  onShowAllProfiles,
}: ProfileListProps) => (
  <View style={styles.profileItemWrap}>
    <View style={styles.leftWrap}>
      <Text style={styles.leftText}>참여자</Text>
    </View>
    <View style={styles.rightWrap}>
      <View style={styles.profileWrap}>
        {profiles
          .slice(0, showAllProfiles ? profiles.length : 2)
          .map((profile) => (
            <ProfileItem key={profile.id} item={profile} />
          ))}
      </View>
    </View>
    <View style={styles.lengthWrap}>
      {profiles.length > 2 && !showAllProfiles && (
        <TouchableOpacity onPress={onShowAllProfiles}>
          <Text style={styles.lengthText}>외 {profiles.length - 2}명</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default ProfileList;
