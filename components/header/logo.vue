<template>
  <div>
    <p :class="$style.logo">{{content.header.logo}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["content"])
  }
};
</script>

<style lang="scss" module>
@import "~/design";

.logo {
  color: color("black");
  font-family: var-font-family("primary");
  @include use-text-style("type-200");
  margin-left: -60%;

  @include above("page-tablet") {
    @include use-text-style("type-300");
    margin-left: -60%;
  }

  @include above("page-desktop") {
    @include use-text-style("type-400");
    margin-left: -100px;
  }
}
</style>