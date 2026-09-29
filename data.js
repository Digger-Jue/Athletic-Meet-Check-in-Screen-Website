/* ============================================================
   检录大屏 · 数据文件
   采用绝对时间模式，checkin / start 填写当天时刻 "HH:MM"
   ============================================================ */

/* ---------- 全局配置 ---------- */
window.CHECKIN_CONFIG = {

  // 表格最多显示多少行（不含表头）
  MAX_ROWS: 10,

  // 「停止检录」后保留多久，超时自动移除该行（毫秒）
  STOP_REMOVE_MS: 10 * 60 * 1000,

  // 绝对时间：checkin / start 填 "HH:MM" 字符串，按当天时刻计算
  TIME_MODE: 'absolute'
};

/* ---------- 检录数据 ----------
   name    : 姓名
   event   : 比赛项目
   gate    : 检录口（原始值）
   lane    : 道次（原始值）
   checkin : 检录时间（开始时间减 30 分钟）
   start   : 开始时间
-------------------------------- */
window.CHECKIN_DATA = [
  { name:'贺梓衿', event:'男子甲组800米预决赛',  gate:'2(32)', lane:'五',   checkin:'10:15', start:'10:45' },
  { name:'王鸿铮', event:'男子甲组1500米预决赛', gate:'1(30)', lane:'七',   checkin:'13:25', start:'13:55' },
  { name:'李晨冉', event:'女子甲组4×100米预决赛', gate:'4',    lane:'3组二', checkin:'14:39', start:'15:09' },
  { name:'李晨瑜', event:'女子甲组4×100米预决赛', gate:'4',    lane:'3组二', checkin:'14:39', start:'15:09' },
  { name:'李昕瑶', event:'女子甲组4×100米预决赛', gate:'4',    lane:'3组二', checkin:'14:39', start:'15:09' },
  { name:'刘湘琦', event:'女子甲组4×100米预决赛', gate:'4',    lane:'3组二', checkin:'14:39', start:'15:09' },
  { name:'贺梓衿', event:'男子甲组4×100米预决赛', gate:'4',    lane:'1组六', checkin:'14:58', start:'15:28' },
  { name:'齐浩然', event:'男子甲组4×100米预决赛', gate:'4',    lane:'1组六', checkin:'14:58', start:'15:28' },
  { name:'熊御杰', event:'男子甲组4×100米预决赛', gate:'4',    lane:'1组六', checkin:'14:58', start:'15:28' },
  { name:'赵锦程', event:'男子甲组4×100米预决赛', gate:'4',    lane:'1组六', checkin:'14:58', start:'15:28' }
];
