<style lang="scss" module>
@import "~/design";

.systemContainer {
  /* code for mobiles */
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  display: none;

  /* code for tablet */
  @include above("page-tablet") {
    display: block;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    margin: 0px auto;
    display: block;
  }
}
.systemMobileContainer {
  /* code for mobiles */
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  display: block;

  /* code for tablet */
  @include above("page-tablet") {
    display: none;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    margin: 0px auto;
    display: none;
  }
}
</style>
<template>
  <div>
    <img :class="$style.systemContainer" src="../../assets/System.png" />
    <img :class="$style.systemMobileContainer" src="../../assets/systemMobile.png" />
  </div>
</template>
<script>
export default {
  name: "System"
};
</script>