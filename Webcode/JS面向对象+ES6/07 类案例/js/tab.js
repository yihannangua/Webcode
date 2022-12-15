var that;
class Tab {
    constructor(id) {
        that = this;
        //获取元素
        this.main = document.querySelector(id);
        this.ul = that.main.querySelector('ul');
        this.tabadd = this.main.querySelector('.tabadd');
        this.tabscon = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        //init初始化操作让相关的元素绑定事件
        this.updateNode();//调用获取元素的方法，重新获取元素
        for(var i = 0;i < this.lis.length;i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.lis[i].lastElementChild.onclick = this.removeTab;
        }
        this.tabadd.onclick =  this.addTab;
    }
    //1.切换功能
    toggleTab() {
        // console.log(this.index);
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    //2.添加功能
    addTab() {
        // console.log(this);
        //创建li元素和section元素
        that.clearClass();
        var x = Math.random();
        var li = '<li  class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        that.ul.insertAdjacentHTML('beforeend',li);
        var section = '<section class="conactive">新内容 '+ x +'</section>';
        that.tabscon.insertAdjacentHTML('beforeend',section);
        that.init();//再次执行初始化，保证新添加的元素被获取并绑定事件
    }
    //3.移除功能
    removeTab(e) {
        e.stopPropagation( );//阻止冒泡
        var theOne = this.parentElement;
        theOne.remove();//方法的this指向方法的调用者 点击的删除按钮
        that.sections[theOne.index].remove();//删除对应序号的内容
        that.updateNode();
        if (theOne.className) {//如果删除的是选中的，则将其前一个li和section设为选中及可见
            that.lis[theOne.index - 1].className = 'liactive';
            that.sections[theOne.index -1].className = 'conactive';
        }
    }
    //4.编辑功能
    editTab() {

    }
    //循环清除样式
    clearClass() {
        for(var i = 0;i < this.lis.length;i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    //获取所有的li和section的元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
    }
}

new Tab('#tab');
