<template>
  <div>
    <tabbar>
      <tabbaritem path="/home">
        <img slot="item-icon" src="@/assets/img/home.png" alt="" />
        <img slot="item-icona" src="@/assets/img/home@selected.png" alt="" />
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/catefory" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/category.png" alt="" />
        <img
          slot="item-icona"
          src="@/assets/img/category@selected.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/cart.png" alt="" />
        <img slot="item-icona" src="@/assets/img/cart@selected.png" alt="" />
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/my" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/my.png" alt="" />
        <img slot="item-icona" src="@/assets/img/my@selected.png" alt="" />
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
    <router-view></router-view>
  </div>
  
</template>
<script>
import tabbar from '@/components/common/tabbar/tabbar'
import tabbaritem from '@/components/common/tabbar/tabbaritem'
export default {
  name: "index",
  components:{
      tabbar,
      tabbaritem
  }
};
</script>