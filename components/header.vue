<template>
  <div class="title">
    <div>
      <b-navbar-toggle toggleable="lg" type="dark" variant="info">
        <b-navar-brand>テストブログ</b-navar-brand>
        <b-navar-toggle target="nav-collapse" right></b-navar-toggle>
        <b-collapse id="nav-collapse" is-nav right>
          <b-navbar-nav>
            <b-nav-bar-item href="/">ホーム</b-nav-bar-item>
          </b-navbar-nav>
          <b-nav-bar>
            <b-nav-item href="/myself">自己紹介</b-nav-item>
          </b-nav-bar>
        </b-collapse>
      </b-navbar-toggle>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
