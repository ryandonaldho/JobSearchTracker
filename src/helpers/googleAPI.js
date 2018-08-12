export function getFileList() {
  const params = {
    corpus: 'user',
    q: "mimeType='application/vnd.google-apps.spreadsheet'",
  }

  let fileList;
  return window.gapi.client.drive.files.list(params)
  .then(response =>{
    //console.log(response);
    return response.result.files;
  })
  .catch(err => {
    console.log(err);
  });

}

export function createSpreadsheet(){
  var spreadsheetBody = {
    "properties": {
   "title": "JobTrackerSheet"
    }
 };

 var request = window.gapi.client.sheets.spreadsheets.create({}, spreadsheetBody);
 return request.then(response => {
   console.log(response.result);
   return response.result.spreadsheetId;
 }).catch(err =>{
   console.log(err: ' + reason.result.error.message');
 });
}
