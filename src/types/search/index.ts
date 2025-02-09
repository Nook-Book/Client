export type NavigationProp = {
  navigate: (screen: string) => void;
};
export type RootStackParamList = {
  goBack(): void;
  navigate(arg0: string, arg1: { query: string }): unknown;
  SearchResultPage: { query: string };
};

export type ResultBookProp = {
  image: any;
  title: string;
  artist: string;
  publisher: string;
  isbn: string;
};
