import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import PlaceItem from './PlaceItem'
import { SelectedMarkerContext } from '../../../Context/SelectedMarkerContext';

export default function PlaceListView({placeList}) {
    const flatListRef = useRef(null);
    const {selectedMarker, setSelectedMarker} = useContext(SelectedMarkerContext);

    useEffect(() => {
        if (selectedMarker > 0) {
            scrollToIndex(selectedMarker);
        }
    }, [selectedMarker]);

    const scrollToIndex = (index) => {
        flatListRef.current?.scrollToIndex({animated: true, index})
    }

    const getItemLayout = (_, index) => ({
        length: Dimensions.get('window').width,
        offset: Dimensions.get('window').width*index,
        index
    });

    return (
        <View>
        <FlatList
            data={placeList}
            horizontal={true}
            pagingEnabled
            ref={flatListRef}
            initialNumToRender={5}
            getItemLayout={getItemLayout}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <View key={index}>
                    <PlaceItem place={item}/>
                </View>
            )}
        />
        </View>
  )
}