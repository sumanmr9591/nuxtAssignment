<style lang="scss" module>
@import "~/design";

.whiteContainer {
  /* code for mobiles */

  display: none;

  /* code for tablet */
  @include above("page-tablet") {
    display: none;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    display: block;
    background: color("white");
    color: color("black");
    @include flex($direction: column);
  }
}

.secondContainer {
  /* code for mobiles */
  display: block;
  @include flex($direction: column);

  /* code for tablet */
  @include above("page-tablet") {
    display: block;
    @include flex($direction: column);
  }

  /* code for desktop*/
  @include above("page-desktop") {
    display: none;
  }
}

.firstBar {
  /* code for mobiles */
  @include flex(
    $align-items: center,
    $direction: row,
    $justify-content: space-between
  );
  @include padding($top: 13px, $bottom: 13px);

  /* code for tablet */
  @include above("page-tablet") {
  }

  /* code for desktop*/
  @include above("page-desktop") {
    @include padding($top: 24px, $bottom: 24px);
  }
}

.secondContainerFirstBox {
  margin-left: 40px;
  @include padding($top: 10px, $bottom: 10px);
  @include flex(
    $align-items: center,
    $direction: row,
    $justify-content: space-between
  );
}

.secondContainerSecondBox {
  @include padding($top: 10px, $bottom: 10px);
  border-top: 1px solid #e6e6e6;
}
</style>
<template>
  <div>
    <div :class="$style.whiteContainer">
      <div :class="$style.firstBar">
        <Navlinks />
        <Logo />
        <Searchbar />
      </div>
    </div>
    <div :class="$style.secondContainer">
      <div :class="$style.secondContainerFirstBox">
        <Searchbar />
        <Logo />
        <Account />
      </div>
      <div :class="$style.secondContainerSecondBox">
        <Navlinks />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/header/logo.vue";
import Navlinks from "~/components/header/navLinks.vue";
import Searchbar from "~/components/header/searchBar.vue";
import Account from "~/components/header/account.vue";

export default {
  name: "Whiteheader",
  components: {
    Logo,
    Navlinks,
    Searchbar,
    Account
  }
};
</script>
