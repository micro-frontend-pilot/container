import AssignmentIcon from '@mui/icons-material/Assessment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PostAddIcon from '@mui/icons-material/PostAdd';

var subMenuItemsGroupList = [];

const userMgmtSubMenuItems = [
    {
        type: "ListItem",
        name: '기술인목록',
        state: { viewId: 'bodyMainView' },
        link: "/user/list",
        Icon: PersonSearchIcon, 
    },
    {
        type: "ListItem",
        name: '기술인등록',
        link: "/user/addition",
        state: { viewId: 'bodyMainView' },
        Icon: PersonAddAlt1Icon, 
    },
]

const boardMgmtSubMenuItems= [
    {
        type: "ListItem",
        name: '게시글목록',
        link: "/board/list",
        state: { viewId: 'bodyMainView' },
        Icon: ListAltIcon, 
    },
    {
        type: "ListItem",
        name: '게시글등록',
        link: "/board/addition",
        state: { viewId: 'bodyMainView' },
        Icon: PostAddIcon, 
    },
]

const baseInfoSubMenuItems = [
    {
        type: "ListItem",
        name: '코드관리',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
        items: [
            {
                type: "ListItem",
                name: '공통코드',
                link: "/",
                state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'Counter' },
               },
            {
                type: "ListItem",
                name: '다국어',
                state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'TEST-21' },
            }
        ]
    },
    {
        type: "ListItem",
        name: '공정관리',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
    {
        type: "Divider",
        name: ""
    },
    {
        type: "ListItem",
        name: 'BOM관리',
        link: "/bom/list",
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
    {
        type: "ListItem",
        name: '설비관리',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
    {
        type: "ListItem",
        name: '라벨관리',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },

]

const materialsSubMenuItems = [
    {
        type: "ListItem",
        name: '자재입출고',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
        items: [
            {
                type: "ListItem",
                name: '입고',
                state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'Counter' },
               },
            {
                type: "ListItem",
                name: '불출',
                state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'TEST-21' },
            },
            {
                type: "ListItem",
                name: '반납',
                state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'TEST-21' },
            }
        ]
    },
    {
        type: "ListItem",
        name: '위치현황',
        state: { viewId: 'bodyMainView' },
        Icon: MyLocationIcon, 
        items: [
            {
                type: "ListItem",
                name: '자재위치',
                state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'Counter' },
               },
            {
                type: "ListItem",
                name: '자재위치',
                state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'TEST-21' },
            },
        ]
    },
    {
        type: "ListItem",
        name: '불량관리',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
]

const equipmentSubMenuItems = [
    {
        type: "ListItem",
        name: '설비관리',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
    {
        type: "ListItem",
        name: '금형관리',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
]

const manufacturingSubMenuItems = [
    {
        type: "ListItem",
        name: '생산계획',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
        items: [
            {
                type: "ListItem",
                name: '작업지시',
                link: "/workOrder",
                state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'Counter' },
               },
            {
                type: "ListItem",
                name: '생산실적',
                state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'TEST-21' },
            }
        ]
    },
    {
        type: "ListItem",
        name: '생산관리',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
        items: [
            {
                type: "ListItem",
                name: '생산현황',
                state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'Counter' },
               },
            {
                type: "ListItem",
                name: '부라부라',
                state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'TEST-21' },
            }
        ]
    },
]

const logisticsSubMenuItems = [
    {
        type: "ListItem",
        name: '대차입고',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
    {
        type: "ListItem",
        name: '대차출고',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
    {
        type: "ListItem",
        name: '출하관리',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
]

const qualitySubMenuItems = [
    {
        type: "ListItem",
        name: '홀딩현황',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
]

const dashboardSubMenuItems = [
    {
        type: "ListItem",
        name: '종합현황',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
    {
        type: "ListItem",
        name: '생산현황',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
    {
        type: "ListItem",
        name: '출하현황',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
    {
        type: "ListItem",
        name: '창고현황',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
]

const monitoringSubMenuItems = [
    {
        type: "ListItem",
        name: '실시간 모니터링',
        state: { viewId: 'bodyMainView' },
        link: "/monitoring",
        Icon: AssignmentIcon, 
    },
]

const reportSubMenuItems = [
    {
        type: "ListItem",
        name: '정기보고서',
        state: { viewId: 'bodyMainView' },
        Icon: AssignmentIcon, 
    },
]

const createSubMenuGroupList = () => {
    subMenuItemsGroupList.push(userMgmtSubMenuItems);
    subMenuItemsGroupList.push(boardMgmtSubMenuItems);
    subMenuItemsGroupList.push(baseInfoSubMenuItems);
    subMenuItemsGroupList.push(materialsSubMenuItems);
    subMenuItemsGroupList.push(equipmentSubMenuItems);
    subMenuItemsGroupList.push(manufacturingSubMenuItems);
    subMenuItemsGroupList.push(logisticsSubMenuItems);
    subMenuItemsGroupList.push(qualitySubMenuItems);
    subMenuItemsGroupList.push(dashboardSubMenuItems);
    subMenuItemsGroupList.push(monitoringSubMenuItems);
    subMenuItemsGroupList.push(reportSubMenuItems);

    return subMenuItemsGroupList;
}

export {
    createSubMenuGroupList
}
