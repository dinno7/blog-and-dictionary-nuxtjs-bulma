<template>
  <div>
    <div
      class="dict columns is-flex is-flex-direction-column is-justify-content-start is-align-items-center mt-6"
      style="min-width: 100vw; min-height: 100vh; row-gap: 2.5rem"
    >
      <h1 class="is-size-2">Dictionary</h1>
      <div class="control is-medium" ref="loadingSection">
        <input
          class="input is-medium"
          @input="translateText"
          type="text"
          style="width: 350px"
          placeholder="Write text here"
          v-model.trim="text"
        />
      </div>
      <button
        class="button is-primary is-active"
        @click="translateText"
        :disabled="!text.length"
      >
        Refresh translation
      </button>
      <p class="is-size-3">{{ translatedText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "",
    translatedText: "",
  }),
  // middleware: ["auth"],

  methods: {
    async translateText() {
      if (!this.text.length) {
        return;
      } else {
        try {
          this.$refs.loadingSection.classList.add("is-loading");
          let x = await this.$axios.$get(
            `https://nexa-apis.herokuapp.com/tr?text=${this.text}&dest_lang=fa`
          );
          this.translatedText = x.data.translation;
          this.$refs.loadingSection.classList.remove("is-loading");
        } catch (err) {
          setTimeout(() => {
            this.$toast.error(
              `There is an error! please try again...<br />The error is ==> ${err.message}`
            );
          }, 150);
          console.log(err.message);
        }
      }
    },
  },
};
</script>

<style>
.toasted-container {
  top: 3% !important;
}
.toasted {
  border-radius: 7px !important;
  font-size: 1.2rem !important;
}
.toasted a {
  color: rgb(255, 255, 255) !important;
}
.toasted a i {
  font-size: 1rem !important;
}
</style>
