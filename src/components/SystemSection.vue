<template>
  <v-container>
    <v-responsive>
      <div class="d-flex">
        <h1 class="my-auto">System Manage</h1>
        <div v-if="system" class="my-auto ms-auto">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="autoSwitch"
              :checked="system.Switch" @change="toggleSwitch(!system.Switch)">
            <label class="form-check-label" for="autoSwitch">Switch Mode</label>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="autoSwitch"
              :checked="system.Auto" :disabled="!system.Switch" @change="toggleAuto(!system.Auto)">
            <label class="form-check-label" for="autoSwitch">Auto Mode</label>
          </div>
        </div>
      </div>
      <div v-if="actuator">
        <div class="row mt-5 g-2">
          <div class="col-md-3 col-6">
            <div class="card rounded-4">
              <div class="card-body d-flex">
                <h3 class="card-title my-auto">Pump Tank</h3>
                <div class="form-check form-switch my-auto ms-auto">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                    :checked="actuator && actuator.Pump_Tank" :disabled="!system.Switch || system.Auto" @change="togglePumpTank(!actuator.Pump_Tank)">
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="card rounded-4">
              <div class="card-body d-flex">
                <h3 class="card-title my-auto">Pump Booster</h3>
                <div class="form-check form-switch my-auto ms-auto">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                    :checked="actuator && actuator.Pump_Booster" :disabled="!system.Switch || system.Auto" @change="togglePumpBoost(!actuator.Pump_Booster)">
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="card rounded-4">
              <div class="card-body d-flex">
                <h3 class="card-title my-auto">Selenoid Valve</h3>
                <div class="form-check form-switch my-auto ms-auto">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                    :checked="actuator && actuator.Selenoid_Valve" :disabled="!system.Switch|| system.Auto" @change="toggleSelenoid(!actuator.Selenoid_Valve)">
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="card rounded-4">
              <div class="card-body d-flex">
                <h3 class="card-title my-auto">Lamp</h3>
                <div class="form-check form-switch my-auto ms-auto">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                    :checked="actuator && actuator.Lamp" :disabled="!system.Switch || system.Auto" @change="toggleLamp(!actuator.Lamp)">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="system">
        <div class="row mt-1 g-2">
          <div class="col-md-6">
            <div class="card rounded-4">
              <div class="card-body d-flex">
                <h3 class="card-title my-auto m-0">PLN</h3>
                <div v-if="system.PLN" class="my-auto ms-auto">
                  <h4 class="my-auto"><div class="badge bg-success rounded-3">Nyala</div></h4>
                </div>
                <div v-else class="my-auto ms-auto">
                  <h4 class="my-auto"><div class="badge bg-danger rounded-3">Mati</div></h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card rounded-4">
              <div class="card-body d-flex">
                <h3 class="card-title my-auto m-0">PLTS</h3>
                <div v-if="system.PLTS" class="my-auto ms-auto">
                  <h4 class="my-auto"><div class="badge bg-success rounded-3">Nyala</div></h4>
                </div>
                <div v-else class="my-auto ms-auto">
                  <h4 class="my-auto"><div class="badge bg-danger rounded-3">Mati</div></h4>
                </div>
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
      actuator: null,
      system: null
    }
  },
  async mounted() {
    try {
      // Memuat data pertama kali
      this.actuator = await getData('get/actuator')
      this.system = await getData('get/system')
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async toggleSwitch(value) {
      try {
        await getData(`get/edit/system?switch=${value}`);
        this.system.Switch = value; // Update the system.Switch value
      } catch (error) {
        console.log(error);
      }
    },
    async toggleAuto(value) {
      try {
        await getData(`get/edit/system?auto=${value}`);
        this.system.Auto = value; // Update the system.Auto value
      } catch (error) {
        console.log(error);
      }
    },
    async togglePumpTank(value) {
      try {
        await getData(`get/edit/actuator?pump_tank=${value}`);
        this.actuator = await this.getActuatorData(); // Memperbarui nilai setelah mengubah data
      } catch (error) {
        console.log(error);
      }
    },
    async togglePumpBoost(value) {
      try {
        await getData(`get/edit/actuator?pump_boost=${value}`);
        this.actuator = await this.getActuatorData(); // Memperbarui nilai setelah mengubah data
      } catch (error) {
        console.log(error);
      }
    },
    async toggleSelenoid(value) {
      try {
        await getData(`get/edit/actuator?selenoid=${value}`);
        this.actuator = await this.getActuatorData(); // Memperbarui nilai setelah mengubah data
      } catch (error) {
        console.log(error);
      }
    },
    async toggleLamp(value) {
      try {
        await getData(`get/edit/actuator?lamp=${value}`);
        this.actuator = await this.getActuatorData(); // Memperbarui nilai setelah mengubah data
      } catch (error) {
        console.log(error);
      }
    },
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

  