import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Camera from 'react-native-camera';
import Sound from 'react-native-sound';

export default class BarcodeScan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qrcode: ''
        }
        this.beep = new Sound('beep.mp3', Sound.MAIN_BUNDLE, (error) => (error) && console.log('failed to load the sound', error) );
    }

    onBarCodeRead = (e) => {
        this.beep.play();
        this.setState({qrcode: e.data});
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.containerCamera}>
                    <Camera
                        style={styles.preview}
                        onBarCodeRead={this.onBarCodeRead}
                        ref={cam => this.camera = cam}
                        aspect={Camera.constants.Aspect.fill}
                        >
                        <Text style={{
                            backgroundColor: 'white'
                        }}>{this.state.qrcode}</Text>
                    </Camera>
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity
                        onPress={() => this.props.history.goBack()}
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                        <Text>VOLTAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerCamera: {
        flex: 8,
        flexDirection: 'row',
    },
    containerButton: {
        flex: 1,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  });