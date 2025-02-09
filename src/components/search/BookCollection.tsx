import { ScrollView, View } from "react-native";
import { useBestSeller } from "../../hooks/book/useBestSeller";
import { styles } from "../../styles/search/BestSellerStyle";
import BestSellerBook from "./BestSellerBook";

const BookCollection = () => {
  const { data } = useBestSeller({});
  const bestSellerList = data.item;

  // 3*4 배열을 만들기 위해 3개씩 푸시함.
  const groupedBooks = [];
  for (let i = 0; i < bestSellerList.length; i += 3) {
    groupedBooks.push(bestSellerList.slice(i, i + 3));
  }
  return (
    <ScrollView style={styles.bestSellerContainer}>
      {groupedBooks.map((group, groupIndex) => (
        <View key={groupIndex} style={styles.row}>
          {group.map((book, index) => (
            <BestSellerBook
              key={index}
              id={groupIndex * group.length + index + 1}
              image={book.cover}
              title={book.title}
              name={book.author}
              isbn={book.isbn13}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default BookCollection;
