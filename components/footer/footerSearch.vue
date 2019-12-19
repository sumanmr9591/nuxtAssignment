<style lang="scss" module>
@import "~/design";

.searchBoxContainer {
  /* code for mobiles */
  @include flex($direction: column);
  margin-bottom: 35px;

  /* code for tablet */
  @include above("page-tablet") {
  }

  /* code for desktop*/
  @include above("page-desktop") {
    margin-left: 150px;
  }
}
.submit {
  /* code for mobiles */
  margin-top: 20px;
  height: 35px;
  width: 60%;
  /* code for tablet */
  @include above("page-tablet") {
    width: 80%;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    width: 250px;
  }
}
.newsLetter {
  @include use-text-style("type-300");
  margin-top: 0px;
}
.arrowImg {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
<template>
  <div :class="$style.searchBoxContainer">
    <div :class="$style.newsLetter">
      <p>{{content.footer.newsLetter}}</p>
    </div>
    <div>
      <input type="text" :class="$style.submit" placeholder="Your email" />
      <img :class="$style.arrowImg" src="../../assets/arrow.png" />
      <label>SUBMIT</label>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Footersearch",
  computed: {
    ...mapState(["content"])
  }
};
</script>