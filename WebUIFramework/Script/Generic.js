function closeBrowserInstance() {
    var counter = 0;
    var browser;
    browser = Sys.WaitBrowser('edge', 1000);
    while((browser.Exists) && (counter < 60)){
        counter++;
        browser.Terminate();
        browser = Sys.WaitBrowser('edge', 1000);
    }  
} 