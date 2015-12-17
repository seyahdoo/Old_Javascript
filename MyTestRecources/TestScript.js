/**
 * Created by seyyid.dogankaya on 10.09.2015.
 */
function ListTest() {
    var myList1 = new Array();
    myList1.push("myList1: index:"+myList1.length);
    myList1.push("myList1: index:"+myList1.length);
    myList1.push("myList1: index:"+myList1.length);
    myList1.push("myList1: index:"+myList1.length);
    myList1.push("myList1: index:"+myList1.length);
    myList1.push("myList1: index:"+myList1.length);
    myList1.push("myList1: index:"+myList1.length);

    myList1.pop();
    console.log(myList1.join());
    var myList2 = new Array();
    myList2.push("myList2: index:"+myList2.length);
    myList2.push("myList2: index:"+myList2.length);
    myList2.push("myList2: index:"+myList2.length);
    myList2.push("myList2: index:"+myList2.length);
    myList2.push("myList2: index:"+myList2.length);
    myList2.push("myList2: index:"+myList2.length);
    myList2.push("myList2: index:"+myList2.length);

    console.log(myList1.concat(myList2).join());

    console.log(myList1.reverse().join());

    console.log(myList1.sort().join());



}
function PromptTest(){
    var input = prompt("input test");
    console.log(input);
}
function ModelTest(){
    var mes1 = new Message("seyd","Testmessage1");
    mes1.ID=21;
    mes1.UpdateMessage("I Have The POWER(to change the text)");
    console.log(mes1.MessageText);
}
function MathTest(){
    console.log(Math.round(2.75));//yuvarla "2"
    console.log(Math.round(2.25));//yuvarla "2"
    console.log(Math.floor(2.99));//ondalýðý at "2"
    console.log(Math.PI);
    console.log(Math.E);
    console.log(Math.random());//0 ile 1 arasýnda bi sayý döndür.
    console.log(Math.max(3123,213,12,312,312,3,2));//MAX "3123"
    console.log(Math.min(321312,312,3,213,12,312,23,312));//MIN "3"
}
function DateTest(){
    var dateTime = new Date();
    console.log(dateTime);
}
function IntervalTest(){
    function RefreshFunction1234(){
        console.log("I'm Working");
        //location.reload(); //refresh page
    }
    setInterval(RefreshFunction1234,1000); //go every 5 secs.
}
function AutoRefresh(MiliSeconds){
    function Refresh(){
        location.reload();
    }
    setInterval(Refresh,MiliSeconds);
}

//jQuery
function ChangeDivDirect(myString){
    $("#myDiv h1").html(myString);
}
function ChangeDivDynamic(){
    $("#myDiv h1").prepend("add Above");
    $("#myDiv h1").append("add Below");
    $("#myDiv h1").html("" + //wipe and put this.
        "<li>Item 0</li>" +
        "<li>Item 1</li>" +
        "<li>Item 2</li>" +
        "<li>Item 3</li>" +
        "<li>Item 4</li>");

    $("#myDiv h1 li:eq(2)").remove(); // get index of h1 li 2. And Remove it.
    function AddBelow(){
        $("#myDiv h1").append("add Below");
    }

    $("#myDiv h1").prepend("<input id='txtBox1' type='text' value='inputHere'>");
    $("#txtBox1").click(AddBelow);
    $("#btn1").click(AddBelow);




}