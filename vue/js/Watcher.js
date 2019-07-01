function Watcher(vm,node,key,type){
    Dep.target = this;
    this.key = key; //键名
    this.node = node; //当前节点
    this.vm = vm; 
    this.type = type;
    this.updata();
    Dep.target = null;
}

Watcher.prototype = {
    updata:function(){
        this.get();
        //订阅者执行操作
        this.node[this.type] = this.value 
    },
    //获取data的属性的值
    get:function(){ 
        // 触发 observe
        this.value = this.vm[this.key];
    }
}