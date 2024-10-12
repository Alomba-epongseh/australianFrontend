/* eslint-disable */
<template>
  <div class="relative" style="z-index: 1000">
    <div
      class="fixed inset-0 bg-gray-700 bg-opacity-90 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full justify-center p-4 text-center items-center">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full"
        >
          <div class="bg-white px-6 pb-4 pt-5">
            <div class="ks-job-application-page">
              <h1>Job Application Form</h1>
              <p>Fill the form below to apply for the job</p>
              <br />

              <form @submit.prevent="submitApplication">
                <!-- Personal Details -->
                <div class="ks-form-group">
                  <label for="fullname">Full Name</label>
                  <InputText
                    type="text"
                    v-model="application.fullname"
                    id="fullname"
                    placeholder="John Doe"
                    class="ks-input"
                  />
                </div>

                <div class="ks-form-group">
                  <label for="email">Email</label>
                  <InputText
                    type="email"
                    v-model="application.email"
                    placeholder="example@example.com"
                    id="email"
                    class="ks-input"
                  />
                </div>

                <div class="ks-form-group">
                  <label for="tel">Phone Number</label>
                  <InputText
                    type="tel"
                    v-model="application.tel"
                    id="tel"
                    placeholder="+6748484841"
                    class="ks-input"
                  />
                </div>
                <div class="ks-form-group">
                  <label for="text">Last role</label>
                  <InputText
                    type="text"
                    v-model="application.last_job_title"
                    id="tel"
                    placeholder="Frontend Developer"
                    class="ks-input"
                  />
                </div>
                <div class="ks-form-group">
                  <label for="text">Years Of Experience</label>
                  <InputText
                    type="text"
                    v-model="application.years_of_experience"
                    id="tel"
                    placeholder="5 years"
                    class="ks-input"
                  />
                </div>
                <div class="ks-form-group">
                  <label for="country">Country</label>
                  <Dropdown
                    inputClass="w-full"
                    class="ks-input"
                    placeholder="Select your country"
                    :options="countries"
                    v-model="application.country"
                    data-dropdown-toggle="dropdown"
                    aria-required="true"
                  />
                </div>

                <div class="ks-form-group">
                  <label for="proposed_salary">Proposed Salary</label>
                  <InputText
                    type="tel"
                    v-model="application.proposed_salary"
                    id="proposed_salary"
                    placeholder="$1000000"
                    class="ks-input"
                  />
                </div>
                <h2>Education History</h2>
                <div
                  v-for="(edu, index) in application.education"
                  :key="index"
                  class="ks-education-section"
                >
                  <h3>Education {{ index + 1 }}</h3>

                  <div class="ks-form-group">
                    <label for="degree">Degree</label>
                    <InputText
                      type="text"
                      v-model="edu.degree"
                      class="ks-input"
                    />
                  </div>

                  <div class="ks-form-group">
                    <label for="institution">Institution</label>
                    <InputText
                      type="text"
                      v-model="edu.institution"
                      class="ks-input"
                    />
                  </div>

                  <div class="ks-form-group">
                    <label for="years_of_study">Years of Study</label>
                    <InputText
                      type="text"
                      v-model="edu.years_of_study"
                      class="ks-input"
                    />
                  </div>
                </div>
                <button @click="addEducation" class="button">
                  Add More Education
                </button>

                <!-- Experience Section -->
                <h2>List of Experiences</h2>
                <div
                  v-for="(exp, index) in application.experience"
                  :key="index"
                  class="ks-experience-section"
                >
                  <h3>Experience {{ index + 1 }}</h3>

                  <div class="ks-form-group">
                    <label for="company">Company</label>
                    <InputText
                      type="text"
                      v-model="exp.company"
                      class="ks-input"
                    />
                  </div>

                  <div class="ks-form-group">
                    <label for="job_title">Job Title</label>
                    <InputText
                      type="text"
                      v-model="exp.job_title"
                      class="ks-input"
                    />
                  </div>

                  <div class="ks-form-group">
                    <label for="years_of_experience">Years of Experience</label>
                    <InputText
                      type="text"
                      v-model="exp.years_of_experience"
                      class="ks-input"
                    />
                  </div>
                </div>
                <button @click="addExperience" class="button">
                  Add More Experience
                </button>

                <!-- Achievements Section -->
                <h2>Wall of Achievements</h2>
                <div
                  v-for="(ach, index) in application.achievement"
                  :key="index"
                  class="ks-achievement-section"
                >
                  <h3>Achievement {{ index + 1 }}</h3>
                  <br />

                  <div class="ks-form-group">
                    <label for="achievement">Achievement</label>
                    <InputText
                      type="text"
                      v-model="ach.achievement"
                      class="ks-input"
                    />
                  </div>

                  <div class="ks-form-group">
                    <label for="description">Description</label>
                    <Editor v-model="ach.description" class="ks-editor" />
                  </div>
                </div>
                <br />
                <br />
                <button @click="addAchievement" class="button">
                  Add More Achievements
                </button>
                <div class="ks-form-group">
                  <label for="reason" class="font-semibold text-lg"
                    >Application Letter
                    <span class="text-red-500">*</span></label
                  ><br />
                  <small
                    >Tell us why you should be selected for this position be
                    concised and straight to the point</small
                  >
                  <Editor
                    v-model="application.reason"
                    id="tel"
                    placeholder="Do a write up to support your application and make your employer impressed"
                    class="reason"
                  />
                </div>
              </form>
            </div>
          </div>
          <br />
          <div class="bg-gray-50 px-4 py-3 justify-center flex">
            <button
              type="button"
              @click.prevent="this.$emit('toggleForm')"
              class="mt-3 inline-flex w-auto justify-center rounded-md md:w-auto bg-white px-6 py-2 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Close
            </button>
            <button
              type="button"
              @click.prevent="submitApplication"
              class="flex justify-center items-center gap-2 primary text-white md:w-auto rounded-md px-3 py-2 text-sm font-medium shadow-sm ml-3 w-auto"
            >
              <i class="pi pi-plus"></i>
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "primevue/editor";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";

export default {
  components: { InputText, Editor, Dropdown },
  data() {
    return {
      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo, Republic of the (Congo-Brazzaville)",
        "Congo, Democratic Republic of the (Congo-Kinshasa)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic (Czechia)",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor (Timor-Leste)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Ivory Coast",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea, North (North Korea)",
        "Korea, South (South Korea)",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
      ],
      application: {
        fullname: "",
        email: "",
        tel: "",
        country: "",
        proposed_salary: "",
        last_job_title: "",
        reason: "",
        years_of_experience: "",
        jobId: this.$route.params.jobId,
        userId: this.$route.params.userId,
        education: [
          {
            degree: "",
            institution: "",
            years_of_study: "",
          },
        ],
        experience: [
          {
            company: "",
            job_title: "",
            years_of_experience: "",
          },
        ],
        achievement: [
          {
            achievement: "",
            description: "",
          },
        ],
      },
    };
  },
  methods: {
    addEducation() {
      this.application.education.push({
        degree: "",
        institution: "",
        years_of_study: "",
      });
    },
    addExperience() {
      this.application.experience.push({
        company: "",
        job_title: "",
        years_of_experience: "",
      });
    },
    addAchievement() {
      this.application.achievement.push({
        achievement: "",
        description: "",
      });
    },
    submitApplication() {
      this.$store.dispatch("addApplication", this.application);
    },
  },
};
</script>

<style scoped>
h1 {
  @apply text-4xl font-semibold;
}
h2 {
  @apply text-2xl font-semibold my-3;
}
.button {
  @apply border-green-500 border py-3 px-2 text-white bg-green-800 hover:bg-green-300 rounded-md mx-auto my-auto mb-10;
}
.ks-editor {
  @apply h-32 mb-20 md:mb-8;
}
p {
  @apply text-gray-500;
}
.ks-form-group {
  @apply mb-8;
}

.ks-input {
  @apply w-full p-2;
}
.reason {
  @apply h-32 mb-20;
}
small {
  @apply text-gray-500;
}
</style>
