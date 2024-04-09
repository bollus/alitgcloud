export default {
  dashboard: {
    growCard: {
      balance: '余额',
      rechargeAll: '总充值',
      portCount: '端口数',
      port: '账号端口',
      portExpire: '到期时间',
      accountCount: '账号数',
      bannedCount: '封禁数',
      friendCount: '好友数',
      messageCount: '消息数',
    },
  },
  account: {
    accountManage: {
      title: '账号管理',
      search: {
        nickname: '账号昵称',
        phone: '手机号',
        group: '请选择分组',
        customerService: '请选择客服账号',
        onlineStatus: '请选择在线状态',
        accountStatus: '请选择账号状态',
        all: '全部',
        online: '在线',
        offline: '离线',
        normal: '正常',
        irregular: '异常',
        banned: '封号',
        frequently: '频繁',
        sale: '在售',
        search: '查询',
      },
      action: {
        archive: '归档',
        transferGroup: '转移分组',
        modifyInfo: '修改资料',
        batchStation: '批量站街',
        detectAccount: '检测账号',
        online: '上线',
        offline: '下线',
        assignCustomerService: '分配客服',
        assign: '分配',
        delete: '删除',
        purchase: '购买',
        batchDelete: '批量删除',
      },
      table: {
        avatar: '头像',
        country: '国家',
        phone: '手机号',
        username: '用户名',
        nickname: '昵称',
        friend: '好友',
        group: '群',
        accountGroup: '账号组',
        online: '在线',
        status: '状态',
        description: '描述',
        socks5: 'Socks5代理',
        customerService: '客服',
        coordinates: '坐标',
        date: '日期',
        operate: '操作',
      },
    },
    groupManage: {
      title: '分组管理',
      search: {
        groupName: '分组名称',
        inputGroupName: '请输入分组名称',
        search: '查询',
        insert: '新增',
      },
      table: {
        groupName: '分组名称',
        date: '日期',
        operate: '操作',
      },
    },
    archive: {
      title: '归档账号',
      search: {
        nickname: '账号昵称',
        phone: '手机号',
        group: '请选择分组',
        customerService: '请选择客服账号',
        accountStatus: '请选择账号状态',
        search: '查询',
        all: '全部',
        normal: '正常',
        irregular: '异常',
        banned: '封号',
        frequently: '频繁',
        sale: '在售',
      },
      action: {
        import: '导入',
        export: '导出',
        enable: '启用',
        accountSale: '出售账号',
        sale: '出售账号',
        cancelSale: '取消出售',
        transferGroup: '转移分组',
        transferAccount: '转移账号',
        batchDelete: '批量删除',
        country: '请选择老号国家',
        price: '请选择老号价格',
        queryOld: '查询老号',
        bulkPurchase: '批量购买',
      },
      table: {
        avatar: '头像',
        country: '国家',
        phone: '手机号',
        username: '用户名',
        nickname: '昵称',
        friend: '好友',
        group: '群',
        accountGroup: '账号组',
        status: '状态',
        description: '描述',
        customerService: '客服',
        date: '日期',
        operate: '操作',
      },
    },
  },
  task: {
    register: {
      search: {
        status: '请选择状态',
        ready: '待执行',
        running: '执行中',
        stop: '停止',
        finish: '完成',
        search: '查询',
        insert: '新增',
      },
      table: {
        group: '账号组',
        platform: '平台',
        proxy: '自定义代理',
        info: '自定义资料',
        count: '总数',
        success: '成功数',
        failed: '失败数',
        status: '状态',
        date: '日期',
        operate: '操作',
      },
    },
    add: {
      search: {
        taskName: '任务名字',
        inputTaskName: '请输入任务名字',
        status: '请选择状态',
        ready: '待执行',
        running: '执行中',
        stop: '停止',
        finish: '完成',
        search: '查询',
        insert: '新增',
      },
      table: {
        taskName: '任务名字',
        group: '账号组',
        userData: '用户数据',
        type: '类型',
        count: '总数',
        success: '成功数',
        failed: '失败数',
        status: '状态',
        description: '描述',
        date: '日期',
        operate: '操作',
      },
    },
    send: {
      search: {
        type: '请选择类型',
        text: '文本',
        image: '图片',
        imageAndText: '图片+文本',
        voice: '语音',
        forward: '转发消息',
        status: '请选择状态',
        ready: '待执行',
        running: '执行中',
        stop: '停止',
        finish: '完成',
        search: '查询',
        insert: '新增',
        deleteAllCache: '删除全局缓存',
      },
      table: {
        group: '账号组',
        target: '发送对象',
        type: '类型',
        content: '内容',
        count: '总数',
        success: '成功数',
        failed: '失败数',
        status: '状态',
        date: '日期',
        operate: '操作',
      },
    },
    invite: {
      search: {
        taskName: '任务名称',
        inputTaskName: '请输入任务名称',
        status: '请选择状态',
        ready: '待执行',
        running: '执行中',
        stop: '停止',
        finish: '完成',
        search: '查询',
        insert: '新增',
        deleteAllCache: '删除全局缓存',
      },
      table: {
        taskName: '任务名称',
        group: '账号组',
        type: '类型',
        count: '总数',
        success: '成功数',
        failed: '失败数',
        status: '状态',
        description: '描述',
        date: '日期',
        operate: '操作',
      },
    },
    speaker: {
      search: {
        status: '请选择状态',
        ready: '待执行',
        running: '执行中',
        stop: '停止',
        finish: '完成',
        search: '查询',
        insert: '新增',
      },
      table: {
        taskName: '任务名称',
        group: '账号组',
        type: '类型',
        rule: '任务规则',
        interval: '间隔',
        count: '总数',
        success: '成功数',
        failed: '失败数',
        status: '状态',
        date: '日期',
        operate: '操作',
      },
    },
    script: {
      search: {
        taskName: '任务名称',
        inputTaskName: '请输入任务名称',
        status: '请选择状态',
        ready: '待执行',
        running: '执行中',
        stop: '停止',
        finish: '完成',
        search: '查询',
        insert: '新增',
      },
      table: {
        taskName: '任务名称',
        group: '账号组',
        type: '类型',
        count: '总数',
        success: '成功数',
        failed: '失败数',
        status: '状态',
        date: '日期',
        operate: '操作',
      },
    },
  },
  data: {
    proxy: {
      proxyList: {
        title: '代理列表',
        search: {
          group: '请选择分组',
          search: '查询',
          insert: '新增',
          import: '导入',
          export: '导出',
          purchase: '购买',
          batchDelete: '批量删除',
        },
        table: {
          port: '端口',
          username: '用户名',
          password: '密码',
          control: '控制数',
          repeat: '重复数',
          risk: '风险比',
          group: '分组名称',
          status: '状态',
          date: '日期',
          operate: '操作',
        },
      },
      proxyGroup: {
        title: '代理分组',
        search: {
          group: '分组名称',
          groupInput: '请输入分组名称',
          search: '查询',
          insert: '新增',
          batchDelete: '批量删除',
        },
        table: {
          group: '分组名称',
          date: '日期',
          operate: '操作',
        },
      },
    },
    phoneData: {
      search: {
        group: '分组名称',
        groupInput: '请输入分组名称',
        search: '查询',
        insert: '新增',
        purchase: '购买群链接',
      },
      table: {
        group: '分组名称',
        count: '数量',
        remain: '余额',
        format: '格式',
        creator: '创建人',
        date: '日期',
        operate: '操作',
      },
    },
    personal: {
      group: {
        title: '分组管理',
        search: {
          group: '分组名称',
          groupInput: '请输入分组名称',
          search: '查询',
          insert: '新增',
          batchDelete: '批量删除',
        },
        table: {
          group: '分组名称',
          date: '日期',
          operate: '操作',
        },
      },
      list: {
        title: '资料列表',
        search: {
          content: '内容',
          contentInput: '请输入内容',
          group: '请选择分组',
          search: '查询',
          insert: '新增',
          import: '导入',
        },
        table: {
          content: '内容',
          group: '分组',
          date: '日期',
          operate: '操作',
        },
      },
    },
    image: {
      group: {
        title: '图片分组',
      },
      library: {
        title: '图片库',
      },
    },
  },
};