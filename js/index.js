var page = {
	toStart:0,
	start:1,
	toMain:2,
	main:3,
}
var app=new Vue({
	el:"#app",
	data:{
		width:document.documentElement.clientWidth,
		minwidth:1080,
		height:document.documentElement.clientHeight,
		pageStatus:page.toStart,
		imgInfo:{
			startImg:["./images/welcome.jpg","","562","726"],
			headImg:["./images/head.webp","","5702","1901"],
			blogImg:["./images/blog.png","","512","512"],
			vlogImg:["./images/vlog.png","","512","512"],
			cameraImg:["./images/camera.png","","512","512"],
			infoImg:["./images/info.png","","512","512"],
			menuImg:["./images/menun.png","./images/menus.png","512","512"],
			loveImg:["./images/loven.png","./images/loves.png","512","512"],
		},
		summaryInfo:[],
		selected:{
			showPanel:false,
			classifyTarget:null,
			classifyIndex:-1,
			summaryTarget:null,
			summaryIndex:-1,
			content:"",
		},
	},
	computed:{
		appStyle:function(){
			let temp = {
				'min-width':this.minwidth+'px',
				'width':this.width+'px',
				'display':'flex',
				'align-items':'center',
				'justify-content':'center',
			}
			switch (this.pageStatus){
				case page.main:
					break
				default:
					temp['min-height']=this.imgInfo.startImg[3]/this.imgInfo.startImg[2]*this.minwidth/2+'px'
					temp['height']=this.height+'px'
			}
			return temp
		},
		leftStyle:function(){
			let temp = {
				'justify-content':'flex-end',
				'min-width':this.minwidth/2+'px',
				'width':'49.5%',
			}
			switch (this.pageStatus){
				case page.main:
					temp['display']='none'
					break
				default:
					temp['display']='flex'
			}
			return temp
		},
		welcomeImgStyle:function(){
			let temp = {
				'width':this.minwidth/2+'px',
				'height':this.imgInfo.startImg[3]/this.imgInfo.startImg[2]*this.minwidth/2+'px',
			}
			return temp
		},
		mediumStyle:function(){
			let temp = {
				'min-width':this.minwidth+'px',
				'width':'100%',
				'flex-direction':'column',
				'justify-content':'flex-start',
				'align-items':'center',
			}
			switch (this.pageStatus){
				case page.main:
					temp['display']='flex'
					break
				default:
					temp['display']='none'
			}
			return temp
		},
		headStyle:function(){
			let temp = {
				'min-width':this.minwidth+'px',
				'width':'100%',
				'min-height':this.minwidth/this.imgInfo.headImg[2]*this.imgInfo.headImg[3]+'px',
				'height':this.width/this.imgInfo.headImg[2]*this.imgInfo.headImg[3]+'px',
				'background-size':'cover',
				'background-repeat':'no-repeat',
				'background-image':'url('+this.imgInfo.headImg[0]+')',
				'display':'flex',
				'align-items':'center',
				'justify-content':'center',
				'flex-direction':'column',
			}
			return temp
		},
		bodyStyle:function(){
			let temp={
				'min-width':this.minwidth+'px',
				'width':'100%',
				'display':'flex',
				'justify-content':'center',
			}
			return temp
		},
		funcBtnStyle:function(){
			let temp={
				'width':'50px',
				'height':'50px',
				'position':'fixed',
				'z-index':'1',
				'cursor':'pointer',
				'display':'flex',
				'align-items':'center',
				'justify-content':'center',
			}
			return temp
		},
		panelStyle:function(){
			let temp={
				'width':'680px',
				'border':'2px solid rgb(125,125,125)',
				'border-radius':'4px',
				'background-color':'white',
				'padding':'5px',
				'position':'fixed',
				'z-index':'1',
				'left':'80px',
				'bottom':'20px',
				'flex-direction':'column',
			}
			if (this.selected.showPanel){
				temp['display']='flex'
			}else{
				temp['display']='none'
			}
			return temp
		},
		panelAreaStyle:function(){
			let temp={
				'width':'100%',
				'dispplay':'flex',
				'justify-content':'flex-start',
				'align-items':'flex-start',
				'flex-wrap':'wrap',
			}
			return temp
		},
		panelClassifyStyle:function(){
			let temp={
				'margin-left':'15px',
				'margin-right':'15px',
				'display':'inline-flex',
				'justify-content':'center',
				'align-items':'center',
				'cursor':'pointer',
				'color':'rgb(125,125,125)',
			}
			return temp
		},
		summaryStyle:function(){
			let temp={
				'cursor':'pointer',
				'margin':'10px',
				'margin-bottom':'0px',
				'display':'inline-flex',
				'justify-content':'center',
				'align-items':'center',
				'flex-direction':'column',
			}
			return temp
		},
		contentStyle:function(){
			let temp={
				'min-width':this.minwidth-300+'px',
				'width':this.width-300+'px',
				'display':'flex',
				'flex-direction':'column',
				'justify-content':'flex-start',
				'align-items':'center',
			}
			if (this.width<this.minwidth){
				temp['min-height'] = this.height - this.minwidth/this.imgInfo.headImg[2]*this.imgInfo.headImg[3] + 'px'
			}else{
				temp['min-height'] = this.height - this.width/this.imgInfo.headImg[2]*this.imgInfo.headImg[3] + 'px'
			}
			return temp
		},
		homeStyle:function(){
			let temp={
				'margin-top':'50px',
				'width':'100%',
				'justify-content':'center',
				'align-items':'center',
			}
			if (this.selected.summaryIndex >= 0){
				temp['display']='none'
			}else{
				temp['display']='flex'
			}
			return temp
		},
		homeImgStyle:function(){
			let temp={
				'width':'50%',
				'display':'flex',
				'justify-content':'center',
				'align-items':'center',
			}
			return temp
		},
		homeWordStyle:function(){
			let temp={
				'width':'50%',
				'display':'flex',
				'flex-direction':'column',
				'justify-content':'center',
				'align-items':'center',
			}
			return temp
		},
		articleStyle:function(){
			let temp={
				'width':'100%',
			}
			if (this.selected.summaryIndex < 0){
				temp['display']='none'
			}
			return temp
		},
		footStyle:function(){
			let temp={
				'margin-top':'20px',
				'min-width':this.minwidth+'px',
				'width':'100%',
				'display':'flex',
				'justify-content':'center',
				'align-items':'center',
				'flex-direction':'column',
			}
			return temp
		},
		rightStyle:function(){
			let temp = {
				'align-items':'center',
				'justify-content':'center',
				'flex-direction':'column',
				'min-width':this.minwidth/2+'px',
				'width':'49.5%',
			}
			switch (this.pageStatus){
				case page.main:
					temp['display']='none'
					break
				default:
					temp['display']='flex'
			}
			return temp
		},
		buttonStyle:function(){
			let temp = {
				'margin':'20px',
				'cursor':'pointer',
				'padding':'0',
				'display':'flex',
				'align-items':'center',
				'justify-content':'center',
				'font-weight':'350',
				'font-size':'150%',
				'border-width':'2px',
				'border-radius':'4px',
				'border-style':'solid',
				'border-color':'rgb(125,125,125)',
				'color':'rgb(125,125,125)',
				'background-color':'rgb(255,255,255)',
			}
			return temp
		},
	},
	methods:{
		//page operation
		ButtonOp(opEvent){
			switch(opEvent.type){
				case "mouseout":
				case "mousedown":
					opEvent.target.style['border-color']='rgb(125,125,125)'
					opEvent.target.style['color']='rgb(125,125,125)'
					opEvent.target.style['background-color']='rgb(255,255,255)'
					break
				case "mouseup":
					switch (opEvent.target.id){
						case "startButton":
							if (this.pageStatus == page.start){
								this.pageStatus=page.toMain
								this.PageTransform()
							}
							break
						case "blogButton":
							this.selected.showPanel = !this.selected.showPanel
							break
						case "vlogButton":
							window.open("https://space.bilibili.com/403899802")
							break
					}
				case "mouseover":
					opEvent.target.style['border-color']='rgb(255,255,255)'
					opEvent.target.style['color']='rgb(255,255,255)'
					opEvent.target.style['background-color']='rgb(125,125,125)'
					break
			}
		},
		MenuOp(opEvent){
			switch(opEvent.type){
				case "mouseover":
					opEvent.target.parentNode.children[0].style['display'] = "none"
					opEvent.target.parentNode.children[1].style['display'] = "flex"
					break
				case "mouseout":
					opEvent.target.parentNode.children[0].style['display'] = "flex"
					opEvent.target.parentNode.children[1].style['display'] = "none"
					break
				case "click":
					this.selected.showPanel = !this.selected.showPanel
					break
			}
		},
		LoveOp(opEvent){
			switch(opEvent.type){
				case "mouseover":
					opEvent.target.parentNode.children[0].style['display'] = "none"
					opEvent.target.parentNode.children[1].style['display'] = "flex"
					break
				case "mouseout":
					opEvent.target.parentNode.children[0].style['display'] = "flex"
					opEvent.target.parentNode.children[1].style['display'] = "none"
					break
				case "click":
			}
		},
		PanelOp(opEvent,index){
			switch (opEvent.type){
				case "mouseover":
					if(this.selected.classifyTarget == null || index != this.selected.classifyIndex){
						opEvent.target.style['color']='blue'
					}
					break
				case "mouseout":
					if(this.selected.classifyTarget == null || index != this.selected.classifyIndex){
						opEvent.target.style['color']='rgb(125,125,125)'
					}
					break
				case "click":
					if(this.selected.classifyTarget == null || index != this.selected.classifyIndex){
						if (this.selected.classifyTarget != null){
							this.selected.classifyTarget.style['color']='rgb(125,125,125)'
						}
						this.selected.classifyTarget = opEvent.target
						this.selected.classifyIndex = index
						if (index==-1){
							this.ContentTransform(null,-1)
						}
					}
					break
			}
		},
		PageTransform(){
			switch (this.pageStatus){
				case page.toStart:
					anime.set('#left',{
						translateX: -500,
						opacity: 0,
					})
					anime.set('#right',{
						translateX: 500,
						opacity: 0,
					})
					anime({
						targets:'#left',
						translateX: 0,
						opacity: 1,
						duration: 250,
						easing: 'spring(1,75,5,0)',
						complete:function(){
							app.pageStatus = page.start
						}
					}).play()
					anime({
						targets:'#right',
						translateX: 0,
						opacity: 1,
						duration: 250,
						easing: 'spring(1,75,5,0)',
						complete:function(){
							app.pageStatus = page.start
						}
					}).play()
					break
				case page.toMain:
					anime({
						targets:'#left',
						translateX: -500,
						opacity: 0,
						duration: 500,
						easing: 'easeInOutSine',
						complete:function(){
							app.pageStatus = page.main
						},
					}).play()
					anime({
						targets:'#right',
						translateX: 500,
						opacity: 0,
						duration: 500,
						easing: 'easeInOutSine',
						complete:function(){
							app.pageStatus = page.main
						},
					}).play()
					anime.set(['#head p','#body','#head svg text'],{
						opacity:0,
					})
					anime({
						targets:['#head p','#body'],
						opacity:1,
						easing: 'easeInOutSine',
						delay: 500,
						duration: 2500,
					}).play()
					anime.set('#head',{
						translateY:-800,
					})
					anime({
						targets:'#head',
						translateY: 0,
						duration: 250,
						delay: 500,
						easing: 'spring(1,75,5,0)',
						complete:function(){
							anime({
								targets:'#head svg text',
								opacity:1,
								strokeDashoffset: function(el){
									el.style['stroke-dasharray']=el.textLength.baseVal.value
									el.style['stroke-dashoffset']=el.textLength.baseVal.value
									return [el.textLength.baseVal.value,0]
								},
								easing: 'easeInOutSine',
								duration: 2500,
							}).play()
						},
					}).play()
					break
			}
		},
		ContentTransform(opEvent,index){
			if (this.pageStatus==page.main){
				anime({
					targets: '#content',
					opacity: 0,
					easing: 'easeInOutSine',
					duration: 500,
					complete: function(){
						app.selected.content = ""
						if (index>=0){
							app.selected.summaryTarget = opEvent.target.parentNode
							app.selected.summaryIndex = index
							app.GetContentInfo()
						}else{
							app.selected.summaryTarget = null
							app.selected.summaryIndex = -1
						}
						anime({
							targets: '#content',
							opacity: 1,
							easing: 'easeInOutSine',
							duration: 1500,
						}).play()
					},
				}).play()
			}
		},
		//data operation
		GetSummaryInfo(){
			axios.get("./data/summary")
				.then(function(res){
					app.summaryInfo = res.data
				})
				.catch(function(err){
					console.log(err)
				})
		},
		GetContentInfo(){
			axios.get(app.summaryInfo[app.selected.classifyIndex].info[app.selected.summaryIndex].url)
				.then(function(res){
					app.selected.content = res.data
				})
				.catch(function(err){
					console.log(err)
				})
		},
		LoveFeedBack(id){
		},
	},
	mounted(){
		this.GetSummaryInfo()
		this.PageTransform()
		window.onresize = () => {
			this.width = document.documentElement.clientWidth
			this.height = document.documentElement.clientHeight
		}
	},
	destroyed(){
		window.onresize = null
	},
})
