import { StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Button, ButtonGroup, Icon, Slider } from 'react-native-elements';




const FilterScreen = ({visible, onClose}) => {
    const [selectedRentTypeIndex, setSelectedRentTypeIndex] = useState(0);
    const [selectedPropertyTypeIndex, setSelectedPropertyTypeIndex] = useState(0);
    const [selectedFurnishTypeIndex, setSelectedFurnishTypeIndex] = useState(0);
    const [selectedVerificationTypeIndex, setSelectedVerificationTypeIndex] = useState(0);
    const [selectedPreferIndexes, setSelectedPreferIndexes] = useState([]);
    const [selectedFeatureFacilitiesIndexes, setSelectedFeatureFacilitiesIndexes] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState();
  
    const resetFilter = () => {
      setSelectedRentTypeIndex(0)
      setSelectedPropertyTypeIndex(0)
      setSelectedFurnishTypeIndex(0)
      setSelectedVerificationTypeIndex(0)
      setSelectedPreferIndexes([])
      setSelectedFeatureFacilitiesIndexes([])
      setSelectedPrice()
    }
  return (
    <View>
      <Modal
            onRequestClose={() => {
              onClose()
            }}
            visible={visible}
            animationType= 'fade'
            presentationStyle= 'formSheet'
            transparent = {false}
      >
          <ScrollView>
            <TouchableOpacity 
              style={{ position: 'absolute', top: '2%', right: '2.5%', zIndex: 20}}
              onPress={() => onClose()}>

            <Icon
                    name="closecircleo"
                    type="antdesign"
                    size={22}
                    color="#16324F"
            />
            </TouchableOpacity>

    

            <Text style={{marginTop: '5%'}}> Property Type</Text>
            <ButtonGroup
                          selectedButtonStyle={{backgroundColor: '#16324F'}}
                          buttonContainerStyle={{maxHeight: 100, }}
                          textStyle={{fontSize: 10, marginLeft: 2}}
                          buttons={['Apartment/ Condo ', 'Semi-Detached House', 'Bungalow/ Villa', 'Terrace/ Link House', 'Residential Land']}
                          selectedIndex={selectedPropertyTypeIndex}
                          onPress={(value) => {
                          setSelectedPropertyTypeIndex(value);
                          }}
                          containerStyle={{ marginBottom: 20 }}
                          />
            <Text> Price Range: RM {selectedPrice}</Text>
            <View style={{marginLeft: 10}}>

            <Slider
              animateTransitions
              animationType="timing"
              maximumTrackTintColor="#ccc"
              maximumValue={1000}
              minimumTrackTintColor="#222"
              minimumValue={0}
              // onSlidingComplete={() =>
              //   console.log("onSlidingComplete()")
              // }
              // onSlidingStart={() =>
              //   console.log("onSlidingStart()")
              // }
              onValueChange={value => setSelectedPrice(value)
              }
              orientation="horizontal"
              step={1}
              style={{ width: "80%", height: 100 }}
              thumbStyle={{ height: 20, width: 20 }}
              thumbProps={{
                children: (
                  <Icon
                    name="heartbeat"
                    type="font-awesome"
                    size={20}
                    reverse
                    containerStyle={{ bottom: 20, right: 20 }}
                    color="#16324F"
                  />
                )
              }}
              thumbTintColor="#0c0"
              thumbTouchSize={{ width: 40, height: 40 }}
              trackStyle={{ height: 10, borderRadius: 20 }}
              value={50}
            />
            </View>
            <Text> Rent Type</Text>
            <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#16324F'}}
                        buttons={['Whole Unit', 'Room rental']}
                        selectedIndex={selectedRentTypeIndex}
                        onPress={(value) => {
                        setSelectedRentTypeIndex(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                        />
            <Text> Preference</Text>
            <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#16324F'}}
                        buttons={['Family', 'Male', 'Female']}
                        selectMultiple
                        selectedIndexes={selectedPreferIndexes}
                        onPress={(value) => {
                        setSelectedPreferIndexes(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                        />
            <Text> Rental Status</Text>
            <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#16324F'}}
                        buttons={['Verified', 'Unverified']}
                        selectedIndex={selectedVerificationTypeIndex}
                        onPress={(value) => {
                        setSelectedVerificationTypeIndex(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                        />
            <Text> Furnish</Text>
            <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#16324F'}}
                        buttons={['Unfurnished', 'Partial Furnished', 'Fully Furnished']}
                        selectedIndex={selectedFurnishTypeIndex}
                        onPress={(value) => {
                        setSelectedFurnishTypeIndex(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                        />
            <Text> Features & Facilities</Text>
            <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#16324F'}}
                        textStyle={{fontSize: 10, marginLeft: 2}}
                        buttons={['24 hours security', 'Car park', 'Low floor', 'Wifi', 'Air-conditioning']}
                        selectMultiple
                        selectedIndexes={selectedFeatureFacilitiesIndexes}
                        onPress={(value) => {
                        setSelectedFeatureFacilitiesIndexes(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                        />
                

            {/* confirmation modal     */}
            <View style={{flexDirection: 'row-reverse', marginHorizontal: 12, marginBottom: 10}}>

              <Button 
                  buttonStyle={{backgroundColor: '#16324F', height: 38}}
                  onPress={() => onClose()}
                  title="Apply" />
              <Button 

                  buttonStyle={{ backgroundColor: '#16324F', height: 38, marginRight: 6, }}
                  onPress={() => resetFilter()}
                  title="Reset" />

            </View>
          </ScrollView>
      </Modal>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({});
