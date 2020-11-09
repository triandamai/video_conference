<template>
  <div>
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="flex-1 min-w-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
        >
          Cexup
        </h2>
        <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
          <div
            class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6"
          >
            <!-- Heroicon name: location-marker -->
            <svg
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            Jakarta,Indonesia
          </div>
        </div>
      </div>

      <div v-if="supportMedia" class="mt-5 flex lg:mt-0 lg:ml-4">
        <span class="hidden sm:block shadow-sm rounded-md">
          <button
            type="button"
            @click="showPreview"
            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
          >
            <!-- Heroicon name: pencil -->
            <svg
              class="-ml-1 mr-2 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
              />
            </svg>
            Camera
          </button>
        </span>

        <span class="hidden sm:block ml-3 shadow-sm rounded-md">
          <button
            type="button"
            @click="shareCaptured"
            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
          >
            <!-- Heroicon name: link -->
            <svg
              class="-ml-1 mr-2 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clip-rule="evenodd"
              />
            </svg>
            Share
          </button>
        </span>

        <span class="sm:ml-3 shadow-sm rounded-md">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <!-- Heroicon name: check -->
            <svg
              class="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Microphone
          </button>
        </span>

        <!-- Dropdown -->
        <span class="ml-3 relative shadow-sm rounded-md sm:hidden">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
            id="mobile-menu"
            aria-haspopup="true"
          >
            More
            <!-- Heroicon name: chevron-down -->
            <svg
              class="-mr-1 ml-2 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <!--
        Dropdown panel, show/hide based on dropdown state.

      -->
          <div
            class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg"
            aria-labelledby="mobile-menu"
            role="menu"
          >
            <div class="py-1 rounded-md bg-white shadow-xs">
              <a
                href="#"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                role="menuitem"
                >Edit</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                role="menuitem"
                >View</a
              >
            </div>
          </div>
        </span>
      </div>
      <div id="video-list" ref="video-list"></div>
      <video id="video" ref="video"></video>
      <audio id="audio" ref="audio"></audio>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

import useVideo from "../repository/video";

export default defineComponent({
  name: "Main",
  setup() {
    //const video = ref();
    const audio = ref();

    let meetingsession = null;
    const {
      getSupportMedia,
      supportMedia,
      cretaeJoinMeeting,
      getSession,
      populateDevices,
      setDevices,
    } = useVideo();
    onMounted(async () => {
      getSupportMedia();
      await cretaeJoinMeeting();
      await startMeeting();
    });

    async function startMeeting() {
      meetingsession = await getSession();
      await populateDevices(meetingsession);
      await setDevices(meetingsession);

      try {
        /* eslint-disable */
        const observer = {
          //
          audioInputsChanged: (freshAudioInputDeviceList) => {
            freshAudioInputDeviceList.forEach((MediaDeviceInfo) => {
              console.log(`audioinput changed $MediaDeviceInfo`);
            });
          },
          audioOutputsChanged: (freshAudioOutputDeviceList) => {
            console.log(`audio output changed`);
          },
          videoInputsChanged: (freshVideoInputDeviceList) => {
            console.log(`video input changed`);
          },
        };
        const observerVideo = {
          audioVideoDidStart: () => {
            console.log("started");
          },
          videoTileDidUpdate: (tileState) => {
            if (!tileState.boundAttendeeId || !tileState.localTile) {
              return;
            }

            const tiles = meetingsession.audioVideo.getAllVideoTiles();
            tiles.forEach((tile) => {
              if (tile.tileState.tileId) {
                if (tile.tileState.tileId != tileState.localTile.tileId) {
                  let titleId = tile.tileState.tileId;
                var videoElemet = document.getElementById("video-" + titleId);

                if (!videoElemet) {
                  videoElemet = document.createElement("video");
                  videoElemet.id = "video-" + titleId;
                  document.getElementById("video-list").append(videoElemet);
                  meetingsession.audioVideo.bindVideoElement(
                    titleId,
                    videoElemet
                  );
                }
                }
                
              }
            });
          },
        };

        meetingsession.audioVideo.addDeviceChangeObserver(observer);
        meetingsession.audioVideo.bindAudioElement(audio);
        meetingsession.audioVideo.addObserver(observerVideo);
        meetingsession.audioVideo.startLocalVideoTile();
        meetingsession.audioVideo.start();
      } catch (error) {
        console.log(error);
      }
    }

    function showPreview() {
      //meetingsession.audioVideo.startVideoPreviewForVideoInput(video);
    }
    function shareCaptured() {
      meetingsession.audioVideo.startContentShareFromScreenCapture();
    }

    return {
      getSupportMedia,
      supportMedia,
      cretaeJoinMeeting,
      meetingsession,
      showPreview,
      shareCaptured,
    };
  },
});
</script>

<style></style>
