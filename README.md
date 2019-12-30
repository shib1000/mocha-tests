### Mocha-Tests
A sample project for trying out reporters with Mocha test framework.

---
Sample reports configured
#### Mocha-junit-reporter
For running the report
``` mocha test --reporter mocha-junit-reporter```  
A sample report is available at ./mocha-junit-reporter/test-results.xml

#### Mocha-awesome-reporter
For running the report
``` mocha test --reporter mochawesome```  
A sample html report is available at ./mochaawesome-report

#### Mocha-allure-reporter
For running the report
``` mocha test --reporter mocha-allure-reporter```  
Generates raw report into allure-results folder.
For viewing html report, install allure commandline. (https://docs.qameta.io/allure)
and then run
```allure serve```