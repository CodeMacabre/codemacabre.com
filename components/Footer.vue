<template>
  <footer>
    <ul class="links">
      <li>
        <i class="fas fa-envelope-open-text" />
        <span id="mail">
          <ObfuscatedEmail />
        </span>
      </li>
      <li>
        <i class="fab fa-github" />
        <a href="https://github.com/codemacabre">GitHub</a>
      </li>
      <li>
        <i class="fab fa-linkedin" />
        <a href="https://www.linkedin.com/in/mtlewando">LinkedIn</a>
      </li>
      <li>
        <i class="fab fa-twitter" />
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
