<template>
  <section class="preview-container">
    <section class="preview">
      <div class="preview-text">
        <h1>Sign up for our monthly newsletter</h1>
        <br />
        <p>
          Stay up to date with immigration news by completing the form (right).
        </p>
        <br />
      </div>
      <div class="preview-img">
        <div>
          <h1>Subscribe to our Newsletter</h1>
          <br />
          <div class="form">
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
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
section.preview {
  @apply block md:grid md:grid-cols-2 mt-20 justify-center;
  div.preview-text {
    @apply md:px-5 md:pl-20 px-2 w-full md:mt-24 mt-0;
    h1 {
      @apply text-black text-4xl font-semibold py-5;
    }
    p {
      @apply text-black text-[1.2rem]  mt-5;
    }
    h4 {
      @apply font-normal text-xl;
    }
    ul {
      @apply list-disc px-10;
      li {
        @apply text-[1.2rem] py-1.5;
        span {
          @apply font-normal;
        }
      }
    }
    h2 {
      @apply text-xl font-semibold;
    }
  }
}
a {
  @apply text-green-500 font-semibold;
}
h1 {
  @apply font-semibold text-black text-4xl md:mx-0 mx-5;
}
div.form {
  @apply w-full right-auto mx-5;
  label {
    @apply text-[1.1rem] block mt-4;
  }
  input {
    @apply mt-2 border-gray-600 border py-3 text-gray-400 md:w-3/4 w-[20rem]  focus:border-orange-500;
  }
}
button {
  @apply bg-black text-white py-2 px-3 rounded-md my-7;
}
</style>
