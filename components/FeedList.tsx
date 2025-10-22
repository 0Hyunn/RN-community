import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FeedItem from "./FeedItem";
import { colors, queryKey } from "@/constants";
import useGetInfinitePosts from "@/hooks/queries/useGetInfinitePost";
import queryClient from "@/api/queryClient";
import { useScrollToTop } from "@react-navigation/native";

function FeedList() {
  const { data: posts, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetInfinitePosts();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const ref = useRef<FlatList | null>(null);
  useScrollToTop(ref);

  const handleEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await queryClient.invalidateQueries({ queryKey: [queryKey.POST, queryKey.GET_POSTS] });
    setIsRefreshing(false);
  };

  return (
    <FlatList
      ref={ref}
      data={posts?.pages.flat()}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.contentContainer}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});

export default FeedList;
