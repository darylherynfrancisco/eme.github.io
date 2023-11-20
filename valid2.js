function validateform()
{
    var username=document.myform. username.value;  
	  var password=document.myform. password.value;  

    if (username==null || username==""){  
        alert('Must be filled!');  
        return false;  
      }


      else if (password==null || password==""){  
        alert('Must be filled!');  
        return false;  
      }

      else if(password.length <8){  
        alert('Password is at least 8 characters');  
        return false;  
        }  
      
}