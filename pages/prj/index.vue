<template>
  <main>
    <section>
      <h2 id="projects">
        {{ title }}
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
        <li>
          <FontAwesomeIcon :icon="['fas', 'folder-open']" />
          <a href="http://whoisatmarstoday.netlift.app">WhoIsAtMarsToday?</a>
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
  </main>
</template>

<script>
export default {
  data () {
    return {
      title: 'Projects'
    }
  },
  head () {
    return {
      title: `${this.title} : CodeMacabre`
    }
  }
}
</script>
