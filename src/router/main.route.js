export const MainRoute = {
  path: "/",
  name: "Website",
  children: [
    {
      path: "",
      name: "landing",
      component: () => import("@/views/Website/WebsiteView.vue"),
    },
    {
      path: "employer-sponsorship",
      name: "employer-sponsorship",
      component: () => import("@/views/Website/visas/Employer/WebsiteView.vue"),
    },
    {
      path: "skilled-visa",
      name: "skilled-visa",
      component: () => import("@/views/Website/visas/skilled/App.vue"),
    },
    {
      path: "business-visas",
      name: "business-visa",
      component: () => import("@/views/Website/visas/business/App.vue"),
    },
    {
      path: "family-visas",
      name: "family-visa",
      component: () => import("@/views/Website/visas/family/App.vue"),
    },
    {
      path: "student-visas",
      name: "student-visa",
      component: () => import("@/views/Website/visas/student/App.vue"),
    },
    {
      path: "cancellation-and-review",
      name: "cancellation",
      component: () => import("@/views/Website/visas/cancellation/App.vue"),
    },
    {
      path: "resident-return-visa-rrv",
      name: "rrv",
      component: () => import("@/views/Website/visas/RRV/App.vue"),
    },
    {
      path: "careers",
      name: "careers",
      component: () => import("@/views/Website/others/careers/App.vue"),
    },
    {
      path: "newsletter",
      name: "newsletter",
      component: () => import("@/views/Website/others/newsletter/App.vue"),
    },
    {
      path: "testimonials",
      name: "testimonials",
      component: () => import("@/views/Website/others/testimonials/App.vue"),
    },
    {
      path: "meet-the-team",
      name: "team",
      component: () => import("@/views/Website/others/team/App.vue"),
    },
    {
      path: "contact-us",
      name: "contact",
      component: () => import("@/views/Website/others/contact/App.vue"),
    },
    {
      path: "book-an-appointment",
      name: "appointment",
      component: () => import("@/views/Website/others/book/App.vue"),
    },
    {
      path: "faqs",
      name: "faqs",
      component: () => import("@/views/Website/others/faqs/App.vue"),
    },
  ],
};
