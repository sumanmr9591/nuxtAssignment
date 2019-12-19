<style lang="scss" module>
@import "~/design";

.ansorMakerContainer {
  /* code for mobiles */
  position: relative;
  width: 100%;
  height: 312px;
  display: flex;
  flex-flow: column;
  margin: auto;

  /* code for tablet */
  @include above("page-tablet") {
    height: 332px;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    height: 416px;
  }
}
.ansorText {
  margin: auto;
  text-align: center;
  font-family: var-font-family("primary");
  font-size: 24px;
  @include above("page-tablet") {
    font-size: 24px;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    font-size: 40px;
  }
}
.readMore {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 550%);
  @include above("page-tablet") {
    transform: translate(-50%, 550%);
  }

  /* code for desktop*/
  @include above("page-desktop") {
    transform: translate(-50%, 120px);
  }
}
</style>
<template>
  <div :class="$style.ansorMakerContainer">
    <p :class="$style.ansorText">
      {{content.maker.firstPart}}
      <br />
      {{content.maker.secondPart}}
      <br />
      {{content.maker.thirdPart}}
      <br />
      {{content.maker.fourthPart}}
    </p>
    <p :class="$style.readMore">
      <img :class="$style.arrowImg" src="../../assets/arrow.png" />
      <label>LEARN MORE</label>
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Ansormaker",
  computed: {
    ...mapState(["content"])
  }
};
</script>