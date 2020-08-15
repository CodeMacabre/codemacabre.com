<template>
  <footer>
    <ul class="links">
      <li>
        <FontAwesomeIcon :icon="['fas', 'envelope-open-text']" />
        <span id="mail">
          <ObfuscatedEmail />
        </span>
      </li>
      <li>
        <FontAwesomeIcon :icon="['fab', 'github']" />
        <a href="https://github.com/codemacabre">GitHub</a>
      </li>
      <li>
        <FontAwesomeIcon :icon="['fab', 'linkedin']" />
        <a href="https://www.linkedin.com/in/mtlewando">LinkedIn</a>
      </li>
      <li>
        <FontAwesomeIcon :icon="['fab', 'twitter']" />
        <a href="https://twitter.com/codemacabre">Twitter</a>
      </li>
    </ul>
    <p>
      &copy;
      <span id="date">2020</span> CodeMacabre
    </p>
  </footer>
</template>

<script>
import ObfuscatedEmail from '~/components/ObfuscatedEmail'

export default {
  components: {
    ObfuscatedEmail
  }
}
</script>
