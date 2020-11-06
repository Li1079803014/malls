<template>
  <div class="item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icona"></slot></div>
    <div :style="activeEd"><slot name="item-text"></slot></div>
    <!-- <img src="../../assets/img/home.png" alt="" />
    <div>首页</div> -->
  </div>
</template>
<script>
export default {
  name: "tabbaritem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red",
      
    }
  },
  data() {
    return {
      // isActive:false, 
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeEd(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemclick(){
      this.$router.replace(this.path)
    }
  },
};
</script>
<style >
.item {
  height: 46px;
  background: #cccccc;
  flex: 1;
  text-align: center;
  font-size: 14px;
  
}
.item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>