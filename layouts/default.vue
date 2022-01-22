<template>
  <div>
    <!-- START NAV -->
    <nav class="navbar" ref="navbar">
      <div class="container">
        <div class="navbar-brand">
          <NuxtLink class="navbar-item" :to="{ name: 'index' }">
            <DinnoLogo />
          </NuxtLink>
          <span
            class="navbar-burger burger"
            :class="{ 'is-active': navActive }"
            @click="navActive = !navActive"
            data-target="navbarMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navbarMenu"
          class="navbar-menu"
          :class="{ 'is-active': navActive }"
        >
          <div class="navbar-start">
            <NuxtLink to="/" class="navbar-item is-active"> Home </NuxtLink>
            <NuxtLink :to="{ name: 'dictionary' }" class="navbar-item">
              Dictionary
            </NuxtLink>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" @click="showDropdown"> Account </a>
              <div class="navbar-dropdown">
                <a class="navbar-item"> Dashboard </a>
                <a class="navbar-item"> Profile </a>
                <a class="navbar-item"> Settings </a>
                <hr class="navbar-divider" />
                <div class="navbar-item">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->
    <Nuxt keep-alive />
  </div>
</template>
<script>
export default {
  data() {
    return {
      navActive: false,
    };
  },
  methods: {
    showDropdown(el) {
      if (el.target.nextElementSibling.style.display === "none") {
        el.target.nextElementSibling.style.display = "unset";
      } else {
        el.target.nextElementSibling.style.display = "none";
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", (e) => {
      if (scrollY > this.$refs.navbar.clientHeight) {
        this.$refs.navbar.style.opacity = 0.8;
      } else {
        this.$refs.navbar.style.opacity = 1;
      }
    });
  },
};
</script>
