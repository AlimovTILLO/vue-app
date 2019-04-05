<template>
  <a class="column is-4" href="#" >
      <div class="card is-shady">
        <div class="card-image">
          <figure class="image is-2by1">
            <img src="http://jqestate.ru/upload/iblock/590/59022f58f07cb07b75cea7048f8d73c4.jpg" alt="Placeholder image">
          </figure>
        </div>
        <div class="content">
          <br>Дом в поселке «{{country.location.routeName}}» ID {{country.id}}, {{country.location.mkadDistance}} км
          <h4>{{country.id}}</h4>
        </div>
        <div class="media">
          <div class="media-left">
            <i class="fa fa-lg fa-map-o"></i>
          </div>
          <div class="media-content">
            <p class="subtitle is-6">{{country.landDetails.area}} сот.</p>
          </div>
          <div class="media-left">
            <i class="fa fa-lg fa-home"></i>
          </div>
          <div class="media-content">
            <p class="subtitle is-6">{{country.specification.area}} м<sup>2</sup></p>
          </div>
        </div>
      </div>
  </a>
</template>

<script>
export default {
  name: 'Cards',
  props: ['country']
}
console.log('user data from parent component:')
console.log(this.countries)
</script>

<style scoped>

</style>
