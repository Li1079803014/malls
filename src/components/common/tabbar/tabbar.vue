<template>
    <div id="tabbar">
      <slot></slot>
    </div>
</template>
<script>
export default {
    name:'tabbar'
};
</script>

<style >
/* @import "./assets/css/bass.css"; */
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>