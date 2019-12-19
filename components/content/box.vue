<style lang="scss" module>
@import "~/design";

.boxContainer {
  /* code for mobiles */
  height: 312px;
  display: flex;
  flex-flow: column;
  @include padding($top: 50px, $bottom: 20px);
  /* code for tablet */
  @include above("page-tablet") {
    height: 332px;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    height: 416px;
  }
}
.boxContent {
  /* code for mobiles */

  /* code for tablet */

  text-align: center;
  font-family: var-font-family("primary");
  font-style: italic;
  font-size: 24px;
  @include above("page-tablet") {
    font-size: 24px;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    font-size: 40px;
  }
}
.divider {
  height: 1px;
  width: 80%;
  margin: 0px auto;
  background: #979797;
  margin-top: 30px;
  margin-bottom: 20px;
  @include above("page-tablet") {
    margin-bottom: 30px;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    margin-bottom: 75px;
  }
}
.logoContainer {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  @include above("page-tablet") {
  }

  /* code for desktop*/
  @include above("page-desktop") {
  }
}
.hideLogo {
  display: none;
  @include above("page-tablet") {
    display: block;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    display: block;
  }
}
</style>
<template>
  <div :class="$style.boxContainer">
    <p :class="$style.boxContent">
      "{{content.box.firstPart}}
      <br />
      {{content.box.secondPart}}
      <br />
      {{content.box.thirdPart}}"
    </p>
    <div :class="$style.divider"></div>
    <div :class="$style.logoContainer">
      <div>
        <img src="../../assets/logo1.png" />
      </div>
      <div>
        <img src="../../assets/logo2.png" />
      </div>
      <div>
        <img src="../../assets/logo3.png" />
      </div>
      <div>
        <img :class="$style.hideLogo" src="../../assets/logo4.png" />
      </div>
      <div>
        <img :class="$style.hideLogo" src="../../assets/logo5.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Box",
  computed: {
    ...mapState(["content"])
  }
};
</script>