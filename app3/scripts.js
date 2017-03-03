// JavaScript File


$(function(){
    //GET/READ
    $('#get-button').on('click',function(){
        $.ajax({
            url: '/app3/bears',
            contentType: 'application/jason',
            success: function(getname){
                //console.log('response');
                var tbodyEl = $('tbody');
                
                tbodyEl.html('');

                //response.bears.forEach(function(bears) {
                $.each(getname, function(i, bears){   
                    tbodyEl.append('\
                        <tr>\
                            <td>' + bears.__v + '</td>\
                            <td><input type="text" class="name" value="' + bears.name + '"></td>\
                            <td>\
                                <button class="update-button">UPDATE/PUT</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
            }
        });
    });
});