function Design(id) {
   // 拖拽元素移入时过程中试试触发
   var handleDragover = function(e) {
    // 禁止事件
    console.log(e)
    e.preventDefault();
    const target = DataX.get('target') 
    // 判断是否外部组件拖拽进入 / 内部组件拖拽
    if(!target.iswrap){
      if(target != e.target && e.target.nodeType ===1 ){
        console.log("e.target",e.target,"target",target)
        console.log("this",this)
        // 插入元素
        console.log(target)
        const node = parentNodeRecursion(e.target)
        this.insertBefore(target,node);
      }
    }else{    // 外部拖拽 添加高亮
      this.classList.add('dragover')
    }
  }

  function parentNodeRecursion(node){
    node = node.parentNode
    if(node.draggable != true ){
      node = parentNodeRecursion(node)
    }
    return node
    
  }

  // 拖拽元素移出时触发
  var handleDragLeave = function(e) {
    this.classList.remove('dragover');
  }

  // 拖拽元素停止时触发 
  var handleDrop = function(e) {
    // 禁止事件
    e.preventDefault()
    const target = DataX.get('target')
    if(!target.iswrap){  // 内部组件拖拽
      target.classList.remove('dropped')
    }else{    // 外部组件拖拽
      let name = target.name
      let drag = new Drag(name)
      console.log("target.dom",target.dom)
      this.appendChild(drag.dom)
      this.classList.remove('dragover')
      this.classList.remove('on')
      let a = [...document.images].map((item)=>{
        item.setAttribute("draggable",false)
      })
    } 
    //this.dom.childNodes.set(name,drag)
    /**
     * 声明的对象添加到一个集合中，
     * 如果通过ES6的syoml生成一个唯一的key,
     * 下一次通过key查找
     * 
     */
    
  }

  this.dom = document.getElementById(id)

  this.init = function() {
    initEvent.apply(this)
  }
  
  this.init()

  // 私有方法 事件绑定
  function initEvent() {
    this.dom.addEventListener('dragover', handleDragover);
    this.dom.addEventListener('dragleave', handleDragLeave);
    this.dom.addEventListener('drop', handleDrop);
  }

 


}