<template>
  <div class="substance-wrapper">
    <div class="middle-main-container" v-if="!isShowOthers">
      <div class="middle-main-content">
        <div class="small-container text-center">
          <h2 class="page-subtitle">What did you take?</h2>
          <div class="substance_items" id="substance_options" v-if="substances.length > 0">
            <div class="substance_item" v-for="(value, key) in substances" :key="key">
              <span @click="nextPage(value)">{{value}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-footer">
        <div class="btn-secondary others-btn" @click="otherIntakeMethod">Others</div>
      </div>
    </div>
    <div class="middle-main-container" v-if="isShowOthers">
      <div class="middle-main-content">
        <div class="small-container text-center">
          <h2 class="page-subtitle">What did you take?</h2>
          <div class="input-control">
            <input class="input-field" type="text" v-model="other">
          </div>
          <button class="btn-secondary submit-btn" @click="submitOtherIntake">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseSubstance",
  data() {
    return {
      isShowOthers: false,
      other: "",
      substances: [
        'weed',
        'lsd',
        'molly',
        'K',
        'speed',
        'MD',
        'GHB',
        'Coke',
        'Ket',
        '4-mmc',
        '3-mmc',
        'mdma'
      ]
    };
  },
  // mounted(){
  //   var mainDivSize = ((Math.random()*100) + 50).toFixed();
  //   let mainDev = document.getElementById('substance_options')
  //   var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
  //   mainDev.style.color = color
  //   mainDev.style.width = mainDivSize+'px'
  //   mainDev.style.height = mainDivSize+'px'
    
  //   console.log('divsize', mainDivSize)
  //   if(this.substances.length > 0){
  //     this.substances.forEach((value)=>{

  //       var newDiv = document.createElement("div");

  //       // and give it some content
  //       newDiv.innerHTML = '<div >'
  //       // const newContent = document.createTextNode(value);

  //       // add the text node to the newly created div
  //       newDiv.appendChild(newContent);

  //       // make position sensitive to size and document's width
  //       var posx = (Math.random() * mainDivSize).toFixed();
  //       var posy = (Math.random() * mainDivSize).toFixed();

  //       console.log('posx', posx)
  //       console.log('posy', posy)

  //       newDiv.style.position = 'absolute'
  //       newDiv.style.left = posx+'px',
  //       newDiv.style.top = posy+'px',

  //       mainDev.appendChild(newDiv)
  //     })
  //   }
  // },
  methods: {
    async nextPage(substance) {
      await localStorage.setItem('druggie_substance', substance)
      await this.$router.push(`/choose-amount`)
    },
    otherIntakeMethod(){
      this.isShowOthers = true
    },
    submitOtherIntake(){
      this.isShowOthers = false
      this.nextPage(this.other)
    }
  },
};
</script>
<style scoped>
.substance_items{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.substance_item{
  padding: 0 10px 10px;
  font-weight: 600;
  /* width: 50%; */
}
.substance_item:nth-child(1){
  font-size: 125%;
}

.substance_item:nth-child(3){
  font-size: 150%;
}
.substance_item:nth-child(4){
  font-size: 170%;
}
.substance_item:nth-child(5){
  font-size: 90%;
}
.substance_item:nth-child(6){
  font-size: 180%;
}
.substance_item:nth-child(7){
  font-size: 200%;
}
.substance_item:nth-child(8){
  font-size: 140%;
}
.substance_item:nth-child(10){
  font-size: 170%;
}
.substance_item:nth-child(12){
  font-size: 240%;
}
.substance_item:nth-child(13){
  font-size: 140%;
}
.substance_item:nth-child(15){
  font-size: 170%;
}
.substance_item:nth-child(17){
  font-size: 240%;
}

.substance_item:nth-child(18){
  font-size: 150%;
}
.substance_item:nth-child(19){
  font-size: 170%;
}
.substance_item:nth-child(21){
  font-size: 90%;
}
.substance_item:nth-child(22){
  font-size: 180%;
}
.substance_item:nth-child(23){
  font-size: 200%;
}
.substance_item:nth-child(24){
  font-size: 140%;
}
/* .substance_item span{
  background: #FDF3CA;
  border-radius: 10px;
  padding: 6px 15px;
  cursor: pointer;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
} */
</style>