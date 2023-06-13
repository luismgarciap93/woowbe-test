<template>
  <div class="coupon">
    <div class="coupon-header">
      <h3 class="coupon-title">{{ title }}</h3>
      <div class="coupon-days">
        <span v-for="(day, index) in days" :key="index" class="coupon-day">{{ day }}</span>
      </div>
    </div>
    <div class="coupon-content">
      <div class="coupon-availability">
        <div :class="['coupon-circle', available ? 'coupon-circle-green' : 'coupon-circle-red']"></div>
        <label for="coupon-checkbox" class="coupon-label">{{ available ? 'Available' : 'Not Available' }}</label>
      </div>
      <div class="coupon-cashback">
        <span class="coupon-cashback-label">Cash Back:</span>
        <span class="coupon-cashback-value">{{ cashback }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    daysOfWeek: {
      type: Array,
      required: true
    },
    status: {
      type: Boolean,
      default: false
    },
    cashback: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      weekDays: {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D'
      }
    }
  },
  computed: {
    available () {
      return this.status !== 'finished'
    },
    days () {
      const days = this.daysOfWeek.map(days => this.weekDays[days])
      return days
    }
  }
}
</script>

<style scoped>
.coupon {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 15px;
  margin: 1rem;
}

.coupon-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.coupon-title {
  font-size: 18px;
  font-weight: bold;
}

.coupon-days {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.coupon-day {
  padding: 5px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.coupon-content {
  display: flex;
  flex-direction: column;
}

.coupon-availability {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.coupon-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
}

.coupon-circle-green {
  background-color: green;
}

.coupon-circle-red {
  background-color: red;
}

.coupon-checkbox {
  margin-right: 5px;
}

.coupon-label {
  font-size: 14px;
}

.coupon-cashback {
  display: flex;
  align-items: center;
}

.coupon-cashback-label {
  font-size: 14px;
  margin-right: 5px;
}

.coupon-cashback-value {
  font-size: 16px;
  font-weight: bold;
}
</style>
