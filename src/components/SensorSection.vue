<template>
  <v-container>
    <v-responsive>
      <h1>Monitoring Sensor</h1>
      <div v-if="sensor">
        <div class="row g-3 mt-4">
          <h5 class="mb-0">Water Sensor</h5>
          <hr class="mb-0">
          <div class="col-sm-6 col-md-6 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Water PH</h5>
                <ve-progress :progress="waterPhProgress" font-size="25px" :legend="sensor.Water_Ph" :thickness="15"
                  :half="true" :color="colorpH(sensor.Water_Ph)" :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_Ph }}</span>
                  </template>
                  <template #legend-caption>
                    <span>{{ sensor.Soil_Index }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Water Flow</h5>
                <ve-progress :progress="waterFlowProgress" font-size="25px" :legend="sensor.Water_Flow" :thickness="15"
                  :half="true" :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_Water }}</span>
                  </template>
                  <template #legend-caption>
                    <span>{{ sensor.Water_Flow_Index }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Water Temperature</h5>
                <ve-progress :progress="waterTemperatureProgress" font-size="25px" :legend="sensor.Water_Temperature"
                  :thickness="15" :half="true" :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_Temperature }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-3 mt-5">
          <h5 class="mb-0">Air Sensor</h5>
          <hr class="mb-0">

          <div class="col-sm-6 col-md-6 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Air Humidity</h5>
                <ve-progress :progress="sensor.Air_Humidity" font-size="25px" color="#99d9ff" :thickness="15" :half="true"
                  :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_Humidity }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Anemo</h5>
                <ve-progress :progress="sensor.Anemo" font-size="25px" color="#97c0ee" :thickness="15" :half="true"
                  :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_Anemo }}</span>
                  </template>
                  <template #legend-caption>
                    <span>{{ sensor.Anemo_Index }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Air Temperature</h5>
                <ve-progress :progress="sensor.Air_Temperature" font-size="25px" color="#99d9ff" :thickness="15"
                  :half="true" :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_Temperature }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-3 mt-5">
          <h5 class="mb-0">Soil Sensor</h5>
          <hr class="mb-0">
          <div class="col-sm-6 col-md-4 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Soil PH</h5>
                <ve-progress :progress="soilPhProgress" font-size="25px" :color="colorpH(sensor.Soil_Ph
                )" :legend="sensor.Soil_Ph" :thickness="15" :half="true" :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_Ph }}</span>
                  </template>
                  <template #legend-caption>
                    <span>{{ sensor.Soil_Index }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Soil Moisture</h5>
                <ve-progress :progress="sensor.Soil_Moisture" font-size="25px" color="DimGray" :thickness="15"
                  :half="true" :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_Moisture }}</span>
                  </template>
                  <template #legend-caption>
                    <span>{{ sensor.Soil_Moisture_Index }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Soil Temperature</h5>
                <ve-progress :progress="sensor.Soil_Temperature" font-size="25px" color="DimGray" :thickness="15"
                  :half="true" :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_Temperature }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-3 mt-5">
          <h5 class="mb-0">Other Sensor</h5>
          <hr class="mb-0">
          <div class="col-sm-6 col-md-4 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">LDR</h5>
                <ve-progress :progress="sensor.LDR" font-size="25px" color="#ffaa1d" :thickness="15" :half="true"
                  :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_LDR }}</span>
                  </template>
                  <template #legend-caption>
                    <span>{{ sensor.LDR_Index }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Ultrasonic</h5>
                <ve-progress :progress="sensor.Ultrasonic" font-size="25px" color="DimGray" :thickness="15" :half="true"
                  :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_Ultrasonic }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4 text-center">
            <div class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Tank</h5>
                <ve-progress :progress="sensor.Tank_Percentage" font-size="25px" color="#ff5e00" :thickness="15"
                  :half="true" :angle="-720">
                  <template #legend>
                    <span> / {{ sensor.Tank_Capacity }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>Loading...</div>
    </v-responsive>
  </v-container>
</template>

<script>
import { getData } from '@/utils/api/api'

export default {
  data() {
    return {
      sensor: null,
    }
  },
  async mounted() {
    this.intervalData(); // Untuk memuat data pertama kali

    this.intervalId = setInterval(() => {
      this.intervalData();
    }, 1000);
  },
  beforeRouteLeave(to, from, next) {
    // Clear the interval when leaving the current route
    clearInterval(this.intervalId);
    next();
  },
  methods: {
    colorpH(pH) {
      if (pH === 0) {
        return '#EE2028'
      } else if (pH === 1) {
        return '#F36533'
      } else if (pH === 2) {
        return '#F99022'
      } else if (pH === 3) {
        return '#FFC424'
      } else if (pH === 4) {
        return '#FBEF1F'
      } else if (pH === 5) {
        return '#82C541'
      } else if (pH === 6) {
        return '#4FB849'
      } else if (pH === 7) {
        return '#31A948'
      } else if (pH === 8) {
        return '#0AB8B6'
      } else if (pH === 9) {
        return '#4890CE'
      } else if (pH === 10) {
        return '#3854A4'
      } else if (pH === 11) {
        return '#5B53A3'
      } else if (pH === 12) {
        return '#64469B'
      } else if (pH === 13) {
        return '#6D2B81'
      } else if (pH === 14) {
        return '#4C276D'
      }
    },
    async intervalData() {
      try {
        this.sensor = await getData('get/sensor')
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    waterPhProgress() {
      return (this.sensor.Water_Ph * 100) / 14;
    },
    waterFlowProgress() {
      return (this.sensor.Water_Flow * 100) / 1800;
    },
    waterTemperatureProgress() {
      return (this.sensor.Water_Temperature * 100) / 50;
    },
    soilPhProgress() {
      return (this.sensor.Soil_Ph * 100) / 14;
    },
  },
}
</script>
