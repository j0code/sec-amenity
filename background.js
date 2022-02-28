// Relevant apis: contentSettings, contextMenu, cookies, declarativeContent, declarativeNetRequest, devtools.network, i18n, identity, idle, loginState, management, notifications, omnibox, permissions, platformKeys, power, privacy, proxy, scripting, storage, system, webNavigation

/*chrome.runtime.onInstalled.addListener(async () => {
	let url = chrome.runtime.getURL("installed.html")
	//let tab = await chrome.tabs.create({ url })
	//console.log(`Created tab ${tab.id}`)
})*/

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(info => {
	var rule = info.rule.rulesetId + ":" + info.rule.ruleId
	if(info.rule.rulesetId == "debug") console.debug(rule, info.request.method, info.request.url, `(${info.request.type}, ${info.request.initiator})`)
	else console.log(rule, info.request.method, info.request.url, `(${info.request.type}, ${info.request.initiator})`)
})

console.log("ye")
