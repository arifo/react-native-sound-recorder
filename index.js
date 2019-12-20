
import { NativeModules, NativeAppEventEmitter } from 'react-native';

var { RNSoundRecorder } = NativeModules;
var SoundRecorder = {
	PATH_CACHE: RNSoundRecorder.PATH_CACHE,
	start: function(path, options){
		if(options == null) options = {};
		this.frameSubscription = NativeAppEventEmitter.addListener(
			'emitRecord',
			data =>{
				if(this.onNewFrame){
					this.onNewFrame(data)
				}
			}
		)
		return RNSoundRecorder.start(path, options);
	},
	stop: function(){
		if(this.frameSubscription) this.frameSubscription.remove()
		return RNSoundRecorder.stop()
	}
}

export default SoundRecorder;
