window.dom = {
    find(selector,scope){
        return (scope || document).querySelectorAll(selector) 
    },
    style(node,name,value){
        if(arguments.length === 3){
            return node.style[name] = value
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
    each(divList,fn){
        console.log(divList)
        divList = Array.from(divList);
        divList.forEach((item,index)=>{
            fn(item)
        })
    }

}