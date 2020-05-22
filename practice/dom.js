window.dom = {
    //创建节点
    create(string){
        let contariner = document.createElement("template")
        contariner.innerHTML = string.trim()
        return contariner.content.firstChild
    },
    //新增兄弟
    after(node,node2){
        //接收一个固定元素和新的元素
        //查找固定元素的父级元素,在父级元素中使用insertBefore()方法
            // 接收两个参数第一个参数 新的元素,第二个参数为固定元素的后一个兄弟元素;表示在当前元素和后一个元素之间插入新的元素
        node.parentNode.insertBefore(node2,node.nextSibling)
    },
    //新增哥哥
    before(node,node2){
        node.parentNode.insertBefore(node2,node)
    },
    //新增儿子
    append(parent,child){
        //在parent这个爸爸里添加一个儿子child
        parent.appendChild(child)
    },
    //新增爸爸
    wrap(node,parent){
        //先将爸爸放在这个节点的父节点中
        dom.before(node,parent)
        //然后在这个爸爸的节点下添加一个儿子
        dom.append(parent,node)
    },
    /*************************删除************************************ */

    //用于删除节点
    remove(node){
        node.parentNode.removeChild(node)
        return node
    },
    //用于删除后代节点
    empty(node){
        let array = [];
        let x = node.firstChild;
        while (x) {
            array.push(dom.remove(x));
            x = node.firstChild
        }
        return array
    },

    /***************************改*********************************** */
    //用于读写属性
    attr(node,name,value){
        if(arguments.length === 3){
            node[name] = value
        }else if(arguments.length === 2){
            return node[name]
        }
    },

    //用于读写文本内容
    text(node,value){
        if(arguments.length === 2){
            if('innerText' in node){ //兼容IE
                node.innerText = value
            }else{
                node.textContent = value
            }
        }else if(arguments.length === 1){
            if('innerText' in node){
                return node.innerText
            }else{
                return node.textContent
            }
        }
    },

    //用于读写HTML内容
    html(node,value){
        if(arguments.length === 2){
            node.innerHTML = value
        }else if(arrgument.length === 1){
            return node.innerHTML
        }
    },

    //用于修改style
    style(node,name,value){
        if(arguments.length === 3){
            node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === "string"){
                return node.style[name]
            }else if(name instanceof Object){
                for(let key in name){
                    node.style[key] = name[key]
                }
            }
        }
    },

    //用于添加class
    class:{
        add(node,className){
            node.classList.add(className)
        },
        //用于删除class
        remove(node,className){
            node.classList.remove(className)
        }
    },

    //用于添加事件监听
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    //用于删除事件监听
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },

    /**************************查************************************** */
    //用于获取标签或标签门
    find(selector,scope){
        //接收两个参数,一个是选择器,一个是标签(非必填)
        return (scope || document).querySelectorAll(selector);
    },
    //获取父元素
    parent(node){
        return node.parentNode
    },
    //获取子元素
    children(node){
        return node.children
    },
    //获取兄弟姐妹元素
    siblings(node){
        // node.parentNode.children是一个类数组对象,使用Array.form将类数组对象转换成数组对象,使用过滤属性过滤出不等于当前节点的其他子节点
        return Array.from(node.parentNode.children).filter(n=>n!==node)
    },
    //获取弟弟
    next(node){ 
        let x = node.nextSibling  
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    //获取哥哥
    previous(node){
        let x = node.previousSibling;
        while(x && x.nodetype ===3){
            x = x.previousSibling
        }
        return x
    },
    //遍历所有节点
    each(nodeList,fn){
        nodeList = Array.from(nodeList)
        nodeList.forEach((item,index)=>{
            fn.call(null,nodeList[index])
       })
    }, 

    //用于获取排行老几
    index(node){
        let x = Array.from(node.parentNode.children)
        let i = null;
        for(i=0;i<x.length;i++){
            if(x[i] === node){
                i = i+1
                break
            }
        }
        return i 
        
    }
    










     











}
