<script setup>
import formatDate from '@/utils/formatDate'
</script>
<template>
  <v-container>
    <v-responsive>
      <div v-if="error">
        <div class="row mt-5">
          <div class="col-12">
            <div v-for="(time, index) in error" :key="index" class="card rounded-4">
              <div class="card-body">
                <h5 class="card-title">Tanggal: {{ time.tanggal }}</h5>
                <div class="card rounded-top-4 rounded-bottom-0 mt-3 text-bg-dark">
                  <div class="card-body">
                    <div class="row g-1">
                      <div class="col-2 my-auto">
                        <div class="card-title m-0">Timestamp</div>
                      </div>
                      <div class="col-2 my-auto">
                        <div class="card-title m-0">Filename</div>
                      </div>
                      <div class="col-2 my-auto">
                        <div class="card-title m-0">Route</div>
                      </div>
                      <div class="col-4 my-auto">
                        <div class="card-title m-0">Code & Message</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card rounded-4 mt-1" v-for="(data, index) in time.data" :key="index">
                  <div class="card-body">
                    <div class="row g-1">
                      <div class="col-2 my-auto">
                        <div class="card-title m-0"><b>{{ formatDate(data.timestamp) }}</b></div>
                      </div>
                      <div class="col-2 my-auto">
                        <div class="card-title m-0">{{ data.namafile }}</div>
                      </div>
                      <div class="col-2 my-auto">
                        <div class="card-title m-0">{{ data.route }}</div>
                      </div>
                      <div class="col-4 my-auto">
                        <div class="card-title m-0">{{ data.code }} {{ data.msg }}</div>
                      </div>
                    </div>
                  </div>
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
      error: [],
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
        this.error = await getData('get/error')
      } catch (error) {
        console.log(error)
      }
    }
  },
}
</script>
  