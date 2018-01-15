import Mock from 'mockjs';
const loginUsers=[
    {
    id:1,
    username:'admin',
    password:'admin',
    name:'张三'
    }
];
const users=new Map();

for(let i=0;i<86;i++){
	let user={
        id:Mock.Random.guid(),
        name:Mock.Random.cname(),
        addr:Mock.mock('@county(true)'),
        birth:Mock.Random.date(),
        sex:Mock.Random.integer(0,1)
    }
    users.set(user.id,user)
}
export{loginUsers,users}