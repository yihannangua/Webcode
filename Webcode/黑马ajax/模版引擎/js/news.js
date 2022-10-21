$(function() {

    function padZero(n) {
        n > 9 ? n = n : n = '0' + n;
        return n;
    }

    template.defaults.imports.dataFormat = function(data) {
        
        var dt = new Date(data);
        var y = dt.getFullYear();
        var m = padZero(dt.getMonth() + 1);
        var d = padZero(dt.getDate());
        var hh = dt.getHours();
        hh > 9 ? hh = hh : hh = '0' + hh;
        var mm = padZero(dt.getMinutes());
        var ss = padZero(dt.getSeconds());
        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss;
    }

    function getnews() {
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/news',
            success: function(res) {
                if(res.status !== 200) return alert('获取新闻失败！')
                $('#news-list').empty()
                $.each(res.data,function(i,item) {

                    var data = {
                        img: item.img,
                        title: item.title,
                        tags: item.tags.split(","),
                        source: item.source,
                        time: item.time,
                        cmtcount: item.cmtcount
                    }

                    var htmlstr = template('news',data);
                    $('#news-list').append(htmlstr);
                    
                })
            }
        })
        
    }

    getnews();


})

