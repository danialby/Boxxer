<template>
  <div id="boxxer">
    <div id="wrapper" ref="bWrapper"></div>
    <div class="row btnRow">
      <div class="col col-xs-1 theBox">
        <button @click="addBox(1)">+1</button>
      </div>
      <div class="col col-xs-1 theBox">
        <button @click="addBox(2)">+2</button>
      </div>
      <div class="col col-xs-1 theBox">
        <button @click="addBox(3)">+3</button>
      </div>
      <div class="col col-xs-1 theBox">
        <button @click="addBox(4)">+4</button>
      </div>
      <div class="col col-xs-1 theBox">
        <button @click="addBox(5)">+5</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Boxxer",
  data() {
    return {
      icons:  {
            colorsIcon: '<i class="im im-color-fan"></i>',
            bordersIcon: '<i class="im im-maximize"></i>',
            column: '<i class="im im-edit"></i>' ,
            ci: ''
      },
    };
  },
  methods: {
    addBox(n) {
    let theBox = '<div class="col col-' + n + ' theBox">'
    theBox += '<a class="boxKitBtn" href="#">' + this.icons.colorsIcon + '</a><br>'
        theBox += '<a class="boxKitBtn" href="#">' + this.icons.bordersIcon + '</a><br>'
            theBox += '<a class="boxKitBtn" href="#">' + this.icons.column + '</a><br>'
    theBox += '</div>';
    let wrapper = this.$refs.bWrapper;
    wrapper.
    innerHTML += theBox;
}
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
@import '../assets/bootstrap.min.css';
        body {
            text-align: right;
        }
        
        .theBox {
    position: relative;
    height: 10vh;
    float: right;
    text-align: right;
    transition: all 0.5s ease;
    background-color: #add8e600;
    box-shadow: 0px 0px 2px grey inset;
        }
.boxKitBtn {
    right: -15px;
    top: 7.5px;
    position: relative;
    color: mediumpurple;
    opacity: 0;
    transition: all 0.5s ease;
}
.theBox:hover > .boxKitBtn{
  right:-5px;
  opacity: 1;
}
.theBox:hover{
  background: seashell;
}
.theBox a svg {
width:16px;
height:16px;
}
        
        .btnRow {
            position: fixed;
            bottom: 0;
            height: 10vh;
            right: 0;
            width: 100%;
        }
.im {
    font: normal normal normal 16px/1 'iconmonstr-iconic-font';
}
</style>
