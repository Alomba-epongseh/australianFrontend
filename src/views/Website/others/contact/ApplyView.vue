<template>
  <section class="card-container">
    <div class="card" v-for="(card, index) in cards" :key="index">
      <div class="card-inner">
        <div class="card-front">
          <i class="pi pi-map-marker"></i>
          <h2>{{ card.title }}</h2>
        </div>
        <div class="card-back">
          <h2>{{ card.backTitle }}</h2>
          <p>{{ card.description }}</p>
          <p>{{ card.backDescription }}</p>
          <p>{{ card.tel }}</p>
          <p>{{ card.email }}</p>
          <p>{{ card.time }}</p>
          <p>{{ card.day }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Perth Office",
          description: "U29/118 Royal Street East Perth, WA 6004, Australia",
          tel: "Tel1: +61 8 9268 4111",
          backTitle: "Perth Office",
          backDescription: "Tel2: 1800 VISA 00 (1800 847 200)",
          email: "Email: [email protected]",
          time: "Working hours: 9:00am – 5:00pm",
          day: "Mon to Fri",
        },
        {
          title: "Melbourne Office",
          description: "Level 27, 101 Collins Street, Melbourne VIC 3000",
          tel: "Tel1: +61 3 9221 6240",
          backTitle: "Melbourne Office",
          backDescription: "Tel2: 1800 VISA 00 (1800 847 200)",
          email: "Email: [email protected]",
          time: "Working hours: 9:00am – 5:00pm",
          day: "Mon to Fri",
        },
        {
          title: "Sydney Office",
          description:
            "Level 25, 100 Mount Street, North Sydney, NSW, 2060, Australia",
          backTitle: "Sydney Office",
          backDescription: "National free call: 1800 VISA 00 (1800 847 200)",
          tel: "Tel: +61 2 9959 2204",
          email: "Email: [email protected]",
          time: "Working hours: 9:00am – 5:00pm",
          day: "Mon to Fri",
        },
        {
          title: "Tehran Office",
          description:
            "Unit 14, Level 4, Number 34, Sharifi Brothers (Khashayar) St Valiasr (AJ) street (after Vanak square)",
          backTitle: "Tehran Office",
          backDescription: "Tel: +98 21 88666181 – 5 & 88209920",
          tel: "Postal code: 1969943911",
          email: "Email: [email protected]",
          time: "Working hours: 9:00am – 5:00pm",
          day: "Mon to Fri",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  @apply flex justify-center space-x-2 mt-10;
}

.card {
  @apply w-[30rem] h-[40rem] relative cursor-pointer;
  perspective: 1000px;

  .card-inner {
    @apply w-full h-full transition-transform duration-700;
    transform-style: preserve-3d;
    position: relative;
  }

  &:hover .card-inner {
    transform: rotateY(180deg); /* Apply 3D rotation */
  }

  .card-front,
  .card-back {
    @apply absolute w-full h-full bg-white flex flex-col justify-center items-center p-5 text-center;
    backface-visibility: hidden;
    i {
      @apply border rounded-full p-4 border-white text-4xl font-bold my-3 text-white;
    }
  }

  .card-front {
    @apply bg-green-600;
  }

  .card-back {
    @apply bg-green-600;
    transform: rotateY(180deg);
  }

  h2 {
    @apply text-4xl font-semibold text-white my-10;
  }

  p {
    @apply text-white text-sm my-5;
  }
}
</style>
