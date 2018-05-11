<template>
  <div>
    <img src="../img/iview-logo.png"/>
  </div>
</template>

<script>

export default {
  name: "index",
  data () {
    return {}
  },
  computed: {},
  updated () {
  },
  mounted () {
    this._$.get('/test/getVotes').then(d => {
      console.log(d)


    })

    // this._$.post('/test/createVote', {
    //   subject: 'post测试',
    //   support: 5,
    //   oppose: 5,
    //   candidates: 'ssss,dddddd,ffffff',
    //   status: 0
    // }).finally(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style scoped>

</style>
