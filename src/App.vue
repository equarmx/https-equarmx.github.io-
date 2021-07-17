<template>
  <div id="app">
    <head>
      <meta name="viewport" content="width=device-width">
    </head>
    <header></header>
      <Registration/>
  </div>
</template>

<script>
import Registration from "./components/Registration";
export default {
  name: 'App',
    components: {Registration},
}
</script>

<style lang="sass">
  body
    margin: 0 !important
    padding: 0 !important
</style>
