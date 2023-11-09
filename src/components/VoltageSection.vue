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
                    <h2 class="card-title m-0">{{ voltage.Battery1_Capacity }} {{ voltage.Unit_Capacity }}</h2>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card rounded-4 border-0 text-bg-danger">
                  <div class="card-body">
                    <h5 class="card-text mb-1">Battery 1 Voltage</h5>
                    <h2 class="card-title m-0">{{ voltage.Battery1_Voltage }} {{ voltage.Unit_Voltage }}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="row g-2">
              <div class="col-6">
                <div class="card rounded-4 border-0 text-bg-primary">
                  <div class="card-body">
                    <h5 class="card-text mb-1">Battery 2 Capacity</h5>
                    <h2 class="card-title m-0">{{ voltage.Battery2_Capacity }} {{voltage.Unit_Capacity}}</h2>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card rounded-4 border-0 text-bg-primary">
                  <div class="card-body">
                    <h5 class="card-text mb-1">Battery 2 Voltage</h5>
                    <h2 class="card-title m-0">{{ voltage.Battery2_Voltage }} {{ voltage.Unit_Voltage }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="row g-2">
              <div class="col-6 col-md-12">
                <div class="card rounded-4 border-0 text-bg-secondary">
                  <div class="card-body">
                    <h5 class="card-text mb-1">Solar Voltage</h5>
                    <h2 class="card-title m-0">{{ voltage.Solar_Voltage }} {{ voltage.Unit_Voltage }}</h2>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-12">
                <div class="card rounded-4 border-0 text-bg-secondary">
                  <div class="card-body">
                    <h5 class="card-text mb-1">StepDown Voltage</h5>
                    <h2 class="card-title m-0">{{ voltage.StepDown_Voltage }} {{ voltage.Unit_Voltage }}</h2>
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
                <div class="d-flex">
                  <h1 class="card-title mb-0">PLN</h1>
                  <div v-if="system.PLN" class="my-auto ms-auto">
                    <h4 class="my-auto">
                      <div class="badge bg-success rounded-3">Nyala</div>
                    </h4>
                  </div>
                  <div v-else class="ms-auto my-auto">
                    <h4 class="my-auto">
                      <div class="badge bg-danger rounded-3">Mati</div>
                    </h4>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Voltage</h5>
                    <h2>{{ voltage.PLN_Voltage }} {{ voltage.Unit_Voltage }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Current</h5>
                    <h2>{{ voltage.PLN_Current }} {{ voltage.Unit_Current }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Power</h5>
                    <h2>{{ voltage.PLN_Power }} {{ voltage.Unit_Power }}</h2>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Energy</h5>
                    <h2>{{ voltage.PLN_Energy }} {{ voltage.Unit_Energy }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Frequency</h5>
                    <h2>{{ voltage.PLN_Frequency }} {{ voltage.Unit_Frequency }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">PF</h5>
                    <h2>{{ voltage.PLN_PF }} {{ voltage.Unit_PF }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="card rounded-4 border-0 shado">
              <div class="card-body">
                <div class="d-flex">
                  <h1 class="card-title mb-0">Inverter</h1>
                  <div v-if="system.PLTS" class="my-auto ms-auto">
                    <h4 class="my-auto">
                      <div class="badge bg-success rounded-3">Nyala</div>
                    </h4>
                  </div>
                  <div v-else class="my-auto ms-auto">
                    <h4 class="my-auto">
                      <div class="badge bg-danger rounded-3">Mati</div>
                    </h4>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Voltage</h5>
                    <h2>{{ voltage.Inverter_Voltage }} {{ voltage.Unit_Voltage }}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Current</h5>
                    <h2>{{ voltage.Inverter_Current }} {{voltage.Unit_Current}}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Power</h5>
                    <h2>{{ voltage.Inverter_Power }} {{voltage.Unit_Power}}</h2>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Energy</h5>
                    <h2>{{ voltage.Inverter_Energy }} {{voltage.Unit_Energy}}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">Frequency</h5>
                    <h2>{{ voltage.Inverter_Frequency }} {{voltage.Unit_Frequency}}</h2>
                  </div>
                  <div class="col-4 text-center">
                    <h5 class="mb-1">PF</h5>
                    <h2>{{ voltage.Inverter_PF }} {{voltage.Unit_PF}}</h2>
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
import { getData, callbackTest } from '@/utils/api/api'

export default {
  data() {
    return {
      voltage: null,
      system: null,
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
  created() {
    // Panggil fungsi untuk berlangganan perubahan data
    callbackTest(this.updateData);
  },
  methods: {
    async intervalData() {
      try {
        this.voltage = await getData('get/voltage')
        this.system = await getData('get/system')
      } catch (error) {
        console.log(error)
      }
    },
    updateData(newData) {
      // Fungsi ini akan dipanggil setiap kali ada perubahan data dari server
      this.data = newData;
    },
  },
}
</script>
  