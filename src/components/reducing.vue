<template>
    <div>
        <h2>最新的count的值为：{{$store.getters.show}}</h2>
        <button @click="sun">-1</button>
        <button @click="sunj">-n</button>
    </div>
</template>

<script>

export default {
  methods: {
    sun () {
      this.$store.commit('jian')
    },
    sunj () {
      this.$store.commit('jianS', 3)
    }
  }
}
</script>
