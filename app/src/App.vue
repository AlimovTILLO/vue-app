<template>
  <div id="app">
    <nav class="navbar ">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img class="logo" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Logo">
        </router-link>
        <div class="navbar-burger burger" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenubd-example" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/selling" class="navbar-item is-active">Продажа</router-link>
          <router-link to="/rent" class="navbar-item">Аренда</router-link>
          <router-link to="/township" class="navbar-item">Поселки</router-link>
          <router-link to="/about" class="navbar-item">О компании</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <a class="button button--green" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
              Обратный звонок
            </a>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import './assets/js/index'
export default {
  name: 'App'
}
</script>
<style lang="css">
  @import '../node_modules/bulma/css/bulma.css';
  @import './assets/css/style.css';
</style>
