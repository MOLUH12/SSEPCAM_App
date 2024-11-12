<template>
    <div class="bg-white shadow rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title'],
  };
  </script>
  