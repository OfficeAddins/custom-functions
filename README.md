# custom-functions
Excel Office.JS custom function example 

Step by Step Tutorial:
https://bettersolutions.com/javascript/custom-functions/creating-with-notepad.htm

<img src="/images/screenshot.png" width="404" height="120"> 

<img src="/images/version.png" width="385" height="75"> 


<B>Help Link Working</B>

*) Build the project, upload the files to a https web server and sideload into Excel

*) Select (File > New > Blank workbook)

*) Select (Formulas > Insert Function)

<img src="images/insert-function-dialog.png" width="351" height="295"> 

*) Select the "CUSTOM.ADDFUNCTION" function

*) Press OK

<img src="images/arguments-dialog-one.png" width="345" height="216"> 

*) Enter the arguments 10 and 10 and press OK

<img src="/images/screenshot.png" width="407" height="120"> 

Check that the custom function is working

<B>Using with a Data Table Not Working</B>


Enter the values in cells B2, C2, B3, C4

Enter the formula "=SUM(C2,C3)" into cell "B7"
Enter the numbers 5, 10, 15, 20 across in row 7
Enter the numbers 3, 6, 9, 12 down in column B

Highlight cells B7:F11
Select Data tab, What If Analysis, Data Table
For the row input select cell "C2"
For the column input select cell "C3"

Press OK - The data table will be populated correctly

<img src="/images/data-tables.png" width="1298" height="672"> 

Now lets repeat this using a custom function that adds up two numbers

Enter the values in cells H2, I2, H3, I4

Enter the formula "=CUSTOM.ADDFUNCTION(I2,I3)" into cell "H7"
Enter the numbers 5, 10, 15, 20 across in row 7
Enter the numbers 3, 6, 9, 12 down in column B

Highlight cells H7:L11
Select Data tab, What If Analysis, Data Table
For the row input select cell "I2"
For the column input select cell "I3"

The data table is not populated and a calculation error is displayed



<img src="/images/insert-function-bar.png" width="408" height="104">

<img src="images/arguments-dialog-two.png" width="396" height="219"> 

