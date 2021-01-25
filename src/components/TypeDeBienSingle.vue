<template>
    <div   ref="contain"  class="Appart  flex ml-0 relative w-full mt-0 "  >
        <!-- <div   :class="{active:IsActive}" class="Appart flex ml-0 relative w-full mt-0 "  > -->

        <!-- <input 
        
            v-model="selected"  
            :value="text" 
            class="self-center kobayara ml-3" 
            type="radio" 
            @click="onSelection" 
            :id="text" :name="text" 
            checked
            
            /> -->

            <div  ref="typedebien" class="inpt"></div>
            
        <img  
            class="ml-12" 
            :src="image" />

        <label 
        checked 
            class="self-center ml-4" 
            :for="text" 
            @click="onSelection" >{{text}}</label>

    </div>
</template>

<script>
export default {
    name: "TypeDeBienSingle", 
    data: function() {
        return {
            selected: null, 
        }
    }, 
    props:["text", "image", "pagesCount", "IsActive","nameofcomponent"],
    methods:{
        onSelection() {
            this.$emit("OnSelectChange", this.text, this.pagesCount);
        },
    
  
    },
    mounted(){
        console.log("hada howa route name",this.$route.name)
        console.log("hada howa route name of store variable",this.nameofcomponent)


        if(this.$route.name===this.nameofcomponent){
        var typedebien=this.$refs.typedebien;
        var contain=this.$refs.contain
        typedebien.classList.add("inptselected");
        contain.classList.add("selected")
        }
        else 
        console.log('ata dor 100')

    },
}
</script>
<style scoped lang="scss">
@import "../scss/main.scss";

.typedebiencontainer {
    // margin-left: 20%;
    margin: 0 auto;
}

.Appart,
.Maison,
.Parking,
.Loft,
.Hôtel,
.Bureau,
.Chateu,
.Immeuble
{
    border: 1px solid #D4D6DC;
    height:4rem;
    border-radius: 5px;
    &:hover{
            border: 1px solid $main;

    }
}


.selected{
    border: 1px solid $main !important;
}


label {
    font-family: $gr;
    font-size: 1rem;
    color: #000000;
    opacity: 0.8;
}

input[type="radio"]{
    display: none;
    position: absolute;
    left: 8px;
    height: 18px;
}



.inpt{
    position: absolute;
    content: "";
    left: 19px;
    top: 25px;
    height: 16px;
    width: 16px;
    border: 1px solid #D4D6DC;
    border-radius: 50%;
    margin-right: 20px;
    align-self: center;
    cursor: pointer;
}

.inptselected{
    
    background-color: white;
    border: 6px solid $main;


}

// label:after{
//     position: absolute;
//     content: "";
//     left: 16px;
//     top: 29px;
//     height: 10px;
//     width: 10px;
//     border-radius: 50%;
//     margin-right: 20px;
//     align-self: center;
//     background-color: #F3F4F8;
//     opacity: 0;
//     cursor: pointer;
// }



// label::after{
//     opacity: 1;
//     border: 1px solid $main;

// }

input:checked ~ label:before{
  background-color: $main;
  border: none;
}

input:checked ~ label:after {
    opacity: 1;
    border: 1px solid $main;
}

input:checked ~ div{
    border: 1px solid $main;
}

@media (min-width: 768px) { 
    .typedebiencontainer{
        margin-left:20%
    }

}
@media (min-width: 1024px) { 
    .typedebiencontainer{
        margin-left:23%
    }

}



</style>
