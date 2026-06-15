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

            <!-- <div class="w-full h-20 bg-white m-5">
              <div></div>
            </div> -->
          </div>
          <div class="divider-l"></div>
          <div class="projectDetails flex-1">
            <div class="">
              <div>
                <h1 class="font-monospace font-bold opacity-80">Tech Stack</h1>
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
              <div class="divider-s"></div>
              <div>
                <h1 class="font-monospace font-bold opacity-80">Challenges Encountered:</h1>
                <ul>
                  > The project heavily uses the Google Maps API for the function of its main
                  itinerary generator. Managing API usage, restricting access, and streamlining API
                  request pipelines was initially a challenge not because it was hard, rather it was
                  numerous. Navigating through the Google Cloud Console was also confusing at first
                  due to the many menus, navigation bars, and clickable links and buttons.
                </ul>
                <ul>
                  > Building a cohesive and well put together User Interface requires careful
                  planning, foresight, and theme. With no expert in UI/UX, we struggled with this
                  for the initial stages of the project.
                </ul>
                <ul>
                  > Collaborating with a team of three required careful distribution of workload. In
                  the initial stages of the project, this regard was not focused on which led to
                  eventual burnout and lack of direction.
                </ul>
                <ul></ul>
              </div>
              <div class="divider-s"></div>
              <div>
                <h1 class="font-monospace font-bold opacity-80">Lessons Learned:</h1>
                <ul>
                  > In order to reduce API costs, I have decided to implement a JSON cache of store
                  data. This is updated biweekly through a yaml script on Github Actions. This not
                  only reduced usage - it also made for a more streamlined pipeline and gave me
                  experience into writing automation pipelines.
                </ul>
                <ul>
                  > Around the middle of the project's completion, one of my teammates proposed a
                  completely different design language. This new design language turned out to fit
                  the general vibe of the website better and thus a pivot was made to fully adopt
                  the change. Furthermore, using PrimeVue, a UI component library made for the
                  Vue.js framework, helped the project massively as it allowed fast prototyping and
                  the establishment of a central design language.
                </ul>
                <ul>
                  > Streamlining the Git pipeline and designating tasks and modules to my teammates
                  allowed us to finish our project in time. We established commit guidelines that
                  followed common practices and shared workload evenly. We assigned each other
                  dedicated modules to focus and work on, which allowed us to hit our established
                  timelines.
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="projectContainer p-5">
        <h1 class="text-dark font-bold text-2xl">The Keeper</h1>
        <div class="projectContainerSection flex gap-6">
          <div class="projectAbout w-[50%]">
            <p class="text-dark">
              The Keeper is a psychological horror game that induces grief and sadness to the player
              as much as horror. In it, you play as Nanay Angelina, an aging widow looking over a
              small sextet dormitory. You cater to the dorm, you talk with the tenants, and as much
              as you manage the dorm, you also manage the feelings of your 16-year old daughter.
              Barely scraping by, how would you react if things went horribly and unexplainably
              wrong? Do you have what it takes to remain calm under pressure or would you crack
              under the torrent of grief, guilt, or maybe perhaps something else?
            </p>

            <!-- <div class="w-full h-20 bg-white m-5">
              <div></div>
            </div> -->
          </div>
          <div class="divider-l"></div>
          <div class="projectDetails flex-1">
            <div class="">
              <div>
                <h1 class="font-monospace font-bold opacity-80">Tech Stack</h1>
                <ul>
                  <li>Blender</li>
                  <li>Godot</li>
                  <li>GDscript</li>
                </ul>
              </div>
              <div class="divider-s"></div>
              <div>
                <h1 class="font-monospace font-bold opacity-80">Challenges Encountered:</h1>
                <ul class="flex flex-col gap-2">
                  <li>
                    > Creating a massive collection of 3D assets required long and tedious work in
                    Blender. The main structures - the dorm, the cabin, the shed, and the altar,
                    have been crafted with dedication under Blender, our 3D modelling software of
                    choice. Faced with a tight deadline, we knew we had to work efficiently to meet
                    our project milestones.
                  </li>
                  <li>
                    > Collaboration became a challenge during the initial stages of the project.
                    With the team used to Web Development workflows, we were initially confused on
                    how to collaborate and share code with each other. Until we learned that the
                    same workflow can carry over, we were sharing versions through Google Drive -
                    not ideal.
                  </li>
                  <li>
                    > The initial plan and scope had blown out of proportion and we only later
                    realized that the original plan had to be shortened drastically. Scope creep was
                    an even bigger problem to us than tackling implementation of technical game
                    mechanics.
                  </li>
                </ul>
              </div>
              <div class="divider-s"></div>
              <div>
                <h1 class="font-monospace font-bold opacity-80">Lessons Learned:</h1>
                <ul>
                  <li>
                    > Offloading of asset creation tasks to different team members helped us
                    greatly. Initially with only one person working on the assets, the asset
                    creation team grew to three people. Furthermore, once we have learned that using
                    free CC0 assets were allowed, our progress greatly sped up.
                  </li>
                  <li>
                    > I have learned that Github is very useful in a wide assortment of environments
                    and could suit any type of work flow. With the team working on their individual
                    branches, changes could be made without compromising the main branch. There was
                    one time where I forgot to pull the new changes and immediately worked on my
                    outdated branch. Upon pushing, I have faced several merge conflicts that I had
                    to assess one by one, leading to a long and tedious session. It is fair to say
                    that I always pulled first before working on anything after that.
                  </li>
                  <li>
                    > We were forced to shorten the scope two times. Once we realized that the
                    original plan had been over ambitious, we decided to shorten the in-game days in
                    half. Around the time we realized that even this was not enough, we slashed it
                    again in half - bringing the total amount of days to three high-impact ones
                    rather than the originally planned 2 whole weeks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
