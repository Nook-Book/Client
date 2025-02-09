import React from "react";
import { ScrollView, View } from "react-native";
import ResultBookCard from "../../components/search/ResultBookCard";
import SearchHeader from "../../components/search/SearchHeader";
import { useSearch } from "../../hooks/book/useSearch";
import { styles } from "../../styles/search/SearchResultPageStyle";
import { BestSellerPageRouteProp } from "../../types/navigation/navigation";

type Props = {
  route: BestSellerPageRouteProp;
};

const SearchResultPage: React.FC<Props> = ({ route }) => {
  const { query } = route.params;
  const { data } = useSearch(query);
  const searchList = data.item;
  return (
    <View style={styles.container}>
      <SearchHeader search={query} />
      <View style={styles.separator} />
      <ScrollView style={styles.cardContainer}>
        {searchList.map((book, index) => (
          <ResultBookCard
            key={index}
            image={book.cover}
            title={book.title}
            artist={book.author}
            publisher={book.publisher}
            isbn={book.isbn13}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchResultPage;
