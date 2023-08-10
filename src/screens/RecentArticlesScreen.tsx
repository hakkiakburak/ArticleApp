/**
 * RecentArticlesScreen
 * @render Renders the recently added, recently opened, and most clicked articles.
 * @effect Uses React's useState to manage the selected category.
 */

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ArticleList from "../components/Article/ArticleList";
import CategorySelector from "../components/Category/CategorySelector";
import { Article } from "../data/mockArticles";

type RecentArticlesScreenProps = {
  articles: Article[];
  onArticleClick: (articleId: string) => void; // @handlers - handles the click event on an article.
};

const RecentArticlesScreen: React.FC<RecentArticlesScreenProps> = ({
  articles,
  onArticleClick,
}) => {
  // @effect - state for managing the selected category.
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );

  // filtering articles based on the selected category.
  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  // sorting and slicing articles for different sections.
  const recentlyAddedArticles = [...filteredArticles]
    .sort(
      (a, b) =>
        new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    )
    .slice(0, 3);

  const recentlyOpenedArticles = [...filteredArticles]
    .filter((article) => article.lastClicked)
    .sort(
      (a, b) =>
        new Date(b.lastClicked).getTime() - new Date(a.lastClicked).getTime()
    )
    .slice(0, 3);

  const mostClickedArticles = [...filteredArticles]
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 3);

  // @render
  return (
    <View style={styles.container}>
      <CategorySelector
        onCategorySelect={(categoryId) => setSelectedCategory(categoryId)}
      />
      <ScrollView>
        <Text style={styles.sectionTitle}>Newly Added Articles</Text>
        <ArticleList
          articles={recentlyAddedArticles}
          onArticleClick={onArticleClick}
        />
        <Text style={styles.sectionTitle}>Recently Opened Articles</Text>
        <ArticleList
          articles={recentlyOpenedArticles}
          onArticleClick={onArticleClick}
        />
        <Text style={styles.sectionTitle}>Most Clicked Articles</Text>
        <ArticleList
          articles={mostClickedArticles}
          onArticleClick={onArticleClick}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default RecentArticlesScreen;
