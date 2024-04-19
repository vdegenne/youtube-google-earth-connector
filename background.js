chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tabs = await chrome.tabs.query({
    currentWindow: true,
    pinned: true,
    url: "*://www.youtube.com/*",
  });
  const activeTab = await chrome.tabs.get(activeInfo.tabId);
  if (tabs.length) {
    const earthFocused = activeTab.url.includes("earth.google.com");
    tabs.forEach((tab) => {
      chrome.tabs.update(tab.id, { muted: !earthFocused });
    });
  }
});
