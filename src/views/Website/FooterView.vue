<template>
  <section>
    <div>
      <h1>Contact Us</h1>
      <br />
      <h2>Perth Office:</h2>
      <address>
        U29/118 Royal Street, East Perth, WA 6004, <br />
        Australia
      </address>
      <p>
        Tel:
        <span><a href="https://+61 8 9268 4111">+61 8&nbsp;9268 4111</a></span>
      </p>
      <p>
        National free call:&nbsp;<a href="tel:1800 847 200">1800 847 200</a>
      </p>
      <p>
        Email:&nbsp;<span
          ><a href="mailto:support@australiaplacement.com"
            >support@australiaplacement.com</a
          ></span
        >
      </p>
      <p>
        Working hours:<br />
        Mon – Fri: 9:00am – 5:00pm
      </p>
      <h2>Melbourne Office:</h2>
      <address>Level 27, 101 Collins Street, Melbourne VIC 3000</address>
      <p>
        Tel:&nbsp;<span><a href="tel:+61 3 9221 6240">+61 3 9221 6240</a></span>
      </p>
      <p>
        National free call:&nbsp;<a href="tel:1800 847 200">1800 847 200</a>
      </p>
      <p>
        Email:<span
          ><a href="mailto:support@australiaplacement.com"
            >&nbsp;support@australiaplacement.com</a
          ></span
        >
      </p>
      <p>
        Working hours:<br />
        Mon – Fri: 9:00am – 5:00pm
      </p>
    </div>
    <div>
      <br />
      <br />
      <h2>Sydney Office:</h2>
      <address>
        Level 25, 100 Mount Street, North Sydney, NSW, <br />
        2060, Australia
      </address>
      <p>
        Tel:
        <span><a href="https:// +61 2 9959 2204"> +61 2 9959 2204</a></span>
      </p>
      <p>
        National free call:&nbsp;<a href="tel:1800 847 200">1800 847 200</a>
      </p>
      <p>
        Email:&nbsp;<span
          ><a href="mailto:support@australiaplacement.com"
            >support@australiaplacement.com</a
          ></span
        >
      </p>
      <p>
        Working hours:<br />
        Mon – Fri: 9:00am – 5:00pm
      </p>
      <h2>Tehran Office:</h2>
      <address>
        Unit 14, Level 4, Number 34,<br />
        Sharifi Brothers (Khashayar) St <br />
        Valiasr (AJ) street (after Vanak square)
      </address>
      <p>Postal code: 1969943911</p>
      <p>
        Tel1:&nbsp;<span
          ><a href="tel:+98 21 88666181– 5">+98 21 88666181– 5</a></span
        >
      </p>
      <p>Tel2:&nbsp;<a href="tel:+98 21 88209920">+98 21 88209920</a></p>
      <p>
        Email:<span
          ><a href="mailto: support@australiaplacement.com"
            >&nbsp; support@australiaplacement.com</a
          ></span
        >
      </p>
      <p>
        Working hours:<br />
        Sat – Thu: 9:00am – 5:00pm
      </p>
    </div>
    <div>
      <h1>Subscribe to our Newsletter</h1>
      <br />
      <div class="form">
        <div class="indicates-required">
          <span class="asterisk">*</span> indicates required
        </div>
        <div>
          <label for="email">
            Email Address<span class="asterisk">*</span>
          </label>
          <input type="text" id="email" />
        </div>
        <div>
          <label for="email"> First Name </label>
          <input type="text" id="email" />
        </div>
        <div>
          <label for="email"> Last Name </label>
          <input type="text" id="email" />
        </div>
        <button>Subscribe</button>
      </div>
      <h1>Quick Links</h1>
      <a href="">Newsletter</a>
      <hr />
      <a href="">privacy Policy</a>
      <hr />
      <a href="">Terms and conditions</a>
      <hr />
    </div>
    <div class="copyright">
      © Copyright 2024 Home Migration Services | Website Development By DvApps
      Web Services
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  @apply flex flex-col md:grid md:grid-cols-3 md:mx-24 mx-5;
  div {
    @apply space-y-3;
  }
  h1 {
    @apply text-green-500 text-xl font-semibold mt-5;
  }
  h2 {
    @apply font-semibold text-[1.2rem] my-3;
  }
  p {
    @apply text-[1.1rem];
    a {
      @apply text-green-500;
    }
  }
  address {
    @apply text-[1.0rem];
  }
  label {
    @apply text-[1.1rem];
  }
  span.asterisk {
    @apply text-red-500 text-[1.1rem];
  }
  .indicates-required {
    @apply text-right mr-24 text-[0.7rem];
  }
  div.copyright {
    @apply text-center min-w-full col-span-3 my-5 text-gray-500 text-sm;
  }
  div.form {
    label {
      @apply text-[1.1rem] block;
    }
    input {
      @apply mt-2 border-gray-600 border py-3 text-gray-400 w-full md:w-[20rem] focus:border-orange-500;
    }
  }
  button {
    @apply bg-black text-white py-2 px-3 rounded-md;
  }
}
</style>
