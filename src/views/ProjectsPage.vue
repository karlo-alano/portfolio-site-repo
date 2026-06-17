<template>
  <main class="h-full w-full bg-green-1 p-2 pt-34 md:pt-25 md:px-15">
    <div class="text-yellow-1 text-3xl md:text-4xl font-extrabold mb-5">_the_projects_page</div>
    <p class="text-dark opacity-90">Scroll through the projects below to find out more details.</p>

    <div class="mainProjectContainer">
      <div class="projectContainer p-5">
        <div id="#itinero" class="text-dark font-bold text-2xl">Itinero</div>
        <div class="projectContainerSection flex md:flex-row flex-col gap-6">
          <div class="projectAbout md:w-[50%] flex flex-col justify-between gap-3">
            <div>
              <p class="text-dark">
                This is Itinero, a time-Constrained Automatic Itinerary Generator for Effective
                Travel Planning in Intramuros, Manila This project is developed and research by
                three computer science students from Cavite State University Indang Campus. In an
                effort to streamline and automate itinerary planning, Itinero proposes an automated
                generator which plans, searches, and schedules Places Of Interests (POIs) that
                dynamically changes based on the time requirements specified by the user. It uses
                the Google Maps Places API to search and filter through a list of POIs and then
                forwards the list to by scheduled by a Nearest Neighbor Algorithm. The result is
                then presented into a GUI that a user can interact with
              </p>

              <div
                class="w-full h-50 md:h-120 bg-bg-light border-2 p-4 flex flex-col justify-center mt-2"
              >
                <div class="carousel w-full">
                  <div id="slide1" class="carousel-item relative w-full">
                    <img src="@/assets/imgs/itinero_preview_1.png" class="w-full h-full" />
                    <div
                      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                    >
                      <a href="#slide4" class="button">❮</a>
                      <a href="#slide2" class="button">❯</a>
                    </div>
                  </div>
                  <div id="slide2" class="carousel-item relative w-full">
                    <img src="@/assets/imgs/itinero_preview_2.png" class="w-full h-full" />
                    <div
                      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                    >
                      <a href="#slide1" class="button">❮</a>
                      <a href="#slide3" class="button">❯</a>
                    </div>
                  </div>
                  <div id="slide3" class="carousel-item relative w-full">
                    <img src="@/assets/imgs/itinero_preview_3.png" class="w-full h-full" />
                    <div
                      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                    >
                      <a href="#slide2" class="button">❮</a>
                      <a href="#slide1" class="button">❯</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-2">
              <a
                class="button font-monospace p-2! text-s md:text-lg"
                href="https://github.com/karlo-alano/itinero-web"
                >Github</a
              >
              <a
                class="button font-monospace p-2! text-s md:text-lg"
                href="https://www.itinero.site"
                >Website</a
              >
            </div>
          </div>
          <div class="divider-l"></div>
          <div class="projectDetails flex-1">
            <div class="">
              <div>
                <h1 class="font-monospace font-bold opacity-80 text-text-black">Tech Stack</h1>
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
                <ul class="flex flex-col gap-2">
                  <li>
                    > The project heavily uses the Google Maps API for the function of its main
                    itinerary generator. Managing API usage, restricting access, and streamlining API
                    request pipelines was initially a challenge not because it was hard, rather it was
                    numerous. Navigating through the Google Cloud Console was also confusing at first
                    due to the many menus, navigation bars, and clickable links and buttons.
                  </li>
                  <li>
                    > Building a cohesive and well put together User Interface requires careful
                    planning, foresight, and theme. With no expert in UI/UX, we struggled with this
                    for the initial stages of the project.
                  </li>
                  <li>
                    > Collaborating with a team of three required careful distribution of workload. In
                    the initial stages of the project, this regard was not focused on which led to
                    eventual burnout and lack of direction.
                  </li>
                </ul>
              </div>
              <div class="divider-s"></div>
              <div>
                <h1 class="font-monospace font-bold opacity-80">Lessons Learned:</h1>
                <ul class="flex flex-col gap-2">
                  <li>
                    > In order to reduce API costs, I have decided to implement a JSON cache of store
                    data. This is updated biweekly through a yaml script on Github Actions. This not
                    only reduced usage - it also made for a more streamlined pipeline and gave me
                    experience into writing automation pipelines.
                  </li>
                  <li>
                    > Around the middle of the project's completion, one of my teammates proposed a
                    completely different design language. This new design language turned out to fit
                    the general vibe of the website better and thus a pivot was made to fully adopt
                    the change. Furthermore, using PrimeVue, a UI component library made for the
                    Vue.js framework, helped the project massively as it allowed fast prototyping and
                    the establishment of a central design language.
                  </li>
                  <li>
                    > Streamlining the Git pipeline and designating tasks and modules to my teammates
                    allowed us to finish our project in time. We established commit guidelines that
                    followed common practices and shared workload evenly. We assigned each other
                    dedicated modules to focus and work on, which allowed us to hit our established
                    timelines.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="projectContainer p-5">
        <h1 id="#thekeeper" class="text-dark font-bold text-2xl">The Keeper</h1>
        <div class="projectContainerSection flex flex-col md:flex-row gap-6">
          <div class="projectAbout md:w-[50%] flex flex-col justify-between gap-3">
            <div>
              <p class="text-dark">
                The Keeper is a psychological horror game that induces grief and sadness to the
                player as much as horror. In it, you play as Nanay Angelina, an aging widow looking
                over a small sextet dormitory. You cater to the dorm, you talk with the tenants, and
                as much as you manage the dorm, you also manage the feelings of your 16-year old
                daughter. Barely scraping by, how would you react if things went horribly and
                unexplainably wrong? Do you have what it takes to remain calm under pressure or
                would you crack under the torrent of grief, guilt, or maybe perhaps something else?
              </p>

              <div
                class="w-full h-50 md:h-120 bg-bg-light border-2 p-4 flex flex-col justify-center mt-2"
              >
                <div class="carousel w-full">
                  <div id="slide1_TK" class="carousel-item relative w-full">
                    <img src="@/assets/imgs/thekeeper_preview_1.png" class="w-full h-full" />
                    <div
                      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                    >
                      <a href="#slide4_TK" class="button">❮</a>
                      <a href="#slide2_TK" class="button">❯</a>
                    </div>
                  </div>
                  <div id="slide2_TK" class="carousel-item relative w-full">
                    <img src="@/assets/imgs/thekeeper_preview_2.png" class="w-full h-full" />
                    <div
                      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                    >
                      <a href="#slide1_TK" class="button">❮</a>
                      <a href="#slide3_TK" class="button">❯</a>
                    </div>
                  </div>
                  <div id="slide3_TK" class="carousel-item relative w-full">
                    <img src="@/assets/imgs/thekeeper_preview_3.png" class="w-full h-full" />
                    <div
                      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                    >
                      <a href="#slide2_TK" class="button">❮</a>
                      <a href="#slide1_TK" class="button">❯</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-2">
              <a
                class="button font-monospace p-2! text-s md:text-lg"
                href="https://github.com/karlo-alano/the-keeper-game"
                >Github</a
              >
            </div>
          </div>
          <div class="divider-l"></div>
          <div class="projectDetails flex-1">
            <div class="">
              <div>
                <h1 class="font-monospace font-bold opacity-80 text-text-black">Tech Stack</h1>
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
                <ul class="flex flex-col gap-2">
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

      <div class="projectContainer p-5">
        <h1 id="#linuxhomelab" class="text-dark font-bold text-2xl">Linux Home Server</h1>
        <div class="projectContainerSection flex flex-col md:flex-row gap-6">
          <div class="projectAbout md:w-[50%] flex flex-col justify-between gap-3">
            <div>
              <p class="text-dark">
                This experiment is me trying to rekindle my pandemic tinted love for Linux. Equipped
                with first hand knowledge in config editing ,troubleshooting niche error codes, and
                linux ricing, this experiment was my way of applying why I went into the computer
                science field in the first place. I took the old laptop I had and installed a fresh
                headless Debian install into it. I have multiple plans for this machine, with each
                plan having its own set of scope, deadlines, and learning achievements. However, the
                most recent, and most significant experiment yet was the hosting of my portfolio
                website.
              </p>

              <div
                class="w-full h-50 md:h-120 bg-bg-light border-2 p-4 flex flex-col justify-center mt-2"
              >
                <div class="carousel w-full">
                  <div id="slide1_L" class="carousel-item relative w-full">
                    <img src="@/assets/imgs/linuxhomelab_preview_1.png" class="w-full h-full" />
                    <div
                      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                    >
                      <a href="#slide4_L" class="button">❮</a>
                      <a href="#slide2_L" class="button">❯</a>
                    </div>
                  </div>
                  <div id="slide2_L" class="carousel-item relative w-full">
                    <img src="@/assets/imgs/linuxhomelab_preview_2.png" class="w-full h-full" />
                    <div
                      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                    >
                      <a href="#slide1_L" class="button">❮</a>
                      <a href="#slide3_L" class="button">❯</a>
                    </div>
                  </div>
                  <div id="slide3_L" class="carousel-item relative w-full">
                    <img src="@/assets/imgs/linuxhomelab_preview_3.jpg" class="w-full h-full" />
                    <div
                      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                    >
                      <a href="#slide2_L" class="button">❮</a>
                      <a href="#slide1_L" class="button">❯</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-2">
              <a
                class="button font-monospace p-2! text-s md:text-lg"
                href="https://github.com/karlo-alano/portfolio-site-repo"
                >Github (Portfolio)</a
              >
              <a
                class="button font-monospace p-2! text-s md:text-lg"
                href="https://www.karloalano.site"
                >Website</a
              >
            </div>
          </div>
          <div class="divider-l"></div>
          <div class="projectDetails flex-1">
            <div class="">
              <div>
                <h1 class="font-monospace font-bold opacity-80 text-text-black">Tech Stack</h1>
                <ul>
                  <li>Bash</li>
                  <li>Linux</li>
                  <li>Nginx</li>
                  <li>Cloudflare Tunnels</li>
                </ul>
              </div>
              <div class="divider-s"></div>
              <div>
                <h1 class="font-monospace font-bold opacity-80">Challenges Encountered:</h1>
                <ul class="flex flex-col gap-2">
                  <li>
                    > Headless linux is a massive challenge just because of how barebones everything
                    is. During my first install, I accidentally locked myself out of my network when
                    I had to disable the AP isolation in my router just so I can perform SSH over
                    the network. During other cases, I had to wrestle with bare configs and
                    uninstalled essential utilities (sudo wasn't even installed yet!). In order to
                    move past the network lock-out, I had to quite literally reinstall Debian again.
                  </li>
                  <li>
                    > Wrestling with an old and aging laptop is not easy. This old machine has seen
                    15 years since its release back in 2011 - Thinkpads are tough, but they have
                    their limits. Through time, components have degraded slowly but surely; the
                    ports only work in certain angles, the keyboard shorted out due to liquid
                    damage, and now, it seems like the internal hard disk is failing. It struggles
                    to last for long hours and powers down in random moments. I found this part a
                    bit disappointing, to say the least.
                  </li>
                  <li>
                    > When I learned that my router had Carrier-Grade NAT, I knew that the most
                    popular way to host a website was almost impossible. Port Forwarding can't be
                    done without a dedicated server IP address. Through a peer, I was able to learn
                    about Cloudflare Tunnels, which acts like a secure proxy that channels traffic
                    from the outside in. In order to make my portfolio website accessible to the
                    outside internet, it was necessary to bypass CGNAT
                  </li>
                </ul>
              </div>
              <div class="divider-s"></div>
              <div>
                <h1 class="font-monospace font-bold opacity-80">Lessons Learned:</h1>
                <ul class="flex flex-col gap-2">
                  <li>
                    > Continously learning about linux is important just because of how big the
                    ecosystem is. Even a single service like systemd is enough to keep me company
                    for a long time. I have found that the best way to learn concepts and services
                    is to break it again and again, learn why it broke, and try to fix it with new
                    knowledge.
                  </li>
                  <li>
                    > Hardware troubleshooting comes in really handy. I have to first troubleshoot
                    which components are failing and how much it affects uptime. I suspect the
                    random shutdowns to be caused by either a failing hard disk drive or failing
                    power delivery circuits. The latter would be a much more expensive fix (if even
                    feasible to fix at all) while a failing hard drive would just need a new SSD.
                    Regardless, for a 15 year old laptop, it is holding up surprisingly well!
                  </li>
                  <li>
                    > So Cloudflare Tunnels is actually pretty nice of a service. It is free and you
                    can easily bypass the oppressive CGNAT PLDT uses on their routers. CGNAT puts a
                    blanket IP over an area your router is in, this is supposed to help conserve
                    dwindling IPv4 addresses, and while normal consumers don't really get affected
                    by this, hosting a website through port forwarding is made technically
                    impossible. CGNAT accepts outgoing traffic but blocks ingoing traffic. Through
                    Cloudflare Tunnels, traffic can be routed inwards; traffic is recieved at
                    Cloudflare's servers and then the traffic is beamed back towards my Linux
                    server. It's quite interesting to learn about!
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
