function blureHandler(txt)
                { 
                    if(!/^[A-Za-z]{3,20}$/.test(txt))
                        {console.log("not accepted username false test")
                            c=document.getElementById("indiName");
                            c.innerText='Invalid name';
                            //c.classList.remove("hide");
                            var x=document.forms["login"]["uname"];
                            x.select();
                            x.focus();
                            
                        }
                    else{
                            getLocalStorage(txt)
                            c=document.getElementById("indiName");
                            c.innerText='Invalid name';
                            c.style.display="none";
                            document.forms["login"]["upass"].focus();

                    }    
                        }
            const forgetCheck = document.getElementById("forgMe")

            const rmCheck = document.getElementById("remeMe")
            username=document.forms["login"]["uname"]
    
            userpassword=document.forms["login"]["upass"];
            
            
            function setLocalStorage()
                {
                    if(typeof(Storage) !== "undefined") 
                    {  // we won't check  userName.value !== "" as we already have constrains on txt box
                        if(rmCheck.checked) {
                            localStorage.username = username.value;
                            localStorage.checkbox = rmCheck.value;
                            //localStorage.userpassword=userpassword.value;
                            var encryptedAES = CryptoJS.AES.encrypt(userpassword.value, "My Secret wepaon Bla BLa");
                            localStorage.userpassword=encryptedAES
                            console.log("encrypted pass is" ,encryptedAES)
                            console.log("dataSaved")
                            console.log(localStorage.username ,
                                localStorage.checkbox ,
                                localStorage.userpassword)
                            setCookie(username,encryptedAES,3)    
                        } 
                        
                        else {
                            localStorage.username = "";
                            localStorage.checkbox = "";
                            localStorage.userpassword="";
                            username.value=""
                            userpassword.value=""
                            console.log("hope you remember")
                        }
                    }
                    else 
                    {
                        alert("Sorry! No Web Storage support..");
                    }


                }
                

               function getLocalStorage(txt) 

                {
                    if (localStorage.username==txt) 

                    {   var decryptedBytes = CryptoJS.AES.decrypt(localStorage.userpassword, "My Secret wepaon Bla BLa");

                        console.log("found you sweety")
                        userpassword.value=decryptedBytes.toString(CryptoJS.enc.Utf8)
                        console.log("decrypted pass " ,localStorage.userpassword)
                        console.log("oroginal pass is" , decryptedBytes.toString(CryptoJS.enc.Utf8));
                        console.log("get cookie "+getCookie(username))
                    } 
                    
                    else{
                        console.log("hello new user")
                    }
                }

                
                function setCookie(name,value,days) {
                    var expires = "";
                    if (days) {
                        var date = new Date();
                        date.setTime(date.getTime() + (days*24*60*60*1000));
                        expires = "; expires=" + date.toUTCString();
                    }
                    document.cookie = "name" + "=" + (name) +"password"+ "=" +(value) + expires + "; path=/";
                }
                function getCookie(name) {
                    var nameEQ = name + "=";
                    var ca = document.cookie.split(';');
                    
                    console.log(ca)
                }
                
               /* setCookie("user_email","bobthegreat@gmail.com",30); //set "user_email" cookie, expires in 30 days
                var userEmail=getCookie("user_email");//"bobthegreat@gmail.com"
                */

