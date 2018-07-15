window.onload=init;
    	var arr1=["fl/1.png","fl/2.png","fl/3.png","fl/4.png",];
    	var arr2=["1","2","3","4","5"];
    	var index=0;
    	var oldindex=-1;
    	var time=null;
    	function init(){
    		var div2=document.getElementById("div2");
    		var numberdiv=div2.getElementsByTagName("div");
    		for(var i=0;i<numberdiv.length;i++){
    			numberdiv[i].onclick=fun1;
    		};
    		update();
    	}
    	function update(){
    		var img1=document.getElementById("img1");
    		img1.src=arr1[index];

    		var div2=document.getElementById("div2");
    		var numberdiv=div2.getElementsByTagName("div");
    		numberdiv[index].innerHTML=arr2[index];

    		numberdiv[index].className="over";

    		if(oldindex!=-1){
    			numberdiv[oldindex].innerHTML=oldindex+1;
    			numberdiv[oldindex].className="number";
    		}

    		oldindex=index;

    		index++;
    		if(index==arr1.length){
    			index=0;
    		}
    		time=window.setTimeout("update()",2000);
    	}
		function fun1(){
    		if(this.className=="over"){
    			return;
    		}
    		window.clearTimeout(time);
    		index=Number(this.innerHTML-1);
    		update();
    	}