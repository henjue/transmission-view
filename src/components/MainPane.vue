<template>
  <div>testtesttesttesttest</div>
</template>
<script>
// import API_HOST from '../configs/constants'
export default {
  methods: {
    refreshList () {
      this.axios
        .post(`/rpc`, {
          method: 'torrent-get',
          arguments: {
            fields: [
              'id',
              'status',
              'percentDone',
              'trackerStats',
              'leftUntilDone',
              'rateDownload',
              'rateUpload',
              'rateDownload',
              'rateUpload',
              'peersGettingFromUs',
              'peersSendingToUs',
              'uploadRatio',
              'uploadedEver',
              'downloadedEver',
              'error',
              'errorString',
              'doneDate',
              'queuePosition',
              'activityDate'
            ]
          }
        })
        .then(response => console.log(response)).catch(e => console.error(e))
    }
  },
  mounted () {
    this.refreshList()
  }
}
</script>
