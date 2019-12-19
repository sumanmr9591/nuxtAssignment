<style lang="scss" module>
@import '~/design';

.contentcontainer{
    background: #ffffff;
    width:100%;

}
</style>

<template>
<div :class="$style.contentcontainer">
<Hero/>
<Ansormaker />
<System />
<Box />
<Bags />
<Educational />
</div>
</template>
<script>
import Hero from '~/components/content/hero';
import Ansormaker from '~/components/content/ansorMaker';
import System from '~/components/content/system';
import Box from '~/components/content/box';
import Bags from '~/components/content/bags';
import Educational from '~/components/content/educational';

export default{
    name: 'Maincontent',
    components:{
        Hero,
        Ansormaker,
        System,
        Box,
        Bags,
        Educational
    }
}

</script>