<style lang="scss" module>
@import '~/design';

.educationalContainer {
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
.educationalContainerMobile {
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
     <img :class="$style.educationalContainer" src="../../assets/Educational.png" />
      <img :class="$style.educationalContainerMobile" src="../../assets/Educationalmobile.png" />
 </div>
</template>
<script>
export default {
    name: 'Educational'
}
</script>
