import{r as t,h as s,g as i}from"./p-01f76efc.js";const e=class{constructor(s){t(this,s),this.stepForm=!1,this.formData={firstName:"",lastName:""}}handleSubmit(t){t.preventDefault();const s=document.getElementById("s-form");console.log("Form:",s)}handleChange(t){this.value=t.target.value}render(){return s("div",{class:"form-wrapper"},s("form",{id:"s-form",onSubmit:t=>this.handleSubmit(t)},s("form-input",{"input-id":"firstName",label:"First Name"}),s("form-input",{"input-id":"lastName",label:"Last Name"}),s("button",{id:"submitButton",class:"form-submit-button",type:"submit"},"Submit")))}get el(){return i(this)}static get style(){return":host{display:block}.form-submit-button{background-color:#4299e1;color:#fff;font-weight:700;padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;padding-right:1rem;border-radius:9999px;cursor:pointer}.form-submit-button:hover{background-color:#2b6cb0}"}},r=class{constructor(s){t(this,s),this.value="",this.inputId=null,this.label=null}handleChange(t){this.value=t.target.value}render(){return s("div",{class:"form-field-wrapper"},s("label",{htmlFor:this.inputId},this.label),s("input",{id:this.inputId,name:this.inputId,type:"text",value:this.value,onInput:t=>this.handleChange(t)}))}static get style(){return"label{font-weight:700}input,label{display:block}input{font-size:16px;color:#00f;color:#1a202c;line-height:1.25}"}};export{e as form_component,r as form_input};