1. How to reuse methods defined in other test. 
	- under script folder > create a test and name it as "Common" > define all the reuse methods here
        - under script folder > create a anther test 'Add' and add the below commands
		
                //USEUNIT Common
                function test1(){
                   Log.Message(Common.add(2,3));
                  }
2. How to run smartbear tests from command prompt

   a) Run general test from command prompt: C:\Program Files (x86)\SmartBear\TestComplete 15\x64\Bin>TestComplete.exe "C:\Users\Prashanthi.T\Documents\TestComplete 15 Projects\SmartBearPOC\SmartBearPOC.pjs" /run /project:WindowsFramework /unit:Add /routine:test1 /exit

    b) Run feature file from command prompt:
C:\Program Files (x86)\SmartBear\TestComplete 15\x64\Bin>TestComplete.exe "C:\Users\Prashanthi.T\Documents\TestComplete 15 Projects\SmartBearPOC\SmartBearPOC.pjs" /run /project:WindowsFramework /test:"Scenarios|Addition|Entering 2 numbers and adding them" /exportLog:"C:\Users\Prashanthi.T\Pictures\Features.html" /exit

   c)Run feature file from tagname from command prompt:
C:\Program Files (x86)\SmartBear\TestComplete 15\x64\Bin>TestComplete.exe "C:\Users\Prashanthi.T\Documents\TestComplete 15 Projects\SmartBearPOC\SmartBearPOC.pjs" /run /project:WindowsFramework /test:"@smoke" /exportLog:"C:\Users\Prashanthi.T\Pictures\Features.html"

Documentation: https://support.smartbear.com/testcomplete/docs/bdd/run.html#:~:text=A%20good%20approach%20to%20automating%20test%20runs%20is,one%3A%20TestComplete.exe%20project-suite-file%20%2Fproject%3Aproject-name%20%2Ftest%3A%22Scenarios%7CFeature1%7CMy%20scenario%20description%22%20%2Frun

3. REporting:
C:\Program Files (x86)\SmartBear\TestComplete 15\x64\Bin>TestComplete.exe "C:\Users\Prashanthi.T\Documents\TestComplete 15 Projects\SmartBearPOC\SmartBearPOC.pjs" /run /project:WindowsFramework /unit:Add /routine:test1 /exportLog:"C:\Users\Prashanthi.T\Pictures\TestLogsLog.html"

To download Samples: https://support.smartbear.com/testcomplete/downloads/samples/?_ga=2.122688203.1174474703.1695110822-1668873167.1694081816 
BDD Test documentation: https://support.smartbear.com/testcomplete/docs/bdd/run.html#:~:text=A%20good%20approach%20to%20automating%20test%20runs%20is,one%3A%20TestComplete.exe%20project-suite-file%20%2Fproject%3Aproject-name%20%2Ftest%3A%22Scenarios%7CFeature1%7CMy%20scenario%20description%22%20%2Frun
