<template>
  <main>
    <section class="section">
      <strong class="flex place-content-center text-3xl mb-8">
        <img src="@/assets/icons/logo/EMAHO_logo-line.svg" alt="" />
      </strong>
      <p class="mb-5 px-4">
        Мы — команда профессионалов из Алматы. Мы делаем сайты, SPA и
        кросс-платформенные мобильные приложения. <abbr class="text-indigo-700 hover:cursor-help" title = "Свяжитесь с нами удобным для Вас способом">Оценим Ваш проект!</abbr>
      </p>
      <div class="flex space-x-4 place-content-center">
        <a
          class="
            button cursor-pointer px-3
          "
        >
          <template v-for="(route, i) in routes" :key="i">
            <a v-if="route.name ==='Портфолио'" @click="movePage(route.to)" class="text-gray-50 px-4">{{
              route.name
            }}</a>
          </template>
        </a>
        <a
          class="
            button cursor-pointer px-4
          "
        >
          <template v-for="(route, i) in routes" :key="i">
            <a v-if="route.name ==='Контакты'" @click="movePage(route.to)" class="text-gray-50 px-4">{{
              route.name
            }}</a>
          </template>
        </a>
      </div>
    </section>


    <section>
      <h1 class="font-bold sm:font-normal sm:text-xl text-indigo-700 transform hover:translate-x-60 duration-3000">
        <i class="fa fa-chevron-right pb-4"></i>
        Мы неплохо знаем и управляемся с
      </h1>
      <div class="flex flex-wrap gap-2 mt-3">
        <template v-for="(item, x) in dependencies" :key="x">
          <Pill :label="item" />
        </template>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script setup>
import { useCount } from "@/stores/counter";
import { useRouter } from "vue-router";
import Pill from "@/components/Pill.vue";
import Footer from "@/components/Footer.vue";

const count = useCount();
const router = useRouter();

const movePage = (to) => router.push({ name: to });

const dependencies = [
  "JavaScript",
  "Vue 3",
  "Flutter",
  "Dart",
  "Swift",
  "Laravel",
  "MySQL",
  "1C",
  "Firebase",
  "WebSocket",
  "WebRTC",
  "...",
];

const routes = [
  {
    name: "Контакты",
    to: "About",
  },
  {
    name: "Портфолио",
    to: "Portfolio",
  },
];
</script>

<style scoped>
.section {
  @apply w-full bg-gray-50 border-4 border-gray-700 py-8 px-5 rounded-xl mb-10 sm:mb-16 mt-4 sm:mt-10;
}

.button {
  @apply bg-gray-800
          hover:bg-indigo-700
		  duration-200
          text-gray-50
          py-2
          rounded-lg
          inline-block;
}
</style>
