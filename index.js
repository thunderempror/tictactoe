var i = 1;
var odd, even;
odd = prompt("Choose your symbol ");

odd = odd.toUpperCase();

if (odd == 'X') {
    even = "O";
}
else {
    even = "X";
}
var win = 0;

document.getElementById("playermove").innerHTML = "Player 1 Move";

function change(index) {

    if (i % 2 == 1) {
        if (document.getElementById(index).value == odd || document.getElementById(index).value == even) {
            alert("Can't change value");
        }
        else {
            document.getElementById("playermove").innerHTML = "Player 2 Move";
            document.getElementById(index).value = odd;
            i++;

            if (i >= 6) {
                checkwinner();
                if (i == 10 && win == 0) {
                    alert("draw");
                }
            }


        }
       }


    else {
    if (document.getElementById(index).value == odd || document.getElementById(index).value == even) {
        alert("Can't change value");
    }
    else {
        document.getElementById("playermove").innerHTML = "Player 1 Move";
        document.getElementById(index).value = even;
        i++;

        if (i >= 6) {
            checkwinner();

            if (i == 10 && win==0) {
                alert("draw");
            }
        }
    }
}

}



function checkwinner() {
    var one = document.getElementById(1).value;
    var two = document.getElementById(2).value;
    var three = document.getElementById(3).value;
    var four = document.getElementById(4).value;
    var five = document.getElementById(5).value;
    var six = document.getElementById(6).value;
    var seven = document.getElementById(7).value;
    var eight = document.getElementById(8).value;
    var nine = document.getElementById(9).value;

    var flag;
    if (one == two && two == three) {
        flag = one;

    }
    else if (four == five && five == six) {
        flag = four;
    }
    else if (seven == eight && eight == nine) {
        flag = seven;
    }
    else if (one == four && four == seven) {
        flag = one;
    }
    else if (two == five && five == eight) {
        flag = two;
    }
    else if (three == six && six == nine) {
        flag = three;
    }
    else if (one == five && five == nine) {
        flag = one;
    }
    else if (three == five && five == seven) {
        flag = three;
    }

    if (flag == odd) {
        win = 1;
        alert("1st Player is winner");
    }
    else if (flag == even) {
        win = 1;
        alert("second player is winner");
    }

}