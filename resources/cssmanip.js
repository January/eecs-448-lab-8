function doTheThing()
{
    var text = document.getElementById("sample");
    var brred = document.getElementById("brred").value;
    var brgreen = document.getElementById("brgreen").value;
    var brblue = document.getElementById("brblue").value;
    var width = document.getElementById("brwide").value;

    var bgred = document.getElementById("bgred").value;
    var bggreen = document.getElementById("bggreen").value;
    var bgblue = document.getElementById("bgblue").value;

    if(brred > 255 || brgreen > 255 || brblue > 255 || bgred > 255 || bggreen > 255 || bgblue > 255 || width > 100 || brred < 0 || brgreen < 0 || brblue < 0 || bgred < 0 || bggreen < 0 || bgblue < 0 || width < 0)
    {
        alert("Invalid values. Try again.");
    }
    else
    {
        text.style.borderColor = `rgb(${brred}, ${brgreen}, ${brblue})`;
        text.style.backgroundColor = `rgb(${bgred}, ${bggreen}, ${bgblue})`;
        text.style.borderWidth = `${width}px`;
    }

}