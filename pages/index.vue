<template>
  <main>
    <h1 class="title">
      CodeMacabre
    </h1>
    <p class="tagline">
      Web development and design with a touch of the macabre.
    </p>

    <section class="projects">
      <h2 id="projects">
        Projects
      </h2>
      <ul>
        <li>
          <FontAwesomeIcon :icon="['fas', 'folder-open']" />
          <a href="https://mortalitymap.com">Mortality Map</a>
        </li>
        <li>
          <FontAwesomeIcon :icon="['fas', 'folder-open']" />
          <a href="http://openplanetary.org/opm">OpenPlanetaryMap</a>
        </li>
        <li class="wip">
          <FontAwesomeIcon :icon="['fas', 'folder-open']" />
          PlanetaryXR
          <span class="aside">(more details soon)</span>
        </li>
        <li class="wip">
          <FontAwesomeIcon :icon="['fas', 'folder-open']" />
          Wastes of Nought
          <span class="aside">(more details soon)</span>
        </li>
        <li>
          <FontAwesomeIcon :icon="['fas', 'folder']" />
          <a href="https://worldview.earthdata.nasa.gov">Worldview</a>
          <span class="aside">(contributor)</span>
        </li>
        <li>
          <FontAwesomeIcon :icon="['fas', 'folder']" />
          <a href="https://disasterwatch.remotepixel.ca/">Disasterwatch</a>
          <span class="aside">(contributor)</span>
        </li>
      </ul>
    </section>

    <section class="blog">
      <h2 id="blog">
        Blog
      </h2>
      <ul>
        <li class="wip">
          <FontAwesomeIcon :icon="['fas', 'pen-nib']" />
          Coding with Sisyphus
          <span class="aside">(coming soon)</span>
        </li>
        <li class="wip">
          <FontAwesomeIcon :icon="['fas', 'pen-nib']" />
          The Code Macabre
          <span class="aside">(coming soon)</span>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="about">
        About
      </h2>
      <p>
        I am Myles Lewando
        <span class="aside">(pronounced 'le-van-doe')</span>, a web developer
        and designer with a touch of the macabre. I specialise in cartography,
        web-GIS and data visualisation, and work towards an inclusive,
        accessible web.
      </p>
      <p>
        Read more
        <nuxt-link to="/inf">
          about me
        </nuxt-link> and what CodeMacabre is.
      </p>
    </section>
  </main>
</template>
