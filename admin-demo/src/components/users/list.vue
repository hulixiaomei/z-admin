<template>
	<div>
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true">
				<el-form-item>
					<el-input placeholder="姓名" v-model="filters.name"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="getUsers">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="userFormVisible">新增</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="danger" :disabled="this.selected.length===0" @click="batchDeletUsers">批量删除</el-button>
				</el-form-item>	
			</el-form>
		</el-col>
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selectChange" style="width:100%;">
			<el-table-column type="selection" width="55" />
			<el-table-column type="index" width="60" />
			<el-table-column prop="name" label='姓名' width="120" sortable />
			<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable />
			<el-table-column prop="birth" label="生日" width="120" sortable />
			<el-table-column prop="addr" label="地址" min-width="180" sortable />
			<el-table-column label="操作" width="150">
				<template scope="scope">
					<el-button size="small" @click="toEdit(scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="deleteUser(scope.row)">删除</el-button>
				</template>

			</el-table-column>
		</el-table>
		<el-col :span="24" class="toolbar">
			<el-pagination layout="prev,pager,next" @current-change="handleCurrentChange" :page-size="10" :total="total"></el-pagination>
		</el-col>
		<edit-user :userFormVisible='ufvisible' :loading='userLoading' :user='user'
			 @closeUserForm='closeUserForm' @editUser="editUser"></edit-user>
	</div>
</template>

<script>
	import { getUserListPage, updateUser, deleteUser } from '../../service/userService';
	import EditUser from './edit'
	export default {
		data() {
			return {
				filters: {
					name
				},
				user: {
					id: '',
					name: '',
					sex: -1,
					birth: '',
					addr: ''
				},
				users: [],
				total: 0,
				page: 1,
				listLoading: false,
				ufvisible: false,//显示弹出窗  默认不显示
				userLoading: false,
				selected: [],
			}
		},
		methods: {
			toEdit: function(row) {
				this.user = Object.assign({}, row);
				this.ufvisible = true;
			},
			deleteUser: function(row) {
				this.$confirm('确认删除吗？', '提示', {type: 'warning'}).then(() => {
					let id = row.id
					let params = [
						id
					]
					deleteUser(params).then((res) => {
							this.$message({
								message: '删除成功',
								type: 'success'
							});
							this.getUsers();
						}

					)
				})
			},
			batchDeletUsers: function() {
				this.$confirm('确认删除所选的吗？', '提示', {type: 'warning'}).then(() => {
					let ids = this.selected.map(item => item.id)
					//对选中的数组进行遍历 item.id取出遍历选中的id 返给item数组
					//console.log(this.selected.map)
					//function map() { [native code] }
					 console.log(ids)
					deleteUser(ids).then((res) => {
							this.$message({
								message: '删除成功',
								type: 'success'
							});
							this.getUsers();
						}

					)
				})
			},
			handleCurrentChange: function(page) {
				this.page = page,
					this.getUsers();
			},
			formatSex: function(row, col) {
				return row.sex == 1 ? '男' : '女'
			},
			selectChange: function(selected) {
				this.selected = selected;
			},
			getUsers() {
				let params = {
					page: this.page,
					name: this.filters.name
				};
				this.listLoading = true;
				getUserListPage(params).then((res) => {
					this.total = res.data.total;
					this.users = res.data.users;
					this.listLoading = false;
				})
			},
			userFormVisible() {
				this.ufvisible = true;
				
			},
			closeUserForm() {
				this.ufvisible = false;
			},
			editUser(user) {
				//由子组件this.$emit('editUser', para);传的参数
				this.userLoading = true;
				 //console.log(user)
				updateUser(user).then((res) => {
					this.userLoading = false;
					this.$message({
						message: '提交成功',
						type: 'success'

					})
					this.ufvisible = false;
					this.getUsers();
				})
			}
		},
		components: {
			EditUser,
		},
		mounted() {
			this.getUsers();
		}
	}
</script>

<style>

</style>