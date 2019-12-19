<style lang="scss" module>
@import '~/design';
.search:before{
content: url('../../assets/search.png');
}
.imgClass{
display: inline;

}
.search{
    @include margin($right: 100px);
}
.searchItemContainer{
    @include relative();
    @include above('page-tablet') {
        margin:0;

    }

    /* code for desktop*/
    @include above('page-desktop') {
       @include margin($right: 75px);

    }
}
.bag{
    display: none;
    @include above('page-tablet') {
        display: none;

    }

    /* code for desktop*/
    @include above('page-desktop') {
      display: inline;

    }
}
</style>
<template>
  <div :class="$style.searchItemContainer">
      <p :class="[$style.search,$style.imgClass]">
          Search
      </p>
      <img :class="[$style.imgClass, $style.bag]" src="../../assets/Bag.png" />
  </div>
</template>
<script>
export default {
    name: 'Searchbar'
}
</script>