<template>
  <div>
    <h1>{{ article.title }}</h1>
    <div class="line-numbers" v-html="$md.render(article.content)"/>
    <nuxt-link :to="'/'">
      <h2>戻る</h2>
    </nuxt-link>
  </div>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData ({ $microcms, params }) {
    const article = await $microcms.get({
      endpoint: 'articles',
      contentId: params.id

    })
    return { article }
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style>
h1 {
  display: block;
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  border-top: solid 3px #364e96;
  border-bottom: solid 3px #364e96;
}
</style>
