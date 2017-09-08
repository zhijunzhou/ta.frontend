export const STEPNAME=[
	{id:30,StepID:30,value:"自评",url:'/p020'},
	{id:31,StepID:31,value:"自评",url:'/p020'},
	{id:40,StepID:40,value:"上级评估",url:'/p020'},
	{id:41,StepID:41,value:"上级评估",url:'/p020'},
	{id:50,StepID:50,value:"部门审批",url:'/p071'},
	{id:51,StepID:51,value:"部门审批",url:'/p071'},
	{id:60,StepID:60,value:"线审批",url:'/p020'},
	{id:61,StepID:61,value:"线审批",url:'/p020'},
	{id:70,StepID:70,value:"BG审批",url:'/p020'},
	{id:71,StepID:71,value:"BG审批",url:'/p020'},
	{id:80,StepID:80,value:"同事评估",url:'/p020'},
	{id:90,StepID:90,value:"相关评估-带权重",url:'/p020'},
	{id:95,StepID:95,value:"相关评估-无权重",url:'/p020'},
	{id:96,StepID:96,value:"领导力评估",url:'/p040'},
	{id:97,StepID:97,value:"领导力评估",url:'/p040'},
	{id:98,StepID:98,value:"领导力评估",url:'/p040'}
];

export const TAGNAME=[
	{id:40,StepID:40,value:"员工/基干"},
	{id:50,StepID:50,value:"员工/基干"},
	{id:60,StepID:60,value:"员工/基干"},
	{id:70,StepID:70,value:"员工/基干"},
	{id:41,StepID:41,value:"中高干"},
	{id:51,StepID:51,value:"中高干"},
	{id:61,StepID:61,value:"中高干"},
	{id:71,StepID:71,value:"中高干"}
];

export const EVALUATEDNAME=[
	{id:80,StepID:80,value:"同事评估"},
	{id:90,StepID:90,value:"相关评估-带权重"},
	{id:95,StepID:95,value:"相关评估-无权重"},
	{id:96,StepID:96,value:"领导力评估"},
	{id:97,StepID:97,value:"领导力评估"},
	{id:98,StepID:98,value:"领导力评估"}
];

export const MEMBER_STEP=[
	{id:7,value:"未评"},
	{id:6,value:"特殊申报"},
	{id:5,value:"5星"},
	{id:4,value:"4星"},
	{id:3,value:"3星"},
	{id:2,value:"2星"},
	{id:1,value:"1星"},
];

export const AssessLevelID_RATE=[
	{id:110,value:1},
	{id:110,value:2},
	{id:110,value:3},
	{id:110,value:4},
	{id:110,value:5}
];

export const MEMBER_STEP_SERCH=[

	{id:20}
];

export const getValue=(id,inArr)=>{
	let search=inArr.find(s=>s.id===id);
    return search?search:null;
}