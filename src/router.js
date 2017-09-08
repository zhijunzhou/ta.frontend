const routers = [
	{
	    path: '/',
	    meta: {
	        title: 'P010'
	    },
	    component: (resolve) => require(['./views/index.vue'], resolve)
	},
	{
	    path: '/p071',
	    meta: {
	        title: 'P070'
	    },
	    component: (resolve) => require(['./views/p071.vue'], resolve)
	},
	{
	    path: '/p020',
	    meta: {
	        title: 'P020'
	    },
	    component: (resolve) => require(['./views/p020.vue'], resolve)
	},
	{
	    path: '/p021',
	    meta: {
	        title: 'P021'
	    },
	    component: (resolve) => require(['./views/p021.vue'], resolve)
	},
	{
	    path: '/p040',
	    meta: {
	        title: 'P040'
	    },
	    component: (resolve) => require(['./views/p040.vue'], resolve)
	},
	{
	    path: '/p090',
	    meta: {
	        title: 'P090'
	    },
	    component: (resolve) => require(['./views/p090.vue'], resolve)
	},
	{
	    path: '/p100',
	    meta: {
	        title: 'P100'
	    },
	    component: (resolve) => require(['./views/p100.vue'], resolve)
	},
	{
	    path: '/p110',
	    meta: {
	        title: 'P110'
	    },
	    component: (resolve) => require(['./views/p110.vue'], resolve)
	},
	{
	    path: '/p120',
	    meta: {
	        title: 'P120'
	    },
	    component: (resolve) => require(['./views/p120.vue'], resolve)
	}
];
export default routers;