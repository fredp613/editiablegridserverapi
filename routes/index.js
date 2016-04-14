var express = require('express');

var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  
  var data = [
			{
				id: "1z",
				crmRecordId: "431212",
				crmFieldName: "firstName",
				crmFieldType: "crmShortText",
				value: "John",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},
			{
				id: "2x",
				crmRecordId: "431212",
				crmFieldName: "lastName",
				crmFieldType: "crmShortText",
				value: "Smith",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},					
			{
				id: "3x",
				crmRecordId: "431212",
				crmFieldName: "isActive",
				crmFieldType: "boolean",
				sortDirection: "desc",
				value: "0",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},		
			{
				id: "371",
				crmRecordId: "431212",
				crmFieldName: "isAboriginal",
				crmFieldType: "boolean",
				value: "1",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},	
			{
				id: "382",
				crmRecordId: "431212",
				crmFieldName: "Category",
				crmFieldType: "lookup",
				value: "140012",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},	
			{
				id: "5xxxx",
				crmRecordId: "4312123",
				crmFieldName: "firstName",
				crmFieldType: "crmShortText",
				value: "Mike",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},
			{
				id: "6121213x",
				crmRecordId: "4312123",
				crmFieldName: "lastName",
				crmFieldType: "crmShortText",
				value: "JonesU",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},		
			{
				id: "30fgfg",
				crmRecordId: "4312123",
				crmFieldName: "isActive",
				crmFieldType: "boolean",
				sortDirection: "desc",
				value: "0",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},	
			{
				id: "3443565",
				crmRecordId: "4312123",
				crmFieldName: "isAboriginal",
				crmFieldType: "boolean",
				value: "0",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},	
			{
				id: "35xxxxxx",
				crmRecordId: "4312123",
				crmFieldName: "Category",
				crmFieldType: "lookup",
				value: "140012",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},
			{
				id: "7f1111",
				crmRecordId: "4312124",
				crmFieldName: "firstName",
				crmFieldType: "crmShortText",
				value: "Mike",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},
			{
				id: "68",
				crmRecordId: "4312124",
				crmFieldName: "lastName",
				crmFieldType: "crmShortText",
				value: "Jones",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},
			{
				id: "3132x32",
				crmRecordId: "4312124",
				crmFieldName: "isActive",
				crmFieldType: "boolean",
				sortDirection: "desc",
				value: "1",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},
			{
				id: "32axsdfasdf",
				crmRecordId: "4312124",
				crmFieldName: "isAboriginal",
				crmFieldType: "boolean",
				value: "0",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},	
			{
				id: "33trxerefsdf",
				crmRecordId: "4312124",
				crmFieldName: "Category",
				crmFieldType: "lookup",
				value: "140013",
				grouping: "",
				isDirty: false,
				dirtyValue: "",
				sortFieldName: "lastName",
				sortDirection: "desc",
			},


		];		
  setTimeout(function() {
  	res.send(JSON.stringify(data));	
  }, 500)
  
});


router.get('/getLookupData', function(req, res, next) {
	var lookupData = [
			{
			crmFieldId: "4324",
			crmFieldName: "Category",
			value: "140012",
			label: "Category 1",
			},
			{
				
				crmFieldId: "4324",
				crmFieldName: "Category",
				value: "140013",
				label: "Category 2",
			},
			{
				
				crmFieldId: "4324",
				crmFieldName: "Category",
				value: "140014",
				label: "Category 3",
			},
			{
				
				crmFieldId: "4324",
				crmFieldName: "Category",
				value: "140015",
				label: "Category 4",
			},

		];
	setTimeout(function() {
		res.send(JSON.stringify(lookupData))
	}, 500)
	
});


router.get('/getTwoOptionsData', function(req, res, next) {
		


		var twoOptionsData = [
			{
				crmFieldId: "123",
				crmFieldName: "isActive",				
				value: "0",
				label: "No",
			},
			{
				crmFieldId: "123",
				crmFieldName: "isActive",
				value: "1",
				label: "Yes",
			},
			{
				crmFieldId: "124",
				crmFieldName: "isAboriginal",				
				value: "0",
				label: "No",
			},
			{
				crmFieldId: "124",
				crmFieldName: "isAboriginal",
				value: "1",
				label: "Yes",
			},


		];
	setTimeout(function() {
		res.send(JSON.stringify(twoOptionsData))
	}, 800)
	
});



module.exports = router;

























