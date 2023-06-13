<template>
  <div>
    <header class="header-bg" :style="`background-image: url(${selectedBussines.cover})`">
      <div>
        <h1 class="header-content">{{ selectedBussines.name }}</h1>
        <div class="tab-container">
          <div class="tab" v-for="cat in descriptiveCategories" :key="cat">{{ cat }}</div>
        </div>
      </div>
    </header>
    <section>
      <p>{{ selectedBussines.description }}</p>
      <h4>Promociones</h4>
      <div class="promotions-container" v-if="selectedOffer.length > 0">
        <promotions title="Promotion" :daysOfWeek="promotion.weekdays" :status="promotion.status"
          :cashback="promotion.reward" v-for="promotion in selectedOffer" :key="promotion.id"></promotions>
      </div>
      <p v-else>No hay promociones disponibles en el momento para este comercio.</p>
    </section>
  </div>
</template>

<script>
import promotions from '@/components/common/promotion.vue'
import { mapState } from 'vuex'
export default {
  components: {
    promotions
  },
  computed: {
    ...mapState(['business', 'offers']),
    selectedBussines () {
      return this.business
    },
    selectedOffer () {
      return this.offers
    },
    descriptiveCategories () {
      const categories = this.selectedBussines.descriptive_categories.map(cat => cat.name)
      return categories
    },
    backGroundStyle () {
      const bgStyle = {
        'background-image': `url(${this.selectedBussines.cover});`
      }
      return bgStyle
    }
  }
}
</script>

<style scoped>
.header-bg {
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.header-content {
  content: "";
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  color: White;
  padding: 1rem 0;
  z-index: 1;
}

.header-content h1 {
  margin: 0;
  font-size: 24px;
}

.tab-container {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  font-size: 0.8rem;
  margin: 1rem auto;
  transform: translateY(25vh);
}

.tab {
  border: 1px black solid;
  background-color: rgba(0, 0, 0, 0.445);
  border-radius: 6px;
  padding: 0.2rem 0.3rem;
  margin: 0 1rem;
  color: white;
  text-transform: capitalize;
}

.promotions-container {
  display: flex;
  width: 80%;
  margin: 1rem auto;
  justify-content: center;
}

section {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

/* Additional styles can be added as per your requirements */
</style>
