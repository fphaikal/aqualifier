<template>
  <v-container>
    <v-responsive>
      <h1>Monitoring Sensor</h1>
      <div v-if="sensor">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="row">
              <h5 class="mt-5">Water Sensor</h5>
              <hr class="mb-0">
              <div class="col-sm-6 col-md-6 col-lg-6 text-center">
                <div class="card mt-4 rounded-4">
                  <div class="card-body">
                    <h5 class="card-title mb-3">Water PH</h5>
                    <ve-progress :progress="waterPhProgress" font-size="25px" :legend="sensor.Water_Ph" :thickness="15"
                      :half="true" :angle="-720">
                      <template #legend>
                        <span> / 14</span>
                      </template>
                      <template #legend-caption>
                        <span>{{ sensor.Soil_Index }}</span>
                      </template>
                    </ve-progress>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-6 text-center">
                <div class="card mt-4 rounded-4">
                  <div class="card-body">
                    <h5 class="card-title mb-3">Water Flow</h5>
                    <ve-progress :progress="waterFlowProgress" font-size="25px" :legend="sensor.Water_Flow"
                      :thickness="15" :half="true" :angle="-720">
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
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="row">
              <h5 class="mt-5">Air Sensor</h5>
              <hr class="mb-0">
              <div class="col-sm-6 col-md-6 col-lg-6 text-center">
                <div class="card mt-4 rounded-4">
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
              <div class="col-sm-6 col-md-6 col-lg-6 text-center">
                <div class="card mt-4 rounded-4">
                  <div class="card-body">
                    <h5 class="card-title mb-3">Air Humidity</h5>
                    <ve-progress :progress="sensor.Air_Humidity" font-size="25px" color="#99d9ff" :thickness="15"
                      :half="true" :angle="-720">
                      <template #legend>
                        <span>{{ sensor.Unit_Humidity }}</span>
                      </template>
                    </ve-progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <h5 class="mt-5">Soil Sensor</h5>
          <hr class="mb-0">
          <div class="col-sm-6 col-md-4 col-lg-3 text-center">
            <div class="card mt-4 rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Soil PH</h5>
                <ve-progress :progress="soilPhProgress" font-size="25px" color="DimGray" :legend="sensor.Soil_Ph"
                  :thickness="15" :half="true" :angle="-720">
                  <template #legend>
                    <span> / 14</span>
                  </template>
                  <template #legend-caption>
                    <span>{{ sensor.Soil_Index }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 text-center">
            <div class="card mt-4 rounded-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Soil Moisture</h5>
                <ve-progress :progress="sensor.Soil_Moisture" font-size="25px" color="DimGray" :thickness="15"
                  :half="true" :angle="-720">
                  <template #legend>
                    <span>{{ sensor.Unit_Moisture }}</span>
                  </template>
                  <template #legend-caption>
                    <span>{{ sensor.Soil_Index }}</span>
                  </template>
                </ve-progress>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 text-center">
            <div class="card mt-4 rounded-4">
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
        <div class="row">

        </div>
        <div class="row">
          <h5 class="mt-5">Other Sensor</h5>
          <hr class="mb-0">
          <div class="col-sm-6 col-md-4 col-lg-3 text-center">
            <div class="card mt-4 rounded-4">
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
          <div class="col-sm-6 col-md-4 col-lg-3 text-center">
            <div class="card mt-4 rounded-4">
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
          <div class="col-sm-6 col-md-4 col-lg-3 text-center">
            <div class="card mt-4 rounded-4">
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
          <div class="col-sm-6 col-md-4 col-lg-3 text-center">
            <div class="card mt-4 rounded-4">
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
      phIndicator: {
        colors: [
          {
            color: "#EE2028",
            offset: "0"
          },
          {
            color: "#F36533",
            offset: "7.14"
          },
          {
            color: "#F99022",
            offset: "14.34"
          },
          {
            color: "#FFC424",
            offset: "21.51"
          },
          {
            color: "#FBEF1F",
            offset: "28.68"
          },
          {
            color: "#82C541",
            offset: "35.85"
          },
          {
            color: "#4FB849",
            offset: "43.02"
          },
          {
            color: "#31A948",
            offset: "50.19"
          },
          {
            color: "#0AB8B6",
            offset: "57.36"
          },
          {
            color: "#4890CE",
            offset: "64.53"
          },
          {
            color: "#3854A4",
            offset: "71.7"
          },
          {
            color: "#5B53A3",
            offset: "78.87"
          },
          {
            color: "#64469B",
            offset: "86.04"
          },
          {
            color: "#6D2B81",
            offset: "93.21"
          },
          {
            color: "#4C276D",
            offset: "100"
          },
        ]
      },
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
    soilPhProgress() {
      return (this.sensor.Soil_Ph * 100) / 14;
    },
  },
}
</script>
