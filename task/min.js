
const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red');
dom.each(divList,(n)=>{dom.style(n,'color','Blue')})