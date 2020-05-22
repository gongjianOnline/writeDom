const div = dom.create("<div>newDiv</div>");
// console.log(div);

// dom.after(test, div);

const div3 = dom.create('<div id="parent">新增爸爸</div>')
dom.wrap(test, div3)

const nodes = dom.empty(window.empty)
// console.log('删除的节点')
// console.log(nodes)

dom.attr(test,'title','hello world')

dom.text(test,"这是新增的文本节点")
dom.text(test)

dom.style(test, {border: '1px solid red', color: 'blue'})
// console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.parent(test)

const s2 = dom.find('#s2')[0]
dom.siblings(s2)
// console.log(dom.next(s2))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'red'))

console.log(dom.index(s2))
