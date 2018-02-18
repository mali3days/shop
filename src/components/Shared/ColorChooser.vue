<template>
  <div class="chooser chooser-hide">
    <div class="chooser-toggle"><button class="btn btn-warning" type="button"><i class="fa fa-paint-brush bigger-130"></i></button></div>
    <div class="chooser-content">
      <label>Color</label>
      <select name="color-chooser" id="color-chooser" class="form-control input-sm selectpicker">
        <option value="indigo">Indigo</option>
        <option value="red">Red</option>
        <option value="teal">Teal</option>
        <option value="brown">Brown</option>
      </select>
      <label class="m-t-1">Style</label>
      <select name="style-chooser" id="style-chooser" class="form-control input-sm selectpicker">
        <option value="flat">Flat</option>
        <option value="rounded">Rounded</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorChooser',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
