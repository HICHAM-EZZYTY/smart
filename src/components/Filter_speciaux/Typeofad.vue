<template>
    <div role="group" class="_9fvlwj0">
        <section>
              <div class="toggle">
                <input type="radio" @click="rmv" v-model="typeofad"   name="typeofadModals" value="Acheter" id="Acheter"  />
                <label for="Acheter">Acheter</label>
                
                <input type="radio" @click="rmv"  v-model="typeofad"   name="typeofadModals" value="Location" id="Location" />
                <label for="Location">Location</label>
                
                    
                <input type="radio" @click="rmv"  v-model="typeofad"    name="typeofadModals" value="Neuf" id="Neuf" />
                <label for="Neuf">Neuf</label>
                
                
                <input type="radio"  @click="rmv"  v-model="typeofad"   name="typeofadModals" value="Colocation" id="Colocation" />
                <label for="Colocation">Colocation</label>  
              </div>

        </section>
    </div>
</template>


<script>
export default {
	props:["TypeofadModal"],
     data() {
      return {
		typeofadModal:'',
      }
	},
	methods:{

		rmv:function(){
		this.$store.commit('removetypeofgood')
        this.$store.commit('removetypeofoffre')
		}

	},
	computed: {
    typeofad:{
    get () {
    return this.$store.state.Filters.typeofad
    },
    set (value) {
      this.$store.commit('updatetypeofad', value)
    }
	},
	},
    mounted(){
    // this.Ntr = Object.assign({}, this.NatureModal);
    // this.Ntr = JSON.parse(JSON.stringify(this.NatureModal));

    },

}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";



/* VARS */
$open-sans: $gr;

$darkNavy: #97b5d1;
$teal1: #66B3FB;
$teal2: #4B9DEA;
$charcoal: #555555;
$gold: #B6985A;

$activeShadow: 0 0 10px rgba($teal1, .5);

/* MIXINS */
// @mixin focusOutline {outline: dotted 1px #CCC; outline-offset: .45rem;}
@mixin hideInput {width: 0; height: 0; position: absolute; left: -9999px;}
@mixin breakpoint($point) {
	@if $point == 1100 {
		@media (max-width: 1100px) { @content ; }
	}
	@else if $point == 800 {
		@media (max-width: 800px) { @content ; }
	}
}

/* STYLE THE HTML ELEMENTS (INCLUDES RESETS FOR THE DEFAULT FIELDSET AND LEGEND STYLES) */

fieldset {
	margin: 0; padding: 2rem; 
	box-sizing: border-box; display: block;
	border: none; border: solid 1px #CCC;
	min-width: 0;
	background-color: #FFF;
	legend {
		margin: 0 0 1.5rem; padding: 0;
		width: 100%; float: left; display: table;
		font-size: 0.9rem; line-height: 140%; font-weight: 600; color: #333;	
		+ * {clear: both;}
	}
}
body:not(:-moz-handler-blocked) fieldset {display: table-cell;}

/* TOGGLE STYLING */
.toggle {
	margin: 0 0 1.5rem; box-sizing: border-box;
	font-size: 0;
	display: flex; flex-flow: row nowrap;
	justify-content: flex-start; align-items: stretch;
	input {@include hideInput;}
	input + label {
		margin: 0; padding: .75rem 2rem; box-sizing: border-box;
		position: relative; display: inline-block;
		border: solid 1px #DDD; background-color: #FFF;
		font-size: 16px; line-height: 140%; text-align: center;
		box-shadow: 0 0 0 rgba(255,255,255,0);
		transition: 	border-color .15s ease-out, 
					color .25s ease-out, 
					background-color .15s ease-out,
					box-shadow .15s ease-out;
		
		/* ADD THESE PROPERTIES TO SWITCH FROM AUTO WIDTH TO FULL WIDTH */
		/*flex: 0 0 50%; display: flex; justify-content: center; align-items: center;*/
		/* ----- */
		
		&:first-of-type {border-radius: 6px 0 0 6px; border-right: none;}
		&:last-of-type {border-radius: 0 6px 6px 0; border-left: none;}
	}
	input:hover + label {border-color: $darkNavy;}
	input:checked + label {
		background-color: $teal2;
		color: #FFF;
		box-shadow: $activeShadow;
		border-color: $teal2;
		z-index: 1;
	}
	// input:focus + label {@include focusOutline;}

	@include breakpoint(800) {
		input + label {
			padding: .75rem .25rem;
			flex: 0 0 50%;
			display: flex; justify-content: center; align-items: center;
		}
	}
}

/* STYLING FOR THE STATUS HELPER TEXT FOR THE DEMO */
.status {
	margin: 0;
	font-size: 1rem; font-weight: 400;
	span {
		font-weight: 600; color: $gold;
		&:first-of-type {display: inline;}
		&:last-of-type {display: none;}
	}
	@include breakpoint(800) {
		span {
			&:first-of-type {display: none;}
			&:last-of-type {display: inline;}			
		}
	}
}

._9fvlwj0{
    border-bottom:1px solid #ebebeb !important;
}


@media (min-width: 320px) { 
.toggle{
	display: flex;
	flex-wrap: wrap;
	input + label{
	&:first-of-type {border-radius: 0px; border-right: none;}
	&:last-of-type {border-radius: 0px; border-left: none;}
	}
}
}

@media (min-width: 700px) { 
.toggle{
	flex-wrap: wrap;
}
}

@media (min-width: 802px) { 
.toggle{
	flex-wrap: nowrap ;
	input + label{
	&:first-of-type {border-radius: 6px 0 0 6px; border-right: none;}
	&:last-of-type {border-radius: 0 6px 6px 0; border-left: none;}
	}
}
}







</style>
