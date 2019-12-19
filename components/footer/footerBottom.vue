<style lang="scss" module>
@import "~/design";

.footerBottomContainer {
  /* code for mobiles */
  border-top: 1px solid #e6e6e6;
  @include padding($top: 38px, $bottom: 38px, $left: 62px, $right: 62px);
  background: #f5f5f5;
  color: color("black");
  font-family: var-font-family("primary");
  @include use-text-style("type-200");
  @include flex($direction: column);

  /* code for tablet */
  @include above("page-tablet") {
  }

  /* code for desktop*/
  @include above("page-desktop") {
    @include flex(
      $direction: row,
      $flex-wrap: wrap,
      $justify-content: space-between
    );
  }
}
.footerText {
  /* code for mobiles */
  display: block;
  margin-bottom: 10px;

  /* code for tablet */
  @include above("page-tablet") {
    display: inline;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    display: inline;
  }
}
.footerLogo {
  margin-left: 0px;
  margin-bottom: 10px;
  @include use-text-style("type-300");
  @include above("page-tablet") {
    margin-left: 0px;
  }
  @include above("page-desktop") {
    margin-left: 35px;
  }
}
</style>
<template>
  <div :class="$style.footerBottomContainer">
    <div :class="$style.footerLogo">
      <p>{{content.header.logo}}</p>
    </div>
    <div>
      <p :class="$style.footerText">{{content.footer.firstText}}</p>
      <p :class="$style.footerText">{{content.footer.secondText}}</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Footerbottom",
  computed: {
    ...mapState(["content"])
  }
};
</script>