/**
 * Created by seyyid.dogankaya on 10.09.2015.
 */
function Message(SenderName,MessageText){
    this.SenderName=SenderName;
    this.MessageText=MessageText;
    this.ID = null;
    this.SendTime = null;
    this.UpdateTime = null;
    this.UpdateMessage=UpdateMessage;
}

function UpdateMessage(TextToUpdate){
    this.MessageText = TextToUpdate;
}