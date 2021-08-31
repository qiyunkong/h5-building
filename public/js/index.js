// 拖拽元素
const draggable = document.getElementById("draggable")
// 放置元素
const droppable = document.getElementById("droppable")

// 拖拽元素 触发handleDragStart 函数
draggable.addEventListener("dragstart",handleDragStart)

/**
 *  监听放置区域 
 * */
// 拖拽过程中移入放置范围区域 --》 触发handleDragover函数
droppable.addEventListener("dragover", handleDragover)
// 拖拽过程中移出放置范围区域 --》 触发handleDragLeave函数
droppable.addEventListener("dragleave", handleDragLeave)
// 拖拽过程中并且在放置范围区域取消拖拽 触发handleDrop函数
droppable.addEventListener("drop", handleDrop);

function handleDragStart(e) {
  e.dataTransfer.setData("jsondata", JSON.stringify({ name: "cxh", sex: "man" }) );
  // 有 copy、move、和 auto 三种，分别是把鼠标指针
  // 显示为复制样式（带+号）、移动样式，或自动设置样式
  // e.dataTransfer.dropEffect = "copy";
}

// 拖拽过程中移入放置范围区域 触发函数
function handleDragover(e) {
  // 禁止默认事件
  e.preventDefault();
  droppable.classList.add("dragover");
  // e.dataTransfer.dropEffect = "move";
}

// 拖拽过程中移出放置范围区域 触发函数
function handleDragLeave(e) {
  droppable.classList.remove("dragover");
}

// 放置范围区域取消拖拽 触发函数
function handleDrop(e) {
  e.preventDefault();
  // 如果是文件
  [...e.dataTransfer.items].forEach((item) => {
    if (item.kind === "file") {
      const file = item.getAsFile();
      createPreview(file);
    }
  });

  // 如果是元素
  const draggedId = e.dataTransfer.getData("jsondata");
  console.log(JSON.parse(draggedId))
  
  // droppable.appendChild(document.getElementById("draggable"));
  const img =  document.createElement('img')
  img.width = 200
  img.src = "https://qr.api.cli.im/newqr/create?data=http%253A%252F%252Fjsfei.cn%252F&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=260&kid=cliim&key=a7d11a7ebc37f35de0048cbc4cdc09ef"
  droppable.appendChild(img);
  droppable.classList.add("dropped");
}

