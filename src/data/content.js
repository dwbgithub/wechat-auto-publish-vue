// ===== 教程内容数据 =====

export const heroStats = [
  { num: '3', lbl: '种自动化方案' },
  { num: '18', lbl: '个实操步骤' },
  { num: '100%', lbl: '可复现' }
]

export const painPoints = [
  '每天卡在固定时间手动登录、编辑、点发布',
  '节假日、出差时根本顾不上，断更掉粉',
  '排版、配图反复调整，单篇耗时 1-2 小时',
  '多账号管理混乱，容易发错号、发错内容'
]

export const gains = [
  '提前批量排期，到点自动发送，365 天不断更',
  '节假日 / 出差 / 睡觉时照样按时推送',
  'AI 生成 + 模板排版，单篇压缩到 10 分钟',
  '多账号统一调度，发布日历一目了然'
]

export const compareHeaders = ['对比维度', '官方定时发布', '第三方工具', 'API 脚本自动化']

export const compareRows = [
  { feat: '适合人群',       v1: '所有运营者',           v2: '非技术运营',       v3: '开发者 / 程序员' },
  { feat: '技术门槛',       v1: { t: 'yes', s: '零门槛' }, v2: { t: 'yes', s: '低' }, v3: { t: 'mid', s: '中高' } },
  { feat: '自动化程度',     v1: { t: 'mid', s: '定时发布' }, v2: { t: 'mid', s: '生成+排期' }, v3: { t: 'yes', s: '全自动' } },
  { feat: '是否需审核',     v1: { t: 'no', s: '免审核直接发' }, v2: { t: 'mid', s: '需过审' }, v3: { t: 'mid', s: '需过审' } },
  { feat: '内容自动生成',   v1: { t: 'no', s: '不支持' }, v2: { t: 'yes', s: '支持 AI 生成' }, v3: { t: 'yes', s: '可接任意 AI' } },
  { feat: '多账号管理',     v1: { t: 'no', s: '单号操作' }, v2: { t: 'yes', s: '多号统一' }, v3: { t: 'yes', s: '批量管理' } },
  { feat: '费用',           v1: { t: 'yes', s: '免费' }, v2: '部分付费', v3: '服务器成本' },
  { feat: '稳定性',         v1: { t: 'yes', s: '官方保障' }, v2: { t: 'mid', s: '依赖第三方' }, v3: { t: 'mid', s: '需自己维护' } }
]

export const methods = [
  {
    id: 'm1',
    tab: '方案一',
    tag: '官方定时',
    icon: '📋',
    title: '微信公众平台官方定时发布',
    desc: '最简单直接的方式：在公众号后台编辑好文章后，设置一个未来的发布时间，系统到点自动发送。零技术门槛、官方保障、免审核直接推送。适合个人号、小团队稳定日更。',
    meta: [
      { label: '难度', value: '零门槛' },
      { label: '费用', value: '免费' },
      { label: '耗时', value: '约 5 分钟' },
      { label: '最久定时', value: '8 天后' }
    ],
    steps: [
      {
        title: '登录微信公众平台',
        body: '打开浏览器访问 <span class="inline-code">mp.weixin.qq.com</span>，使用管理员微信扫码登录后台。确保你拥有"发布权限"（管理员或被授权的运营者）。',
        tip: '如果是子账号，需管理员在"设置 → 运营者管理"中授予群发权限。'
      },
      {
        title: '新建图文素材',
        body: '点击左侧菜单"内容与互动 → 图文消息"，选择"写新图文"。编辑标题、正文、封面图、摘要。建议封面图尺寸 900×383 像素（2.35:1）。',
        tip: '善用"图文模板"功能，保存常用排版模板可大幅提速。'
      },
      {
        title: '保存草稿并预览',
        body: '编辑完成后点击右上角"保存"。然后点击"预览"，用手机扫码确认排版效果——重点检查封面图是否变形、正文字号是否舒适、图片是否清晰。',
        mock: {
          rows: [
            ['图文标题', '已编辑', 'green'],
            ['封面图', '已上传', 'green'],
            ['摘要', '已填写', 'green'],
            ['操作', '预览', 'btn']
          ]
        }
      },
      {
        title: '选择"定时群发"',
        body: '确认无误后，点击"群发"按钮，在弹窗中选择"定时群发"而非"立即群发"。设置目标日期和具体时间（精确到分钟）。注意：定时最远只能设到 <b>8 天后</b>。',
        tip: '最佳推送时间参考：早 7:30-8:30（通勤）、午 12:00-13:00（午休）、晚 20:00-22:00（睡前），这三个时段打开率最高。'
      },
      {
        title: '管理员扫码确认',
        body: '定时群发需要管理员微信二次确认。弹出二维码后，用管理员微信扫码并确认，定时任务即生效。系统会在设定时间自动推送，无需再操作。',
        tip: '定时后仍可取消：在"已群发"列表中找到该条，发布前可随时删除取消。'
      },
      {
        title: '查看发布结果',
        body: '到点发布后，在"内容与互动 → 已发表"中查看。可看到阅读量、分享数、留言等数据。建议发布后 1 小时内关注留言并及时互动，提升推荐权重。'
      }
    ]
  },
  {
    id: 'm2',
    tab: '方案二',
    tag: '第三方工具',
    icon: '🛠️',
    title: '第三方工具自动化（内容生成 + 排期发布）',
    desc: '使用第三方运营工具（如壹伴助手、微小宝、新榜编辑器等）实现"AI 生成内容 → 一键排版 → 定时排期 → 多号管理"的全流程自动化。适合运营团队、矩阵号管理，可大幅降低人力成本。',
    meta: [
      { label: '难度', value: '低' },
      { label: '费用', value: '部分功能付费' },
      { label: '耗时', value: '约 15 分钟' },
      { label: '支持', value: '多账号矩阵' }
    ],
    steps: [
      {
        title: '选择并安装第三方工具',
        body: '常见选择：<b>壹伴助手</b>（浏览器插件，直接嵌入后台）、<b>微小宝</b>（独立平台，多号管理）、<b>新榜编辑器</b>（排版 + 素材库）。根据需求选择：单号选壹伴，多号矩阵选微小宝。',
        tip: '壹伴是浏览器插件，安装后直接在公众号后台出现增强功能按钮，无需切换平台，体验最顺滑。'
      },
      {
        title: '授权绑定公众号',
        body: '在第三方工具中添加公众号，使用管理员微信扫码授权。授权范围通常包括"素材管理"和"群发消息"权限。授权后工具即可代你操作素材和发布。',
        tip: '授权后可随时在公众号后台"设置 → 接口权限 → 已授权的第三方平台"中取消授权，数据安全可控。'
      },
      {
        title: '用 AI 生成文章内容',
        body: '在工具内使用"AI 写作"功能，输入主题、关键词或大纲，AI 自动生成完整文章。多数工具支持指定风格（专业 / 活泼 / 种草）、字数、是否带小标题。',
        tip: 'AI 生成的初稿务必人工审校：检查事实准确性、删除"AI 味"套话、补充行业专属数据和案例，原创度才够。'
      },
      {
        title: '一键套用排版模板',
        body: '工具内置大量行业排版模板（科技、美食、教育、财经等），选中模板一键应用，自动调整字号、行距、配色、标题样式。比手动排版快 10 倍以上。'
      },
      {
        title: '设置定时排期发布',
        body: '在工具的"发布日历"中，把文章拖到目标日期时间格。可批量排期整周 / 整月内容。到点后工具自动调用公众号接口完成群发。',
        mock: {
          pulse: true,
          rows: [
            ['周一 08:00', 'AI 行业周报', ''],
            ['周三 12:00', '产品评测', ''],
            ['周五 20:00', '用户故事', ''],
            ['本周已排', '3 / 7 篇', 'green-bold']
          ]
        }
      },
      {
        title: '多账号矩阵统一管理',
        body: '如果是矩阵号运营，在一个面板内管理所有公众号的发布日历，避免撞档、统一调性。可设置"主号先发、子号隔天转发"的排期策略。',
        tip: '矩阵号注意避免完全相同的内容跨号发布，微信会判定为重复内容降权。建议每个号做 30% 以上的差异化改写。'
      }
    ]
  },
  {
    id: 'm3',
    tab: '方案三',
    tag: 'API 脚本',
    icon: '⚡',
    title: 'API + 脚本全自动发布（开发者方案）',
    desc: '通过微信公众号开发接口（素材管理 + 草稿箱 + 发布接口），编写脚本实现"数据源 → AI 生成 → 排版 → 提交草稿 → 定时发布"全链路自动化。可接入任意数据源和 AI 模型，自由度最高，适合有开发能力的团队做规模化内容运营。',
    meta: [
      { label: '难度', value: '中高' },
      { label: '费用', value: '服务器 + AI 调用' },
      { label: '耗时', value: '初期搭建 1-2 天' },
      { label: '支持', value: '无限扩展' }
    ],
    steps: [
      {
        title: '申请并配置公众号接口权限',
        body: '进入"开发 → 基本配置"，获取 <b>AppID</b> 和 <b>AppSecret</b>。配置服务器 IP 白名单。注意：草稿箱和发布接口需要"已认证的服务号"或"已认证的订阅号"才可调用。',
        tip: '个人订阅号不支持发布接口。如需自动化发布，必须认证为企业/组织主体。'
      },
      {
        title: '获取 access_token',
        body: '调用接口获取访问令牌，有效期为 7200 秒（2 小时），需定时刷新。建议在服务器端缓存 token，过期前 5 分钟自动续期。',
        code: '<span class="cmt"># 获取 access_token</span>\n<span class="kw">import</span> requests\n\nurl = <span class="str">"https://api.weixin.qq.com/cgi-bin/token"</span>\nparams = {\n    <span class="str">"grant_type"</span>: <span class="str">"client_credential"</span>,\n    <span class="str">"appid"</span>: <span class="str">"你的AppID"</span>,\n    <span class="str">"secret"</span>: <span class="str">"你的AppSecret"</span>\n}\nresp = requests.get(url, params=params)\ntoken = resp.json()[<span class="str">"access_token"</span>]'
      },
      {
        title: '用 AI 生成文章内容',
        body: '接入大模型 API（如 GPT、文心、通义千问等），传入主题和 prompt 生成正文。再用脚本把 Markdown 转换为微信兼容的 HTML 格式（注意微信不支持外链图片，需上传为素材）。',
        code: '<span class="cmt"># 调用 AI 生成文章</span>\n<span class="kw">def</span> <span class="fn">generate_article</span>(topic):\n    prompt = <span class="str">f"写一篇关于{topic}的公众号文章，800字，"</span>\\\n             <span class="str">"风格专业但易懂，分段带小标题"</span>\n    resp = llm_client.chat(prompt)\n    <span class="kw">return</span> markdown_to_wechat_html(resp)'
      },
      {
        title: '上传封面图素材',
        body: '调用"新增临时素材"接口上传封面图，获取 media_id。微信要求封面图大小不超过 2MB，建议 900×383 像素。正文中的图片也需逐一上传获取 media_id 后插入。',
        code: '<span class="cmt"># 上传永久图片素材</span>\nurl = <span class="str">f"https://api.weixin.qq.com/cgi-bin/material/"</span>\\\n      <span class="str">f"add_material?access_token={token}&type=image"</span>\n<span class="kw">with</span> <span class="fn">open</span>(<span class="str">"cover.jpg"</span>, <span class="str">"rb"</span>) <span class="kw">as</span> f:\n    resp = requests.post(url, files={<span class="str">"media"</span>: f})\nmedia_id = resp.json()[<span class="str">"media_id"</span>]'
      },
      {
        title: '提交到草稿箱',
        body: '组装图文数据（标题、正文 HTML、封面 media_id、摘要），调用"新建草稿"接口提交到草稿箱。提交成功返回草稿 media_id，后续用它来触发发布。',
        code: '<span class="cmt"># 提交草稿</span>\ndraft = {\n    <span class="str">"articles"</span>: [{\n        <span class="str">"title"</span>: <span class="str">"文章标题"</span>,\n        <span class="str">"content"</span>: article_html,\n        <span class="str">"thumb_media_id"</span>: media_id,\n        <span class="str">"digest"</span>: <span class="str">"摘要内容"</span>,\n        <span class="str">"need_open_comment"</span>: 1\n    }]\n}\nresp = requests.post(\n    <span class="str">f"https://api.weixin.qq.com/cgi-bin/draft/"</span>\n    <span class="str">f"add?access_token={token}"</span>,\n    json=draft\n)\ndraft_id = resp.json()[<span class="str">"media_id"</span>]'
      },
      {
        title: '调用发布接口（或定时触发）',
        body: '方案 A：直接调用"发布"接口，文章立即群发。方案 B：配合定时任务（如 cron / 云函数定时触发器），在指定时间自动调用发布接口，实现定时自动推送。',
        code: '<span class="cmt"># 发布（从草稿箱发出）</span>\nurl = <span class="str">f"https://api.weixin.qq.com/cgi-bin/freepublish/"</span>\\\n      <span class="str">f"submit?access_token={token}"</span>\nresp = requests.post(url, json={<span class="str">"media_id"</span>: draft_id})\npublish_id = resp.json()[<span class="str">"publish_id"</span>]\n\n<span class="cmt"># 配合定时任务（每天 8:00 自动发布）</span>\n<span class="cmt"># crontab: 0 8 * * * python auto_publish.py</span>',
        tip: '通过 API 发布的文章仍需过审（约 1-10 分钟）。建议提前 15 分钟触发，预留审核时间。'
      }
    ]
  }
]

export const faqItems = [
  {
    q: '定时发布和立即发布有什么区别？',
    a: '官方定时发布<b>免审核、直接到点发送</b>，因为文章在设定定时前已经过了管理员扫码确认。而第三方工具和 API 发布的文章，需要经过微信的内容审核（通常 1-10 分钟），因此建议提前 15 分钟触发。另外，定时发布最远只能设到 <code>8 天后</code>，超长周期需用 API 定时任务实现。'
  },
  {
    q: '个人订阅号能实现自动化发布吗？',
    a: '<b>方案一（官方定时）</b>：所有类型的公众号都支持，包括个人订阅号。<br><b>方案三（API 脚本）</b>：不支持个人订阅号，发布接口要求"已认证的服务号或订阅号"。个人号如需自动化，只能用方案一 + 第三方工具辅助生成内容（生成后手动复制到后台定时）。'
  },
  {
    q: '用 AI 自动生成的文章会被限流吗？',
    a: '微信对纯 AI 生成内容有一定识别机制，<b>完全不改的 AI 稿可能被降低推荐</b>。建议：① AI 生成后人工润色修改至少 30%；② 加入原创观点、数据、案例；③ 使用"原创声明"功能；④ 保持内容对读者有实际价值。只要内容质量过关，AI 辅助写作不会影响流量。'
  },
  {
    q: '第三方工具授权后安全吗？会不会泄露数据？',
    a: '选择<b>正规、有备案的第三方工具</b>（如壹伴、微小宝、新榜等知名产品）是安全的。授权使用的是微信官方 OAuth 机制，工具只能在你授权的范围内操作，无法获取你的登录密码。建议：① 只授权必要的权限；② 定期在后台"已授权的第三方平台"检查并清理；③ 不要授权来路不明的工具。'
  },
  {
    q: 'API 自动发布每天有次数限制吗？',
    a: '有。<b>订阅号每天只能群发 1 次</b>（可多篇图文），<b>服务号每月 4 次</b>。这个限制对三种方案都一样，是微信平台规则，与发布方式无关。如果需要更高频次推送，可考虑"模板消息"或"客服消息"接口（但用途受限，不能发纯图文内容）。'
  },
  {
    q: '发布后发现内容写错了，能撤回吗？',
    a: '<b>群发后无法撤回</b>，但可以"删除"：在"已发表"中删除该条，已推送的用户看不到内容（但已点开过的仍会显示"该内容已被发布者删除"）。定时发布在触发前可随时取消。所以建议：定时发布留足检查时间，API 发布前加一道内容校验脚本。'
  },
  {
    q: '没有服务器，能用 API 方案吗？',
    a: '可以。使用<b>云函数</b>（腾讯云 SCF、阿里云 FC）或 <b>GitHub Actions</b> 等无服务器方案，把发布脚本部署上去配合定时触发器即可，无需自建服务器，成本几乎为零。腾讯云 SCF 每月有 100 万次免费调用额度，完全够用。'
  }
]

export const bestPractices = [
  {
    icon: '🎯',
    title: '内容质量 > 自动化程度',
    desc: '自动化是手段不是目的。再高效的发布流程，如果内容空洞也留不住读者。AI 生成后务必人工把关，宁可不发也不发垃圾内容。'
  },
  {
    icon: '⏰',
    title: '固定发布时间，培养阅读习惯',
    desc: '选定 1-2 个固定时段（如每天早 8:00）稳定推送，读者会形成"到点等你"的习惯，打开率比随机时间高 30% 以上。'
  },
  {
    icon: '📝',
    title: '建立内容日历，提前排期',
    desc: '用表格或工具排好未来 1-2 周的选题和发布计划，避免"今天发什么"的焦虑。每周集中半天批量生产，比每天临时写效率高得多。'
  },
  {
    icon: '🛡️',
    title: '发布前必做终检',
    desc: '无论多自动化，发布前过一遍检查清单：标题有无错别字、封面图是否合适、链接是否有效、敏感词是否清理。写个自动校验脚本能省心很多。'
  },
  {
    icon: '📊',
    title: '追踪数据，持续优化',
    desc: '每周复盘阅读量、完读率、分享率，找到你号上的"爆款规律"——什么选题、什么标题、什么时间效果最好，用数据指导下一周的内容规划。'
  }
]
