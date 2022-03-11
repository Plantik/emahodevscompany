<template>
  <main>
    <section class="section relative">
      <strong class="flex place-content-center text-3xl mb-8">
        <img src="@/assets/icons/logo/EMAHO_logo-line.svg" alt="" />
      </strong>
      <p class="mb-5 px-4 text-5xl text-center text-indigo-700">
        <span>ВЫШЛЕМ ПО ЗАПРОСУ</span>
      </p>
      <div class="flex space-x-6 place-content-center">
        
		<p class="font-medium"><i class="fa fa-pen pr-2"></i>info@emaho.dev</p>
		
      </div>
	  <BackBtn
          class="
            transform
            hover:-translate-x-0.5 hover:text-indigo-700
            duration-200
            absolute md:top-0 md:-left-36
			-bottom-56 left-0
            text-gray-800
            font-bold
            text-4xl
          "
        />
    </section>
    <Footer />
  </main>
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import BackBtn from "@/components/BackBtn.vue";


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
          px-5
          py-2
          rounded-lg
          inline-block;
}
</style>
