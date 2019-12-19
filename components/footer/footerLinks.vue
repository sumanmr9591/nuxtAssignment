<style lang="scss" module>
@import "~/design";
.headerLink {
  @include use-text-style("type-300");
  margin-top: 0px;
}

.linksContainer {
  /* code for mobiles */
  @include flex(
    $direction: row,
    $flex-wrap: wrap,
    $justify-content: space-between
  );
}
.footerLink {
  text-decoration: none;
  list-style: none;
  margin-bottom: 20px;
  margin-left: -35px;
  @include above("page-tablet") {
    margin-left: -35px;
  }

  /* code for desktop*/
  @include above("page-desktop") {
    margin-left: 0px;
  }
}
.footerLink li {
  margin-top: 5px;
  cursor: pointer;
}
</style>
<template>
  <div :class="$style.linksContainer">
    <div>
      <ul :class="$style.footerLink">
        <li :class="$style.headerLink">{{content.footer.aboutUs.name}}</li>
        <li v-for="li in content.footer.aboutUs.li" :key="li.text">{{li.text}}</li>
      </ul>
    </div>
    <div>
      <ul :class="$style.footerLink">
        <li :class="$style.headerLink">{{content.footer.customerService.name}}</li>
        <li v-for="lis in content.footer.customerService.li" :key="lis.text">{{lis.text}}</li>
      </ul>
    </div>
    <div>
      <ul :class="$style.footerLink">
        <li :class="$style.headerLink">{{content.footer.social.name}}</li>
        <li v-for="lil in content.footer.social.li" :key="lil.text">{{lil.text}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Footerlinks",
  computed: {
    ...mapState(["content"])
  }
};
</script>