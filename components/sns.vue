<template>
  <div>
    <ul class="sns">
      <li>
        <a href="twitterURL" target="_blank" rel="nofollow">
          <img
            :src="twitter.svg"
            :alt="twitter.alt"
            :width="size"
            :height="size"
          />
        </a>
      </li>
      <li>
        <a href="facebookURL" target="_blank" rel="nofollow">
          <img
            :src="facebook.svg"
            :alt="facebook.alt"
            :width="size"
            :height="size"
          />
        </a>
      </li>
      <li>
        <a href="lineURL" target="_blank" rel="nofollow">
          <img
            :src="line.svg"
            :alt="line.alt"
            :width="size"
            :height="size"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    }
  },

  computed: {
    size () {
      return 36
    },
    url () {
      return `https://nuxtblog.work${this.$route.path}`
    },
    fixedTitle () {
      return encodeURIComponent(this.title)
    },
    fixedContent () {
      return encodeURIComponent(`${this.title} ${this.url}`)
    },
    twitterURL () {
      return `https://twitter.com/intent/tweet?url=${this.url}&text=${this.fixedTitle}`
    },
    facebookURL () {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.url}&t=${this.fixedTitle}`
    },
    lineURL () {
      return `http://line.me/R/msg/text/?${this.fixedContent}`
    }
  }
}
</script>
<style scoped>
ul.sns {
  display: flex;
  flex-wrap: wrap;
}

ul.sns li {
  list-style-type: none;
  padding: 1.5em 1.0em 0 0;
}
</style>