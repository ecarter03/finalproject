function CheckD()
{
    let current=new Date(document.getElementById('date').value);
    let today=new Date();
    if(current.getTime() <= today.getTime())
    {
        alert("Please select a valid date");
        document.getElementById('date').value="";
    }
    else
    {
        return true;
    }
}

// alert("Thank you for your order " + "$name! " + "Will will be in touch with you soon" );