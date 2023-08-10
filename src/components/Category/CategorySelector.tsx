/**
 * CategorySelector Component
 * @render Renders a list of categories.
 * @handlers Handles the selection of a category.
 */

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { mockCategories } from "../../data/mockCategories";

type CategorySelectorProps = {
  onCategorySelect: (categoryId: string) => void; // @handlers - handles the selection of a category.
};

const CategorySelector: React.FC<CategorySelectorProps> = ({
  onCategorySelect,
}) => {
  // @render
  return (
    <View style={styles.container}>
      {mockCategories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => onCategorySelect(category.id)}
          style={styles.categoryButton}
        >
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  categoryButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    margin: 5,
  },
  categoryText: {
    fontSize: 16,
  },
});

export default CategorySelector;
