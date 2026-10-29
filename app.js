document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const choice=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});document.querySelectorAll('[data-type]').forEach(item=>{item.hidden=choice!=='all'&&!item.dataset.type.split(' ').includes(choice)})}));
const form=document.querySelector('#inquiry');
form.addEventListener('submit',async event=>{
 event.preventDefault();if(!form.reportValidity()||form.elements.namedItem('_gotcha').value)return;
 const button=form.querySelector('button[type="submit"]');const status=document.querySelector('#form-status');
 button.disabled=true;status.textContent='Sending your message…';
 try{const response=await fetch(form.action,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify({name:form.elements.namedItem('name').value.trim(),email:form.elements.namedItem('email').value.trim(),message:form.elements.namedItem('message').value.trim()})});
 if(!response.ok)throw new Error('Unable to send');
 status.textContent='Thank you! Your message has been sent. We’ll be in touch soon.';form.reset();
 }catch(error){status.textContent='Your message could not be sent. Please try again, or email info@psdigitalcollectives.com. Your details are still here.';}
 finally{button.disabled=false;}
});
