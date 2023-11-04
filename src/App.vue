<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Aqualifier"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item to="/" prepend-icon="mdi-home" title="Home"></v-list-item>
          <v-list-item to="/voltage" prepend-icon="mdi-account-multiple" title="Voltage"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Actuator"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="System"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <nav class="navbar navbar-expand-lg d-lg-none bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">{{ $route.meta.title }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/voltage" class="nav-link" href="#">Voltage</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Actuator</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>