<template>
  <div>
    <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </h1>
        </div>
      </div>
    </section>

    <div class="container">
      <!-- START ARTICLE FEED -->
      <section class="articles">
        <div class="column is-8 is-offset-2">
          <!-- START ARTICLE -->
          <div class="card article" v-for="post in posts" :key="post.id">
            <div class="card-content">
              <div class="media">
                <div class="media-center">
                  <!-- Store == > {{ getFirstUser.name }}
                  <br />
                  Global == > {{ $store.state.globalPost }} -->

                  <img
                    src="https://res.cloudinary.com/ameo/image/upload/v1639144778/typocat_svbspx.png"
                    class="author-image"
                    alt="Placeholder image"
                  />
                </div>
                <div class="media-content has-text-centered">
                  <p class="title article-title">
                    {{ post.title }}
                  </p>
                  <div class="tags has-addons level-item">
                    <span v-if="users.length" class="tag is-rounded is-info"
                      >@{{
                        users.find((user) => user.id == post.userId).username
                      }}
                    </span>
                    <span class="tag is-rounded">May 10, 202X</span>
                  </div>
                </div>
              </div>
              <div class="content article-body">
                <p>{{ post.body }}</p>
              </div>
            </div>
          </div>
          <!-- END ARTICLE -->
        </div>
      </section>
      <!-- END ARTICLE FEED -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  data: () => ({
    posts: [],
    users: [],
  }),

  computed: {
    ...mapGetters("users", ["getFirstUser"]),
  },

  async fetch() {
    try {
      this.posts = await this.$axios.$get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.users = await this.$axios.$get(
        `https://jsonplaceholder.typicode.com/users`
      );
    } catch (err) {
      console.log(err.message);
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 700);
    });
  },
};
</script>
<style></style>
