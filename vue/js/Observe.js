// 数据劫持，实现响应式
function defineReactive(vm,key,val){
    var dep = new Dep();
    Object.defineProperty(vm,key,{
        get:function(){ //this.data[key] -> this[key]
            if(Dep.target){
                //js单线程，保证同一时间内只会有一个订阅者、
                // Dep.target === Watcher
                dep.addSub(Dep.target);
            }
            return val;
        },
        set:function(newVal){
            if(newVal == val) return;
            val = newVal;
            //发布
            dep.notify();
        }
    })
}

// 遍历数据键值对，拆分
function Observe(data,vm){
    Object.keys(data).forEach(function(key){
        defineReactive(vm,key,data[key])
    })
}