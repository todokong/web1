var Link = {
    setColor: function(color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //     i++;
        //     alist[i].style.color = color;
        // }
        $('a').css('color', color);
    }
}
var Body = {
    setColor: function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor(color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgrondColor', color);
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body')
    // if(document.querySelector('#night_day').value === 'night') {
    if(self.value === 'night') {
        // target.style.backgroundColor='black';
        // target.style.color='white';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Link.setColor('powderblue');
    } else {
        // target.style.backgroundColor='white';
        // target.style.color='black';
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Link.setColor('blue');
    }
}