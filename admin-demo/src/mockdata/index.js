import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { loginUsers, users } from './data/users'
import Mock from 'mockjs';
export default {
	bootstrap() {
		let mock = new MockAdapter(axios);
		mock.onGet('/success').reply(200, {
			msg: 'success'
		});
		mock.onGet('/error').reply(500, {
			msg: 'failure'
		});
		mock.onPost('/login').reply(config => {

		})
		//      mock.onGet('/user/list').reply(config=>{
		//          let{mame}=config.params;
		//          let mockusers=users.filter(user=>{
		//              if(name&& user.name.indexOf(name)==-1)return false;
		//              return true;
		//          });
		//          return new Promise((resolve,reject)=>{
		//              setTimeout(()=>{
		//                  resolve([200,{users:mockusers}])
		//              })
		//          },1000);
		//
		//      });
		mock.onGet('/user/listpage').reply(config => {
			let {
				page,
				name
			} = config.params;
			//			console.log([...users.values()])
			let mockusers = [...users.values()].filter(user => {
				if(name && user.name.indexOf(name) == -1) return false;
				return true;
			});
			let total = mockusers.length;
			mockusers = mockusers.filter((user, index) => index < 10 * page && index >= 10 * (page - 1));
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						total: total,
						users: mockusers
					}])
				}, 3)
			});
		});
		mock.onGet('/user/update').reply(config => {
			let {
				id,
				name,
				addr,
				birth,
				sex
			} = config.params;

			if(id == '' || id == null || id == 'undefined') {
				id = Mock.Random.guid();

			}
			users.set(id, {
				id: id,
				name: name,
				addr: addr,
				birth: birth,
				sex: sex
			})
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						code: 200,
						msg: '新增成功'
					}]);
				}, 500);
			})
		});

		mock.onGet('/user/delete').reply(config => {
			let ids = config.params;

			for(let id of ids) {
				users.delete(id)
			}

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						code: 200,
					}]);
				}, 500);
			})
		});
	}
}