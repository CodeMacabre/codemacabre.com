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
    <p>&copy; {{ year }} CodeMacabre</p>
  </footer>
</template>

<script>
import ObfuscatedEmail from '~/components/ObfuscatedEmail'

export default {
  components: {
    ObfuscatedEmail
  },
  data () {
    return {
      year: '2020'
    }
  },
  mounted () {
    this.year = this.convertDate(new Date().getFullYear())
  },
  methods: {
    convertDate (num) {
      const numerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      }

      return Object.keys(numerals).reduce(
        (acc, ch) => {
          acc.str += ch.repeat(acc.num / numerals[ch])
          acc.num %= numerals[ch]
          return acc
        },
        { str: '', num }
      ).str
    }
  }
}
</script>
