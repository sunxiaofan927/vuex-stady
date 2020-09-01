<template>
    <div>
        <h2>最新的count的值为：{{show}}</h2>
        <button @click="add">+1</button>
        <button @click="add(3)">+n</button>
        <button @click="sadd">s+1</button>
        <button @click="saddN(3)">s+N</button>
    </div>
</template>

<script>

import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['show'])
  },
  methods: {
    ...mapMutations(['add', 'addN']),
    ...mapActions(['sadd', 'saddN'])
  }
}
</script>
