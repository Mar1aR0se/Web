<template>
    <div>
      <home-banner />> 
      <home-about /> 
      <home-service />
      <home-portfolio />
      <home-contact />
    </div>
</template>

<script>
import HomeBanner from "./component/Banner"

export default {
    name : "HomeComponent",
    components : {
      HomeBanner
    }
}
</script>

<style lang="scss" scoped>

</style>