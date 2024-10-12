<template>
  <section class="preview-container">
    <div class="header">
      <h2>Your Details</h2>
      <small>Let us know how to get back to you.</small>
    </div>
    <div class="form">
      <div>
        <label for="full"> Full Name <span class="asterisk">*</span> </label>
        <input type="text" v-model="fullName" id="full" required />
      </div>
      <div>
        <label for="email">Email Address <span class="asterisk">*</span></label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="phone">Last Name</label>
        <input type="text" v-model="lastName" id="phone" />
      </div>
    </div>
    <h2>How can we help?</h2>
    <small>Feel free to ask a question or simply leave a comment.</small>
    <div class="form">
      <div>
        <label for="category">Choose a Category</label>
        <select v-model="category" id="category">
          <option value="Business Visa">Business Visa</option>
          <option value="Employer Sponsorship">Employer Sponsorship</option>
          <option value="Skilled Visa">Skilled Visa</option>
        </select>
      </div>
      <div>
        <label>I would like</label>
        <div class="checkbox-group">
          <div>
            <input type="checkbox" id="checkbox1" v-model="callBack" />
            <label for="checkbox1">a call back</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox2" v-model="appointment" />
            <label for="checkbox2">an appointment</label>
          </div>
        </div>
      </div>
      <div>
        <label for="location">Where are you located?</label>
        <select v-model="location" id="location">
          <option value="Sydney">Sydney</option>
          <option value="Perth">Perth</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Tehran">Tehran</option>
          <option value="Dubai">Dubai</option>
        </select>
      </div>
      <div class="textarea">
        <label for="textarea">Comments / Questions *</label>
        <textarea
          v-model="comments"
          id="textarea"
          cols="30"
          rows="6"
          required
        ></textarea>
      </div>
    </div>
    <button @click.prevent="sendEmail">Submit</button>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      fullName: "",
      email: "",
      lastName: "",
      category: "",
      callBack: false,
      appointment: false,
      location: "",
      comments: "",
    };
  },
  methods: {
    ...mapActions(["displayToast"]),

    async sendEmail() {
      const templateParams = {
        full_name: this.fullName,
        email: this.email,
        last_name: this.lastName,
        category: this.category,
        call_back: this.callBack ? "Yes" : "No",
        appointment: this.appointment ? "Yes" : "No",
        location: this.location,
        comments: this.comments,
      };

      try {
        await emailjs.send(
          "service_yguj8hq",
          "template_gzjm8vf",
          templateParams,
          "a2xIJ9e9fC8WuFhWT"
        );
        // Display success toast
        this.displayToast({
          severity: "success",
          life: 3000,
          title: "Success!",
          message: "Contact information submitted successfully!",
          closable: true,
        });
      } catch (error) {
        // Display error toast
        this.displayToast({
          severity: "error",
          life: 3000,
          title: "Error!",
          message:
            "There was an error submitting your contact info. Please try again later.",
          closable: true,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section.preview-container {
  @apply mt-2 justify-center;

  h2 {
    @apply text-[0.9rem] font-semibold;
  }

  small {
    @apply text-[1.0rem];
  }
  button {
    @apply bg-gray-600 text-white font-medium py-2 px-3 rounded-md;
  }
  div.form {
    @apply grid md:grid-cols-3 my-10;

    label {
      @apply text-[0.9rem] block font-semibold;

      span {
        @apply text-red-500;
      }
    }

    input,
    select {
      @apply mt-2 py-1 text-gray-900 w-full bg-green-100 rounded-md md:w-[25rem] focus:border-orange-500;
    }
    textarea {
      @apply mt-2 py-1 text-gray-900 w-full md:col-span-3 bg-green-100 rounded-md md:w-[90rem] focus:border-orange-500;
    }
    .checkbox-group {
      div {
        @apply flex space-x-4 items-center text-center my-2;
      }

      label {
        @apply text-[0.9rem] font-semibold text-gray-700;
      }

      input {
        @apply w-4 h-4;
      }
    }
  }
}
</style>
