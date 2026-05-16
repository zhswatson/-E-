/** 导师金句库（E夜暴富抽签）—— themes 为两字主题键；多选时为「命中任一主题」并入签池 */

const THEME_FILTERS = [
  { id: '成长', label: '成长' },
  { id: '利他', label: '利他' },
  { id: '向上', label: '向上' },
  { id: '智变', label: '智变' },
  { id: '沟通', label: '沟通' },
  { id: '哲思', label: '哲思' },
  { id: '团队', label: '团队' },
  { id: '格局', label: '格局' },
  { id: '对齐', label: '对齐' },
  { id: '善缘', label: '善缘' },
  { id: '贡献', label: '贡献' },
  { id: '领导', label: '领导' },
]

const QUOTE_LIBRARY_TEXT = `
1. 职业转折不是等来的，很多时候是自己争取来的。—— Yvonne
2. 不要只做一颗螺丝钉，要理解整个 engineering cycle 是如何运转的。—— Yvonne
3. Reputation 是你的 anchor；本职工作做扎实，后面才会有更多 follow-up scope。—— Yvonne
4. 好的机会不只看 title，而是看它是否让你更接近长期想成为的人。—— Yvonne
5. Sponsor 最有力的地方，是别人愿意替你说话，而不是你自己反复解释。—— Yvonne
6. Manage up 的核心，是理解 leadership 的 top of mind。—— Yvonne
7. Storytelling 不是包装，而是把复杂事情讲成 leadership 能决策的语言。—— Yvonne
8. 新角色的前 90 天，最重要的是建立闭环能力：看清问题、拿到 quick win、展示全局感。—— Yvonne
9. 透明度能建立信任。把不同 stakeholder 的 priority 摊开，大家才知道你真正解决的是什么问题。—— Yvonne
10. 广结善缘，是职场长期主义的起点。—— Shenghua
11. Problem framing 决定了领导 buy-in 的速度。—— Shenghua
12. 做 infra 投资，不能只说技术重要，而要讲清楚它如何带来 business impact。—— Shenghua
13. Promotion 不只取决于你做得多好，也取决于组织是否看见、理解并认可你的贡献。—— Shenghua
14. 职业成长不仅取决于能力，也取决于老板和 skip boss 是否准确理解你的能力与潜力。—— Shenghua
15. Visibility 不是炫耀，而是让组织知道你的价值在哪里。—— Shenghua
16. Sponsor 关系的关键是互惠：你要先能给别人提供价值。—— Shenghua
17. 有些领域容错率太低，不适合用“还剩 50% accuracy 怎么办”的方式推进 AI。—— Shenghua
18. 做项目不是只解决技术问题，而是要让问题定义服务用户和业务。—— Shenghua
19. 如果来这里只想聊 promotion，那就还停留在“术”的层面。—— 夏淳
20. 低维度的思考是“东西能不能做得更便宜”，高维度的思考是“能不能做第一个”。—— 夏淳
21. Original、make history，本身就是一种激励。—— 夏淳
22. 很多 pain point 只有你自己真正知道；把它做到极致，很多时候就是无敌的。—— 夏淳
23. 言微人轻的时候，可以先做小一点，但不要停止创新。—— 夏淳
24. 风险和机会往往成比例，所以要敢于往大的地方想。—— 夏淳
25. 想创业，先 honest 地问自己：我是不是真的有 passion？—— 夏淳
26. 学以致用，首先需要“用”。—— 夏淳
27. 不要走向精致利己主义，要回到文化和本质。—— 夏淳
28. 跳出工程师工具人的思维，第一步是 empathy。—— 夏淳
29. 真正的利他不是讨好，而是真诚地让别人和系统都变好。—— 夏淳
30. 人生里有很多 random 的事件，越 uncertain，越要回到事物本质。—— 陈培基
31. 给我机会和时间，我能搞出一些东西。—— 陈培基
32. 技术路线不是 linear 的，有时从 2D 到 3D，就是进入 totally different world。—— 陈培基
33. 能够领悟事物本质，是非常重要的能力。—— 陈培基
34. 每个 level 需要考虑的 impact 和团队范围都不一样。—— 陈培基
35. 高层看人，不只是看你会不会做事，而是看你能不能用 business language 讲清楚。—— 陈培基
36. 只会啃难题还不够；如果不能 convince 别人，就很难被放心交付更大的事情。—— 陈培基
37. 面对变化和焦虑时，要找到自己的 core value，再找到 adapt 的方式。—— 陈培基
38. Simple problem solving 会越来越容易被替代，真正稀缺的是理解全局和创造新模式。—— 陈培基
39. Manage up 这个词容易误导，很多时候 70%–80% 其实是在 manage 自己。—— E组导师
40. 了解 leadership priority，是向上管理的第一步。—— E组导师
41. 可以直接问老板：你现在最关心的 top three things 是什么？什么事情让你睡不着？—— E组导师
42. 当缺少上层信息时，人很容易误判上层决策；越往上走，看到的约束会完全不同。—— E组导师
43. 向上管理不是空谈，而是带着已经验证过的成果或方案，去帮助老板解决真正重要的问题。—— E组导师
44. 短期靠共同利益合作，长期靠 trust 形成 chemistry。—— E组导师
45. Chemistry 不是天生的，而是在持续 build trust 的过程中形成的。—— E组导师
46. 如果问题触及 integrity，就不再只是 manage up，而是要重新评估这段合作关系和环境。—— E组导师
47. 一定要做功课，了解老板的性格和风格，也要相信自己的直觉。—— E组导师
48. 好的 manager 会真心成就团队，让下属成长为更强的人。—— E组导师
49. Leader 要有容人之量，让 team thrive。—— E组导师
50. 最后还是要回到 deliver：你能不能满足 business 需求。—— E组导师
51. 刚去一个地方会有 grace period，越是这个阶段，越要保持 humble。—— E组导师
52. 不同 level 的 manager 需求不同，最简单有效的方法是直接问对方。—— E组导师
53. 技术越往高阶走，越需要和 business impact 连接。—— E组导师
54. 技术走到 architecture 层面，最终一定会面对 business trade-off。—— E组导师
55. 如果 VP 讲的是 business language，而你只讲 technical language，沟通自然会困难。—— E组导师
56. 找 common interest，增加 common language，才能培养真正的 chemistry。—— E组导师
57. Manage at scale 的本质，不是管更多人，而是复杂度升级。—— E组导师
58. 当你向上管理做对了，会拿到更多 scope；这时必须升级成组织管理。—— E组导师
59. Scale 不是数量增长，而是信息、信任、决策和文化同时变复杂。—— E组导师
60. 规模越大，越要 Trust & Verify。—— E组导师
61. 你不可能看所有细节，所以要建立 signaling system。—— E组导师
62. 管理者的天花板，往往由他培养出来的 leaders 决定。—— E组导师
63. Develop others 不是软任务，而是 scale 的核心杠杆。—— E组导师
64. Manage at scale 要从“自己知道”，变成“让下面的 leaders 都知道”。—— E组导师
65. 规模化管理不是靠 hero，而是靠系统。—— E组导师
66. AI 可能会放大能力差距：原来 2x、3x 的差别，未来可能变成 10x 的组织差距。—— E组导师
67. 未来 manager 管的可能不只是人，也包括 agents。—— E组导师
68. Agent 负责重复性执行，人负责信任、判断和冲突解决。—— E组导师
69. 老板不同意你时，不要急着继续推销，先听懂他 vision 里的 gap。—— E组导师
70. 做之前先 verify：你的 plan 是不是老板真正要的？—— E组导师
71. 从“我的角度”切换到“老板的角度”：为什么他要投入资源？—— E组导师
72. 人员调整不应是情绪判断，而应经过反馈、改进计划、最终沟通和合规流程。—— E组导师
73. Final conversation 的重点不再是争论 facts，而是进入 next stage。—— E组导师
74. 对方讲 efforts，你讲 feedback，双方频道不一致，沟通就会失效。—— E组导师
75. 进入 PIP 后，重点通常会从开放式培养，转向对改进可能性的严肃验证。—— E组导师
76. 判断是否继续培养，要看 gap 有多大、adjust 时间有多久、以及对团队和 business 的 impact 是什么。—— E组导师
77. 即使 role 不 fit，也要肯定能力、讲清 gap、给出 options。—— E组导师
78. 越往未来走，能把项目真正落地的人会越来越稀缺。—— E组导师
79. Top talent 会 disproportionately 带来 impact。—— E组导师
80. 未来 role boundary 会越来越模糊；能把 idea 变成 demo、拿到资源并推动落地的人，会更稀缺。—— E组导师
81. 未来需要的是 offensive mode 的跨学科能力，而不是 defensive mode 的岗位保护。—— E组导师
82. Manager 未来更需要 coach 能力和 judgment 能力。—— E组导师
83. AI 时代的 productivity，最终还是会落到 revenue per engineer 这类财务指标上。—— E组导师
84. 学习能力要成倍 scale，否则组织期望会比你的成长更快。—— E组导师
85. Startup 从外面看光鲜，但 chaotic 才是常态。—— Jerry
86. Startup 的阶段，往往决定了你的真实体验。—— Jerry
87. 去 startup，如果只抱着“暴富”心态，通常会很危险。—— Jerry
88. Startup 最大的价值，往往不只是结果，而是高密度的经历和成长曲线。—— Jerry
89. 在 startup，事情发生了就解决，因为这就是“你的公司”。—— 小马哥
90. 在 startup，很多工作都离业务核心很近，甚至会直接进入 CEO 的叙事里。—— 小马哥
91. 不要为了钱，也不要为了暴富去 startup。—— 小马哥
92. 选择要和 personal mission 自洽。—— Luna
93. Expectation 要设对，否则非常危险。—— Peiji
94. 我想要的是 e2e business experience，以及直接面对 board、参与 decision 的 leadership experience。—— Peiji
95. 责任越大，机会越大。—— Peiji
96. 要做就果断出手，要做有意义的事。—— Peiji
97. 如果时光倒流还会做同样决定，那就是无怨无悔。—— Peiji
98. 一个地方如果让你感觉自己在慢慢耗尽，就该重新审视它是否仍适合你。—— 夏淳
99. 去大厂，有时像重新读了一个新的大学。—— 夏淳
100. 先问自己：我想要什么？想学什么？长期 plan 是什么？—— Yvonne
101. 如果一个地方一眼看到头，就不一定适合想走更大路径的人。—— Yvonne
102. 小公司有更多机会，但要忍得住短期可能看不到钱。—— Yvonne
103. 公司成长是概率问题，不是确定回报。—— Yvonne
104. 做重大选择前，要想 worst case：自己和家庭能不能接受。—— James
105. 你能掌握的是 experience；即使 outcome 失败，experience 也可能仍然很有收获。—— James
106. 思考你的 north star 是什么。—— Shenghua
107. 随着年龄增加，risk 在决策中的比重会变大。—— Shenghua
108. 大厂有些组也很像 startup；创业很多时候也是想把 startup 做成大厂。—— Shenghua
109. 白领是后工业时代复杂文明的产物，不是天然存在的。—— 夏淳
110. AI 不只是优化工具链，更是在重新定义人的价值和分工。—— 夏淳
111. 传统白领角色被重构之后，新的“黑领”角色会开始出现。—— 夏淳
112. 黑领的第一重角色，是定义边界。—— 夏淳
113. 黑领的第二重角色，是维护人类与 AI 系统共同生成的新环境。—— 夏淳
114. 黑领的第三重角色，是做人类利益的代言人。—— 夏淳
115. 黑领不是老板的代言人，而是人类 stakeholders 的代言人。—— 夏淳
116. 未来一部分机会，可能会转向精神健康、意义感、陪伴和个人成长相关产业。—— 夏淳
117. 原来的很多组织结构，在 AI 时代可能不再需要。—— Peiji
118. 部分传统 SaaS 的价值，可能会被 AI 重新定价。—— Peiji
119. 未来需要的是 Super IC、DRI 和 Player-Coach。—— Shenghua
120. 强者越强、弱者越弱，两极分化可能会加剧。—— Shenghua
121. 如果 coding 不再是 bottleneck，真正要优化的是整个 product development workflow。—— Yvonne
122. 未来很多 function 的 linear process，会 collapse 到一个更快的 cycle 里。—— Yvonne
123. 当 process 成为 bottleneck，top-down pilot 会越来越常见。—— Yvonne
124. 如果你能帮助公司完成 AI 转化，相对而言会更安全。—— Yvonne
125. AI 时代更需要全面性人才：懂 product，有 design sense，还能执行。—— Yvonne
126. 这个大变革不只是技术问题，也会进入社会治理和政策讨论。—— James
127. 白领不需要比 AI 更会写代码，而是要比 AI 更懂社会规则与制度边界。—— 夏淳
128. 竞争优势正在转移到定义规则的人，而不是仅仅遵守规则的人。—— 夏淳
129. 从白领到黑领，核心转变是从“使用工具”变成“定义工具如何使用”。—— 夏淳
130. 未来不是学习如何使用 AI 就够了，而是要学习如何监督 AI。—— 夏淳
131. 越往上走，performance 越接近公司整体结果。—— E组导师
132. Board 代表 shareholders，好的董事会要监督 CEO。—— E组导师
133. CEO 的评价通常会回到公司整体结果：资本市场表现、收入增长和运营质量。—— E组导师
134. C-suite 的评价，最终会回到核心业务指标和组织结果。—— E组导师
135. VP / SVP 不只是管业务，还要 build relationship 和 identify talents。—— E组导师
136. Director / Senior Director 要守阵：守住 outcomes 和 business results。—— E组导师
137. Director / Senior Director 要建立 trust，把 business relationship 转化成 cross-functional influence。—— E组导师
138. Director / Senior Director 不只守阵，还要出奇：帮助上层解决 top-down challenges。—— E组导师
139. 好的 bottom-up initiative，要能 support top goals。—— E组导师
140. Manager 至少要比团队多往前看几周。—— E组导师
141. Executive skill 之一，是能在一个方向 consistent delivery。—— E组导师
142. Executive skill 的另一面，是能在组织需要时跨边界补位。—— E组导师
143. 高阶 leader 的价值，不是知道所有 day-to-day details，而是能判断结果、风险和人。—— E组导师
144. AI 时代组织变扁平后，高阶 leader 必须更清楚地证明自己的真实价值。—— E组导师
145. 投资应该很简单，但不容易；真正复杂的是自己的人性和认知局限。—— 陈培基导师课件整理
146. 投资不是追求确定性，而是训练自己用概率看世界。—— 陈培基导师课件整理
147. 好的投资判断，不是问“会不会赢”，而是问“赢的概率、赔率和亏损代价是否匹配”。—— 陈培基导师课件整理
148. 没有 edge 的下注，应控制在娱乐预算里，而不是当成严肃投资。—— 陈培基导师课件整理
149. 频繁交易不等于投资能力，重复做有正期望的交易才是系统能力。—— 陈培基导师课件整理
150. 投资风格可以不同，但底层都绕不开概率、赔率和风险控制。—— 陈培基导师课件整理
151. 投资中最危险的不是亏损，而是没有规则地承担亏损。—— 陈培基导师课件整理
152. 没有规则地不止损，往往是情绪；事前定义风险，才是系统。—— 陈培基导师课件整理
153. 能长期留下来的投资者，靠的不是一次押中，而是成熟的规则和系统。—— 陈培基导师课件整理
154. 投资世界里要谦卑，因为概率从来不为人的自信负责。—— 陈培基导师课件整理
155. 提高胜率不只是研究标的，也包括管理情绪、控制风险和减少错误决策。—— 陈培基导师课件整理
156. Focus, focus and focus：真正值得投入的机会不需要太多。—— 陈培基导师课件整理
157. 投资前先问自己：我是在 trading，还是在做 long-term wealth management？—— 陈培基导师课件整理
158. 交易追求机会，财富管理追求长期留存。—— 陈培基导师课件整理
159. 投资不是纯科学，它同时包含金融、社会、心理和政治因素。—— 陈培基导师课件整理
160. 没有完美系统，只有适合自己性格和约束条件的系统。—— 陈培基导师课件整理
161. 成功投资开始于 mindset 和 self-knowledge，而不是工具和技巧。—— 陈培基导师课件整理
162. 先了解自己，再设计策略；否则策略再好，也会被人性破坏。—— 陈培基导师课件整理
163. 投资里的 “Why” 比 “Buy” 更重要。—— 陈培基导师课件整理
164. 当你不知道为什么买，也就不知道什么时候该停、该加、该卖。—— 陈培基导师课件整理
165. 风险、收益、流动性很难同时满足，投资本质上是选择 trade-off。—— 陈培基导师课件整理
166. 既要高收益，又要低风险，还要高流动性，本身就是投资里的 impossible trinity。—— 陈培基导师课件整理
167. 投资最大的幻觉，是觉得自己可以同时拥有所有好处。—— 陈培基导师课件整理
168. 长期复利更需要可持续的波动承受能力，而不是每天追求刺激。—— 陈培基导师课件整理
169. 复利不是靠兴奋感驱动，而是靠低波动、长周期和持续持有。—— 陈培基导师课件整理
170. Stop loss 的意义不是承认失败，而是保留下一次决策的资格。—— 陈培基导师课件整理
171. 留得青山在，不怕没柴烧，是风险控制的第一性原则。—— 陈培基导师课件整理
172. 有现金流的资产给人稳定感，有成长性的资产给人想象力。—— 陈培基导师课件整理
173. Core assets 负责守正，satellite assets 负责出奇。—— 陈培基导师课件整理
174. 守正不是保守，而是让自己有资格长期留在牌桌上。—— 陈培基导师课件整理
175. 出奇不是赌博，而是在可承受风险下追求非线性回报。—— 陈培基导师课件整理
176. 现金管理不是小事，它决定你在机会出现时有没有行动能力。—— 陈培基导师课件整理
177. 真正好的策略，应该让你晚上睡得着，而不是每天盯盘焦虑。—— 陈培基导师课件整理
178. 高流动性、低努力、低税负，本身就是资产管理里的重要价值。—— 陈培基导师课件整理
179. 只有长期不用、且心理上能承受波动的钱，才适合配置高波动资产。—— 陈培基导师课件整理
180. 对大多数人来说，定投指数不是平庸选择，而是打败多数人的朴素方法。—— 陈培基导师课件整理
181. 被动投资最难的不是方法，而是接受“平均回报”的心理关。—— 陈培基导师课件整理
182. 很多人输给市场，不是因为不聪明，而是因为太想证明自己聪明。—— 陈培基导师课件整理
183. 能接受 boring and lonely，才可能享受长期复利。—— 陈培基导师课件整理
184. 真正有效的长期策略，往往没有社交炫耀价值。—— 陈培基导师课件整理
185. 市场大跌时敢加仓，靠的不是一时勇气，而是事前设好的规则。—— 陈培基导师课件整理
186. 估值过高时调整买入节奏，不一定是短线择时，也可以是风险预算管理。—— 陈培基导师课件整理
187. 大指数的一个价值，是通过成分调整持续更新资产组合。—— 陈培基导师课件整理
188. 今天的明星公司，不一定永远是明星；指数的价值在于自动更新。—— 陈培基导师课件整理
189. 不要迷信今天的明星公司会永远站在牌桌中央。—— 陈培基导师课件整理
190. 财富常因趋势而来，却只能被认知、品格和长期原则留住。—— 陈培基导师课件整理
191. 手段是术，人与品是道，大环境是势。—— 陈培基导师课件整理
192. 先取势，再明道，最后才是优术。—— 陈培基导师课件整理
193. 明道不是为了装，而是为了让自己更有资格接近和管理财富。—— 陈培基导师课件整理
194. 财富更像一种阶段性的托付，而不是永恒的占有。—— 陈培基导师课件整理
195. 先做人，去追随并承担；再聚财，去分享和帮助。—— 陈培基导师课件整理
196. 如果赚得全世界，却赔上生命，这笔交易的期望值是负的。—— 陈培基导师课件整理
197. 财富管理不只是算钱，也是算人生的代价。—— 陈培基导师课件整理
198. 当代价是生命、信仰或长期幸福时，再高的回报也不值得。—— 陈培基导师课件整理
199. 最好的投资，最终还是投资自己；学得越多，选择越多。—— 陈培基导师课件整理
`

function normalizeMentor(mentor) {
  const knownMentors = {
    Yvonne: 'Yvonne导师',
    Shenghua: '胜华导师',
    Peiji: '培基导师',
    Jerry: 'Jerry导师',
    Luna: 'Luna导师',
    James: 'James导师',
    小马哥: '小马哥',
    夏淳: '夏淳导师',
    陈培基: '培基导师',
    陈培基导师课件整理: '培基导师',
  }

  return knownMentors[mentor] || '领航导师'
}

function inferThemes(text) {
  const source = text.toLowerCase()
  const themes = new Set()
  const has = (...keywords) => keywords.some((keyword) => source.includes(keyword.toLowerCase()))

  if (has('职业', '成长', '学习', '能力', '机会', 'experience', 'passion', 'role', 'level', '提升', '培养', '选择')) themes.add('成长')
  if (has('利他', '真诚', '帮助', '成就', '分享', 'stakeholder', '人类利益')) themes.add('利他')
  if (has('manage up', '老板', '领导', 'leadership', 'sponsor', 'promotion', 'visibility', 'vp', 'ceo', 'c-suite', 'board')) themes.add('向上')
  if (has('ai', 'agent', 'coding', '白领', '黑领', 'saas', 'productivity', 'workflow', '未来', '工具')) themes.add('智变')
  if (has('沟通', '讲', '语言', 'storytelling', 'convince', '解释', '反馈', 'feedback', 'conversation', '问')) themes.add('沟通')
  if (has('本质', '人生', '意义', '价值', '人性', '认知', '概率', '财富', '信仰', '生命', '长期原则')) themes.add('哲思')
  if (has('team', '团队', 'manager', 'leader', '组织', 'scale', '人才', '人员', 'people')) themes.add('团队')
  if (has('business', 'impact', '全局', '长期', 'vision', '趋势', 'trade-off', '资本', '公司', '系统', '格局')) themes.add('格局')
  if (has('align', 'priority', 'top', 'goal', 'common', '共同', '资源', '决策', '自洽', 'mission')) themes.add('对齐')
  if (has('善缘', 'trust', 'relationship', 'chemistry', '信任', '关系')) themes.add('善缘')
  if (has('贡献', 'contribution', 'deliver', 'outcome', 'result', '成果', 'revenue', '业务指标')) themes.add('贡献')
  if (has('leader', '领导', '管理', 'manager', 'director', 'executive', 'vp', 'ceo', 'c-suite', 'board')) themes.add('领导')

  return themes.size > 0 ? Array.from(themes) : ['哲思']
}

const QUOTES = QUOTE_LIBRARY_TEXT.trim().split('\n').map((line) => {
  const match = line.match(/^(\d+)\.\s*(.+?)\s*——\s*(.+)$/)
  if (!match) throw new Error(`Invalid quote line: ${line}`)

  const [, id, text, mentor] = match
  return {
    id: Number(id),
    text,
    mentor: normalizeMentor(mentor),
    star: 1,
    themes: inferThemes(`${text} ${mentor}`),
  }
})

/** @param {string[]} themeIds 已选主题 id；空数组表示不筛选（随缘） */
function pickRandom(themeIds) {
  const ids = Array.isArray(themeIds) ? themeIds.filter(Boolean) : []
  if (ids.length === 0) {
    const i = Math.floor(Math.random() * QUOTES.length)
    return QUOTES[i]
  }
  const pool = QUOTES.filter(
    (q) => Array.isArray(q.themes) && q.themes.some((t) => ids.includes(t)),
  )
  const list = pool.length > 0 ? pool : QUOTES
  const j = Math.floor(Math.random() * list.length)
  return list[j]
}
