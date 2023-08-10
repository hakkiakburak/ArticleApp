/**
 * AppNavigator
 * @render Renders the bottom tab navigation for the app.
 * @effect Uses React's useState to manage the articles.
 * @handlers Handles the click event on an article.
 */

import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllArticlesScreen from "../screens/AllArticlesScreen";
import RecentArticlesScreen from "../screens/RecentArticlesScreen";
import { mockArticles, Article } from "../data/mockArticles";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // @effect - state for managing the articles.
  const [articles, setArticles] = useState<Article[]>(mockArticles);

  // @handlers - handles the click event on an article.
  const handleArticleClick = (articleId: string) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        return {
          ...article,
          lastClicked: new Date().toISOString(),
          clicks: article.clicks + 1,
        };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  // @render
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Articles">
        {(props) => (
          <AllArticlesScreen
            {...props}
            articles={articles}
            onArticleClick={handleArticleClick}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Recent Articles">
        {(props) => (
          <RecentArticlesScreen
            {...props}
            articles={articles}
            onArticleClick={handleArticleClick}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppNavigator;
