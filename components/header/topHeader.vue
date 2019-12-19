
<template>
  <div :class="$style.headerTop">
    <div :class="$style.firstText">
      <p>{{content.header.firstText}}</p>
    </div>
    <div :class="$style.secondText">
      <ul :class="$style.links">
        <li v-for="ul in content.header.secondText" :key="ul.text">{{ul.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Topheader",
  computed: {
    ...mapState(["content"])
  }
};
</script>
<style lang="scss" module>
@import "~/design";

.headerTop {
  /* code for mobiles */
  color: color("white");
  background: color("black");
  @include flex(
    $align-items: center,
    $direction: row,
    $justify-content: center
  );
  @include use-text-style("type-200");
  font-family: var-font-family("primary");
  @include padding($top: 5px, $bottom: 5px);

  /* code for tablet */
  @include above("page-tablet") {
    @include use-text-style("type-200");
    @include flex($justify-content: center);
  }

  /* code for desktop*/
  @include above("page-desktop") {
    @include flex($justify-content: space-between);
    @include use-text-style("type-300");
    @include padding($top: 10px, $bottom: 10px);
  }
}

.links {
  text-decoration: none;
}

.links li {
  display: inline;
  @include margin($left: 30px);
  cursor: pointer;
}

.secondText {
  /* code for mobiles */
  display: none;

  /* code for tablet */
  @include above("page-tablet") {
    display: none;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    display: block;
    @include margin($right: 72px);
  }
}
.firstText {
  /* code for mobiles */
  margin: 0;

  /* code for tablet */
  @include above("page-tablet") {
    margin: 0;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    @include margin($left: 72px);
  }
}
</style>