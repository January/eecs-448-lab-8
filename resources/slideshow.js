var curImg = 1;

function forward()
{
    if(curImg == 5)
    {
        curImg = 1;
    }
    else
    {
        curImg++;
    }
    document.getElementById("slide").src = `resources/slideshow/${curImg}.png`;
}

function reverse()
{
    if(curImg == 1)
    {
        curImg = 5;
    }
    else
    {
        curImg--;
    }
    document.getElementById("slide").src = `resources/slideshow/${curImg}.png`;
}