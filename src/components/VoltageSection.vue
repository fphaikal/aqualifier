<template>
  <v-container>
    <v-responsive>
      <div v-if="voltage">
        <div class="row g-2">
          <div class="col-md-6 col-12">
            <div class="row g-2 mb-2">
              <div class="col-6">
                <div class="card rounded-4 border-0 text-bg-danger">
                  <div class="card-body">
                    <h5 class="card-text mb-1">Battery 1 Capacity</h5>
                    <h2 class="card-title m-0">{{ voltage.Battery1_Capacity }}</h2>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card rounded-4 border-0 text-bg-danger">
                  <div class="card-body">
                    <h5 class="card-text mb-1">Battery 1 Voltage</h5>
                    <h2 class="card-title m-0">{{ voltage.Battery1_Voltage }}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="row g-2">
              <div class="col-6">
                <div class="card rounded-4 border-0 text-bg-primary">
                  <div class="card-body">
                    <h5 class="card-text mb-1">Battery 2 Capacity</h5>
                    <h2 class="card-title m-0">{{ voltage.Battery2_Capacity }}</h2>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card rounded-4 border-0 text-bg-primary">
                  <div class="card-body">
                    <h5 class="card-text mb-1">Battery 2 Voltage</h5>
                    <h2 class="card-title m-0">{{ voltage.Battery2_Voltage }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="row g-2">
              <div class="col-6 col-md-12">
                <div class="card rounded-4 border-0">
                  <div class="card-body">
                    <h5 class="card-text mb-1">Solar Voltage</h5>
                    <h2 class="card-title m-0">{{ voltage.Solar_Voltage }}</h2>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-12">
                <div class="card rounded-4 border-0">
                  <div class="card-body">
                    <h5 class="card-text mb-1">StepDown Voltage</h5>
                    <h2 class="card-title m-0">{{ voltage.StepDown_Voltage }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="row g-2">
          <div class="col-md-6 col-12">
            <div class="card rounded-4 border-0 shado">
              <div class="card-body">
                <h1 class="card-title mb-5">PLN</h1>
                <div class="row">
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Voltage</h5>
                    <h2>{{ voltage.PLN_Voltage }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Current</h5>
                    <h2>{{ voltage.PLN_Current }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Power</h5>
                    <h2>{{ voltage.PLN_Power }}</h2>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Energy</h5>
                    <h2>{{ voltage.PLN_Energy }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Frequency</h5>
                    <h2>{{ voltage.PLN_Frequency }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">PF</h5>
                    <h2>{{ voltage.PLN_PF }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="card rounded-4 border-0 shado">
              <div class="card-body">
                <h1 class="card-title mb-5">Inverter</h1>
                <div class="row">
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Voltage</h5>
                    <h2>{{ voltage.Inverter_Voltage }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Current</h5>
                    <h2>{{ voltage.Inverter_Current }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Power</h5>
                    <h2>{{ voltage.Inverter_Power }}</h2>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Energy</h5>
                    <h2>{{ voltage.Inverter_Energy }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Frequency</h5>
                    <h2>{{ voltage.Inverter_Frequency }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">PF</h5>
                    <h2>{{ voltage.Inverter_PF }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-responsive>
  </v-container>
</template>
  
<script>
import { getData } from '@/utils/api/api'

export default {
  data() {
    return {
      voltage: null,
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
        this.voltage = await getData('get/voltage')
      } catch (error) {
        console.log(error)
      }
    }
  },
}
</script>
  