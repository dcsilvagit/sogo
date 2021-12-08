!function(){"use strict";function p(){var e,t,a,o,n=this;if(this.nextAlarm=null,this.nextInboxPoll=null,this.currentToast=p.$q.when(!0),this.lastUid=null,this.notifications={},this.defaults={},this.settings={Mail:{}},e=p.$document[0].getElementById("UserDefaults")){try{t=angular.fromJson(e.textContent||e.innerHTML)}catch(e){p.$log.error("Can't parse user's defaults: "+e.message),t={}}t.SOGoMailLabelsColorsKeys=[],t.SOGoMailLabelsColorsValues=[],_.forEach(t.SOGoMailLabelsColors,function(e,a){t.SOGoMailLabelsColorsKeys.push(a),t.SOGoMailLabelsColorsValues.push(e),"$"==a.charAt(0)&&(Object.defineProperty(t.SOGoMailLabelsColors,"_"+a,Object.getOwnPropertyDescriptor(t.SOGoMailLabelsColors,a)),delete t.SOGoMailLabelsColors[a])}),_.forEach(t.SOGoSieveFilters,function(e){_.forEach(e.actions,function(e){"addflag"==e.method&&"$"==e.argument.charAt(0)&&(e.argument="_"+e.argument)})}),t.SOGoRememberLastModule&&(t.SOGoLoginModule="Last"),t.SOGoMailAutoMarkAsReadDelay=parseInt(t.SOGoMailAutoMarkAsReadDelay)||0,t.SOGoMailAutoMarkAsReadEnabled=0<=t.SOGoMailAutoMarkAsReadDelay,0<t.SOGoMailAutoMarkAsReadDelay?t.SOGoMailAutoMarkAsReadMode="delay":t.SOGoMailAutoMarkAsReadMode="immediate",t.SOGoMailAutoSave=parseInt(t.SOGoMailAutoSave)||0,t.SOGoMailComposeWindowEnabled=angular.isDefined(t.SOGoMailComposeWindow),t.SOGoMailComposeFontSizeEnabled=0<parseInt(t.SOGoMailComposeFontSize),window.CKEDITOR&&t.SOGoMailComposeFontSizeEnabled&&(window.CKEDITOR.config.fontSize_defaultLabel=t.SOGoMailComposeFontSize,window.CKEDITOR.addCss(".cke_editable { font-size: "+t.SOGoMailComposeFontSize+"px; }")),_.forEach(t.AuxiliaryMailAccounts,function(e){isNaN(parseInt(e.port))&&(e.port=null)}),t.Vacation?(t.Vacation.startDate?t.Vacation.startDate=new Date(1e3*parseInt(t.Vacation.startDate)):(t.Vacation.startDateEnabled=0,t.Vacation.startDate=new Date,t.Vacation.startDate=t.Vacation.startDate.beginOfDay(),t.Vacation.startDate.addDays(1)),t.Vacation.endDate?t.Vacation.endDate=new Date(1e3*parseInt(t.Vacation.endDate)):(t.Vacation.endDateEnabled=0,t.Vacation.endDate=new Date(t.Vacation.startDate.getTime()),t.Vacation.endDate.addDays(1)),t.Vacation.startTime?(a=t.Vacation.startTime.split(":"),t.Vacation.startTime=new Date,t.Vacation.startTime.setHours(parseInt(a[0]),parseInt(a[1]))):(t.Vacation.startTimeEnabled=0,t.Vacation.startTime=new Date,t.Vacation.startTime.setHours(parseInt(t.SOGoDayEndTime)),t.Vacation.startTime.setMinutes(0)),t.Vacation.endTime?(a=t.Vacation.endTime.split(":"),t.Vacation.endTime=new Date,t.Vacation.endTime.setHours(parseInt(a[0]),parseInt(a[1]))):(t.Vacation.endTimeEnabled=0,t.Vacation.endTime=new Date,t.Vacation.endTime.setHours(parseInt(t.SOGoDayStartTime)),t.Vacation.endTime.setMinutes(0)),t.Vacation.autoReplyEmailAddresses&&angular.isString(t.Vacation.autoReplyEmailAddresses)&&t.Vacation.autoReplyEmailAddresses.length&&(t.Vacation.autoReplyEmailAddresses=t.Vacation.autoReplyEmailAddresses.split(/, */))):t.Vacation={},angular.isUndefined(t.Vacation.days)&&(t.Vacation.days=[]),(angular.isUndefined(t.Vacation.autoReplyEmailAddresses)||0==t.Vacation.autoReplyEmailAddresses.length)&&angular.isDefined(window.defaultEmailAddresses)&&(t.Vacation.autoReplyEmailAddresses=window.defaultEmailAddresses),angular.isUndefined(t.Vacation.daysBetweenResponse)&&(t.Vacation.daysBetweenResponse=7),angular.isUndefined(t.Vacation.startDate)&&(t.Vacation.startDateEnabled=0,t.Vacation.startDate=new Date),angular.isUndefined(t.Vacation.endDate)&&(t.Vacation.endDateEnabled=0,t.Vacation.endDate=new Date),t.Forward&&(angular.isString(t.Forward.forwardAddress)?t.Forward.forwardAddress=t.Forward.forwardAddress.split(/, */):angular.isArray(t.Forward.forwardAddress)||(t.Forward.forwardAddress=[])),angular.isUndefined(t.SOGoCalendarCategories)&&(t.SOGoCalendarCategories=[]),t.SOGoCalendarCategoriesColorsValues=[],_.forEach(t.SOGoCalendarCategories,function(e){t.SOGoCalendarCategoriesColorsValues.push(t.SOGoCalendarCategoriesColors[e])}),angular.isUndefined(t.SOGoContactsCategories)?t.SOGoContactsCategories=[]:t.SOGoContactsCategories=_.compact(t.SOGoContactsCategories),angular.extend(n.defaults,t),n.$mdDateLocaleProvider=p.$mdDateLocaleProvider,angular.extend(n.$mdDateLocaleProvider,t.locale),angular.extend(n.$mdDateLocaleProvider,{firstDayOfWeek:t.SOGoFirstDayOfWeek,firstWeekOfYear:t.SOGoFirstWeekOfYear}),n.$mdDateLocaleProvider.firstDayOfWeek=parseInt(t.SOGoFirstDayOfWeek),n.$mdDateLocaleProvider.weekNumberFormatter=function(e){return l("Week %d",e)},n.$mdDateLocaleProvider.msgCalendar=l("Calendar"),n.$mdDateLocaleProvider.msgOpenCalendar=l("Open Calendar"),n.$mdDateLocaleProvider.parseDate=function(e){return e?e.parseDate(n.$mdDateLocaleProvider,n.defaults.SOGoShortDateFormat):new Date(NaN)},n.$mdDateLocaleProvider.formatDate=function(e){return e?e.format(n.$mdDateLocaleProvider,e.$dateFormat||n.defaults.SOGoShortDateFormat):""},n.$mdDateLocaleProvider.parseTime=function(e){return e?e.parseDate(n.$mdDateLocaleProvider,n.defaults.SOGoTimeFormat):new Date(NaN)},n.$mdDateLocaleProvider.formatTime=function(e){return e?e.format(n.$mdDateLocaleProvider,n.defaults.SOGoTimeFormat):""},n.$mdDateLocaleProvider.isDateComplete=function(e){e=e.trim();return/^((([a-zA-Z]|[^\x00-\x7F]){2,}|[0-9]{1,4})([ .,]+|[/-])){2}(([a-zA-Z]|[^\x00-\x7F]){3,}|[0-9]{1,4})$/.test(e)}}if(a=p.$document[0].getElementById("UserSettings")){try{t=angular.fromJson(a.textContent||a.innerHTML)}catch(e){p.$log.error("Can't parse user's settings: "+e.message),t={}}t.Calendar&&(t.Calendar.ReloadWebCalendars&&t.Calendar.AutoReloadedWebCalendars&&(o=[],_.map(t.Calendar.AutoReloadedWebCalendars,function(e,a){e&&(e=a.split("/")[1],a=p.$q.defer(),p.$$resource.quietFetch("Calendar/"+e,"reload").finally(a.resolve),o.push(a.promise))}),p.$q.all(o).then(function(){delete n.settings.Calendar.ReloadWebCalendars,p.$$resource.save("Preferences",{settings:n.$omit(!0).settings}).then(function(){p.$rootScope.$emit("calendars:list")})})),t.Calendar.PreventInvitationsWhitelist?t.Calendar.PreventInvitationsWhitelist=_.map(t.Calendar.PreventInvitationsWhitelist,function(e,a){e=/^(.+)\s<(\S+)>$/.exec(e),e=new p.$User({uid:a,cn:e[1],c_email:e[2]});return e.$$image||(e.$$image=n.avatar(e.c_email,32,{no_404:!0})),e}):t.Calendar.PreventInvitationsWhitelist=[]),angular.extend(n.settings,t)}}p.$factory=["$window","$document","$rootScope","$q","$timeout","$log","$state","$mdDateLocale","$mdToast","sgConstant","sgSettings","Gravatar","Resource","User",function(e,a,t,o,n,i,s,r,l,d,c,u,m,f){return angular.extend(p,{$window:e,$document:a,$rootScope:t,$q:o,$timeout:n,$log:i,$state:s,$mdDateLocaleProvider:r,$toast:l,$gravatar:u,$$resource:new m(c.activeUser("folderURL"),c.activeUser()),$resourcesURL:c.resourcesURL(),$User:f,$sgConstant:d}),new p}];try{angular.module("SOGo.PreferencesUI")}catch(e){angular.module("SOGo.PreferencesUI",["SOGo.Common"])}angular.module("SOGo.PreferencesUI").factory("Preferences",p.$factory),p.prototype.ready=function(){return p.$log.warn("Preferences.ready is deprecated -- access settings/defaults directly."),p.$q.when(!0)},p.prototype.avatar=function(e,a,t){var o=this.defaults.SOGoAlternateAvatar,o=this.defaults.SOGoGravatarEnabled?p.$gravatar(e,a,o,t):[p.$resourcesURL,"img","ic_person_grey_24px.svg"].join("/");return t&&t.dstObject&&t.dstAttr&&(t.dstObject[t.dstAttr]=o),o},p.prototype.hasActiveExternalSieveScripts=function(e){var a=this;if(void 0!==e)this.defaults.hasActiveExternalSieveScripts=e;else{if(void 0!==this.defaults.hasActiveExternalSieveScripts)return this.defaults.hasActiveExternalSieveScripts;this.defaults.hasActiveExternalSieveScripts=!1,p.$$resource.quietFetch("activeExternalSieveScripts").then(function(){a.defaults.hasActiveExternalSieveScripts=!0},function(e){if(a.defaults.hasActiveExternalSieveScripts=!1,404===e.status)return p.$q.resolve(!0)})}},p.prototype.supportsNotifications=function(){return"undefined"!=typeof Notification||(p.$log.warn("Notifications are not available for your browser."),!1)},p.prototype.authorizeNotifications=function(){this.supportsNotifications()&&Notification.requestPermission(function(e){return e})},p.prototype.createNotification=function(e,a,t){var o=this,n=_.pick(t,["body","icon"]);this.supportsNotifications()&&(n.tag=e,n.lang="",n.dir="auto",this.notifications[e]=new Notification(a,n),this.notifications[e].onclick=function(){t.onClick(),o.notifications[e].close()})},p.prototype.viewInboxMessage=function(e){p.$state.get("mail.account")?p.$state.go("mail.account.mailbox.message",{accountId:0,mailboxId:"INBOX",messageId:e}):p.$window.location=p.$$resource.path("Mail","view#!/Mail/0/INBOX/"+e)},p.prototype.pollInbox=function(){var e,u=this;function m(e,a,t,o){e.title=t,e.body=o,e.close=function(){a.hide("ok")}}return e={sortingAttributes:{sort:"arrival",asc:0,noHeaders:0,dry:1},filters:[{searchBy:"flags",searchInput:"unseen"}]},this.nextInboxPoll&&p.$timeout.cancel(this.nextInboxPoll),this.inboxSyncToken&&(e.syncToken=this.inboxSyncToken),m.$inject=["scope","$mdToast","title","body"],p.$$resource.post("Mail","0/folderINBOX/changes",e).then(function(e){if(e.syncToken&&(u.inboxSyncToken=e.syncToken,p.$log.debug("New syncToken is "+u.inboxSyncToken)),angular.isDefined(e.headers)&&0<e.headers.length)for(var a=e.headers[0].indexOf("uid"),t=e.headers[0].indexOf("isRead"),o=e.headers[0].indexOf("From"),n=e.headers[0].indexOf("Subject"),i=function(){var a=this;return p.$toast.show(this).then(function(e){"ok"===e&&a.viewInboxMessage(a.locals.uid)})},s=1;s<e.headers.length;s++){var r,d=e.headers[s],c=d[a];d[t]||(p.$log.debug("Show notification for message "+c),u.defaults.SOGoDesktopNotifications?(r="mail-inbox-"+c,p.$state.href("mail.account.mailbox.message",{accountId:0,mailboxId:"INBOX",messageId:c}),u.createNotification(r,d[n],{body:d[o][0].name||d[o][0].email,icon:"/SOGo.woa/WebServerResources/img/email-256px.png",onClick:angular.bind(u,u.viewInboxMessage,c)})):(d={locals:{uid:c,title:d[n],body:d[o][0].name||d[o][0].email},template:['<md-toast role="alert">','  <div class="md-toast-content">','    <div layout="row" layout-align="start center" flex>','      <md-icon class="md-primary md-hue-1">email</md-icon>','      <div class="sg-padded--left">','        <span md-truncate ng-bind="title"></span>','        <div class="sg-hint" md-truncate ng-bind="body"></div>',"      </div>","      <div flex></div>",'      <md-button ng-click="close()">',l("View"),"      </md-button>","    </div>","  </div>","</md-toast>"].join(""),position:p.$sgConstant.toastPosition,hideDelay:5e3,controller:m,viewInboxMessage:u.viewInboxMessage},u.currentToast=u.currentToast.then(angular.bind(d,i))))}}).finally(function(){var e=u.defaults.SOGoRefreshViewCheck;e&&"manually"!=e&&(u.nextInboxPoll=p.$timeout(angular.bind(u,u.pollInbox),1e3*e.timeInterval()))})},p.prototype.getAlarms=function(){var n=this,e=new Date,e=Math.floor(e.getTime()/1e3);p.$$resource.fetch("Calendar","alarmslist?browserTime="+e).then(function(e){var a,t,o=e.alarms.sort(function(e,a){e=parseInt(e[2]);return parseInt(a[2])-e});0<o.length&&(t=o.pop(),a=new Date,e=Math.floor(a.getTime()/1e3),o=t[0]+"/"+t[1],0<(t=a=parseInt(t[2]))&&(t-=e),new Date(1e3*a),o=angular.bind(n,n.showAlarm,o),n.nextAlarm&&p.$timeout.cancel(n.nextAlarm),n.nextAlarm=p.$timeout(o,1e3*t))})},p.prototype.showAlarm=function(i){var s=this;p.$$resource.fetch("Calendar/"+i,"?resetAlarm=yes").then(function(t){var e=(new Date).beginOfDay(),a=t.startDate.split(/T/)[0].asDate(),o=[];function n(e,a){e.summary=t.summary,e.reminder="10",e.close=function(){p.$toast.hide()},e.snooze=function(){p.$$resource.fetch("Calendar/"+a,"view?snoozeAlarm="+e.reminder),p.$toast.hide()}}a.getTime()==e.getTime()&&t.localizedStartDate==t.localizedEndDate||o.push(t.localizedStartDate),t.isAllDay||(o.push(t.localizedStartTime),o.push("-")),t.localizedStartDate!=t.localizedEndDate&&o.push(t.localizedEndDate),t.isAllDay||o.push(t.localizedEndTime),s.defaults.SOGoDesktopNotifications&&(e="calendar-"+t.id,s.createNotification(e,t.summary,{body:o.join(" "),icon:"/SOGo.woa/WebServerResources/img/event-256px.png",onClick:function(){p.$state.get("calendars.view")?p.$state.go("calendars.view",{view:"day",day:a.getDayString()}):p.$window.location=p.$$resource.path("Calendar","view#!/calendar/day/"+a.getDayString())}})),s.currentToast=s.currentToast.then(function(){return p.$toast.show({position:p.$sgConstant.toastPosition,hideDelay:0,template:["<md-toast>",'  <div class="md-toast-content">','    <div layout="column" layout="start end">','      <p class="sg-padded--top">{{ summary }}</p>','      <div layout="row" layout-align="start center">',"        <md-input-container>",'          <label style="color: white">{{ "Snooze for " | loc }}</label>','          <md-select ng-model="reminder">','           <md-option value="5">',l("5 minutes"),"           </md-option>",'           <md-option value="10">',l("10 minutes"),"           </md-option>",'           <md-option value="15">',l("15 minutes"),"           </md-option>",'           <md-option value="30">',l("30 minutes"),"           </md-option>",'           <md-option value="45">',l("45 minutes"),"           </md-option>",'           <md-option value="60">',l("1 hour"),"           </md-option>",'           <md-option value="1440">',l("1 day"),"           </md-option>","         </md-select>","        </md-input-container>",'        <md-button ng-click="snooze()">',l("Snooze"),"        </md-button>",'        <md-button ng-click="close()">',l("Close"),"        </md-button>","      </div>","    </div>","  </div>","</md-toast>"].join(""),locals:{url:i},controller:n})}),n.$inject=["scope","url"]})},p.prototype.$save=function(){return p.$$resource.save("Preferences",this.$omit(!0)).then(function(e){return e})},p.prototype.$omit=function(t){var o={},a={};return angular.forEach(this,function(e,a){"constructor"!=a&&"$"!=a[0]&&(o[a]=t?angular.copy(e):e)}),delete o.defaults.locale,o.defaults.SOGoMailAutoMarkAsReadEnabled?"immediate"==o.defaults.SOGoMailAutoMarkAsReadMode&&(o.defaults.SOGoMailAutoMarkAsReadDelay=0):o.defaults.SOGoMailAutoMarkAsReadDelay=-1,delete o.defaults.SOGoMailAutoMarkAsReadEnabled,delete o.defaults.SOGoMailAutoMarkAsReadMode,o.defaults.SOGoMailLabelsColors={},_.forEach(o.defaults.SOGoMailLabelsColorsKeys,function(e,a){o.defaults.SOGoMailLabelsColors[e]=o.defaults.SOGoMailLabelsColorsValues[a]}),delete o.defaults.SOGoMailLabelsColorsKeys,delete o.defaults.SOGoMailLabelsColorsValues,_.forEach(o.defaults.SOGoSieveFilters,function(e){_.forEach(e.actions,function(e){"addflag"==e.method&&"_"==e.argument.charAt(0)&&"$"==e.argument.charAt(1)&&(e.argument=e.argument.substring(1))})}),_.forEach(o.defaults.AuxiliaryMailAccounts,function(e){var a=[];_.forEach(e.identities,function(e){e.isReadOnly||a.push(_.pick(e,["email","fullName","replyTo","signature","isDefault"]))}),e.identities=a}),o.defaults.SOGoMailComposeWindowEnabled||delete o.defaults.SOGoMailComposeWindow,delete o.defaults.SOGoMailComposeWindowEnabled,o.defaults.SOGoMailComposeFontSizeEnabled||(o.defaults.SOGoMailComposeFontSize=0),delete o.defaults.SOGoMailComposeFontSizeEnabled,o.defaults.Vacation&&(o.defaults.Vacation.startDateEnabled?o.defaults.Vacation.startDate=o.defaults.Vacation.startDate.getTime()/1e3:(delete o.defaults.Vacation.startDateEnabled,o.defaults.Vacation.startDate=0),o.defaults.Vacation.endDateEnabled?o.defaults.Vacation.endDate=o.defaults.Vacation.endDate.getTime()/1e3:(delete o.defaults.Vacation.endDateEnabled,o.defaults.Vacation.endDate=0),o.defaults.Vacation.startTimeEnabled?(o.defaults.Vacation.startTime=o.defaults.Vacation.startTime.format(this.$mdDateLocaleProvider,"%H:%M"),o.defaults.Vacation.endTimeEnabled?o.defaults.Vacation.endTime=o.defaults.Vacation.endTime.format(this.$mdDateLocaleProvider,"%H:%M"):(delete o.defaults.Vacation.endTimeEnabled,o.defaults.Vacation.endTime=0)):(delete o.defaults.Vacation.startTimeEnabled,o.defaults.Vacation.startTime=0,delete o.defaults.Vacation.endTimeEnabled,o.defaults.Vacation.endTime=0),o.defaults.Vacation.autoReplyEmailAddresses?o.defaults.Vacation.autoReplyEmailAddresses=_.compact(o.defaults.Vacation.autoReplyEmailAddresses):o.defaults.Vacation.autoReplyEmailAddresses=[]),o.defaults.Forward&&o.defaults.Forward.forwardAddress&&(o.defaults.Forward.forwardAddress=_.compact(o.defaults.Forward.forwardAddress)),o.defaults.SOGoCalendarCategoriesColors={},_.forEach(o.defaults.SOGoCalendarCategories,function(e,a){o.defaults.SOGoCalendarCategoriesColors[e]=o.defaults.SOGoCalendarCategoriesColorsValues[a]}),delete o.defaults.SOGoCalendarCategoriesColorsValues,o.settings.Calendar&&o.settings.Calendar.PreventInvitationsWhitelist&&(_.forEach(o.settings.Calendar.PreventInvitationsWhitelist,function(e){a[e.uid]=e.$shortFormat()}),o.settings.Calendar.PreventInvitationsWhitelist=a),o}}();
//# sourceMappingURL=Preferences.services.js.map