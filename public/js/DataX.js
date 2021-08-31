const DataX = new Map()
window.DataX = DataX
DataX.set('target',{})
DataX.set('Card',Card) 
DataX.set('Swiper',Swiper) 
DataX.set('InputGroupEmail',InputGroupEmail)
DataX.set('InputGroupRadio',InputGroupRadio)
DataX.set('SelectGroupValue',SelectGroupValue)
DataX.set('ButtonGroupSubmit',ButtonGroupSubmit) 
DataX.set('TextareaGroupValue',TextareaGroupValue) 
DataX.set('InputGroupCheckBox',InputGroupCheckBox)
DataX.set('InputGroupPassWord',InputGroupPassWord)
DataX.set('InputGroupRange',InputGroupRange)
DataX.set('QRcode',QRcode)
DataX.set('Accordion',Accordion)
DataX.set('Jumbotron',Jumbotron)
DataX.set('News',News)
DataX.set('HendMenu',HendMenu)
DataX.set('Image',Image)
/**
 * 防抖函数
 * @param fn 事件函数
 * @param delay 防抖时间
 * @returns 函数
 */
function debounce (fn,delay){
  let time;
  let debounced = function(e){
    let That = this
    console.log(this)
    clearTimeout(time)
    time = setTimeout(function (){
      fn.call(That,e);
    },delay)
  }
  return debounced
}
window.debounce = debounce;