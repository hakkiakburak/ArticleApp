/**
 * AllArticlesScreen
 * @render Renders all articles with category selection.
 * @effect Uses React's useState to manage the selected category.
 * @handlers Handles the click event on an article.
 */

import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import ArticleList from "../components/Article/ArticleList";
import CategorySelector from "../components/Category/CategorySelector";
import { Article } from "../data/mockArticles";

type AllArticlesScreenProps = {
  articles: Article[];
  onArticleClick: (articleId: string) => void; // @handlers - handles the click event on an article.
};

const AllArticlesScreen: React.FC<AllArticlesScreenProps> = ({
  articles,
  onArticleClick,
}) => {
  // @effect - state for managing the selected category.
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // filtering articles based on the selected category.
  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  // @render
  return (
    <ScrollView style={styles.container}>
      <CategorySelector
        onCategorySelect={(categoryId) => setSelectedCategory(categoryId)}
      />
      <Text style={styles.sectionTitle}>All Articles</Text>
      <ArticleList
        articles={filteredArticles}
        onArticleClick={onArticleClick}
      />
    </ScrollView>
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

export default AllArticlesScreen;
