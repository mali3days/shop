<template>
  <div class="breadcrumb-container">
    <div class="container">
      <ol class="breadcrumb">
        <li><router-link to='/'>Главная</router-link><li>
        <li class="active">{{ gender || 'gender' }}</li>
        <!-- <li class="active">{{ type || 'type' }}</li> -->
        <!-- <li class="active">{{ model || 'model' }}</li> -->
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: [
    'gender',
    'type',
    'model',
  ],
};
</script>

<style scoped>
</style>
