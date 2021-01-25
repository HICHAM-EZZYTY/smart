<template class="z-10">
  <article>

    <header class="tabs grid grid-cols-2 gap-4">

      <ul class="col-span-1 text-2xl text-black-500 flex flex-row border-b-2">
        <li class="mr-6 " v-for="(tab, index) in tabs" :key="index">
          <div class="nav-item"
              :class="{ 'is-active': tab.isActive }"
              @click="selectTab(tab)">
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
</template>

<script>
  export default {
    data: () => {
      return {
        tabs: []
      }
    },
    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = tab.name === selectedTab.name;
        });
      }
    },
    created() {
      this.tabs = this.$children;
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    padding: 0;
    list-style: none;
    .nav-item {
      cursor: pointer;
      &:hover {
       // color: #FB130A;
        border-bottom: 2px solid #4299e1
      }
      &.is-active {
        color: #4e84ca;
        border-bottom: 2px solid #4299e1
      }
    }
  }
</style>