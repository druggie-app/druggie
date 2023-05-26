<template>
  <div class="main-page">
    <div class="mainpage-wrapper">
      <div class="header-wrapper">
        <div class="small-container">
          <div class="header-content">
            <span class="mobile header-stopwatch-link"><img class="stopwatch-img" alt="Stopwatch" src="/images/clock-circle.png" width="24"></span>
            <router-link to="/about" title="About" class="header-about-link">?</router-link>
          </div>
          <h1 class="page-title">DRUGGIE</h1>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <div class="cookie-wrapper text-center" v-if="!termAccept">You will lose all the data stored if you delete the application or refresh it/clear the cache. <span class="cookie-link" @click="acceptTerm">Accept</span></div>
  </div>
</template>

<script>
  export default {
  name: 'App',
  data(){
    return {
      termAccept: false
    }
  },
  created() {
    if(localStorage.term_accept){
      this.termAccept = true
    }
  },
  methods:{
    acceptTerm(){
      this.termAccept = true
      localStorage.setItem('term_accept', true)
    }
  }
}
</script>

<style>
*, *::before, *::after {
    box-sizing: border-box;
}
button, img{
  outline: none;
}
img, video {
    max-width: 100%;
    height: auto;
}
html,
body {
  padding: 0;
  margin: 0;
}
.text-hide {
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
#app {
  font-family: Avenir, Comic Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  color: #000;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.text-center{
  text-align: center;
}
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
body {
    margin: 0;
    font-family: Avenir, Comic Neue, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
      /* color: #2c3e50; */
    color: #000;
    background-color: #FFE576;
}
input{
  font-size: 1rem;
  line-height: 1.2;
  font-family: Comic Neue, Helvetica, Arial, sans-serif;
  color: #000;
}
a{
  color: #000;
}
h1 {
  font-weight: bold;
  color: #000;
  font-family: Comic Neue, bold;
  font-size: xxx-large;
  padding-bottom: 20px;
}
.page-title{
  font-weight: bold;
  color: #000;
  font-family: Comic Neue, bold;
  font-size:50px;
  line-height: 1.2;
  padding-bottom: 20px;
  margin: 0;
  text-align: center;
}
.content {
  flex: 1;
}
.w-full{
  width: 100%;
}
.h-full{
  height: 100%;
}
.footer {
  background-color: black;
  color: white;
  padding: 20px;
  flex-shrink: 0;
}

.footer-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-button {
  flex: 1 0 30%;
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  font-size: 16px;
  text-align: center;
}
.cookie-wrapper{
  background: #FDF3CA;
  padding: 12px 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
}
.cookie-link{
  text-decoration: underline;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  
}
.cookie-link:hover{
  text-decoration: none;
}
.btn-full{
  width: 100%;
}
.btn-primary {
  color: #000;
  font-family: Comic Neue;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
  padding: 6px 30px;
  background-color: #FDF3CA;
  border-radius: 10px;
  border: 2px solid #000;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

.btn-secondary {
  color: #000;
  font-family: Comic Neue;
   font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
  padding: 6px 30px;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid #000;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}
.container{
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.small-container{
  max-width: 500px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.header-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.header-about-link{
  text-decoration: none;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 600;
  padding: 0 5px;
}
.main-footer{
  text-align: center;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.main-footer .footer-action-link{
  margin-bottom: 10px;
  display: inline-block;
  font-weight: 400;
}
.page-subtitle{
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 15px;
}
.addmore-link{
  font-weight: 600;
  text-decoration: none;
}
.others-field-group{
  display: flex;
  flex-wrap: wrap;
}

.input-control{
  margin-bottom: 15px;
  width: 100%;
}
.input-field{
  background: #FDF3CA;
  border: 1px solid #FDF3CA;
  width: 100%;
  color: #000;
  height: 36px;
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.2;
}
.input-field:focus{
  outline: none;
}
@media (min-width: 768px) {
  .mobile{
    display: none;
  }
  .mainpage-wrapper{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
  }
  
  .header-about-link{
    margin-left: auto;
  }
  .small-container{
    max-width: 500px;
  }
}
@media screen and (max-width: 767px) {
  .desktop{
    display: none;
  }
  .header-content{
    margin:25px 0 15px;
  }
  .mainpage-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .middle-main-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 120px);
    padding-bottom: 25px;
  }
  .middle-main-content{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .page-title{
    font-size: 36px;
    line-height: 1;
    padding-bottom: 15px;
  }
  .main-footer{
    margin-top: 15px;
  }
  .btn-primary,
  .btn-secondary{
    font-size: 20px;
    padding: 4px 25px;
    border-radius: 50rem;
  }
  .page-subtitle{
    font-size: 24px;
  }
}
@media screen and (max-width: 600px) {
  .footer-button {
    flex: 1 0 100%;
  }
}
</style>
