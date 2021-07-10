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
  async asyncData ({ params, $axios }) {
    const article = await $axios.$get(`https://hujimori.microcms.io/api/v1/articles/${params.id}`,
      {
        headers: {
          'X-API-KEY': 'f6c9c27f-a98f-4c55-91fb-1a29627c2c9c'
        }
      }
    )
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
