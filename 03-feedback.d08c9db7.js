const e=document.querySelector(".feedback-form"),t=document.querySelector("input"),a=document.querySelector("textarea");window.addEventListener("load",(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(t.value=`${e.email}`,a.value=`${e.message}`)})),e.addEventListener("submit",(t=>{t.preventDefault();const{email:a}=t.target.elements,{message:o}=t.target.elements,l={email:a.value,message:o.value};localStorage.setItem("feedback-form-state",JSON.stringify(l)),e.reset(),console.log(localStorage.getItem("feedback-form-state"))}));
//# sourceMappingURL=03-feedback.d08c9db7.js.map
