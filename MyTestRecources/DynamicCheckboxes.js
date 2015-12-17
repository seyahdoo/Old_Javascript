/**
 * Created by goglomen on 11.09.2015.
 */


function SubmitCheckboxes(){
    var CheckedBoxes = $("#DynamicCheckboxes input:checked");
    var ListToReturn = new Array();

    for(i=0;i<CheckedBoxes.length;i++){
        ListToReturn.push(CheckedBoxes.eq(i).val());
    }

    //CheckedBoxes.each(function(){
    //    ListToReturn.push($(this).val());
    //});

    console.log(ListToReturn);
}

function CreateDynamicCheckbox(StringList){
    var DynamicCheckboxes = $("#DynamicCheckboxes");
    for (var i=StringList.length-1 ; i>=0 ; i--){
        DynamicCheckboxes.prepend("<input type='checkbox' value='"+ StringList[i] +"'>"+ StringList[i] +"</br>");
    }
    DynamicCheckboxes.append("<input id='DynamicCheckboxSubmitButton' type='button' value='Submit' onclick='SubmitCheckboxes()'>");
}