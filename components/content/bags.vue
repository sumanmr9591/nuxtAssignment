<style lang="scss" module>
@import '~/design';

.bagContainer {
    /* code for mobiles */
    width:100%;
    display: flex;
    flex-flow:row;
    flex-wrap: wrap;
    
    /* code for tablet */
    @include above('page-tablet') {
      flex-wrap:nowrap;
    }

    /* code for desktop*/
    @include above('page-desktop') {
       flex-wrap:nowrap;
    }
}
.bags {
    /* code for mobiles */
    width:100%;
   box-sizing: border-box;
    background: #E6E6E6;
    height: 340px;
    margin-left:1px;
    margin-right:1px;
    padding-bottom: 10px;
    /* code for tablet */
    @include above('page-tablet') {
      width:25%;
      height:416px;
    }

    /* code for desktop*/
    @include above('page-desktop') {
       width: 25%;
       height:416px;
    }
}
.bagImageContainer {
    /* code for mobiles */
    width:100%;
    height: auto;
    background-repeat: no-repeat;
    display: block;
    text-align: center;
    font-size: 14px;
    font-family: var-font-family('primary');
    
    /* code for tablet */
    @include above('page-tablet') {
      display: block;
      font-size: 14px;
    }

    /* code for desktop*/
    @include above('page-desktop') {
       margin:0px auto;
       display: block;
       font-size: 16px;
    }
}
.bagHeaders{
    margin: 10px;
}
.bagFooters{
    margin-left:10px;
}
</style>
<template>
    <div :class="$style.bagContainer">
        <div :class="$style.bags">
            <p :class="$style.bagHeaders">The Tote</p>
          <img :class="$style.bagImageContainer" src="../../assets/bag1.png" />
          <p :class="$style.bagFooters">Available in 12 colors</p>
        </div>
        <div :class="$style.bags">
            <p :class="$style.bagHeaders">The Backpack</p>
          <img :class="$style.bagImageContainer" src="../../assets/bag2.png" />
          <p :class="$style.bagFooters">Available in 2 colors</p>
        </div>
        <div :class="$style.bags">
            <p :class="$style.bagHeaders">The Cash wallet</p>
         <img :class="$style.bagImageContainer" src="../../assets/bag3.png" />
         <p :class="$style.bagFooters">Available in 6 colors</p>
        </div>
        <div :class="$style.bags">
            <p :class="$style.bagHeaders">The 13" Laptop Brief</p>
         <img :class="$style.bagImageContainer" src="../../assets/bag4.png" />
         <p :class="$style.bagFooters">Available in 4 colors</p>
        </div>
    </div>
</template>
<script>
export default {
    namne: 'Bags'
}
</script>