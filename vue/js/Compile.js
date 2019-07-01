function Compile(node,vm){
    if(node){
        this.frag = this.nodeToFragment(node,vm);
        return this.frag;
    }
}

Compile.prototype = {
    nodeToFragment:function(node,vm){
        var that = this;
        //创建虚拟节点对象，容器
        var frag = document.createDocumentFragment();
        var child;

        //令人窒息的骚操作
        while(child = node.firstChild){
            that.compileElement(child,vm);
            // 添加所有子节点
            frag.append(child);
        }
        return frag;
    },
    compileElement:function(node,vm){ //语法解析
        var reg = /\{\{(.*)\}\}/; //获取{{内部的值}}

        //节点类型为元素
        if(node.nodeType === 1){
            //获取属性列表
            var attr = node.attributes;
            for(var i=0;i<attr.length;i++){
                if(attr[i].nodeName == 'v-model'){
                    //获取v-model绑定的属性名
                    var key = attr[i].nodeValue;
                    node.addEventListener('input',function(e){
                        // 给相应的data属性赋值，进而触发该属性的set方法
                        vm[key] = e.target.value;
                    })
                    new Watcher(vm,node,key,'value')
                }
            }
        }

        //节点类型为text
        if(node.nodeType === 3){
            if(reg.test(node.nodeValue)){
                var key = RegExp.$1; //获取匹配字符串
                key = key.trim()
                // node.nodeValue = vm[key] //将data的值赋给node
                new Watcher(vm,node,key,'nodeValue')
            }
        }
    }
}