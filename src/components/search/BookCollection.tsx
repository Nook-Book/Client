import { ScrollView, View } from "react-native";
import BestSellerBook from "./BestSellerBook";
import { dummyList } from "../../assets/data/dummyBestBookList";
import { styles } from "../../styles/search/BestSellerStyle";

const BookCollection = () => {
  // 3*4 배열을 만들기 위해 3개씩 푸시함.
  const groupedBooks = [];
  for (let i = 0; i < dummyList.length; i += 3) {
    groupedBooks.push(dummyList.slice(i, i + 3));
  }
  return (
    <ScrollView style={styles.bestSellerContainer}>
      {groupedBooks.map((group, index) => (
        <View key={index} style={styles.row}>
          {group.map((book) => (
            <BestSellerBook
              key={book.id}
              id={book.id}
              image={book.image}
              title={book.title}
              name={book.name}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default BookCollection;
