<template>
	<div>
		<el-dialog title="新增" v-model="userFormVisible" :before-close="close">
			<el-form :model="userForm" label-width="80px" :rules="userFormRules" ref="userForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="userForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别" prop="sex">
					<el-radio-group v-model="userForm.sex">
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="生日" prop="birth">
					<el-date-picker type="date" placeholder="选择日期" v-model="userForm.birth"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址" prop="addr">
					<el-input type="textarea" v-model="userForm.addr"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="close">取消</el-button>
				<el-button type="primary" @click.native="edit" :loading="loading">提交</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
	import util from '../../common/js/util'
	export default {
		data() {
			return {
				userForm: {
					id:'',
					name: '',
					sex: -1,
					birth: '',
					addr: ''
				},
				userFormRules: {
					name: [{
							required: true,
							message: '请输入姓名',
							trigger: 'blur'
						},

					],
				},
			}

		},
		methods: {
			close() {
				this.$refs['userForm'].resetFields()
				this.$emit('closeUserForm')
			},
			edit() {
				this.$refs.userForm.validate((valid) => {
					 //布尔值valid 判断同没通过验证
					if(valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							let para = Object.assign({}, this.userForm);
							console.log(para)
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							// console.log(para)
							this.$emit('editUser', para);
							// this.$emit('closeUserForm');

						})

					}
				});

			}
		},
		props: {
			userFormVisible: Boolean,
			loading: Boolean,
			user:{
					id:'',
					name: '',
					sex: -1,
					birth: '',
					addr: ''
			}
		},
		watch: {
			userFormVisible: function(val, oldVar) {
				if(oldVar && !val) {
					 this.$refs['userForm'].resetFields();
					 //清空表单数据
				}
			},
			user:function(val ,oldVar){
				this.userForm=Object.assign({}, val);
			}
		}

	}
</script>
<style>

</style>