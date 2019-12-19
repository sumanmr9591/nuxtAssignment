<style lang="scss" module>
@import '~/design';
.imgClass{
    display: inline;
}
.accountContainer{
    margin-right: 40px;
}
</style>
<template>
<div :class="$style.accountContainer">
    <img :class="[$style.imgClass]" src="../../assets/Bag.png" />
</div>
</template>
<script>
export default{
    name: 'Account'
}
</script>