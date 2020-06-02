<template>
  <v-card-text>
    <v-dialog v-model="dialog" width="600" persistent>
      <v-card class="pr-8">
        <v-card-title class="headline">Enter details</v-card-title>

        <v-card-text>
          <v-form v-model="form.isValid" ref="form">
            <v-text-field
              v-model="person.firstName"
              placeholder="First Name"
              :rules="form.nameRules"
            />
            <v-text-field
              v-model="person.lastName"
              placeholder="Last Name"
              :rules="form.nameRules"
            />
            <v-text-field v-model="person.email" placeholder="Email" :rules="form.emailRules" />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="submit"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card-text>
</template>

<script>
export default {
  name: "NewQuizDialog",
  data: () => ({
    form: {
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      isValid: false
    },
    person: {
      email: "b@b.bb",
      firstName: "b",
      lastName: "b"
    }
  }),
  methods: {
    submit() {
      this.$refs.form.validate();
      if (this.form.isValid) {
        this.$store.dispatch("quiz/enterPlayer", this.person);
      }
    }
  },
  computed: {
    dialog() {
      return this.$store.getters["quiz/showPlayerDialog"];
    }
  },
  components: {}
};
</script>

<style scoped>
</style>