(function($){
	jQuery.garlleyImg = function(o){
		$obj = $(o.obj);
		$item = $obj.find("li");
		$btn = $(o.btn).find("li");
		var iLen = $item.length;
		
		if(iLen<1)
		{
			return;	
		}
		
		
		var iLoop = o.intv || 5000; 
		var iAct = o.iact || 500; 
		var sEase = o.easeing || "easeOutQuart"; 
		
		
		//ul default height
		//$obj.width(iLen*iBh);
		
		$item.first().css("display","block").siblings().css("display","none");
		
		if(typeof sInterval != "undefined")
		{
			clearInterval(sInterval);	
		}
		var iShow = 0;
			
		function SetPic(id,rule)
		{				
			
			if(!$item.is(":animated"))
			{
				
				if(rule==1)
				{			
					iShow++;
					if(iShow==iLen)
					{
						iShow = 0;
					}
				}
				if(rule==-1)
				{		
					iShow--;
					if(iShow==-1)
					{
						iShow = iLen-1;
					}
				}
				$item.eq(iShow).fadeIn(iAct).siblings().fadeOut(500);
				$btn.eq(iShow).addClass("on").siblings().removeClass("on");
			}
					
		}
		
		$btn.each(function(i){
			$(this).click(function(){
				$(this).addClass("on").siblings().removeClass("on")
				iShow = i;
				$item.eq(iShow).fadeIn(iAct).siblings().fadeOut(500);	
			});	
		});		
		
		
		$(o.next).click(function(){
			SetPic(1,1);
		});
		
		$(o.prev).click(function(){
			SetPic(1,-1);
		});
		
		/*sInterval = setInterval(function(){ SetPic(1,1)},iLoop);
		
		if(o.ic)
		{
			$(o.ic).hover(function(){ clearInterval(sInterval); }, function(){sInterval = setInterval(function(){ SetPic(1,1) ;},iLoop);});	
		}*/
		
	};
})(jQuery);








