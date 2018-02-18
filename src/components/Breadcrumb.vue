<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" v-for="(item, index) in list" :key="index">
      <span class="active" v-if="isLast(index)">{{ showName(item) }}</span>
      <router-link :to="item" v-else>{{ showName(item) }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    isLast(index) {
      const newIndex = index;
      return newIndex === this.list.length - 1;
    },
    showName(item) {
      let newItem = item;
      if (item.meta && newItem.meta.label) {
        newItem = newItem.meta && newItem.meta.label;
      }
      if (newItem.name) {
        newItem = newItem.name;
      }
      return newItem;
    },
  },
};
</script>
