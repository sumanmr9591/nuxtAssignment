<style lang="scss" module>
@import '~/design';

.footerContainer {
    /* code for mobiles */
    background: #f5f5f5;
    color: color('black');
    font-family: var-font-family('primary');
    @include use-text-style('type-200');
    @include padding($top:38px,$left:62px,$bottom:38px,$right:62px);
    @include flex($direction: column-reverse);

    /* code for tablet */
    @include above('page-tablet') {
      @include flex($direction: column-reverse);

    }

    /* code for desktop*/
    @include above('page-desktop') {
       @include flex($direction: row);

    }
}
.growFlex{
    flex-grow:1;
}
</style>
<template>
<div>
<div :class="$style.footerContainer">
    <div :class="$style.growFlex"><Footerlinks /></div>
    <div><Footersearch/></div>
</div>
<Footerbottom />
</div>
</template>
<script>
import Footerlinks from '~/components/footer/footerLinks';
import Footersearch from '~/components/footer/footerSearch';
import Footerbottom from '~/components/footer/footerBottom';

export default {
    name: 'Footer',
    components:{
        Footerlinks,
        Footersearch,
        Footerbottom
    }
}
</script>