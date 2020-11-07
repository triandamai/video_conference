import {ref} from 'vue'

export default function useVideo(){
    let meeting = ref({})
    let attende = ref({})
    let supportVideo = ref(false)

    function getVideo(){
        navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            console.log('Got MediaStream:', stream);
            supportVideo.value = true
        })
        .catch(error => {
            console.error('Error accessing media devices.', error);
            supportVideo.value = false
        })
    }
    
    function cretaeJoinMeeting(){
        this.axios.post('https://dev.berdayakan.com/node/join',{})
        .then(res=>{
            console.log(res)
            meeting.value = res.data.detail.meeting
            attende.value = res.data.detail.attende
        })
        .catch(er=>{
            console.log(er)
        })
    }
    return {
        cretaeJoinMeeting,
        meeting,
        attende,
        supportVideo,
        getVideo
    }
}