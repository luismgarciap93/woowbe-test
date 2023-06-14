<template>
  <div class="card">
    <div class="card-image" :style="{ backgroundImage: `url(${imageUrl})` }" @click="goToStore">
      <img class="logo" :src="logoUrl" alt="Logo">
    </div>
    <div class="card-content">
      <h2 @click="goToStore">{{ title }}</h2>
      <p class="paragraph">{{ truncateDescription }} </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    logoUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    favorite: {
      type: Boolean,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      isFavorite: false,
      maxDescriptionLength: 100
    }
  },
  methods: {
    ...mapActions(['getBusiness', 'getOffers']),
    async goToStore () {
      const payload = {
        token: this.token,
        id: this.id
      }
      await this.getBusiness(payload)
      if (this.getOfferId.length > 0) {
        this.getOfferId.forEach(id => {
          const payload = {
            token: this.token,
            id: id
          }
          this.getOffers(payload)
        })
      }
      this.$router.push('/store')
    }
  },
  computed: {
    ...mapState(['token', 'offersList']),
    truncateDescription () {
      return this.description.substring(0, this.maxDescriptionLength) + '...'
    },
    getOfferId () {
      const offerIds = this.offersList.filter(item => item.business.id === this.id)
      const offerNumbers = offerIds.map(offer => offer.id)
      return offerNumbers
    }
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 0.5rem;
}

.card-image {
  position: relative;
  width: 100%;
  height: 70%;
  background-size: cover;
  background-position: center;
  height: 40%;
  cursor: pointer;
}

.logo {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
}

.card-content {
  padding: 10px;
}

.paragraph {
  text-overflow: ellipsis;
  text-align: start;
}

.favorite-button {
  border: none;
  background-color: transparent;
}

.icon {
  color: red;
}

h2 {
  margin: 0;
  font-size: 16px;
  cursor: pointer;
}

p {
  margin: 8px 0;
  font-size: 14px;
}
</style>
