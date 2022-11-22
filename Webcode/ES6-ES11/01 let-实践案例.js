addEventListener('load',function() {
    //获取item元素对象
    let items = document.getElementsByClassName('item');
    console.log(items.length);
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            //清除所有按钮背景
            for (let j = 0; j < items.length; j++) {
                items[j].style.background = '';
            }
            //修改点击按钮背景
            items[i].style.background = 'pink';//var时只能使用this,不能使用items[i],因为var不同于let没有块级作用域，最后i变成了3，找不到对应的对象

        }
    }
})