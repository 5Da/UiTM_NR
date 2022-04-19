import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DocumentPicker from 'react-native-document-picker'

const DocumentPick = () => {
    const [singleFile, setSingleFile] = useState('');
    const [filePick, setFilePick] = useState(false);
    const openDocumentFile = async () => {
        try {
            const res = await DocumentPicker.pickSingle({
              type: DocumentPicker.types.allFiles,
              //There can me more options as well
              // DocumentPicker.types.allFiles
              // DocumentPicker.types.images
              // DocumentPicker.types.plainText
              // DocumentPicker.types.audio
              // DocumentPicker.types.pdf
            });
            //Printing the log realted to the file
            // console.log('res : ' + JSON.stringify(res));
            console.log('URI : ' + res.uri);
            console.log('Type : ' + res.type);
            console.log('File Name : ' + res.name);
            console.log('File Size : ' + res.size);
            //Setting the state to show single file attributes
            setSingleFile(res.uri);
            setFilePick(true);
          } catch (err) {
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
              //If user canceled the document selection
              alert('Canceled from single doc picker');
            } else {
              //For Unknown Error
              alert('Unknown Error: ' + JSON.stringify(err));
              throw err;
            }
          }
    }
    return (
        <View>
            {filePick ? <Text>File Pick</Text>: null}
            <TouchableOpacity onPress={openDocumentFile}>
                <Text>Pick file</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilePick(!filePick)}>
                <Text>Pick file22</Text>
            </TouchableOpacity>

        </View>
    )
}

export default DocumentPick

const styles = StyleSheet.create({})
