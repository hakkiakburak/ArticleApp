/**
 * ArticleList Component
 * @render Renders a list of articles.
 * @handlers Handles the click event on an article.
 */

import React from "react";
import { View, TouchableOpacity } from "react-native";
import ArticleItem from "./ArticleItem";

type Article = {
  id: string;
  title: string;
  category: string;
  clicks: number;
};

type ArticleListProps = {
  articles: Article[];
  onArticleClick?: (articleId: string) => void; // @handlers
};

const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  onArticleClick,
}) => {
  // @render
  return (
    <View>
      {articles.map((article) => (
        <TouchableOpacity
          key={article.id}
          onPress={() => onArticleClick?.(article.id)}
        >
          <ArticleItem title={article.title} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ArticleList;
