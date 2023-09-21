let browser=Aliases.browser;
let webBrowser;


function clickLogin(){
      browser.HomePage.linkLogin.Click(); 
}


function EventControl1_OnStartTestCase(Sender, StartTestCaseParams)
{
     if(Project.Variables.browser == "Edge")
      webBrowser=Browsers.Item(btEdge);
     else if(Project.Variables.browser == "Chrome")
      webBrowser=Browsers.Item(btChrome);
     else if(Project.Variables.browser == "Firefox")
      webBrowser=Browsers.Item(btFirefox);
     else if(Project.Variables.browser == "IE")
      webBrowser=Browsers.Item(btIExplorer);
            
      webBrowser.Navigate("https://smartbear.com/");  
}

function EventControl1_OnStopTestCase(Sender, StopTestCaseParams)
{
    var counter = 0;
    var cbrowser;
    
    cbrowser = Sys.WaitBrowser(Project.Variables.browser, 1000);
    while((cbrowser.Exists) && (counter < 60)){
        counter++;
        cbrowser.Terminate();
        cbrowser = Sys.WaitBrowser(Project.Variables.browser, 1000);
        }
    
} 

function EventControl1_OnStartTest(Sender)
{
  //aqFileSystem.RenameFile(Project.Path+"HtmlResults\Index.html",Project.Path+"HtmlResults\Index1.html",true);
  
}