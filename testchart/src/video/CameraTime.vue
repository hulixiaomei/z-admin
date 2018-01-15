  <template>
  <div class="cameratime">
  	<label>{{date}} {{time}}</label>
  </div>
  </template>
  <script type="text/javascript">
  	import Vue from 'vue';
  	export default{
  		data(){
  			return{
  				date:'',
  				time:''
  			}
  		},
  		methods:{
  			updateTime:function(){
			 	var cd = new Date();
				this.time =this.zeroPadding(cd.getHours(),2)+':'+this.zeroPadding(cd.getMinutes(),2)+':'+this.zeroPadding(cd.getSeconds(),2);
				this.date =this.zeroPadding(cd.getFullYear(),4)+'-'+this.zeroPadding(cd.getMonth()+1,2)+'-'+this.zeroPadding(cd.getDate(),2); 		
			},
			zeroPadding:function(num,digit){
				var zero = '';
				for(var i=0;i<digit;i++){
				zero+='0';
				}
				return (zero+num).slice(-digit);
			}
  		},
  		created:function(){
  		   var timerID = setInterval(this.updateTime,1000);
	       this.updateTime();
  		}
  	};

	// var week=['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
  </script>
  <style type="text/css" scoped>
	  .cameratime{
	    text-align: left;
	  }
	  .cameratime label{
	    font-size: 20px;
	    color: white;
	  }

  </style>