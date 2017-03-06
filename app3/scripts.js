// JavaScript File


$(function(){
    //GET/READ
    var $name = $('#name');
    var $email = $('#email');
    var $gender = $('#gender');
    var $age = $('#age');
    var $img_url = $('#img_url');
    var $ID = $('ID');
    
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
                            <td class="id">' + bears._id + '</td>\
                            <td><input type="text" class="name" value="' + bears.name + '"></td>\
                            <td><input type="text" class="email" value="' + bears.email + '"></td>\
                            <td><input type="text" class="gender" value="' + bears.gender + '"></td>\
                            <td><input type="text" class="age" value="' + bears.age + '"></td>\
                            <td><input type="text" class="img_url" value="' + bears.img_url + '"></td>\
                            <td>\
                                <button class="update-button">UPDATE</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
            },
            error: function(){
                alert('error loading profile') ;   
            }
        });
    });
    
    $('#post-button').on('click',function(event){
        event.preventDefault();
        //var createInput = $('#create-input');
        var profile = {
                name: $name.val(),
                email: $email.val(),
                gender: $gender.val(),
                age: $age.val(),
                img_url: $img_url.val(),
            };
            
        $.ajax({
            url: '/app3/bears',
            //contentType: 'application/jason',
            type: 'POST',
            data: profile,
            // data: JSON.stringify({
            //     name: name.val(),
            //     email: email.val(),
            //     gender: gender.val(),
            //     age: age.val(),
            //     image_url: img_url.val(),
            // }),
            success: function(response){
                console.log(response);
                //name.val('');
                $('get-button').click();
            },
            error: function(){
                alert('error posting profile') ;   
            }
        });
    });

    $('table').on('click', '.update-button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        var newName = rowEl.find('.name').val();
        var newemail = rowEl.find('.email').val();
        var newgender = rowEl.find('.gender').val();
        var newage = rowEl.find('.age').val();
        var newimg_url = rowEl.find('.img_url').val();

        $.ajax({
            url: '/app3/bears/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ 
                name: newName,
                email: newemail,
                gender: newgender,
                age: newage,
                img_url: newimg_url,
            }),
            success: function(response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });
    
    // $('#update-button').on('click',function(event){
    //     event.preventDefault();
        
    //     var ID = $ID.val();
    //     var profile = {
    //             name: $name.val(),
    //             email: $email.val(),
    //             gender: $gender.val(),
    //             age: $age.val(),
    //             image_url: $img_url.val(),
    //         };
            
    //     $.ajax({
    //         url: '/app3/bears/' + ID,
    //         //contentType: 'application/jason',
    //         type: 'PUT',
    //         data: profile,
    //         success: function(response){
    //             console.log(response);
    //             $('get-button').click();
    //         },
    //         error: function(){
    //             alert('error updating profile') ;   
    //         }
    //     });
    // });    


 $('table').on('click', '.delete-button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();

        $.ajax({
            url: '/app3/bears/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });    
    
});