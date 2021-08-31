/**
 * 获取所有的拖拽元素
 * 让后都给他绑定拖拽事件
 */
// 禁止图片拖拽

// 拖拽元素
let dragWrapList = [...document.querySelectorAll(".form td")]
let bannerList =  [...document.querySelectorAll(".banner td")]
// 拖拽元素 触发handleDragStart 函数
dragWrapList.map((item)=>{
  item.setAttribute("draggable",true)
  item.addEventListener("dragstart",handleDragStart)
})

// 拖拽元素 触发handleDragStart 函数
bannerList.map((item)=>{
  item.setAttribute("draggable",true)
  item.addEventListener("dragstart",handleDragStart)
})

// 拖拽鼠标按下开始状态监听处理函数
function handleDragStart(e) {
  const target = {}
  // 获取目标组件名称
  target.name = e.target.getAttribute("data-component-name")
  // 是否为外部组件
  target.iswrap = true
  // 设置DataX 数据
  DataX.set('target',target)
}

let node = new Design('mobile-design')