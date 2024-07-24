import React from "react";
import { View, ScrollView } from "react-native";
import { BestSellerPageRouteProp } from "../../types/navigation/navigation";
import { styles } from "../../styles/search/SearchResultPageStyle";
import SearchHeader from "../../components/search/SearchHeader";
import { dummyList } from "../../assets/data/dummyBestBookList";
import ResultBookCard from "../../components/search/ResultBookCard";

type Props = {
  route: BestSellerPageRouteProp;
};

const SearchResultPage: React.FC<Props> = ({ route }) => {
  const { query } = route.params; // query

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
