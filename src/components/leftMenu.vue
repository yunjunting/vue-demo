<template>
  <el-aside width="200px">
    <el-menu id="my-menu"
        :default-active="$route.path"
        router
        class="el-menu-vertical-demo"
        background-color="rgb(41,53,80)"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <!-- <fragment v-for="item in leftMenu" :key="item.index"> -->
          <div v-for="item in leftMenu" :key="item.index">
          <template v-if="item.Child.length===0">
            <el-menu-item :index="item.index" >
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
          <!-- 二级菜单 -->
          <template v-else>
            <el-submenu :index="item.index" :class="isCollapse==true ? 'collapseMenu' :''">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </template>
              <el-menu-item
                :index="SubItem.index"
                v-for="SubItem in item.Child"
                :key="SubItem.index"
              >
              <i :class="SubItem.icon"></i>
              <span slot="title">{{SubItem.title}}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </div>
        <!-- </fragment> -->
      </el-menu>
  </el-aside>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      leftMenu: [
        {
          icon: 'el-icon-home',
          index: '3',
          title: '菜单一',
          show: false,
          Child: [
            {
              index: 'demo1',
              title: 'CSS属性'
            },
            {
              index: 'addWhiteList',
              title: 'menu2'
            }
          ]
        },
        {
          icon: 'el-icon-nav-assessmentMG',
          index: '2',
          title: '菜单二',
          show: false,
          Child: [
            {
              index: 'activeList',
              title: 'demo1'
            },
            {
              index: 'addActiveList',
              title: 'demo2'
            }
          ]
        }
      ]

    }
  }
}
</script>

<style lang="less" scoped>
.el-aside {
  background: rgb(41,53,80) !important;
  height: 100%;
  font-size: 16px;
  text-align: center;
  overflow-y: auto;
  &::-webkit-scrollbar{
    display: none;
  }
}
</style>
