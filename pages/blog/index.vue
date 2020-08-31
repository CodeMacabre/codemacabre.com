<template>
  <main>
    <section>
      <h2>{{ title }}</h2>
      <p>
        <span class="aside">(Coming soon&hellip;)</span>
      </p>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      title: 'Blog'
    }
  },
  head () {
    return {
      title: `${this.title} : CodeMacabre`
    }
  }
}
</script>
