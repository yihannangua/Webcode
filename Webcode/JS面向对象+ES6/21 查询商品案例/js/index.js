window.onload = function () {
    //利用新增数组方法来操作数据
    //1 渲染数据
    //1.1 用数组预设数据
    var data = [{
        id:1,
        name:'小米',
        price:3999
    },{
        id:2,
        name:'oppo',
        price:999
    },{
        id:3,
        name:'荣耀',
        price:1299
    },{
        id:4,
        name:'华为',
        price:1999
    }];
    //定义渲染数据函数
    function setData(shopdata) {
        tbody.innerHTML = '';//清空tbody所有子节点
        shopdata.forEach(function(value) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + value.id + '</td><td>' + value.name + '</td><td>' + value.price + '</td>';
            tbody.appendChild(tr);
        })
    }
    //1.2 获取表单元素
    tbody = document.querySelector('tbody');
    //1.3 把数据宣传到页面中
    setData(data);
    //2 按照价格筛选商品
    //2.1 获取 按钮、价格
    var priceBtn = document.querySelector('#priceBtn');
    //2.2 监听价格筛选按钮点击事件
    priceBtn.addEventListener('click',function() {
        var priceLow = document.querySelector('#priceLow').value;
        var priceHigh = document.querySelector('#priceHigh').value;
        if(priceLow >= priceHigh) return alert('后一个价格必须大于前一个价格！');
        var dataForPrice = data.filter(function(value) {//按照价格范围，生成新数组
            return value.price >= priceLow && value.price <= priceHigh;
        })
        setData(dataForPrice);
    })
    //3 按照商品名称查询
    //3.1 获取 按钮、商品名
    var shopNameBtn = document.querySelector('#shopNameBtn');
    shopNameBtn.addEventListener('click',function() {
        var shopName = document.querySelector('#shopName').value;
        if (shopName == '') alert('不能为空！');
        var arr = [];
        //如果查询数组中唯一元素，用some方法更合适，因为他找到这个元素，就不再进行循环，效率更高
        data.some(function(value) {
            if(value.name === shopName) {
                arr.push(value);
                return true;//return后面必须写true
            }
        })
        setData(arr);
    })





}