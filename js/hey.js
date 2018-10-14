function heyPomodoro(){
    if (document.getElementById('pomodoro').style.display == 'none') {
        document.getElementById('pomodoro').style.display = ''; 
        this.value = 'pomodoro'; 
    } 
    else { 
        document.getElementById('pomodoro').style.display = 'none'; 
        this.value = 'pomodoro'; 
    }
}
function heyList(){
    if (document.getElementById('todolist').style.display == 'none') {
        document.getElementById('todolist').style.display = ''; 
        this.value = 'to do list'; 
    } 
    else { 
        document.getElementById('todolist').style.display = 'none'; 
        this.value = 'to do list'; 
    }
}
// SHOW WIDGET TO WRITE A QUICK MEMO
function heyMemo(){
    if (document.getElementById('quickmemo').style.display == 'none') {
        document.getElementById('quickmemo').style.display = ''; 
        this.value = 'write a quick memo'; 
    } 
    else { 
        document.getElementById('quickmemo').style.display = 'none'; 
        this.value = 'quick memo';
    }
}