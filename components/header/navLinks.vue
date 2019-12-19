<style lang="scss" module>
@import "~/design";

.navLinks {
  /* code for mobiles */
  text-decoration: none;
  margin: 0;
  padding: 0;
  text-align: center;
  @include use-text-style("type-200");
  font-family: var-font-family("primary");

  /* code for tablet */
  @include above("page-tablet") {
    @include use-text-style("type-200");
    text-align: center;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    @include use-text-style("type-300");
    @include margin($left: 50px);
    text-align: left;
  }
}
.navLinks li {
  display: inline;
  @include margin($top: 0px, $left: 5px, $right: 5px, $bottom: 0px);
  /* code for tablet */
  @include above("page-tablet") {
    @include margin($top: 0px, $left: 10px, $right: 10px, $bottom: 0px);
  }

  /* code for desktop*/
  @include above("page-desktop") {
    @include margin($top: 0px, $left: 15px, $right: 10px, $bottom: 0px);
  }
}
</style>
<template>
  <ul :class="$style.navLinks">
    <li v-for="li in content.header.navLinks" :key="li.text">{{li.text}}</li>
  </ul>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Navlinks",
  computed: {
    ...mapState(["content"])
  }
};
</script>