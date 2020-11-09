import {ref} from 'vue'

import axios from 'axios'


export default function useVideo(){
   
    let supportMedia = ref(false)

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
       return axios.post('https://dev.berdayakan.com/node/create',{});
    }
 
    return {
        cretaeJoinMeeting,
        supportMedia,
        getSupportMedia,
        
    }
}