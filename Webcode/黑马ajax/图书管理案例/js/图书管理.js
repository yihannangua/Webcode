$(function() {
    //获取图书列表 
    function getbooks() {
        $.get('http://www.liulongbin.top:3006/api/getbooks',function(res) {
            if(res.status !== 200) return alert('获取失败！')

            var rows = []
            $.each(res.data, function(i,item) {
                rows.push('<tr><td>'+item.id+'</td><td>'+item.bookname+'</td><td>'+item.author+'</td><td>'+item.publisher+'</td><td><a href="javascript:;" class="del" data-id="' + item.id + '">删除</a></td></tr>')
                $('#td').empty().append(rows.join(''))
            })
        })
    }

    getbooks();

    $('tbody').on('click','.del',function() {
         var id = $(this).attr('data-id'); 
         $.get('http://www.liulongbin.top:3006/api/delbook',{id: id},function(res){
            if (res.status !== 200) return alert(res.msg)
            getbooks();

         })
    })

    $('#btnAddBook').on('click',function() {
        var bookName = $('#iptBookname').val().trim()
        var author = $('#iptAuthor').val().trim()
        var publisher = $('#iptPublisher').val().trim()
        if (bookName.length <= 0 || author.length <= 0 || publisher.length <= 0) return alert('请填写完整的图书信息！')
     
        $.post('http://www.liulongbin.top:3006/api/addbook',{bookname: bookName,author: author,publisher: publisher},function (res) {
            if (res.status !== 201) return alert(res.msg)
            getbooks();
            $('#iptBookname').val('')
            $('#iptAuthor').val('')
            $('#iptPublisher').val('')                      
        })
    })
   
})