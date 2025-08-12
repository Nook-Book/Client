import { useEffect } from "react";
import { View } from "react-native";
import { useBestSeller } from "../../hooks/book/useBestSeller";
import { styles } from "../../styles/search/BestSellerStyle";
import {
  CategoryName,
  getCategoryCode,
} from "../../utils/category/bookCategories";
import BestSellerBook from "./BestSellerBook";

interface BookItem {
  cover: string;
  title: string;
  author: string;
  isbn13: string;
}

const BookCollection = ({
  isMarginBottom,
  category,
}: {
  isMarginBottom: boolean;
  category: string;
}) => {
  const { data, refetch } = useBestSeller({
    category: getCategoryCode(category as CategoryName),
    size: 12,
  });

  useEffect(() => {
    refetch();
  }, [category]);

  const bestSellerList = data.item;

  // 3*4 배열을 만들기 위해 3개씩 푸시함.
  const groupedBooks: (BookItem | null)[][] = [];

  for (let i = 0; i < bestSellerList.length; i += 3) {
    const group: (BookItem | null)[] = bestSellerList.slice(i, i + 3);
    // 마지막 그룹이 3개 미만이면 빈 슬롯으로 채움
    while (group.length < 3) {
      group.push(null);
    }
    groupedBooks.push(group);
  }

  return (
    <View style={isMarginBottom && { marginBottom: 90 }}>
      {groupedBooks.map((group, groupIndex) => (
        <View
          key={groupIndex}
          style={[
            styles.row,
            !isMarginBottom && groupIndex === 0 && { marginTop: 16 },
            !isMarginBottom &&
              groupIndex === groupedBooks.length - 1 && { marginBottom: 16 },
          ]}
        >
          {group.map((book, bookIndex) => {
            const currentId = groupIndex * 3 + bookIndex + 1;

            // null인 경우 빈 View 반환 (같은 width 유지)
            if (!book) {
              return (
                <View
                  key={`empty-${groupIndex}-${bookIndex}`}
                  style={{ flex: 1, marginHorizontal: 9 }}
                />
              );
            }

            return (
              <BestSellerBook
                key={`${groupIndex}-${bookIndex}`}
                id={currentId}
                image={book.cover}
                title={book.title}
                name={book.author}
                isbn={book.isbn13}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default BookCollection;
