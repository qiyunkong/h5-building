/**
 * 第一步 分析需求 找对象 属性:一些元素对象 方法:1.事件绑定 2.显示不同类别的内容
 * 第二步 搭建出模型
 * 第三步 实现具体功能
 * 
 */

function Drag(template) {
  // 第一步 获取对象 DOM 模型
  this.dom = null
  this.template = DataX.get(template)
 

  this.init = function() {
    initDom.apply(this)
    initEvent.apply(this)
  }

  this.init()

  // 私有方法 事件绑定
  function initEvent() {
    this.dom.addEventListener("dragstart", handleDragStart);
  }

  // 私有方法 渲染视图
  function initDom() {
    this.dom = document.createElement("div")
    this.dom.setAttribute("draggable",true)
    this.dom.innerHTML = this.template
  }

  // 私有方法 拖拽鼠标按下开始状态监听处理函数
  function handleDragStart(e) {
    // 添加高亮样式
    e.target.classList.add("dropped")
    // 初始化组件
    const target = e.target
    // 是否为外部组件
    target.iswrap = false
    // 设置DataX 数据
    DataX.set('target',target)
    console.log('target',target)
  }


}
