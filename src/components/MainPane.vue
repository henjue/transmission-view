<style scoped lang="less">
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
  .toolbar{
    float: left;
  }
  MenuItem{
    font-size: 10px;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="toolbar">
          <ButtonGroup size="small">
            <Button icon="md-add">添加</Button>
            <Button>Small</Button>
          </ButtonGroup>
        </div>
      </Header>
      <Layout>
        <Content>
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu active-name="1" theme="light" width="auto" :open-names="['1']">
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    全部
                  </template>
                  <MenuItem name="1-1">下载中</MenuItem>
                  <MenuItem name="1-2">已暂停</MenuItem>
                  <MenuItem name="1-3">正在做种</MenuItem>
                  <MenuItem name="1-4">正在校验</MenuItem>
                  <MenuItem name="1-5">活动中</MenuItem>
                  <MenuItem name="1-6">活动中</MenuItem>
                  <MenuItem name="1-7">错误</MenuItem>
                  <MenuItem name="1-8">警告</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                  </template>
                  <MenuItem name="2-1">Option 1</MenuItem>
                  <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                  </template>
                  <MenuItem name="3-1">Option 1</MenuItem>
                  <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <div>
                <Table stripe :columns="columns1" :data="data"></Table>
                <Page :current="pageNum" :total="allData.length" :page-size="pageSize" show-sizer @on-change="onPageChange" />
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
// import API_HOST from '../configs/constants'
export default {
  data () {
    return {
      columns1: [ {
        title: '名称',
        key: 'name'
      },
      {
        title: '总大小',
        key: 'total_size'
      },
      {
        title: '进度',
        key: 'progress'
      }],
      pageNum: 1,
      pageSize: 10,
      allData: [],
      data: []
    }
  },
  mounted () {
    console.log('mounted')
    this.refreshList()
  },
  methods: {
    showData () {
      this.data = this.allData.slice((this.pageNum - 1) * this.pageSize, this.pageNum * this.pageSize)
    },
    onPageChange (value) {
      this.pageNum = value
      this.showData()
    },
    refreshList () {
      if (localStorage.username && localStorage.password) {
        this.axios.defaults.auth = {
          username: localStorage.username,
          password: localStorage.password
        }
        this.axios
          .post(`rpc`, {
            method: 'torrent-get',
            arguments: {
              fields: [
                'id',
                'name',
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
          .then(response => {
            console.log(response)
            if (response.data.result === 'success') {
              this.allData = response.data.arguments.torrents.map(item => {
                return {
                  name: item.name,
                  addedDate: item.addedDate
                }
              }).sort((item) => {
                return item.addedDate
              })
              this.pageNum = 1
              this.showData()
            }
          }).catch(e => console.error(e))
      } else {
        console.log('没有登录')
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        this.axios.defaults.auth = {
          username: '',
          password: ''
        }
        this.$router.replace('/')
      }
    }
  }
}
</script>
