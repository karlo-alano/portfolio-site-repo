<template>
  <main class="h-full w-full bg-green-1 p-2 md:pt-25 md:px-15">
    <div class="text-yellow-1 text-4xl font-extrabold mb-5">_the_projects_page</div>
    <p class="text-dark opacity-90">Scroll through the projects below to find out more details.</p>

    <div class="mainProjectContainer">
      <div class="projectContainer p-5">
        <h1 class="text-dark font-bold text-2xl">Itinero</h1>
        <div class="projectContainerSection flex gap-6">
          <div class="projectAbout w-[50%]">
            <p class="text-dark">
              This is Itinero, a time-Constrained Automatic Itinerary Generator for Effective Travel
              Planning in Intramuros, Manila This project is developed and research by three
              computer science students from Cavite State University Indang Campus. In an effort to
              streamline and automate itinerary planning, Itinero proposes an automated generator
              which plans, searches, and schedules Places Of Interests (POIs) that dynamically
              changes based on the time requirements specified by the user. It uses the Google Maps
              Places API to search and filter through a list of POIs and then forwards the list to
              by scheduled by a Nearest Neighbor Algorithm. The result is then presented into a GUI
              that a user can interact with
            </p>
          </div>
          <div class="divider-l"></div>
          <div class="projectDetails">
            <div class="">
              <div>
                <h1 class="">Tech Stack</h1>
                <ul>
                  <li>Vue.js</li>
                  <li>TailwindCSS</li>
                  <li>PrimeVue</li>
                </ul>
                <ul>
                  <li>Flask (Python)</li>
                  <li>Google Maps API</li>
                  <li>Supabase (PostgreSQL)</li>
                </ul>
              </div>
              <div>
                <h1>Challenges Encountered:</h1>
                <ul></ul>
              </div>
              <div>
                <h1>Lessons Learned:</h1>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
