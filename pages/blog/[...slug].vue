<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, async () => {
  let article = queryContent().where({ _path: path }).findOne();

  let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1}).findSurround(path);
  return {
    article: await article,
    surround: await surround,
  };
});

</script>






<template>
  <main>
    <article class="prose p-16 max-w-3xl m-auto">
      <ContentDoc />
    </article>
  </main>
</template>