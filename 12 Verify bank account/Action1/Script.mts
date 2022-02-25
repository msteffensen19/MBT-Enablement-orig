Dim x

x= Parameter("Account_Number")


Reporter.ReportEvent micDone, "Got Bank account: ", x

If x="1234"  Then
	Reporter.ReportEvent micPass, "Bank account number is as expected: ", x
Else
	Reporter.ReportEvent micFail, "Got wrong Bank account number: ", x
End If
 
