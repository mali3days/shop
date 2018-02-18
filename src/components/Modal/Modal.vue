<template id="modal-template">
  <div class="modal" v-show="show" transition="modal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <content select=".modal-header">
          <div class="modal-header">
            <h3>
              Заказ принят, спасибо
            </h3>
          </div>
        </content>
        <div class="modal-body">
          С вами приятно иметь дело
        </div>
        <div class="modal-footer uk-clearfix">
        <button @click="hideModal()" class="uk-button uk-button-success uk-float-right">
            Я понял, закрыть окно
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true  
    }
  },
  methods: {
    hideModal: function() {
      this.$emit('closeModal')
    },
  }
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity .3s ease;
  
  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  &-container {
    background: #fff;
    width: 450px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    margin: 0 auto;
    padding: 20px 30px;
  }
  
  &-footer {
    margin-top: 15px;
  }
  
  &-enter, &-leave {
    opacity: 0;
  }
  
  &-enter &-container,
  &-leave &-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
