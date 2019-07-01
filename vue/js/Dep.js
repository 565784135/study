function Dep(){
    this.subs = []
}
Dep.prototype = {
    addSub:function(sub){ //订阅
        this.subs.push(sub)
    },
    notify:function(){ //发布
        this.subs.forEach(function(sub){
            sub.updata()
        })
    }
}