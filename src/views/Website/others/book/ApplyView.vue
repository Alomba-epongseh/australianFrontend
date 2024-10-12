<template>
  <section class="booking-container">
    <h2 class="text-center">Book an Appointment</h2>
    <form @submit.prevent="submitBooking" class="booking-form">
      <div class="form-group">
        <label for="name">Full Name:</label>
        <input type="text" id="name" v-model="bookingDetails.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="bookingDetails.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="date">Preferred Date:</label>
        <input type="date" id="date" v-model="bookingDetails.date" required />
      </div>
      <div class="form-group">
        <label for="time">Preferred Time:</label>
        <input type="time" id="time" v-model="bookingDetails.time" required />
      </div>
      <div class="form-group">
        <label for="message">Additional Message:</label>
        <textarea id="message" v-model="bookingDetails.message"></textarea>
      </div>
      <button type="submit">Submit Booking</button>
    </form>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      bookingDetails: {
        name: "",
        email: "",
        date: "",
        time: "",
        message: "",
      },
    };
  },
  mounted() {
    emailjs.init({ publicKey: "a2xIJ9e9fC8WuFhWT" }); // Replace with your actual public key
  },
  methods: {
    ...mapActions(["displayToast"]),
    async submitBooking() {
      const templateParams = {
        name: this.bookingDetails.name,
        email: this.bookingDetails.email,
        date: this.bookingDetails.date,
        time: this.bookingDetails.time,
        message: this.bookingDetails.message,
      };

      try {
        await emailjs.send(
          "service_yguj8hq",
          "template_hdmu388",
          templateParams,
          "a2xIJ9e9fC8WuFhWT"
        );
        this.displayToast({
          severity: "success",
          life: 3000,
          title: "Success!",
          message: "Booking submitted successfully!",
          closable: true,
        });
      } catch (error) {
        // Display error toast
        this.displayToast({
          severity: "error",
          life: 3000,
          title: "Error!",
          message:
            "There was an error submitting your booking. Please try again later.",
          closable: true,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.booking-container {
  @apply mt-20 mx-auto max-w-xl p-4 bg-white rounded shadow;
  h2 {
    @apply text-center text-2xl font-bold;
  }
  .booking-form {
    @apply flex flex-col space-y-4;
    .form-group {
      @apply flex flex-col;
      label {
        @apply mb-2 font-medium;
      }
      input,
      textarea {
        @apply border border-gray-300 p-2 rounded;
      }
      textarea {
        @apply h-24;
      }
    }
    button {
      @apply mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600;
    }
  }
}
</style>
