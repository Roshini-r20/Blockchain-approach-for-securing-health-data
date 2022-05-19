<template>
    <div class="RegisterInsurance"> 
        <!-- <h1>Insurance</h1> -->
        <reginsurance />
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import reginsurance from '../components/reginsurance.vue'
export default {
  name: 'RegisterInsurance',
  components: {
    reginsurance
  }
}
</script>