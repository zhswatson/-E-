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

const QUOTES = [
  { id: 1, text: '先提升自己的精神境界，然后再回职场降维打击', mentor: '夏淳导师', star: 1, themes: ['成长', '格局'] },
  { id: 2, text: '工作中合作的核心思想是利他，不能老想着自己的一亩三分地', mentor: '培基导师', star: 5, themes: ['利他', '团队'] },
  { id: 3, text: 'Manage up的本质是manage yourself', mentor: '胜华导师', star: 2, themes: ['向上'] },
  { id: 4, text: '很少有人是六边形战士，找到自己的短板，提升短板', mentor: 'Yvonne导师', star: 1, themes: ['成长'] },
  {
    id: 5,
    text: '后AI时代，作为leader，最重要的是掌握人和人交流沟通的技能。工具人都会被AI取代',
    mentor: '夏淳导师',
    star: 3,
    themes: ['智变', '领导', '沟通'],
  },
  { id: 6, text: '人和人交流沟通的核心是真诚，这个对任何族裔的同事都管用', mentor: '培基导师', star: 1, themes: ['沟通', '善缘'] },
  { id: 7, text: '人生的意义就是追求「人生的意义是什么」的过程，简单的讲就是recursion', mentor: '夏淳导师', star: 1, themes: ['哲思'] },
  {
    id: 8,
    text: '后AI时代，manage at scale不是按你管的人数来衡量的，是看你对business的impact，contribution来定的，可能管的人不是很多，但对公司的影响很大，也是manage at scale',
    mentor: 'Yvonne导师',
    star: 3,
    themes: ['智变', '领导', '格局', '贡献'],
  },
  { id: 9, text: 'teamwork核心要回到人的本质，Small talks也是在找共识', mentor: '领航导师', star: 1, themes: ['团队', '沟通'] },
  { id: 10, text: '有大局观，了解trend，提前预判，专注机会', mentor: '领航导师', star: 4, themes: ['格局'] },
  {
    id: 11,
    text: '你觉得重要的contribute可能对公司来说没有意义，和老板align做都感兴趣的才是有意义的',
    mentor: '领航导师',
    star: 1,
    themes: ['对齐', '贡献'],
  },
  { id: 12, text: '职场上要广结善缘', mentor: '胜华导师', star: 3, themes: ['善缘', '利他'] },
]

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
