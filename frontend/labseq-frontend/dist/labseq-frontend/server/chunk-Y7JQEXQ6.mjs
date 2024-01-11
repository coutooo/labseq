import './polyfills.server.mjs';
import{$ as E,Aa as ue,Ba as R,Ea as de,Fa as ce,Ga as he,H as A,Ha as fe,Ia as pe,J as j,Ja as ge,K as h,La as me,M as v,N as ee,Oa as ye,P as te,Q as f,R as g,S as ie,T,W as G,X as U,Y as m,Z as o,_ as ne,ba as _,ca as w,da as re,fa as se,ga as a,h as K,ha as l,ia as oe,ja as ae,ka as C,la as B,m as J,ma as p,na as le,oa as H,pa as F,r as Q}from"./chunk-LQVERA4O.mjs";import{a as c,b as y}from"./chunk-KRLCULJA.mjs";var Ae=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(o(U),o(G))},e.\u0275dir=g({type:e});let t=e;return t})(),Ee=(()=>{let e=class e extends Ae{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=T(e)))(s||e)}})(),e.\u0275dir=g({type:e,features:[_]});let t=e;return t})(),z=new v("NgValueAccessor");var Re={provide:z,useExisting:A(()=>N),multi:!0};function Le(){let t=R()?R().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var $e=new v("CompositionEventMode"),N=(()=>{let e=class e extends Ae{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Le())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(o(U),o(G),o($e,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&C("input",function(d){return s._handleInput(d.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(d){return s._compositionEnd(d.target.value)})},features:[F([Re]),_]});let t=e;return t})();var We=new v("NgValidators"),qe=new v("NgAsyncValidators");function we(t){return t!=null}function Fe(t){return ae(t)?K(t):t}function Ie(t){let e={};return t.forEach(n=>{e=n!=null?c(c({},e),n):e}),Object.keys(e).length===0?null:e}function Se(t,e){return e.map(n=>n(t))}function ze(t){return!t.validate}function Oe(t){return t.map(e=>ze(e)?e:n=>e.validate(n))}function Ze(t){if(!t)return null;let e=t.filter(we);return e.length==0?null:function(n){return Ie(Se(n,e))}}function xe(t){return t!=null?Ze(Oe(t)):null}function Xe(t){if(!t)return null;let e=t.filter(we);return e.length==0?null:function(n){let i=Se(n,e).map(Fe);return Q(i).pipe(J(Ie))}}function Ne(t){return t!=null?Xe(Oe(t)):null}function ve(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ye(t){return t._rawValidators}function Ke(t){return t._rawAsyncValidators}function L(t){return t?Array.isArray(t)?t:[t]:[]}function S(t,e){return Array.isArray(t)?t.includes(e):t===e}function _e(t,e){let n=L(e);return L(t).forEach(r=>{S(n,r)||n.push(r)}),n}function Ce(t,e){return L(e).filter(n=>!S(t,n))}var O=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=xe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ne(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},$=class extends O{get formDirective(){return null}get path(){return null}},M=class extends O{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Je={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Lt=y(c({},Je),{"[class.ng-submitted]":"isSubmitted"}),Pe=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(M,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&re("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[_]});let t=e;return t})();var D="VALID",I="INVALID",V="PENDING",b="DISABLED";function Qe(t){return(P(t)?t.validators:t)||null}function et(t){return Array.isArray(t)?xe(t):t||null}function tt(t,e){return(P(e)?e.asyncValidators:t)||null}function it(t){return Array.isArray(t)?Ne(t):t||null}function P(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var q=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===I}get pending(){return this.status==V}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(_e(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(_e(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ce(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ce(e,this._rawAsyncValidators))}hasValidator(e){return S(this._rawValidators,e)}hasAsyncValidator(e){return S(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=V,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=b,this.errors=null,this._forEachChild(i=>{i.disable(y(c({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(y(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(i=>{i.enable(y(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(y(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===V)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;let n=Fe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?I:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(I)?I:D}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){P(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=et(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=it(this._rawAsyncValidators)}};var ke=new v("CallSetDisabledState",{providedIn:"root",factory:()=>Z}),Z="always";function nt(t,e){return[...e.path,t]}function rt(t,e,n=Z){ot(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),at(t,e),ut(t,e),lt(t,e),st(t,e)}function Ve(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function st(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ot(t,e){let n=Ye(t);e.validator!==null?t.setValidators(ve(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Ke(t);e.asyncValidator!==null?t.setAsyncValidators(ve(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Ve(e._rawValidators,r),Ve(e._rawAsyncValidators,r)}function at(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&je(t,e)})}function lt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&je(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function je(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ut(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function dt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function ct(t){return Object.getPrototypeOf(t.constructor)===Ee}function ht(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===N?n=s:ct(s)?i=s:r=s}),r||i||n||null}function De(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function be(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ft=class extends q{constructor(e=null,n,i){super(Qe(n),tt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),P(n)&&(n.nonNullable||n.initialValueIsDefault)&&(be(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){De(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){De(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){be(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var pt={provide:M,useExisting:A(()=>X)},Me=(()=>Promise.resolve())(),X=(()=>{let e=class e extends M{constructor(i,r,s,u,d,He){super(),this._changeDetectorRef=d,this.callSetDisabledState=He,this.control=new ft,this._registered=!1,this.name="",this.update=new E,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=ht(this,u)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),dt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){rt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Me.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,s=r!==0&&ue(r);Me.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?nt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(o($,9),o(We,10),o(qe,10),o(z,10),o(ne,8),o(ke,8))},e.\u0275dir=g({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[F([pt]),_,ie]});let t=e;return t})();var gt={provide:z,useExisting:A(()=>Y),multi:!0},Y=(()=>{let e=class e extends Ee{writeValue(i){let r=i??"";this.setProperty("value",r)}registerOnChange(i){this.onChange=r=>{i(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=T(e)))(s||e)}})(),e.\u0275dir=g({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&C("input",function(d){return s.onChange(d.target.value)})("blur",function(){return s.onTouched()})},features:[F([gt]),_]});let t=e;return t})();var mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({});let t=e;return t})();var yt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[mt]});let t=e;return t})();var Te=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ke,useValue:i.callSetDisabledState??Z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[yt]});let t=e;return t})();var Ge=(()=>{let e=class e{constructor(i){this.http=i,this.baseUrl="http://quarkus-app:8080"}calculateLabseq(i){return this.http.get(`${this.baseUrl}/labseq/${i}`)}};e.\u0275fac=function(r){return new(r||e)(ee(ce))},e.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Ct(t,e){if(t&1&&(a(0,"div",9)(1,"p"),p(2),l(),a(3,"p"),p(4),l()()),t&2){let n=B();m(2),H("Result: ",n.result,""),m(2),H("Duration: ",n.duration,"")}}function Vt(t,e){if(t&1&&(a(0,"div",10)(1,"p"),p(2),l()()),t&2){let n=B();m(2),le(n.error)}}var Ue="body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f9f7f3;margin:0;padding:0;display:block;justify-content:center;align-items:center;height:100vh}.calculator-container[_ngcontent-%COMP%]{text-align:left;background-color:#83c5be;padding:20px;border-radius:8px;box-shadow:0 0 10px #0000001a;overflow:auto}h1[_ngcontent-%COMP%]{color:#1b2021}label[_ngcontent-%COMP%]{display:block;margin-top:10px}input[_ngcontent-%COMP%]{padding:8px;margin-top:5px;border-color:#3498db;border-radius:4px}button[_ngcontent-%COMP%]{padding:10px;margin-left:10px;margin-top:10px;background-color:#006d77;color:#f9f7f3;border:none;border-radius:4px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#1b2021}.result-container[_ngcontent-%COMP%]{margin-top:20px;overflow:auto}.result-box[_ngcontent-%COMP%]{width:1000px;margin:0 auto;padding:10px;border:1px solid #f9f7f3;border-radius:4px;overflow:auto;white-space:nowrap}p[_ngcontent-%COMP%]{margin:5px 0}.error-message[_ngcontent-%COMP%]{color:red}",k=(()=>{let e=class e{constructor(i){this.labseqService=i,this.inputValue=0,this.result=null,this.duration=null,this.error=null}calculateLabseq(){if(console.log("Debugging calculateLabseq function. Input value:",this.inputValue),this.result=null,this.duration=null,this.error=null,this.inputValue<0){this.error="Index may be any non-negative integer number";return}this.labseqService.calculateLabseq(this.inputValue).subscribe({next:i=>{i&&i.hasOwnProperty("result")&&i.hasOwnProperty("duration")&&(this.result=i.result,this.duration=i.duration,console.log(this.result))},error:i=>{console.error("Error calculating labseq:",i),this.error="Error calculating labseq"}})}};e.\u0275fac=function(r){return new(r||e)(o(Ge))},e.\u0275cmp=te({type:e,selectors:[["app-root"]],decls:17,vars:3,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"calculator-container"],["for","inputValue"],["type","number","id","inputValue",3,"ngModel","ngModelChange"],[3,"click"],["class","result-container",4,"ngIf"],["class","error-message",4,"ngIf"],[1,"result-container"],[1,"error-message"]],template:function(r,s){r&1&&(a(0,"html",0)(1,"head"),oe(2,"meta",1)(3,"meta",2),a(4,"title"),p(5,"Labseq Calculator"),l()(),a(6,"body")(7,"div",3)(8,"h1"),p(9,"Labseq Calculator"),l(),a(10,"label",4),p(11,"Enter a number:"),l(),a(12,"input",5),C("ngModelChange",function(d){return s.inputValue=d}),l(),a(13,"button",6),C("click",function(){return s.calculateLabseq()}),p(14,"Calculate"),l(),se(15,Ct,5,2,"div",7)(16,Vt,3,1,"div",8),l()()()),r&2&&(m(12),w("ngModel",s.inputValue),m(3),w("ngIf",s.result),m(1),w("ngIf",s.error))},dependencies:[de,N,Y,Pe,X],styles:[Ue,Ue]});let t=e;return t})();var Be=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e,bootstrap:[k]}),e.\u0275inj=h({providers:[he(fe()),me()],imports:[ge,Te,pe]});let t=e;return t})();var Dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e,bootstrap:[k]}),e.\u0275inj=h({imports:[Be,ye]});let t=e;return t})();export{Dt as a};