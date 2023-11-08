<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer>
        <v-list density="compact" nav>
          <v-list-item to="/" prepend-icon="mdi-home" title="Home"></v-list-item>
          <v-list-item to="/voltage" prepend-icon="mdi-flash" title="Voltage"></v-list-item>
          <v-list-item to="/system" prepend-icon="mdi-wrench" title="System"></v-list-item>
          <v-list-item to="/error" prepend-icon="mdi-alert-circle" title="Error Log"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2 text-center">
            Made By Tierkun & FPHaikal
          </div>
        </template>
      </v-navigation-drawer>

      <v-main>
        <nav class="navbar navbar-expand-lg d-lg-none bg-body-tertiary fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">{{ $route.meta.title }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/voltage" class="nav-link">Voltage</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/system" class="nav-link">System</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/error" class="nav-link">Error Log</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <router-view class="bg-light" />
      </v-main>
    </v-layout>
  </v-card>
</template>