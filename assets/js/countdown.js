
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
function countdown(yr,m,d,h,i,s){
	theyear=yr;themonth=m;theday=d;thehour=h;themin=i;thesec=s
	var today=new Date()
	var todayy=today.getYear()
	if (todayy < 1000)
		todayy+=1900
	var todaym=today.getMonth()
	var todayd=today.getDate()
	var todayh=today.getHours()
	var todaymin=today.getMinutes()
	var todaysec=today.getSeconds()
	var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
	futurestring=montharray[m-1]+" "+d+", "+yr+" "+h+":"+i+":"+s
	dd=Date.parse(futurestring)-Date.parse(todaystring)
	dday=Math.floor(dd/(60*60*1000*24)*1)
	dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
	dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
	dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
	if(dday==0&&dhour==0&&dmin==0&&dsec==1){
		document.forms.count.count2.value=current
		return
	}
	else
		$('#countdown').html('<span class="day">'+dday+ '<span class="days timer-text"> dias</span></span> <span class="hour">'+dhour+' <span class="hours timer-text">hora</span></span> <span class="min">'+dmin+'<span class="minutes  timer-text"> minutos</span></span> <span class="sec">'+dsec+' <span class="seconds timer-text"> segundos</span></span>');
	setTimeout("countdown(theyear,themonth,theday,thehour,themin,thesec)",1000);
}
countdown(2013,06,15,00,00,00);