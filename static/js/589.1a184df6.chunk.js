"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[589],{822:function(e,n,t){t.d(n,{G$:function(){return o},H9:function(){return u},I3:function(){return s},WC:function(){return i},fI:function(){return c},oo:function(){return a}});var r=t(8174),a=function(){return r.Am.error("Sorry, wrong email or password!")},o=function(){return r.Am.error("Sorry, incorrect data entered! check the password, it must be longer than 7 characters")},s=function(){return r.Am.error("Sorry, something went wrong, please try again later!")},c=function(){return r.Am.success("Contact added!")},i=function(){return r.Am.info("Contact deleted!")},u=function(){return r.Am.success("The contact has been successfully updated!")}},6589:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(5048),a=t(6351),o="AddPage_wrapper__F+dmU",s="AddPage_titlePhone__DFkG7",c=t(9439),i=t(2791),u=t(5705),m=t(6727),l=t(8174),d=(t(5462),t(4691)),h=t(3661),f=t(822),p="ContactForm_form__dhl+T",_="ContactForm_label__-cVXI",x="ContactForm_input__Bl93P",b="ContactForm_btn__wll+u",N="ContactForm_error__C1smZ",g=t(3329),j=function(){var e=(0,h.Tn)(),n=(0,c.Z)(e,2),t=n[0],r=n[1],a=r.isLoading,o=r.isSuccess,s=r.isError,j=(0,h.Jx)().data;(0,i.useEffect)((function(){o&&(0,f.fI)()}),[o]),(0,i.useEffect)((function(){s&&(0,f.I3)()}),[s]);var w=m.Ry().shape({name:m.Z_().min(2,"Too Short!").max(20,"Too Long!").required("Name is required field"),phone:m.Rx().typeError("That does not look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").required("A phone number is required")});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l.Ix,{autoClose:1500,position:"top-right"}),(0,g.jsx)(u.J9,{initialValues:{name:"",phone:""},validationSchema:w,onSubmit:function(e,n){var r=n.resetForm,a=e.name,o=e.phone;j.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts!")):t({name:a,number:o})&&r()},children:(0,g.jsxs)(u.l0,{className:p,children:[(0,g.jsxs)("label",{className:_,children:["Name",(0,g.jsx)(u.gN,{className:x,type:"text",name:"name",placeholder:"Name"}),(0,g.jsx)(u.Bc,{className:N,name:"name",component:"div"})]}),(0,g.jsxs)("label",{className:_,children:["Number",(0,g.jsx)(u.gN,{className:x,type:"tel",name:"phone",placeholder:"phone"}),(0,g.jsx)(u.Bc,{className:N,name:"phone",component:"div"})]}),(0,g.jsxs)("button",{className:b,disabled:a,type:"submit",children:[a&&(0,g.jsx)(d.s5,{height:"20",width:"20"}),"Add contact"]})]})})]})},w=function(){return(0,r.v9)(a.M7)&&(0,g.jsxs)("div",{className:o,children:[(0,g.jsx)("h1",{className:s,children:"Add your contact"}),(0,g.jsx)(j,{})]})}}}]);
//# sourceMappingURL=589.1a184df6.chunk.js.map