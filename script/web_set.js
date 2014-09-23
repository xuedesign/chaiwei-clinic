// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;

//圖片延遲載入
$(function() {
  $("#page_container img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });
	  
//側邊產品選單
var listMenu = new FSMenu('listMenu', true, 'display', 'block', 'none');
showDelay = 0;
listMenu.animations[listMenu.animations.length] = FSMenu.animFade;
listMenu.animations[listMenu.animations.length] = FSMenu.animSwipeDown;
var arrow = null;
if (document.createElement && document.documentElement)
{
 arrow = document.createElement('span');
 arrow.appendChild(document.createTextNode('>'));
 arrow.className = 'subind';
}
addReadyEvent(new Function('listMenu.activateMenu("listMenuRoot", arrow)'));

//加入我的最愛
function addfavorite(siteurl, sitename) {
if (document.all) {
try{
window.external.addFavorite(siteurl, sitename);
}catch(e){
alert( "請使用Ctrl+D進行添加書籤" );
}
} else if (window.sidebar) {
window.sidebar.addPanel(sitename, siteurl, "");
} else{
alert( "請使用Ctrl+D進行添加書籤" );
}
}
function setHomePage(obj, siteurl){
var vDomainName=siteurl;
try{//IE
obj.style.behavior="url(#default#homepage)";
obj.setHomePage(vDomainName);
} catch(e){//other
if(window.netscape) {//ff
try {
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
}
catch (e) {
alert("此操作被瀏覽器拒絕！\n請在瀏覽器地址欄輸入「about:config」並回車\n然後將[signed.applets.codebase_principal_support]設置為'true'");
}
var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
prefs.setCharPref('browser.startup.homepage',vDomainName);
} else {
alert('您的瀏覽器不支持自動自動設置首頁, 請使用瀏覽器菜單手動設置!');
}
}
}

//網站主選單

	    	  