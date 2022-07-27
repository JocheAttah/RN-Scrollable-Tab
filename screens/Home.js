import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "./components/Container";
import ScrollableTab from "./components/ScrollableTab";

const Home = () => {
  const [tabList, setTabList] = React.useState([
    {
      id: 0,
      name: "All",
      title: "All",
      NewsList: [
        {
          productId: 1,
          title: "Business 1",
          brief: "Offshore outsourcing companies are a new rage edsjjs fjl",
          image: "https://via.placeholder.com/150",
        },
        {
          productId: 2,
          title: "Kolkata is now home to country’s first-ever post office cafe",
          brief: "The Indian Postal Department (IPO) has recently",
          image: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 1,
      name: "Business",
      title: "Business",
      NewsList: [
        {
          productId: 1,
          title: "Business 1",
          brief: "lorem ipsum dolor sit amet",
          image: "https://via.placeholder.com/150",
        },
        {
          productId: 2,
          title: "Business 2",
          brief: "lorem ipsum dolor sit amet",
          image: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 2,
      name: "Entertainment",
      title: "Entertainmet",
      NewsList: [
        {
          productId: 1,
          title:"Entertainment 1",
          brief: "Offshore outsourcing companies are a new rage edsjjs fjl",
          image: "https://via.placeholder.com/150",
        },
        {
          productId: 2,
          title: "Entertainment 2",
          brief: "The Indian Postal Department (IPO) has recently",
          image: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 3,
      name: "Health",
      title: "Health",
      NewsList: [
        {
          productId: 1,
          title:"Health 1",
          brief: "Offshore outsourcing companies are a new rage edsjjs fjl",
          image: "https://via.placeholder.com/150",
        },
        {
          productId: 2,
          title: "Health 2",
          brief: "The Indian Postal Department (IPO) has recently",
          image: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 4,
      name: "Sports",
      title: "Sports",
      NewsList: [
        {
          productId: 1,
          title:"Manchester United 1",
          brief: "Offshore outsourcing companies are a new rage edsjjs fjl",
          image: "https://via.placeholder.com/150",
        },
        {
          productId: 2,
          title: "Arsenal 2",
          brief: "The Indian Postal Department (IPO) has recently",
          image: "https://via.placeholder.com/150",
        },
      ],
    },
  ]);
  const [selectedTab, setSelectedTab] = React.useState(tabList[0]);
  return (
    <Container>
      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={(item) => setSelectedTab(item)}
      />
      <View style={{ flex: 1 }}>
        <Text>{selectedTab.name}</Text>
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
