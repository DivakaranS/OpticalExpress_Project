


//This code function made in app script google sheet.
//filter,update,create,delete operation 
// and check duplicate or repeated entry cutomer detaisls.
//link in each google sheets and operion working on it.




// in the app script i was created in cs file and put in these javascript codes.



//remove duplicate customer entries and check whether phonenumbers.
  
function removeDuplicates() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
//  var sheet1 = SpreadsheetApp.getActiveSheet();
  var data = ss.getDataRange().getValues();
  var sheet1 = ss.getSheetByName("Sheet1"); 
  var sheet2 = ss.getSheetByName("Sheet2"); 
  var sheet3 = ss.getSheetByName("Sheet3"); 
  
  var newData = [];
  var filData = [];
  var stringData=[];
  for (var i in data) {
    var row = data[i];
    var duplicate = false;
    var stringEntry = false;
    for (var j in newData) {
      
      if(data[i][3]=='' || typeof(data[i][3])=='string'){
       stringEntry = true; 
      }
      
      if (typeof(data[i][3])=='number' && data[i][3] == newData[j][3]) {
        duplicate = true;
      }
   
    }
    if (!duplicate && !stringEntry) {
      newData.push(row);
    }
    if(duplicate && !stringEntry){
     
      filData.push(row);
    
    }
    
    if(stringEntry){
      
      stringData.push(row);
    
    }
    
  }
  sheet2.getRange(1, 1, filData.length, filData[0].length).setValues(filData);
  sheet3.getRange(1, 1, stringData.length, stringData[0].length).setValues(stringData);
  sheet1.clearContents();
  sheet1.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
  
  }



function removeLandline(phone) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = ss.getDataRange().getValues();
    var sheet1 = ss.getSheetByName("Sheet1"); 
    var sheet4 = ss.getSheetByName("Sheet4"); 
     var mobile=[];
     var landLine=[];
   
  for(var i in data){
      var row =data[i];
   
    if(row[3].toString().length==10){
     mobile.push(row);
    }else {
      landLine.push(row);  
    }
  }
  
  sheet4.getRange(1, 1, landLine.length, landLine[0].length).setValues(landLine);
  sheet1.clearContents();
  sheet1.getRange(1, 1, mobile.length, mobile[0].length).setValues(mobile);
  
  
}
