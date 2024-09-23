import React from "react";
import { ScrollView, View } from "react-native";
import { dummyList } from "../../assets/data/dummyBestBookList";
import ResultBookCard from "../../components/search/ResultBookCard";
import SearchHeader from "../../components/search/SearchHeader";
import { styles } from "../../styles/search/SearchResultPageStyle";
import { BestSellerPageRouteProp } from "../../types/navigation/navigation";

type Props = {
  route: BestSellerPageRouteProp;
};

const SearchResultPage: React.FC<Props> = ({ route }) => {
  const { query } = route.params;

  return (
    <View style={styles.container}>
      <SearchHeader search={query} />
      <View style={styles.separator} />
      <ScrollView style={styles.cardContainer}>
        {dummyList.map((book) => (
          <ResultBookCard
            key={book.id}
            image={book.image}
            title={book.title}
            artist={book.name}
            publisher={book.name}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchResultPage;
