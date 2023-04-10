<!-- ./pages/index.vue -->


<template>
  <main>
    <section class="hero-section">
      <div class="wrapper grid  sm:grid-cols-2 gap-4">
        <header class="order-3 sm:order-1 text-center sm:text-left">
          <h1 class="font-black text-7xl mb-1 ">
            Привет, я Юрий <span class="absolute text-4xl">*</span>
          </h1>
          <p class="inline">Приглашаю вас почитать
            <NuxtLink  class="blog-link mb-8 animate-bounce" to="/blog">
              мой блог
            </NuxtLink>
          </p>

          <p class="bg-gray-100 border-l-4 p-4 text-xs border-gray-500 italic p-4 text-left">
            * Веб-дизайнер и Фронтенд-разработчик, одержимый созданием идеальных интерфейсов
          </p>
        </header>

        <div class="avatar order-1 sm:order-3">
          <img class="avatar_img" src="/img/avatar2.png" alt="">
        </div>

      </div>


    </section>
  </main>
</template>

<style scoped>
.hero-section {
  @apply flex justify-center p-4 w-full h-screen bg-slate-50 text-slate-700;
}

.hero-section > .wrapper {
  @apply m-auto max-w-6xl;
}

.blog-link {
  @apply inline-block no-underline;
  @apply bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-white text-sm md:text-base p-2 py-1 rounded-md opacity-75;

}

.avatar {
  @apply relative w-44 h-44 m-auto sm:w-72 sm:h-72;
}

.avatar_img {
  @apply absolute w-64 h-64 sm:w-96 sm:h-96;

  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  object-fit:cover;
}
</style>