<template>

        <div class="consomation ">
            <div class="content " >
                    <!--A-->
                    <div class="line a">
                        <span class="peak peak-a"></span>
                    </div>

                    <div class="line b">
                        <span class="peak peak-b"></span>
                    </div>

                    <div class="line c">
                        <span class="peak peak-c"></span>
                    </div>

                    <div class="line d">
                        <span class="peak peak-d"></span>
                    </div>

                    <div class="line e">
                        <span class="peak peak-e"></span>
                    </div>

                    <div class="line f">
                        <span class="peak peak-f"></span>
                    </div>

                    <div class="line g">
                        <span class="peak peak-g"></span>
                    </div>
                     <div class="sne input-div border-b-2 relative grid my-5 py-1 focus:outline-none  "
                                    style="grid-template-columns: 18% 225%;">
                                    <div class="i">
                                       <img src="../assets/Pics/Star 1.svg" alt="Star">
                                    </div>
                                    <div class="div"> 
                                        <h5>Emission de gaz à effet de serre </h5>
                                        <input type="text" class="absolute w-full h-full py-2 px-3 outline-none inset-0 text-gray-700"
                                            style="background:none; border: none;">
                                    </div>
                                </div>
            </div>
            <div   class="salledebainoptions  grid  gap-2 grid-cols-1  md:grid-cols-5 Box block m-0 m-auto grid grid-cols-1 gap-4 mb-6 w-4/5 md:w-3/4 lg:w-3/5">

                    <div class="flex w-full col-span-2">
                            <input oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" name="field_name" class="inptt border border-2 rounded-r px-4 py-2 w-full" type="text" />
                            <span class="text-sm border border-2 rounded-l px-4 py-2  whitespace-no-wrap">Kgeq/m²/an</span>
                    </div>


                    <div class="flex w-full col-span-3 pl-2">

                            <p>Ges vierge</p>
                            <div class="togglebtn ml-2 sm:ml-4 md:ml-4">
                                <label class="toggle-control">
                                <input type="checkbox" >
                                <span class="control"></span>
                                </label>
                            </div>

                    </div>


                </div>
        </div>
  
</template>

<script>
export default {
        data(){
            return{
                alx:false,
                sio:false,
            }
        }
}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";


.content {
  width: 40%;
  height: 15rem;
}

.line {
  color: white;
  height: 25px;
  margin-top: 5px;
}

/* Each line */
.a {
  width: 20%;
  background: #DBCFE7;
}

.b {
  width: 27%;
  background: #CF96E7;
}

.c {
  width: 34%;
  transition: all .2s ease-in-out;
  background: #B96BDB;
}

.d {
  width: 42%;
  background: #B14AD7;
}

.e {
  width: 51%;
  background: #AE2BD9;
}

.f {
  width: 61%;
  background: #9A0ACC;
}

.g {
  width: 71%;
  background: #8500CD;
}

/* Letter */
.a:before {
  margin-left: 5px;
  content: "A"
}

.b:before {
  margin-left: 5px;
  content: "B"
}

.c:before {
  margin-left: 5px;
  content: "C"
}

.d:before {
  margin-left: 5px;
  content: "D"
}

.e:before {
  margin-left: 5px;
  content: "E"
}

.f:before {
  margin-left: 5px;
  content: "F"
}

.g:before {
  margin-left: 5px;
  content: "G"
}

/* Peak */
// .peak {
//   position: absolute;
//   border-top: 10px solid rgba(0, 0, 0, 0);
//   border-bottom: 10px solid rgba(0, 0, 0, 0);
// }

// .peak-a {
//   border-left: 11px solid rgb(13, 118, 51);
// }

// .peak-b {
//   border-left: 11px solid rgb(21, 143, 50);
// }

// .peak-c {
//   border-left: 11px solid rgb(114, 174, 42);
// }

// .peak-d {
//   border-left: 11px solid rgb(244, 231, 31);
// }

// .peak-e {
//   border-left: 11px solid rgb(233, 141, 22);
// }

// .peak-f {
//   border-left: 11px solid rgb(231, 80, 23);
// }

// .peak-g {
//   border-left: 11px solid rgb(209, 29, 24);
// }

@media (min-width: 768px) { 
    .consomation{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .consomation{
        margin-left:23%
    }


}
// ////////////////////// input

.toggle-control {
  display: block;
  position: relative;
  padding-left: 100px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.toggle-control input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.toggle-control input:checked ~ .control {
  background-color: $main;
}
.toggle-control input:checked ~ .control:after {
  left: 30px;
}
.toggle-control .control {
  position: absolute;
  top: 7px;
  left: 0;
  height: 18px;
  width: 46px;
  border-radius: 25px;
  background-color: darkgray;
  -webkit-transition: background-color 0.15s ease-in;
  transition: background-color 0.15s ease-in;
}
.toggle-control .control:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 2px;
  width: 14px;
  height: 14px;
  border-radius: 25px;
  background: white;
  -webkit-transition: left 0.15s ease-in;
  transition: left 0.15s ease-in;
}




// Counter of salle de bain

.togglebtn{
    padding-top: 5px;
}

.minuspic{
    position: absolute;
    top: 10px;
    width: 1rem;
    left: 3px;
    cursor: pointer;
}

.pluspic{
    position: absolute;
    top: 3px;
    width: 1rem;
    left: 3px;
    cursor: pointer;
}

.minus{
    position: absolute;
    border-radius: 6px;
    background-color: #2C8EEA;
    height: 1.4rem;
    width: 1.4rem;
    top: 7px;
    left: 10px;
    cursor: pointer;
}

.plus{
    position: absolute;
    border-radius: 6px;
    background-color: #2C8EEA;
    height: 1.4rem;
    width: 1.4rem;
    top: 7px;
    float: right;
    right: 10px;
    cursor: pointer;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
	border: 1px solid $main;
	color:$main;
}
input[type=number] {
  height: 2.6rem;
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  border: 1px #D4D6DC solid;
  border-radius: 6px;
  background: none;
  font-family: $gr;
}

// /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

// Surface of salle de bain 
.inptt {
    font-family: $gr;
    background-color: transparent;
    border: 1px solid #D4D6DC;
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    border-top-right-radius: 0px;
}
span {
    background-color: #2C8EEA;
    color: #F3F4F8;
    border: 0px solid #D4D6DC;
    border-radius: 8px;
    border-left: 0.1px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    font-size: 0.95rem;
}
@media (min-width: 1024px) { 
 .content{
        margin-left:0%;
        text-align: left;
    }
}
  

@media(max-width: 375px){
    .content{
        // margin-left:10%;
        margin-left:10%;
        text-align: left;
    }
    .sne{
    position: relative;
    width: 63%;
    left: 75%;
    top: -7rem;
}
}
@media(max-width: 414px){
    .content{
        margin-left:10%;
        text-align: left;
    }
}
@media(max-width: 540px){
    .content{
        margin-left:10%;
        text-align: left;
    }
}
@media (min-width: 768px) { 
    .Box{
        margin-left:20%;
        text-align: left;
	}
	label{
		justify-self: inherit;
	}

}
@media (min-width: 1024px) { 
    .Box{
        margin-left:0%;
    }
}

p{
    color: #929395;
    margin-top: 7px;
}
// left inut
@media  (max-width: 320px) {
         .i {
             width: 100%;
            color: #2C8EEA;
            display: flex;
            justify-content: center;
            align-items: center;
    }
}

  .i {
        color: #2C8EEA;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .i i {
        transition: .3s;
    }

    .input-div>div {
        position: relative;
        height: 45px;
        
    }

    .input-div>div>h5 {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #2C8EEA;
        font-size: 14px;
        transition: .3s;
    }

    .input-div:before,
    .input-div:after {
        content: '';
        position: absolute;
        bottom: -2px;
        width: 0%;
        height: 2px;
        background-color: #38d39f;
        transition: .4s;
    }

    .input-div:before {
        right: 50%;
    }

    .input-div:after {
        left: 50%;
    }

    .input-div.focus:before,
    .input-div.focus:after {
        width: 50%;
    }

    .input-div.focus>div>h5 {
        top: -5px;
        font-size: 15px;
    }

    .input-div.focus>.i>i {
        color: #38d39f;
    }
.Twitter{
    position: relative;
    top: 4px;
    width: 96%;
}
.sne{
    position: relative;
    width: 43%;
    left: 75%;
    top: -7rem;
}
</style>