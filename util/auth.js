const error404=require('../controller/erorr404');
class authirzatoin{
    user_policy="";
    ppath=""


    set_user_policy(userpolicy){
        this.user_policy=userpolicy;

    };
    checck_authorization(_user,path,request){
        // or false;
        this.ppath=path;
        this.request=request;
        return this.user_policy.checck_aut(_user,this.ppath,this.request);
    };
    
}
var user_policy=class {
    patth=""
    checck_aut=function(_user,patth,request){
        this.patth=patth;
        this.request=request;
        if (_user === undefined) {
        return false;
        }

      
        console.log(_user,"Pattern way");
       var  pages = _user.split("*");
        console.log(pages);
        var i=1;let link_="";
        console.log(pages.length,"aaa");
        var counter=0, counter2=0;
        for (counter=0;counter<pages.length;counter++) {
            if(i>1){
                link_= pages[counter].split("#");
                
                console.log(link_);
                
                for (counter2=0;counter2<link_.length;counter2=counter2+2) {
                    if(link_[counter2]===this.patth){
                            console.log('wow',link_[counter2]);

                            if(link_[counter2+1].includes('c')){
                                request.session.create="create"; 
                            }else{
                                request.session.create=null;
                            }

                            
                            if(link_[counter2+1].includes('u')){
                                request.session.update="update";
                            }else{
                                request.session.update=null;
                            }

                            
                            if(link_[counter2+1].includes('d')){
                                request.session.delete="delete";
                            }else{
                                request.session.delete=null;
                            }

                            if(link_[counter2+1].includes('r')){
                                request.session.read="read";
                            }else{
                                request.session.read=null;
                            }
                            request.session.currentpage=request.path;

                            
                        return true;
                    }
                }
            }
            i++;
        };


        return false;
    }


}
var admin_policy=class {
    patth=""
    checck_aut=function(_user,patth){
        this.patth=patth;
        if (_user === undefined) {
        return false;
        }
        console.log(this.patth);
        console.log(_user,"Pattern way");

        return true;
    }


}

exports.auth=(request,response,next)=>{
    if(request.session.loggedin==true){
        var user_po=request.session.newPerm;
        var auth = new authirzatoin();
        auth.set_user_policy(new user_policy());
        var result=auth.checck_authorization(user_po,request.path,request);
      
        if(result==true){
                
        next();
        }else{
        error404.get404(request,response,next);
           
        }
    }else{
        error404.get404("/");
    }

    }

/*exports.auth=(request,response,next)=>{ 
    if(request.session.loggedin==true){
        console.log("*** auth ***");

            console.log(request.session);

            const str = request.session.newPerm;

            console.log(request.session.newPerm);
            console.log("*** permission ***");

            console.log(str);
            var pages = str.split("*");
            console.log(request.path) 
 
            console.log(pages.forEach(function(element){ 
                if(element.includes(request.path)){
                    var str=element.split('#');
                    if(str[1].includes('c')){
                        request.session.create="create";
                    }else{
                        request.session.create=null;
                    }

                    if(str[1].includes('u')){
                        request.session.update="update";
                    }else{
                        request.session.update=null;
                    }

                    
                    if(str[1].includes('d')){
                        request.session.delete="delete";
                    }else{
                        request.session.delete=null;
                    }

                    if(str[1].includes('r')){
                        request.session.read="read";
                    }else{
                        request.session.read=null;
                    }
                    request.session.currentpage=request.path;

                    console.log(request.session);
                }
                
            }));


        next();
    }else{
        return response.redirect("/");
    }

}*/