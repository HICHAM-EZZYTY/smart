<template>
    <div role="group" class="">
        <section>
            <legend class="_19umvjy">
                <h2 class="_14i3z6h">{{heading}}</h2>
            </legend>
            <!--  -->
        </section>
    </div>
</template>


<script>
export default {
     data() {
      return {

      }
     },
    props:["heading"],

}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";


._9fvlwj0 {
    // padding-top: 28px !important;
    // padding-bottom: 28px !important;
    // border-bottom: 1px solid rgb(235, 235, 235) !important;
}
._19umvjy {
    color: rgb(34, 34, 34) !important;
    font-weight: 600 !important;
    margin-bottom: 24px !important;
    font-size: 22px !important;
    line-height: 26px !important;
}
._14i3z6h {
    opacity: 0.8;
    font-family: $gb;
    color: inherit !important;
    font-size: 1.2em !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    margin: 0px !important;
    padding-top:28px !important
    // padding: 0px 0px 20px !important;
}

// 
._12p9ain {
    -webkit-box-direction: normal !important;
    -webkit-box-orient: horizontal !important;
    display: flex !important;
    flex-flow: row wrap !important;
    width: 100% !important;
}
._1ibnveuc {
    -webkit-box-pack: center !important;
    -webkit-box-direction: normal !important;
    -webkit-box-orient: vertical !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    flex-basis: 100% !important;
}
@media (min-width: 744px){
._1ibnveuc {
    flex-basis: 50% !important;
}
}
._14ulhf4 {
    -webkit-box-align: center !important;
    color: rgb(34, 34, 34) !important;
    padding-top: 12px !important;
    padding-bottom: 12px !important;
    padding-left: 4px !important;
    display: flex !important;
    align-items: center !important;
}

@media (min-width: 744px){
._14ulhf4 {
    min-width: 320px !important;
}
}

._pwqvlx {
    position: relative !important;
    display: inline-block !important;
    cursor: pointer !important;
    padding: 0px !important;
}

._6fc52n {
    padding-left: 12px !important;
    padding-right: 8px !important;
}
._py3ty1 {
    font-weight: 400 !important;
    font-size: 16px !important;
}

// 
label{
    position: relative;
    top: 12px;
}

.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: 3px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 25px;
  width: 25px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
}
.option-input:hover {
  background: #9faab7;
}
.option-input:checked {
  background: #2C8EEA;
}
.option-input:checked::before {
  height: 25px;
  width: 25px;
  position: absolute;
  content: '✔';
  display: inline-block;
  font-size: 26.66667px;
  text-align: center;
  line-height: 25px;
}
.option-input:checked::after {
  -webkit-animation: click-wave 0.65s;
  -moz-animation: click-wave 0.65s;
  animation: click-wave 0.65s;
  background: #2C8EEA;
  content: '';
  display: block;
  position: relative;
  z-index: 100;
}   

@media (min-width: 320px) { 
._14i3z6h {
  font-size: 15px !important;;
}
}

@media (min-width: 400px) { 
._14i3z6h {
  font-size: 18px !important;;
}
}


@media (min-width: 600px) { 
._14i3z6h {
  font-size: 20px !important;;
}
}






</style>
