<template>
  <a :href="`mailto:${mail}`">Email</a>
</template>

<script>
export default {
  data () {
    return {
      mail: ''
    }
  },
  mounted () {
    this.obfuscateEmail()
  },
  methods: {
    obfuscateEmail () {
      const e = 'contact'
      const at = '@'
      const d = 'codemacabre'
      const dot = '.'
      const c = 'com'
      this.mail = e + at + d + dot + c
    }
  }
}
</script>
