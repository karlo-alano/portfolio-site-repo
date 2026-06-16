<template>
  <div class="mainContainer h-screen w-full bg-green-1">
    <!-- HERO SECTION -->
    <div class="heroSection w-full min-h-full bg-green-1 p-2 md:p-15 flex justify-center items-center">
      <div class="heroContainer md:h-[70%] md:flex-row flex-col flex items-center sm:justify-center gap-6">

        <!-- BIO SECTION -->
        <div class="nameSection md:w-[60%] flex flex-col justify-center items-center md:items-start mt-40 md:mt-0">
          <h1 class="header md:text-9xl text-7xl font-extrabold text-text-black mb-10 text-center md:text-left">
            Heya,<br />
            I'm Karlo!
          </h1>
          <p class="subHeader text-justify px-15 md:px-0 md:w-[60%] text-2xl text-[#1a0d03] opacity-90">
            I'm a CS student who loves building web apps and self-hosted infrastructure. I love
            understanding how systems work - from code all the way to the server.
          </p>
          <a class="button mt-10 font-monospace" href="#projects">VIEW MY WORK</a>
        </div>

        <!-- DIVIDER -->
        <div class="self-stretch mx-12 divider-l"></div


        <!-- CURRENTLY SECTION -->
        <div class="currentlySection flex flex-1 flex-col p-5 justify-center">
          <div class="currentlyContainer">
            <div class="text-l font-monospace opacity-50 mb-5">CURRENTLY...</div>
            <div class="text-l font-monospace opacity-50">_building:</div>
            <div class="text-xl font-monospace">this portfolio website</div>
            <div class="divider-s"></div>
            <div class="text-l font-monospace opacity-50">_learning:</div>
            <div class="text-xl font-monospace">Github-hosted and Self-hosted runners</div>
            <div class="divider-s"></div>
            <div class="text-l font-monospace opacity-50">_last_played_song:</div>
            <div >
              <h1 class="text-2xl font-monospace">
                {{nowPlaying || "..."}}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-15 bg-green-1" >
      <div class="bg-dark h-[2px] w-full opacity-50"></div>
    </div>

    <!-- PROJECTS SECTION -->
    <div id="projects" class="projectSection min-h-full w-full bg-green-1 flex flex-col gap-5 p-4 md:p-15">
      <h1 class="projectHeading text-3xl text-yellow-1 font-extrabold font-monospace">_projects.</h1>
      <div class="mainProjectContainer flex flex-col justify-around gap-2">

        <div class="projectContainer flex flex-col md:flex-row min-h-100 bg-text-black border-2 border-orange-1 ">
          <div class="left min-h-50 md:w-[60%] bg-[url('@/assets/imgs/itinero.png')] bg-cover relative">
            <div class="bg-linear-to-b md:bg-linear-to-r from-black/10 to-text-black absolute h-full w-full"></div>
          </div>

          <div class="right flex flex-col flex-1 p-2 md:p-15 justify-between">
            <div>
              <h1 class="text-2xl text-yellow-1 font-extrabold">Itinero</h1>
              <div class="flex gap-2 my-2">
                <div class="w-20 text-xs text-light opacity-90 bg-maroon-1 font-monospace text-center">VUE</div>
                <div class="w-20 text-xs text-light opacity-90 bg-maroon-1 font-monospace text-center">FLASK</div>
                <div class="w-20 text-xs text-light opacity-90 bg-maroon-1 font-monospace text-center">SUPABASE</div>
              </div>
              <p class="text-[#F5ECD8] text-left">Itinero is a automated time-constrained itinerary generator for the historical district Intramuros. Built with
                pedestrians in mind, it automatically finds the shortest walking route chaining the finished itineraries together. Paired with a user space
                ecosystem to share and discover itineraries, called Pocket Journals, Itinero offers a space where Intramuros tourists can just enjoy the district
                without the stress of finding out where to go.</p>
            </div>
            <RouterLink to="/Projects" class="button font-monospace mt-5 md:mt-0 p-2! w-fit" >VIEW THIS PROJECT</RouterLink>
          </div>
        </div>

        <div class="projectContainSer flex flex-col-reverse md:flex-row min-h-100 bg-text-black border-2 border-orange-1">
          <div class="right flex flex-col flex-1 p-2 md:p-15 justify-between">
            <div>
              <h1 class="text-2xl text-yellow-1 font-extrabold">The Keeper</h1>
              <div class="flex gap-2 my-2">
                <div class="w-20 text-xs text-light opacity-90 bg-maroon-1 font-monospace text-center">GODOT</div>
                <div class="w-20 text-xs text-light opacity-90 bg-maroon-1 font-monospace text-center">GDSCRIPT</div>
                <div class="w-20 text-xs text-light opacity-90 bg-maroon-1 font-monospace text-center">BLENDER</div>
              </div>
              <p class="text-[#F5ECD8] text-left">The Keeper is a meta-horror game that explores feelings of deception, manipulation, and deceit, especially in times of vulnerability.
                You play as Nanay Angelina, a dorm keeper who balances chores with complex extrapersonal relationships with the rest of the tenants and her daughter.
                When everything else goes wrong, do you have what it takes to remain calm, observant, and skeptical?</p>
            </div>
            <RouterLink to="/Projects" class="button font-monospace mt-5 md:mt-0 p-2! w-fit" >VIEW THIS PROJECT</RouterLink>
          </div>
          <div class="left min-h-50 w-full md:w-[60%] bg-[url('@/assets/imgs/thekeeper.png')] bg-cover relative">
            <div class="bg-linear-to-b md:bg-linear-to-l from-black/10 to-text-black absolute h-full w-full"></div>
          </div>
        </div>

        <div class="projectContainer flex flex-col md:flex-row min-h-100 bg-text-black border-2 border-orange-1">
          <div class="left min-h-50 w-full md:w-[60%] bg-[url('@/assets/imgs/linuxservermanagement.jpg')] bg-cover relative">
            <div class="inset-0 bg-linear-to-b md:bg-linear-to-r from-black/10 to-text-black absolute h-full w-full"></div>
          </div>
          <div class="right flex flex-1 flex-col p-2 md:p-15 justify-between">
            <div>
              <h1 class="text-3xl text-yellow-1 font-extrabold">Linux Server Management</h1>
              <div class="flex gap-2 my-2">
                <div class="w-20 text-xs text-light opacity-90 bg-maroon-1 font-monospace text-center">DEBIAN</div>
                <div class="w-20 text-xs text-light opacity-90 bg-maroon-1 font-monospace text-center">BASH</div>
                <div class="w-20 text-xs text-light opacity-90 bg-maroon-1 font-monospace text-center">NGINX</div>
              </div>
              <p class="text-[#F5ECD8] text-left">Learning Linux server management with a headless Debian installed on my old laptop</p>
            </div>
            <RouterLink to="/Projects" class="button font-monospace mt-5 md:mt-0 p-2! w-fit" >VIEW THIS PROJECT</RouterLink>
          </div>
        </div>

      </div>
    </div>

    <div class="px-15 bg-green-1" >
      <div class="bg-dark h-[2px] w-full opacity-50"></div>
    </div>

    <!-- ABOUT SECTION -->
    <div id="about" class="aboutSection min-h-full w-full p-4 md:p-15 bg-green-1 flex justify-center items-center">
      <div class="aboutContainer h-full w-full flex flex-col justify-center gap-5">
        <h1 class="text-3xl text-yellow-1 font-extrabold font-monospace">_about.</h1>


        <div class="flex flex-col md:flex-row items-stretch justify-center h-full md:h-[70%] w-full gap-10">

          <!-- PROFILE PICTURE SECTION -->
          <div class="shrink flex justify-center">
            <img
              src="@/assets/imgs/profilePicture.jpeg"
              alt="Karlo"
              class="w-84 h-84 object-cover object-top border-2 border-text-black"
            />
          </div>

          <!-- BIO SECTION -->
          <div class= "right w-full md:w-[50%] flex flex-col md:justify-between md:items-start items-center">
            <div class="mb-10">
              <div class="text-4xl font-extrabold text-text-black mb-4 text-center md:text-left">Juan Karlo T. Alano</div>
              <p class="text-xl text-text-black text-justify md:text-left">I am a 3rd year Computer Science student from Cavite State University. I love to figure out how things really work from bottom to top.
                I am deeply interested in the backend and deployment side of the internet and I would love to work in the Devops field some day.</p>
              <br></br>
              <p class="text-xl  text-justify md:text-left">During my down time, I love to play games such as War Thunder, learn about history, play the bass, and write immersive stories.</p>
            </div>

            <div class="links md:w-full flex gap-6 flex-col md:flex-row justify-between">
              <a class="opacity-70 hover:text-yellow-1 transition-all cursor-pointer" href="https://github.com/karlo-alano">
                <p class="font-monospace">Github <i class="pi pi-github"></i></p>
              </a>
              <a class="opacity-70 hover:text-yellow-1 transition-all cursor-pointer" href="https://www.linkedin.com/in/juan-karlo-alano-a74821412/">
                <p class="font-monospace">LinkedIn <i class="pi pi-linkedin"></i></p>
              </a>
              <a class="opacity-70 hover:text-yellow-1 transition-all cursor-pointer" href="mailto:alano.juankarlo@gmail.com">
                <p class="font-monospace">Email <i class="pi pi-envelope"></i></p>
              </a>
              <a class="opacity-70 hover:text-yellow-1 transition-all cursor-pointer" href="https://www.facebook.com/karl0wo/">
                <p class="font-monospace">Facebook <i class="pi pi-facebook"></i></p>
              </a>
              <a class="opacity-70 hover:text-yellow-1 transition-all cursor-pointer" href="https://www.instagram.com/karl0__o/">
                <p class="font-monospace">Instagram <i class="pi pi-instagram"></i></p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const nowPlaying = ref("")
const LASTFM_USER = "qwrz___"
const LASTFM_API_KEY = "b0539f17fef1f07ddff7e18122bb42e0";

async function fetchNowPlaying() {
  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=1`,
    );

    const data = await res.json();
    const track = data.recenttracks?.track?.[0];
    if (track) {
      const isLive = track["@attr"]?.nowplaying === "true";
      nowPlaying.value = `${track.artist["#text"]} - ${track.name}${isLive ? " ♪" : ""}`;
    }
  } catch (e) {
    nowPlaying.value = "nothing right now"
  }
}

let interval;
onMounted(() => {
  fetchNowPlaying();
  interval = setInterval(fetchNowPlaying, 30000);
})
onUnmounted(() => clearInterval(interval));
</script>
