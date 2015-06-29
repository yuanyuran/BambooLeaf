function fresh_table(myDate, day, week, obj){

			obj.each(function(i){
						//alert("这是第"+i+"行内容");
						$(this).children("th").each(function(j){
							//alert("第"+j+"个td的内容："+$(this).text());
							if(j>0) {
								//alert(myDate);
								myDate.setDate(myDate.getDate() + j - day); 

								$(this).html(weekstrlist[j-1] + "<br/>" + myDate.getFullYear()+"-"+ (myDate.getMonth()+ 1) + "-"+myDate.getDate());
								myDate.setDate(myDate.getDate() - j + day); 
							}
							$(this).attr("style", "BACKGROUND-COLOR: white");
							if(j == day && week == 0) {
								$(this).attr("style", "BACKGROUND-COLOR: #06f0fc");
							}
							
						})
						
											
						$(this).children("td").each(function(j){
							$(this).attr("style", "BACKGROUND-COLOR: white");
							if(j == day && week == 0) {
								$(this).attr("style", "BACKGROUND-COLOR: #06f0fc");
							}
						})
						
					});
			
};// JavaScript Document


function refresh_select(year, obj){
$(obj).empty();
var head_str = "/01/01";
var tail_str = "/12/31";
var Date_head = new Date(year + head_str);
var day = Date_head.getDay();
if(day == 0) day=7;

var week_num = $.datepicker.iso8601Week(Date_head);

if(week_num != 1) {
	Date_head.setDate(Date_head.getDate()+7);
	week_num = $.datepicker.iso8601Week(Date_head);
} 

var week_head_begin_date = new Date(Date_head.getFullYear()+'/'+ (Date_head.getMonth()+ 1) + '/'+Date_head.getDate());

var week_head_end_date = new Date(Date_head.getFullYear()+'/'+ (Date_head.getMonth()+ 1) + '/'+Date_head.getDate());


week_head_begin_date.setDate(week_head_begin_date.getDate()- day + 1);
week_head_end_date.setDate(week_head_end_date.getDate() - day + 7);

//tail of year
var Date_tail = new Date(year + tail_str);
var day_tail = Date_tail.getDay();
if(day_tail == 0) day_tail=7;

var week_num_tail = $.datepicker.iso8601Week(Date_tail);

if(week_num_tail == 1) {
	Date_tail.setDate(Date_tail.getDate()-7);
	week_num_tail = $.datepicker.iso8601Week(Date_tail);
}


var week_tail_begin_date = new Date(Date_tail.getFullYear()+'/'+ (Date_tail.getMonth()+ 1) + '/'+Date_tail.getDate());
var week_tail_end_date = new Date(Date_tail.getFullYear()+'/'+ (Date_tail.getMonth()+ 1) + '/'+Date_tail.getDate());
week_tail_begin_date.setDate(week_tail_begin_date.getDate()- day_tail + 1);
week_tail_end_date.setDate(week_tail_end_date.getDate() - day_tail + 7);

var i=1;
for(i=1; i<=week_num_tail;i++)
{
	var begin = (week_head_begin_date.getMonth()+ 1) + '/'+ week_head_begin_date.getDate();//week_head_begin_date.getFullYear()+'/'+ 
	var end = (week_head_end_date.getMonth()+ 1) + '/'+ week_head_end_date.getDate();//week_head_end_date.getFullYear()+'/'+ 
	$("<option value='1'>第"+i+"周("+ begin + "~" + end + ")</option>").appendTo($(obj));
	week_head_begin_date.setDate(week_head_begin_date.getDate() + 7);
	week_head_end_date.setDate(week_head_end_date.getDate() + 7);
}		
					
};// JavaScript Document
	
		