<template>
    <v-container>
      <v-responsive>
        <h1>Monitoring Voltage</h1>
        <div v-if="voltage">
          <div class="row mt-4 g-2">
            <div class="col-6">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>Solar Voltage</h4>
                  <h2 class="card-title m-0">{{ voltage.Solar_Voltage }} {{ voltage.Unit_Voltage }}</h2>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>StepDown Voltage</h4>
                  <h2 class="card-title m-0">{{ voltage.StepDown_Voltage }} {{ voltage.Unit_Voltage }}</h2>
                </div>
              </div>
            </div>

            <!-- Battery -->
            <h3 class="mt-5">Battery</h3>
            <hr class="mb-0">
            <div class="col-md-3 col-6">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>Battery 1 Voltage</h4>
                  <h2 class="card-title m-0">{{ voltage.Battery1_Voltage }} {{ voltage.Unit_Voltage }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-6 ">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>Battery 1 Capacity</h4>
                  <h2 class="card-title m-0">{{ voltage.Battery1_Capacity }} {{ voltage.Unit_Capacity }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-6 ">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>Battery 2 Voltage</h4>
                  <h2 class="card-title m-0">{{ voltage.Battery2_Voltage }} {{ voltage.Unit_Voltage }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>Battery 2 Capacity</h4>
                  <h2 class="card-title m-0">{{ voltage.Battery2_Capacity }} {{ voltage.Unit_Capacity }}</h2>
                </div>
              </div>
            </div>

            <h3 class="mt-5">PLN</h3>
            <hr class="mb-0">
            <div class="col-md-2 col-6 ">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>PLN Voltage</h4>
                  <h2 class="card-title m-0">{{ voltage.PLN_Voltage }} {{ voltage.Unit_Voltage }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 mt-2">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>PLN Current</h4>
                  <h2 class="card-title m-0">{{ voltage.PLN_Current }} {{ voltage.Unit_Current }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 mt-2">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>PLN Power</h4>
                  <h2 class="card-title m-0">{{ voltage.PLN_Power }} {{ voltage.Unit_Power }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 mt-2">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>PLN Energy</h4>
                  <h2 class="card-title m-0">{{ voltage.PLN_Energy }} {{ voltage.Unit_Energy }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 mt-2">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>PLN Frequency</h4>
                  <h2 class="card-title m-0">{{ voltage.PLN_Frequency }} {{ voltage.Unit_Frequency }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 mt-2">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>PLN PF</h4>
                  <h2 class="card-title m-0">{{ voltage.PLN_PF }} {{ voltage.Unit_PF }}</h2>
                </div>
              </div>
            </div>

            <h3 class="mt-5">Inverter</h3>
            <hr class="mb-0">
            <div class="col-md-2 col-6 mt-2">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>Inverter Voltage</h4>
                  <h2 class="card-title m-0">{{ voltage.Inverter_Voltage }} {{ voltage.Unit_Voltage }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 mt-2">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>Inverter Current</h4>
                  <h2 class="card-title m-0">{{ voltage.Inverter_Current }} {{ voltage.Unit_Current }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 mt-2">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>Inverter Power</h4>
                  <h2 class="card-title m-0">{{ voltage.Inverter_Power }} {{ voltage.Unit_Power }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 mt-2">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>Inverter Energy</h4>
                  <h2 class="card-title m-0">{{ voltage.Inverter_Energy }} {{ voltage.Unit_Energy }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 mt-2">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>Inverter Frequency</h4>
                  <h2 class="card-title m-0">{{ voltage.Inverter_Frequency }} {{ voltage.Unit_Frequency }}</h2>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-6 mt-2">
              <div class="card rounded-4">
                <div class="card-body">
                  <h4>Inverter PF</h4>
                  <h2 class="card-title m-0">{{ voltage.Inverter_PF }} {{ voltage.Unit_PF }}</h2>
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
      async intervalData (){
        try{
          this.voltage = await getData('get/voltage')
        } catch(error) {
          console.log(error)
        }
      }
    },
    computed: {
      waterPhProgress() {
        return (this.sensor.Water_Ph * 100) / 14;
      },
      soilPhProgress() {
        return (this.sensor.Soil_Ph * 100) / 14;
      },
    },
  }
  </script>
  