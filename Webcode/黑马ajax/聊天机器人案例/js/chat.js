
$(function() {
    //初始化右侧滚动条
    //这个方法定义在scroll.js中
    resetui()

    function getVoice(text) {//转换为语音
        $.ajax({
            type: 'GET',
            url: 'http://liulongbin.top:3006/api/synthesize',
            data: {text: text},
            success: function(res) {
                if (res.status === 200) {
                    $('#voice').attr('src',res.voiceUrl)
                }
            }   
        })

    }

    function getMsg(text) {//获取回复信息
        $.ajax({
            type: 'GET',
            url: 'http://liulongbin.top:3006/api/robot',
            data: {spoken: text},
            success: function(res) {//接收回复消息
                if (res.message === 'success') {
                    var msg = res.data.info.text
                    //渲染到页面上
                    $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /><span>' + msg + '</span></li>')
                    resetui()
                    getVoice(msg)//转换回复消息为语音
                }
            }   
        })
    } 

    function iptSend() {//渲染内容到聊天窗口并获取回复消息并转换为语音
            var text = $('#ipt').val().trim();
            if(text.length <= 0) return ipt.val('')//判断输入内容是否为空，为空则中断渲染
            //若不为空，将内容渲染至聊天窗口
            $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /><span>' + text + '</span></li>')
            resetui()//重置滚动条到底部
            getMsg(text) //获取回复信息
            $('#ipt').val('')//清空输入框
        }



    $('#btnSend').on('click',function(){
        //获取文本输入框的内容
        iptSend()
    })

    $('#ipt').keydown(function(e) {//监听键盘按下事件
        if (e.keyCode === 13) {//按下回车
            iptSend()
        }
    })
})   

