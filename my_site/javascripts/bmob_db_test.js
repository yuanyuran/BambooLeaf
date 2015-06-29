var value_glo;

function init(){
	BmobSocketIo.initialize("cd29069909e41922ecf0966510b418d5");
	Bmob.initialize("cd29069909e41922ecf0966510b418d5", "b35bad3c17eda268d84232bae64e64fb");
}


function add_test(table, array_name, array_value){ 
var len = array_name.length;
alert(len);


if(len > 0) {
	var promise = new Bmob.Promise();
	var GameScore = Bmob.Object.extend(table);
	var gameScore = new GameScore();
	for(var i=0; i<len; i++)
	{
		gameScore.set(array_name[i], array_value[i]);
	}
	//添加数据，第一个入口参数是null
	gameScore.save(null, {
	  success: function(gameScore) {
		// 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
		alert('添加数据成功，返回的objectId是：' + gameScore.id);
		promise.resolve(gameScore.id);
		return promise;
	  },
	  error: function(gameScore, error) {
		// 添加失败
		alert('添加数据失败，返回错误信息：' + error.description);
		promise.reject('添加数据失败');
		return promise;
	  }
	});
}
}

function add_search(table, array_name, array_value){ 
var len = array_name.length;
alert(len);
if(len > 0) {
	var GameScore = Bmob.Object.extend(table);
	var gameScore = new GameScore();
	for(var i=0; i<len; i++)
	{
		gameScore.set(array_name[i], array_value[i]);
	}
	//添加数据，第一个入口参数是null
	gameScore.save(null, {
	  success: function(gameScore) {
		// 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
		alert('添加数据成功，返回的objectId是：' + gameScore.id);
	  },
	  error: function(gameScore, error) {
		// 添加失败
		alert('添加数据失败，返回错误信息：' + error.description);
	  }
	});
}
}