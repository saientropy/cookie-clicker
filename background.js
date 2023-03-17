browser.tabs.executeScript({
    code: `
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.addedNodes) {
            for (const node of mutation.addedNodes) {
              if (node.innerText === "Accept All" || 
                  node.innerText === "Accept All Cookies" || 
                  node.innerText === "Dismiss all" || 
                  node.innerText === "Agree" || 
                  node.innerText === "Allow Cookies" || 
                  node.innerText === "I Accept" || 
                  node.innerText === "OK" || 
                  node.innerText === "Save Preferences" || 
                  node.innerText === "Accept" || 
                  node.innerText === "Yes, I Accept" || 
                  node.innerText === "Confirm" || 
                  node.innerText === "I Agree" || 
                  node.innerText === "got it") {
                console.log("Cookie popup button found");
                node.click();
              }
            }
          }
        });
      });
  
      observer.observe(document.body, { childList: true, subtree: true });
    `
  });
  