<style lang='scss' scoped>
@import "~@assets/styles/_mixins";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 30px;
  min-width: 1280px;
  .header-l {
    span {
      display: block;
      width: 75px;
      height: 36px;
      background: url("~@assets/images/login/1/logo.png");
      position: relative;
      cursor: pointer;
      &::before {
        content: "";
        display: inline-block;
        width: 1px;
        height: 23px;
        position: absolute;
        right: -10px;
        top: 50%;
        margin-top: -11.5px;
        font-size: 18px;
        background: #7b8fa5;
        opacity: 0.3;
      }
      &::after {
        content: "Box";
        position: absolute;
        right: -65px;
        top: 50%;
        margin-top: -23px;
        font-size: 29px;
        color: #364658;
        font-weight: 400;
      }
    }
  }
  .header-r {
    .ivu-dropdown {
      margin-left: 30px;
      .ivu-dropdown-rel {
        a {
          color: #7b8fa5;
          font-size: 16px;
          &:hover {
            .ivu-icon {
              transition: all 0.1s linear;
              transform: rotate(180deg);
            }
          }
        }
      }
      /deep/ .ivu-badge-count {
        border: none;
        line-height: normal;
        min-width: 16px;
        height: 16px;
        padding: 3px;
        box-shadow: none;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &.user-dropdown {
        vertical-align: bottom;
        a {
          display: flex;
          align-items: center;
          span {
            vertical-align: middle;
            margin: 0 5px 0 10px;
          }
        }
        /deep/ .ivu-select-dropdown {
          width: inherit;
          right: 20px;
          overflow: hidden;
          /deep/ .ivu-dropdown-item {
            width: 270px;
            position: relative;
            padding-left: 45px;
            padding-right: 20px;
            box-sizing: border-box;
            // padding: 7px 15px 7px 45px;
            &:hover {
              background: #dee5ed;
            }
            &::before {
              content: "";
              display: inline-block;
              position: absolute;
              top: 50%;
              left: 20px;
              margin-top: -8px;
            }
            &:nth-child(1) {
              &::before {
                @include sprite(-50px, -651px, 14px, 16px);
              }
            }
            &:nth-child(2) {
              &::before {
                @include sprite(-84px, -651px, 14px, 16px);
              }
            }
            &:nth-child(3) {
              &::before {
                @include sprite(-118px, -651px, 14px, 16px);
              }
            }
            &:nth-child(4) {
              &::before {
                @include sprite(-152px, -651px, 14px, 16px);
              }
            }
            &:nth-child(5) {
              &::before {
                @include sprite(-186px, -651px, 14px, 16px);
              }
            }
            &:nth-child(6) {
              &::before {
                @include sprite(-220px, -651px, 14px, 16px);
              }
            }
          }
        }
      }
      &.announcement-dropdown {
        .ivu-dropdown-menu {
          width: 422px;
          overflow: hidden;
          /deep/ .ivu-dropdown-item {
            width: 100%;
            display: inline-block;
            line-height: 40px;
            padding: 0 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #7b8fa5;
            &:hover {
              background: #dee5ed;
            }
          }
          .more {
            margin: 0 16px;
            line-height: 40px;
            border-top: 1px solid #ddd;
            color: #7b8fa5;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      &.language {
        .ivu-dropdown-item {
          &:hover {
            background: #dee5ed;
          }
        }
      }
      &.need-help {
        .ivu-dropdown-item {
          &:hover {
            background: #dee5ed;
          }
          div {
            display: flex;
            align-items: center;
            span {
              margin-right: 10px;
            }
            &.chat {
              span {
                @include sprite(-356px, -651px, 14px, 16px);
              }
            }
            &.feedback {
              span {
                @include sprite(-390px, -651px, 14px, 16px);
              }
            }
            &.help {
              span {
                @include sprite(-424px, -651px, 14px, 16px);
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="header">
    <div class="header-l">
      <span @click="$router.push({name:'main.onlineCoding'})"></span>
    </div>
    <div class="header-r">
      <Dropdown v-if="$route.name!=='login'">
        <a href="javascript:void(0)"
           @click="$router.push({name:'main.ddm'})">
          DDM Information
        </a>
      </Dropdown>
      <Dropdown v-if="$route.name!=='login'"
                class="announcement-dropdown"
                @on-click="handleDropdown">
        <Badge :count="hasNewInfo.length">
          <a href="javascript:void(0)"
             @click="toAnnouncement">Announcement</a>
        </Badge>
        <DropdownMenu slot="list"
                      v-if="hasNewInfo.length">
          <DropdownItem v-for="(item,index) in noticeInfo"
                        :key="index"
                        :name="index"
                        v-html="item.enTitle">
          </DropdownItem>
          <div class="more"
               @click="toAnnouncement">More
            <Icon type="ios-arrow-forward" />
          </div>
        </DropdownMenu>
      </Dropdown>
      <Dropdown v-if="$route.name!=='login'"
                @on-click="needHelpChange"
                class="need-help">
        <a href="javascript:void(0)">
          Need Help
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="chat">
            <div class="chat"><span></span>Live Chat</div>
          </DropdownItem>
          <DropdownItem name="feedback">
            <div class="feedback"><span></span>Give Feedback</div>
          </DropdownItem>
          <DropdownItem name="help">
            <div class="help"><span></span>Help center</div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <!-- <Dropdown class="language">
        <a href="javascript:void(0)">
          English(US)
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>English(US)</DropdownItem>
          <DropdownItem>Chinese</DropdownItem>
        </DropdownMenu>
      </Dropdown> -->
      <!-- <Dropdown>
        <a href="javascript:void(0)"
           @click="$router.push({name:'main.helpList'})">
          Help center -->
      <!-- <Icon type="
           ios-arrow-down"></Icon> -->
      <!-- </a>
      </Dropdown> -->
      <Dropdown v-if="$route.name!=='login'"
                class="user-dropdown"
                @on-click="userDropdownChange">
        <a href="javascript:void(0)">
          <!-- <Avatar icon="ios-person" /> -->
          <img src="~@assets/images/icon/user-logo.png"
               alt="">
          <span>{{userName}}</span>
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="1">My Configuration</DropdownItem>
          <DropdownItem name="2">Configuration History</DropdownItem>
          <DropdownItem name="3">My Applications</DropdownItem>
          <DropdownItem name="4">My Orders</DropdownItem>
          <DropdownItem name="5">After-sales Configuration</DropdownItem>
          <DropdownItem name="6">Sign Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import { getNoticeLogin, saveNoticeLogin } from '@service/announcement/announcement';
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(["userInfo"]),
    hasNewInfo () {
      return this.noticeInfo.filter(item => item.state === 0);
    }
  },
  data () {
    return {
      userName: '',
      noticeInfo: []
    }
  },
  created () {
    this.userName = this._hyTool.getStore('userName');
    // 登录页无需加载通知
    this.$route.name !== 'login' && this.getNotice();
  },
  methods: {
    async handleDropdown (val) {
      let data = {
        'noticeId': this.noticeInfo[val].id,
        'userId': this.userInfo.userNo
      };
      await saveNoticeLogin(data);
      this.noticeInfo[val].state = 1;
      this.$router.push({ name: 'main.announcement', params: { id: this.noticeInfo[val].id } });
    },
    async getNotice () {
      let opt = {
        userId: this.userInfo.userNo
      };
      const notice = await getNoticeLogin(opt);
      this.noticeInfo = notice.obj;
      this._hyTool.setStore('noticeInfo', notice.obj);
    },
    needHelpChange (name) {
      switch (name) {
        case 'chat':
          window.LC_API.open_chat_window();
          break;
        case 'feedback':
          this.$router.push({ name: 'main.feedback' });
          break;
        case 'help':
          this.$router.push({ name: 'main.helpList' });
          break;
      }
    },
    toAnnouncement () {
      this.$router.push({ name: 'main.announcement' })
    },
    userDropdownChange (name) {
      switch (name) {
        case '1':
          this.$router.push({ name: 'main.configuration', query: { tabIndex: 0 } });
          break;
        case '2':
          this.$router.push({ name: 'main.configuration', query: { tabIndex: 1 } });
          break;
        case '3':
          this.$router.push({ name: 'main.order', query: { tabIndex: 1 } });
          break;
        case '4':
          this.$router.push({ name: 'main.order', query: { tabIndex: 0 } });
          break;
        case '5':
          this.$router.push({ name: 'main.afterSales' });
          break;
        case '6':
          this.loginOut();
          break;
      }
    },
    // 退出登录
    loginOut () {
      // 清除缓存
      this.languageIcon = this._hyTool.getStore('language');
      window.sessionStorage.clear();
      window.localStorage.clear();
      this._hyTool.setStore('language', this.languageIcon);
      this.$router.push('/login');
    }
  }
}

</script>