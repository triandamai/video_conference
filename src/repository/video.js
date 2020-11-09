import {ref} from 'vue'

import axios from 'axios'
import {
    ConsoleLogger,
    DefaultDeviceController,
    DefaultMeetingSession,
    LogLevel,
    MeetingSessionConfiguration,
  } from "amazon-chime-sdk-js";

export default function useVideo(){
   
    const supportMedia = ref(false)
    const listinputdevice = ref([]);
    const listoutputdevice = ref([]);
    const listinputvideo = ref([]);
    const meeting = ref({});
    const attende = ref({});

    function getSupportMedia(){
        const constraints = {
            'video': true,
            'audio': true,
        }
        if(navigator.mediaDevices){
            supportMedia.value = false
        }
        navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            console.log('Got MediaStream:', stream);
            supportMedia.value = true
        })
        .catch(error => {
            console.error('Error accessing media devices.', error);
            supportMedia.value = false
        })
    }
    
    async function cretaeJoinMeeting(){
       await axios.post('https://dev.berdayakan.com/node/join',{meetingId:"998e5cea-b444-4936-ac2c-09f665e612ca"})
       .then((res) => {
        console.log(res);
        if(res.data){
            meeting.value = res.data.detail.meeting;
            attende.value = res.data.detail.attende;
        }
      })
      .catch((er) => {
        console.log(er);
       
      });
    }
    async function getSession(){
        let session = null
        
        if (meeting.value || attende.value) {
          const logger = new ConsoleLogger("ChimeMeetingLogs", LogLevel.ERROR);
          const deviceController = new DefaultDeviceController(logger);

          const configuration = new MeetingSessionConfiguration(
            meeting.value,
            attende.value
          );
           session = new DefaultMeetingSession(
            configuration,
            logger,
            deviceController
          );
        } else {
                console.log("gagal dapat session");

        }
        return session;
    }

    async function populateDevices(session){
        if(session != null){
        
              //getdevices
              const audioInputDevices = await session.audioVideo.listAudioInputDevices();
              const audioOutputDevices = await session.audioVideo.listAudioOutputDevices();
              const videoInputDevices = await session.audioVideo.listVideoInputDevices();
              //add device available list
              audioInputDevices.forEach((MediaDeviceInfo) => {
                listinputdevice.value.push(MediaDeviceInfo.deviceId);
              });
              audioOutputDevices.forEach((MediaDeviceInfo) => {
                listoutputdevice.value.push(MediaDeviceInfo.deviceId);
              });
              videoInputDevices.forEach((MediaDeviceInfo) => {
                listinputvideo.value.push(MediaDeviceInfo.deviceId);
              });
              
        }
        return session;
    }

    async function setDevices(session){
        await session.audioVideo.chooseAudioInputDevice(
            listinputdevice.value[0]
          );
          await session.audioVideo.chooseAudioOutputDevice(
            listoutputdevice.value[0]
          );
          await session.audioVideo.chooseVideoInputDevice(
            listinputvideo.value[0]
          );
          return session
    }
 
    return {
        cretaeJoinMeeting,
        supportMedia,
        getSupportMedia,
        getSession,
        populateDevices,
        setDevices
    }
}