<template>
  <article>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`" >{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <p>Article last updated: {{ formatDate(article.updatedAt) }} </p>
    <img :src="article.img" :alt="article.alt" />
    <nuxt-content :document="article" />
    <author :author="article.author"></author>

    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleString('ja', options)
    }
  }
}
</script>

<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }

  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }

  .nuxt-content p {
    margin-bottom: 20px;
  }

  .icon.icon-link {
    background-image: url('~assets/svg/icon-hashtag.svg');
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: 20px 20px;
  }

</style>
