<template>
  <div>
    <p class="h3">Tiendas</p>
    <div class="combobox">
      <select class="combobox-select" v-model="activeFilter">
        <option value="" disabled selected>Please select a filter</option>
        <option v-for="filter in filterList" :key="filter">{{ filter }}</option>
      </select>
    </div>
    <div class="row justify-content-around" v-if="businessList">
      <card-component v-for="item in filteredStores" :key="item.id" :image-url="item.cover"
        :logo-url="item.square_picture" :title="item.name" :description="item.description" :favorite="item.is_favorite"
        :id="item.id" />
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/common/businessCard.vue'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    CardComponent
  },
  data () {
    return {
      activeFilter: '',
      hashTable: {}
    }
  },
  methods: {
    ...mapActions(['emptyOffers']),

    setFilter (filter) {
      console.log(filter)
      this.activeFilter = filter
    }
  },
  computed: {
    ...mapState(['businessList', 'offersList']),
    filterList () {
      const names = this.businessList.map(obj => obj.sector.name)
      const uniqueArrayList = [...new Set(names)]
      return uniqueArrayList
    },
    filteredStores () {
      const filteredArr = this.businessList.filter(item => item.sector.name === this.activeFilter)
      return (filteredArr.length >= 1 ? filteredArr : this.businessList)
    }
  },
  created () {
    this.emptyOffers()
  }
}
</script>
<style scoped>
.combobox {
  display: inline-block;
}

.combobox-select {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.combobox-selected {
  margin-top: 8px;
  font-size: 16px;
}
</style>
