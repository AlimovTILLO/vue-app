<template>
  <section class="hero">
    <div class="hero-body">
      <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/">Элитная загородная недвижимость</a></li>
          <li class="is-active"><a href="#" aria-current="page">Продажа</a></li>
        </ul>
        <h2 class="title">Элитная недвижимость в Подмосковье</h2>
      </nav>
      <br>
      <div class="columns features">
          <cards v-for="country in countries.slice(0, 3)" :key="country.id" :country="country"></cards>
      </div>
      <div class="columns features">
          <cards v-for="country in countries.slice(3, 6)" :key="country.id" :country="country"></cards>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import Cards from './Cards'

export default {
  name: 'Selling',
  components: {Cards},
  computed: mapGetters(['countries']),
  beforeMount () {
    this.$store.dispatch('getCountries')
  }
}
</script>

<style scoped>

</style>
