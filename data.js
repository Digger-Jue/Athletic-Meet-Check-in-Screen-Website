/* ============================================================
   检录大屏 · 数据文件
   以后只需修改这个文件，无需改动 index.html
   ============================================================ */

/* ---------- 全局配置 ---------- */
window.CHECKIN_CONFIG = {

  // 表格最多显示多少行（不含表头）
  MAX_ROWS: 10,

  // 「停止检录」后保留多久，超时自动移除该行（毫秒）
  // 10 * 60 * 1000 = 10 分钟
  STOP_REMOVE_MS: 10 * 60 * 1000,

  // 时间模式：
  //   'relative' → checkin / start 填数字，表示相对当前时刻的分钟偏移
  //                （负数 = 已经过去，正数 = 还没到）
  //   'absolute' → checkin / start 填 "HH:MM" 字符串，按当天时刻计算
  TIME_MODE: 'relative'
};

/* ---------- 检录数据 ----------
   name    : 姓名
   event   : 比赛项目
   gate    : 检录口（3 字符内）
   lane    : 道次（3 字符内）
   checkin : 检录时间
   start   : 开始时间
-------------------------------- */
window.CHECKIN_DATA = [
  { name:'陈甲蓉', event:'男子100米',      gate:'1号口', lane:'3道',  checkin:-30, start:-15 },
  { name:'陈乙蓉', event:'女子跳高',       gate:'2号口', lane:'7道',  checkin:-20, start: -5 },
  { name:'陈丙蓉', event:'男子铅球',       gate:'1号口', lane:'12道', checkin:-12, start:  3 },
  { name:'陈丁蓉', event:'女子400米',      gate:'3号口', lane:'5道',  checkin: -8, start:  7 },
  { name:'陈戊蓉', event:'男子跳远',       gate:'2号口', lane:'9道',  checkin: -2, start: 13 },
  { name:'陈己蓉', event:'女子100米',      gate:'1号口', lane:'2道',  checkin:  3, start: 18 },
  { name:'陈庚蓉', event:'男子1500米',     gate:'3号口', lane:'1道',  checkin:  8, start: 23 },
  { name:'陈辛蓉', event:'女子铅球',       gate:'2号口', lane:'6道',  checkin: 13, start: 28 },
  { name:'陈壬蓉', event:'男子4×100米接力', gate:'1号口', lane:'4道',  checkin: 18, start: 33 },
  { name:'陈癸蓉', event:'女子800米',      gate:'3号口', lane:'8道',  checkin: 23, start: 38 }
];