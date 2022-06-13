import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const { width: windowWidth } = Dimensions.get('window');

const data = [
  {
    uri: 'http://www.readersnews.com/news/photo/201707/73990_32707_616.jpg',
  },
  {
    uri: 'https://img.daily.co.kr/@files/www.daily.co.kr/content_watermark/life/2017/20170504/859b9ec69dcef60de3606fd9eab7e29e.jpg',
  },
  {
    uri: 'http://ojsfile.ohmynews.com/STD_IMG_FILE/2020/0418/IE002632888_STD.jpg',
  },
  {
    uri: 'http://image.kyobobook.co.kr/images/book/xlarge/844/x9791158930844.jpg',
  },
  {
    uri: 'https://newsimg.sedaily.com/2019/10/30/1VPQ0XY4RJ_1.jpg',
  },
];

const INITIAL_INDEX = 0;
export default function ImageCarousel(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({ item, index }) {
    const { uri } = item;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      >
        <ImageBackground
          source={{ uri: uri }}
          style={styles.imageBackground}
        ></ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={0.4 * windowWidth}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
        inActiveSacle={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 25 },
  carousel: {
    aspectRatio: 1.8,
    flexGrow: 0,
    marginBottom: 20,
    marginTop: 5,
  },
  item: {
    flex: 1,
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
  },
});
