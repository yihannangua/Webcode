$(function() {
    function getCommentList() {
        $.ajax({
            method: 'GET',
            url: 'http://liulongbin.top:3006/api/cmtlist',
            success: function(res) {
            if (res.status !== 200) return alert('获取评论列表失败！')

            var rows = [];
            $.each(res.data,function(i,item) {
                rows.push(' <li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #5bc0de;">评论人： ' + item.username + ' </span>' + item.content + ' </li>')
                $('#row').empty().append(rows.join(''))
                }
        )} 
        })   
    } 
    getCommentList ();

    $('#form1').on('submit',function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        $.ajax({
            method: 'POST',
            url: 'http://liulongbin.top:3006/api/addcmt',
            data,
            success: function(res) {
                if (res.status !== 201) {
                    return alert('发表失败');
                }
                getCommentList ();
                //将jq对象转换为原生DOM对象,然后重置
                $('#form1')[0].reset();
            }
        })
    })
})

