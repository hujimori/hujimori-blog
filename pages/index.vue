<template>
  <div>
    <h1>hujimori-blog</h1>
    <div v-for="(item,key) in items.contents" :key="key">
      <nuxt-link :to="{name: 'article-id', params: {id: item.id } }">
        <h2>{{ item.title }}</h2>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const items = await $axios.$get('https://hujimori.microcms.io/api/v1/articles',
      {
        headers: {
          'X-API-KEY': 'f6c9c27f-a98f-4c55-91fb-1a29627c2c9c'
        }
      }
    )
    return { items }
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
  h2 {
    display: block;
    font-size: 1.6em;
    text-align: center;
    font-weight: bold;
    border: solid #ddd;
    border-width: 0 0 1px 0;
  }
</style>
