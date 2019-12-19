<style>
.blackHeaderContainer{
    background: rgb(0,0,0,50);
    width: 100%;
    height:34px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #979797;
    font-style: System85Pro-Regular;
}
#searchbar{
    position: relative;
    margin-right: 12%;
}
#searchImg:before{
  content:url('../assets/search.png');
}
#accountImg{
    position: absolute;
    top: -3px;
    right: -100%;
}
#bagImg{
    position: absolute;
    left: 240%;
    top: 1px;
}
#links, #logotext, #searchbar{
    display: block;
}
#smallWhiteHeader{
    display: none;
    width: 100%;
}
.smallContainerFlex{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
}

.whiteHeaderContainer{
    height:70px;
    width:100%;
    background: #ffffff;
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navLinks{
    text-decoration: none;
}
.navLinks > li {
    display: inline;
    cursor: pointer;
    margin: 0 15px;
    font-size: 14px;
}
#headerTextOne{
    margin-left: 72px;
    font-size: 14px;
    }
#headerDivTwo{
    font-size: 14px;
    margin-right: 75px;
    display: block;
}
#needHelp{
    margin-left:30px;
}
.applyCursor{
    cursor: pointer;
}
.brownBorder{
    width: 100%;
    height:1px;
    background: #ccc;
}
#smallLogo{
    text-align: center;
    margin-top: -10px;
    margin-bottom: 10px;
}
#smallLinks{
    text-align: center;
    margin-top: 5px;
}
#smallMenuImg{
position: absolute;
    top: -11px;
    left: 2%;
}
#smallSearchImg{
     position: absolute;
    top: -6px;
    left: 12%;
}
#smallAccountImg{
        position: absolute;
    top: -11px;
    right: 12%;
}

#smallBagImg{
        position: absolute;
    top: -7px;
    right: 2%;

}

/* styles for tablets */
@media screen and (min-width: 361px) and (max-width: 769px){
.whiteHeaderContainer{
    height: 75px;
}
.blackHeaderContainer{
    height: 25px;
    justify-content: center;
    flex-direction: column;
}
#headerTextOne{
    margin:0;
}
#headerDivTwo{
    display: none;
}
#links, #logotext, #searchbar{
    display: none;
}
#smallWhiteHeader{
    display: block;
}
.navLinks > li {
    margin: 0 10px;
}
}

/* styles for mobile devices */
@media screen and (max-width: 360px){
  .whiteHeaderContainer{
    height: 75px;
}
#headerTextOne{
    margin:0;
}
.blackHeaderContainer{
    height: 25px;
    justify-content: center;
    flex-direction: column;
}
#links, #logotext, #searchbar{
    display: none;
}
#smallWhiteHeader{
    display: block;
}
.navLinks > li {
    margin: 0 5px;
}
}


</style>
<template>
<div>
<div class="blackHeaderContainer">
  <div id="headerDivOne"><p id="headerTextOne">Free shipping & Returns in the US.   |   Ships Globally.</p></div>
  <div id="headerDivTwo"><label class="applyCursor">About Us</label>
    <label id="needHelp" class="applyCursor">Need Help?</label></div>
</div>
<div class="whiteHeaderContainer">
    <div id="links">
        <ul class="navLinks">
            <li>Wallets</li>
            <li>Bags</li>
            <li>Accessories</li>
            <li>Best sellers</li>
        </ul>
    </div>
    <div id="logotext"><p>ANSON CALDER</p></div>
    <div id="searchbar">
        <label id="searchImg">Search</label>
        <label id="accountImg"><img src="../assets/Accountm.png" /></label>
        <label id="bagImg"><img src="../assets/Bag.png" /></label>
        </div>
        
        <div id="smallWhiteHeader">
            <div class="smallContainerFlex"> 
                <img id="smallMenuImg" src="../assets/Menu.png" /> 
                <img id="smallSearchImg" src="../assets/search.png" />
                <img id="smallAccountImg" src="../assets/Accountm.png" /> 
                <img id="smallBagImg" src="../assets/Bag.png" />
                <div id="smallLogo"><p>ANSON CALDER</p></div>
                
            </div>
            
            <div class="brownBorder"></div>
            <div id="smallLinks">
            <ul class="navLinks">
            <li>Wallets</li>
            <li>Bags</li>
            <li>Accessories</li>
            <li>Best sellers</li>
        </ul>
       </div>
        </div>
</div>
</div>
</template>