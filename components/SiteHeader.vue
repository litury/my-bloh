<script setup>


const route = useRoute()


</script>

<template>
  <header class="site-header">
    <div class="wrapper">
      <NuxtLink v-show="route.path !== '/'"
                to="/" class="no-underline">
        <figure class="logo">
          <img class="logo-img" src="/img/avatar2.png" alt="логотип">
          <span class="logo-text text-xs absolute">divatoz.ru</span>
        </figure>

      </NuxtLink>



      <nav class="site-nav">
        <ul class="links">
          <li v-show="route.path !== '/blog'" class="link">
            <NuxtLink to="/blog">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  @apply sticky top-0 w-full p-2 bg-slate-100 bg-opacity-40 border-b-2 border-white border-opacity-30 backdrop-blur-lg z-20;
}

.site-header > .wrapper {
  @apply flex items-center justify-between max-w-6xl m-auto;
}

.logo {
  @apply relative h-14 w-16 m-auto;
}

.logo-img {
  @apply absolute h-12 w-12;

  top:0;
  left:50%;
  transform:translateX(-50%);
  object-fit:cover;
}

.logo-text {
  bottom:0;
  left:50%;
  transform:translateX(-50%);
}

</style>