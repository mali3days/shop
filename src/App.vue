<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.dispatch('products/cartInit');
  },
};
</script>

<style>
.fade {
  transition: opacity 1s linear;
}
.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.cp-spinner {
  width: 48px;
  height: 48px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
}
.cp-balls {
  animation: cp-balls-animate 1s linear infinite;
}
.cp-balls:before {
  border-radius: 50%;
  content: " ";
  width: 24px;
  height: 24px;
  display: inline-block;
  box-sizing: border-box;
  background-color: #4e9789;
  position: absolute;
  top: 0;
  left: 0;
  animation: cp-balls-animate-before 1s ease-in-out infinite;
}
.cp-balls:after {
  border-radius: 50%;
  content: " ";
  width: 24px;
  height: 24px;
  display: inline-block;
  box-sizing: border-box;
  background-color: #373939;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: cp-balls-animate-after 1s ease-in-out infinite;
}
@keyframes cp-balls-animate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes cp-balls-animate-before {
  0% {
    transform: translate(-5px, -5px);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-5px, -5px);
  }
}
@keyframes cp-balls-animate-after {
  0% {
    transform: translate(5px, 5px);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(5px, 5px);
  }
}
.of-visible {
  overflow: visible;
}
</style>

