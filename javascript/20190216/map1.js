const u1 = {name:'Cynthia'};
const u2 = {name:'Jackson'};
const u3 = {name:'Olive'};
const u4 = {name:'James'};

const userRole = new Map([
    [u1, 'user1'],
    [u2, 'user2'],
    [u3, 'user3'],
    [u4, 'user4']
]);

var p = a => {
    console.log(a);
}

p('hello');
p(userRole.get(u3));
/* 
for(let element of userRole.entries()){
    console.log(element[0]);
    console.log(element[1]);
} */

p([...userRole.values()]);