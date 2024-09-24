export type TChallenge = {
  id: number;
  image: any;
  title: string;
};

export type TInviteChallenge = {
  id: number;
  title: string;
};

export type TImagePickerModalProps = {
  visible: boolean;
  onClose: () => void;
  onImagePicked: (uri: string | null) => void;
};

export type TTime = {
  hour: string;
  minute: string;
  ampm?: string;
};
