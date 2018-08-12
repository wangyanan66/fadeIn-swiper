// 1. 定义一个数组存放一组类名  slide1   slide5
var classes = ['slide1','slide2','slide3','slide4','slide5'];
// 2. 找到右侧元素，注册点击事件
$('#arrRight').click(function() {
	// 2.1 把数组中的最后一个值删掉并存放到数组中第一个位置上
	var last = classes.pop();
	classes.unshift(last);
	console.log(classes)
	// 2.2 循环遍历每一个li更改类名 和 数组中的类名对应

	for(var i = 0; i < classes.length; i++) {
		$('#slide li').eq(i).removeClass().addClass(classes[i]);
	}
});


// 3. 找到左侧元素，注册点击事件
$('#arrLeft').click(function() {
	// 3.1 把数组中的第一个值删掉并存放到数组中最后一个位置上
	var first = classes.shift();
	classes.push(first);
	console.log(classes)
	// 3.2 循环遍历每一个li更改类名 和 数组中的类名对应

	for(var i = 0; i < classes.length; i++) {
		$('#slide li').eq(i).removeClass().addClass(classes[i]);
	}
});

