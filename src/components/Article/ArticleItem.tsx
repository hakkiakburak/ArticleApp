/**
 * ArticleItem
 * @render Renders a list of categories.
 */

import React from "react";
import { ListItem } from "react-native-elements";

const ArticleItem = ({ title }: { title: string }) => {
  // @render
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

export default ArticleItem;
