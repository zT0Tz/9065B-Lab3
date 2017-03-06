// JavaScript File


$(function(){
    //GET/READ
    var $name = $('#name');
    var $email = $('#email');
    var $gender = $('#gender');
    var $age = $('#age');
    var $image_url = $('#image_url');
    
    
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
                            <td>' + bears._id + '</td>\
                            <td><input type="text" class="name" value="' + bears.name + '"></td>\
                            <td><input type="text" class="email" value="' + bears.email + '"></td>\
                            <td><input type="text" class="gender" value="' + bears.gender + '"></td>\
                            <td><input type="text" class="age" value="' + bears.age + '"></td>\
                            <td><input type="text" class="image" value="' + bears.image_url + '"></td>\
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
                image_url: $image_url.val(),
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
            //     image_url: image_url.val(),
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

    
    
    
});