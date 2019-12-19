<style lang="scss" module>
@import '~/design';

.heroContainer {
    /* code for mobiles */
    width:100%;
    height: auto;
    background-repeat: no-repeat;
    display: none;
    
    /* code for tablet */
    @include above('page-tablet') {
      display: block;
    }

    /* code for desktop*/
    @include above('page-desktop') {
       margin:0px auto;
       display: block;
    }
}
.heroContainerMobile {
    /* code for mobiles */
    width:100%;
    height: auto;
    background-repeat: no-repeat;
    display: block;
    
    /* code for tablet */
    @include above('page-tablet') {
      display: none;
    }

    /* code for desktop*/
    @include above('page-desktop') {
       margin:0px auto;
       display: none;
    }
}

</style>
<template>
 <div >
     <img :class="$style.heroContainer" src="../../assets/Hero.png" />
      <img :class="$style.heroContainerMobile" src="../../assets/Hero-Mobile.png" />
 </div>
</template>
<script>
export default {
    name: 'Herocontent'
}
</script>
