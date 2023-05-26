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
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.substance_item{
  padding: 0 5px 10px;
}
.substance_item span{
  background: #FDF3CA;
  border-radius: 10px;
  padding: 6px 15px;
  display: block;
  cursor: pointer;
  min-width: 100px;
}
</style>