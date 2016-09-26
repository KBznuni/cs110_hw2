const stars = function(t) {
if ( t === 0)
return "";
return "*"+(stars(t-1))
}
const spaces = function(p){
if (p === 0)
return "";
return " "+(spaces(p-1))
}
const brain = function (p,t,r) {
if (r === 0)
return "";
console.log(spaces(p)+stars(t));
brain(p-1, t+2, r-1);
}
const all= function (u){
brain(u-1,1,u);
}
all(10);