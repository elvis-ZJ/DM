/* Powered by Rocky Li, 2009-09-01 */

var shareToSNS = {
	"openWindow": function(url, name, properties) {
		properties = (properties || "");
		if (!window.open(url, 'newwindow', properties)) {
			window.self.location.href = url;
		}
		return false;
	}
};

shareToSNS.kaixin001 = function(title, href, content) {
	title = (title || "");
	href = (href || window.self.location.href);
	content = (content || "");
	var url = "http://www.kaixin001.com/repaste/share.php?rtitle=" + encodeURIComponent(title) + "&rurl=" + encodeURIComponent(href) + "&rcontent=" + encodeURIComponent(content);
	return shareToSNS.openWindow(url, "KaiXin001");
};

shareToSNS.xiaonei = function(title, href, content) {
	title = (title || "");
	href = (href || window.self.location.href);
	content = (content || "");
	var url = "http://share.xiaonei.com/share/buttonshare.do?link=" + encodeURIComponent(href) + "&title=" + encodeURIComponent(title);
	return shareToSNS.openWindow(url, "XiaoNei", "toolbar=0, resizable=1, scrollbars=yes, status=1, width=626, height=436");
};

shareToSNS.douban = function(title, href, content) {
	title = (title || "");
	href = (href || window.self.location.href);
	content = (content || "");
	var url = "http://www.douban.com/recommend/?url=" + encodeURIComponent(href) + "&title=" + encodeURIComponent(title);
	return shareToSNS.openWindow(url, "DouBan", "toolbar=0, resizable=1, scrollbars=yes, status=1, width=450, height=330");
};

shareToSNS.qzone = function(title, href, content) {
	title = (title || "");
	href = (href || window.self.location.href);
	content = (content || "");
	var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(href);
	return shareToSNS.openWindow(url, "QZone");
};

shareToSNS.sohu = function(title, href, content) {
	title = (title || "");
	href = (href || window.self.location.href);
	content = (content || "");
	var url = "http://bai.sohu.com/share/blank/addbutton.do?from=tudou&link=" + href + "&title=" + title;
	return shareToSNS.openWindow(url, "BaiSohu");
};

shareToSNS.sina = function(title, href, content) {
	title = (title || "");
	href = (href || window.self.location.href);
	content = (content || "");
	var url = "http://v.t.sina.com.cn/share/share.php?c=spr_web_bd_tudou_weibo&title="+encodeURIComponent(title+"\n"+content)+"&url="+encodeURIComponent(href);
	return shareToSNS.openWindow(url, "Sina");
};

shareToSNS.qq = function (title, href, content){
	title = (content || "");
	var urlencode = encodeURIComponent(href);
	// var pic = "http://shp.qpic.cn/app_actsec/6a335576a1d92cb03f8e18b74001f4cd6a881d945043d450c37ca4d77bbfc148cb65d3f83465534a2c42619d77e6fc48/0";
	var url="http://v.t.qq.com/share/share.php?url=" + urlencode + "&title="+ title+"&pic="+"";
	return shareToSNS.openWindow(url, "qq");
};	
